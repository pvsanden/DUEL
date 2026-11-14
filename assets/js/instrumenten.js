/* Bronteksten: per groep getoond, met duiding; filteren op zoekterm, soort en ontwerpprincipe. */
(function () {
  "use strict";

  var data = window.DUEL_INSTRUMENTEN || [];
  var groepen = window.DUEL_GROEPEN || [];
  var principes = window.DUEL_PRINCIPES || {};
  var list = document.getElementById("instrumenten");
  if (!list) return;

  var fZoek = document.getElementById("f-zoek");
  var fType = document.getElementById("f-type");
  var fPrincipe = document.getElementById("f-principe");
  var count = document.getElementById("resultaat");
  var reset = document.getElementById("f-reset");

  // Een brontekst kan meerdere soorten hebben (bv. leestekst én presentatie).
  function types(d) { return Array.isArray(d.type) ? d.type : [d.type]; }

  // Bestanden om te openen: "downloads" (lijst) of het oudere enkelvoudige "download".
  function files(d) {
    if (d.status !== "gepubliceerd") return [];
    if (Array.isArray(d.downloads)) return d.downloads;
    return d.download ? [{ label: "Brontekst openen", href: d.download }] : [];
  }

  function uniq() {
    var seen = {};
    data.forEach(function (d) { types(d).forEach(function (v) { seen[v] = true; }); });
    return Object.keys(seen).sort(function (a, b) { return a.localeCompare(b, "nl"); });
  }

  function fill(select, values, labelFn) {
    values.forEach(function (v) {
      var o = document.createElement("option");
      o.value = v;
      o.textContent = labelFn ? labelFn(v) : v;
      select.appendChild(o);
    });
  }

  fill(fType, uniq());
  fill(fPrincipe, Object.keys(principes), function (k) { return k + ". " + principes[k]; });

  // Beginwaarden uit de URL (bv. instrumenten.html?principe=3)
  var params = new URLSearchParams(location.search);
  if (params.get("zoek")) fZoek.value = params.get("zoek");
  if (params.get("type")) fType.value = params.get("type");
  if (params.get("principe")) fPrincipe.value = params.get("principe");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var anchors = { 1: "gekaderd-maatwerk", 2: "basisgrammatica", 3: "exemplarisch", 4: "integratief", 5: "als-persoon", 6: "ontmoeting", 7: "congruentie", 8: "evaluatie", 9: "reflectief" };

  var duidingLabels = [
    ["ontstaan", "Hoe het ontstond"],
    ["zie", "Wat je erin ziet"],
    ["context", "Wat contextgebonden is"],
    ["vraag", "Om over na te denken"]
  ];

  function card(d) {
    var pub = d.status === "gepubliceerd";
    var c = el("article", "card brontekst" + (pub ? "" : " pending"));
    var tags = el("div", "tags");
    types(d).forEach(function (t) { tags.appendChild(el("span", "tag accent", t)); });
    if (d.datum) tags.appendChild(el("span", "tag", d.datum));
    c.appendChild(tags);
    c.appendChild(el("h3", null, d.titel));
    c.appendChild(el("p", null, d.beschrijving));

    if (pub && d.duiding) {
      var dl = el("dl", "duiding");
      duidingLabels.forEach(function (l) {
        if (!d.duiding[l[0]]) return;
        var wrap = el("div");
        wrap.appendChild(el("dt", null, l[1]));
        wrap.appendChild(el("dd", null, d.duiding[l[0]]));
        dl.appendChild(wrap);
      });
      c.appendChild(dl);
    }

    var pr = el("div", "tags");
    d.principes.forEach(function (n) {
      var a = el("a", "tag warm", n + " " + principes[n]);
      a.href = "principe-" + anchors[n] + ".html";
      pr.appendChild(a);
    });
    c.appendChild(pr);

    var fl = files(d);
    if (fl.length) {
      var box = el("div", "downloads");
      fl.forEach(function (f) {
        var a = el("a", "download", f.label + " (PDF)");
        a.href = f.href;
        a.target = "_blank";
        a.rel = "noopener";
        if (f.toelichting) a.title = f.toelichting;
        box.appendChild(a);
      });
      c.appendChild(box);
    } else {
      c.appendChild(el("p", "status", "In voorbereiding"));
    }
    return c;
  }

  function render() {
    var q = fZoek.value.trim().toLowerCase();
    var t = fType.value, p = fPrincipe.value;

    var hits = data.filter(function (d) {
      if (t && types(d).indexOf(t) === -1) return false;
      if (p && d.principes.indexOf(Number(p)) === -1) return false;
      if (q) {
        var dd = d.duiding ? Object.keys(d.duiding).map(function (k) { return d.duiding[k]; }).join(" ") : "";
        var hay = (d.titel + " " + d.beschrijving + " " + dd + " " + types(d).join(" ")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    list.innerHTML = "";
    if (!hits.length) {
      list.appendChild(el("div", "empty", "Geen bronteksten gevonden met deze filters."));
    } else {
      groepen.forEach(function (g) {
        var inGroep = hits.filter(function (d) { return d.groep === g.id; });
        if (!inGroep.length) return;
        var sec = el("section", "bron-groep");
        sec.setAttribute("aria-labelledby", "groep-" + g.id);
        var h = el("h2", null, g.titel);
        h.id = "groep-" + g.id;
        sec.appendChild(h);
        var intro = el("p", "prose groep-intro");
        intro.innerHTML = g.tekst; // vaste tekst uit instrumenten-data.js
        sec.appendChild(intro);
        var lijst = el("div", "bron-lijst");
        inGroep.forEach(function (d) { lijst.appendChild(card(d)); });
        sec.appendChild(lijst);
        list.appendChild(sec);
      });
    }
    var gepubliceerd = hits.filter(function (d) { return d.status === "gepubliceerd"; }).length;
    count.textContent = hits.length + " van " + data.length + " bronteksten, waarvan " + gepubliceerd + " online";

    var np = new URLSearchParams();
    if (q) np.set("zoek", fZoek.value.trim());
    if (t) np.set("type", t);
    if (p) np.set("principe", p);
    var qs = np.toString();
    try { history.replaceState(null, "", qs ? "?" + qs : location.pathname); } catch (e) { /* bv. file:// */ }
  }

  [fZoek, fType, fPrincipe].forEach(function (f) {
    f.addEventListener(f === fZoek ? "input" : "change", render);
  });
  reset.addEventListener("click", function () {
    fZoek.value = ""; fType.value = ""; fPrincipe.value = "";
    render();
  });

  render();
})();
