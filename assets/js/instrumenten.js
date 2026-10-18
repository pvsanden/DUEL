/* Instrumentencatalogus: filteren op zoekterm, type, principe en context. */
(function () {
  "use strict";

  var data = window.DUEL_INSTRUMENTEN || [];
  var principes = window.DUEL_PRINCIPES || {};
  var list = document.getElementById("instrumenten");
  if (!list) return;

  var fZoek = document.getElementById("f-zoek");
  var fType = document.getElementById("f-type");
  var fPrincipe = document.getElementById("f-principe");
  var fContext = document.getElementById("f-context");
  var count = document.getElementById("resultaat");
  var reset = document.getElementById("f-reset");

  function uniq(key) {
    var seen = {};
    data.forEach(function (d) { seen[d[key]] = true; });
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

  fill(fType, uniq("type"));
  fill(fContext, uniq("context"));
  fill(fPrincipe, Object.keys(principes), function (k) { return k + ". " + principes[k]; });

  // Beginwaarden uit de URL (bv. instrumenten.html?principe=3)
  var params = new URLSearchParams(location.search);
  if (params.get("zoek")) fZoek.value = params.get("zoek");
  if (params.get("type")) fType.value = params.get("type");
  if (params.get("principe")) fPrincipe.value = params.get("principe");
  if (params.get("context")) fContext.value = params.get("context");

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function card(d) {
    var c = el("article", "card instrument");
    var tags = el("div", "tags");
    tags.appendChild(el("span", "tag accent", d.type));
    tags.appendChild(el("span", "tag", d.context));
    c.appendChild(tags);
    c.appendChild(el("h3", null, d.titel));
    c.appendChild(el("p", "meta", d.module));
    c.appendChild(el("p", null, d.beschrijving));

    var pr = el("div", "tags");
    d.principes.forEach(function (n) {
      var a = el("a", "tag warm", n + " " + principes[n]);
      a.href = "principes.html#" + anchor(n);
      pr.appendChild(a);
    });
    c.appendChild(pr);

    if (d.status === "gepubliceerd" && d.download) {
      var dl = el("a", "download", "Brontekst openen (PDF)" + (d.datum ? " · " + d.datum : ""));
      dl.href = d.download;
      dl.target = "_blank";
      dl.rel = "noopener";
      c.appendChild(dl);
    } else {
      c.appendChild(el("p", "status", "Nog te publiceren"));
      c.appendChild(el("p", "bron", "Archief: " + d.bron.join(" · ")));
    }
    return c;
  }

  var anchors = { 1: "gekaderd-maatwerk", 2: "basisgrammatica", 3: "exemplarisch", 4: "integratief", 5: "als-persoon", 6: "ontmoeting", 7: "congruentie", 8: "evaluatie", 9: "reflectief" };
  function anchor(n) { return anchors[n] || ""; }

  function render() {
    var q = fZoek.value.trim().toLowerCase();
    var t = fType.value, p = fPrincipe.value, cx = fContext.value;

    var hits = data.filter(function (d) {
      if (t && d.type !== t) return false;
      if (cx && d.context !== cx) return false;
      if (p && d.principes.indexOf(Number(p)) === -1) return false;
      if (q) {
        var hay = (d.titel + " " + d.beschrijving + " " + d.module + " " + d.type).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });

    list.innerHTML = "";
    if (!hits.length) {
      list.appendChild(el("div", "empty", "Geen instrumenten gevonden met deze filters."));
    } else {
      hits.forEach(function (d) { list.appendChild(card(d)); });
    }
    count.textContent = hits.length + " van " + data.length + " instrumenten";

    var np = new URLSearchParams();
    if (q) np.set("zoek", fZoek.value.trim());
    if (t) np.set("type", t);
    if (p) np.set("principe", p);
    if (cx) np.set("context", cx);
    var qs = np.toString();
    try { history.replaceState(null, "", qs ? "?" + qs : location.pathname); } catch (e) { /* bv. file:// */ }
  }

  [fZoek, fType, fPrincipe, fContext].forEach(function (f) {
    f.addEventListener(f === fZoek ? "input" : "change", render);
  });
  reset.addEventListener("click", function () {
    fZoek.value = ""; fType.value = ""; fPrincipe.value = ""; fContext.value = "";
    render();
  });

  render();
})();
