/* Duel herlezen — gedeelde scripts: navigatie, thema, zoeken in begrippen. */
(function () {
  "use strict";

  // Actieve pagina in de navigatie markeren
  var page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.setAttribute("aria-current", "page");
  });

  // Mobiele navigatie
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Licht/donker thema (voorkeur bewaard in de browser, indien mogelijk)
  var root = document.documentElement;
  var themeBtn = document.querySelector(".theme-toggle");
  function stored() { try { return localStorage.getItem("duel-theme"); } catch (e) { return null; } }
  function store(v) { try { localStorage.setItem("duel-theme", v); } catch (e) { /* niet beschikbaar */ } }
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function label() {
    if (!themeBtn) return;
    var dark = currentTheme() === "dark";
    themeBtn.textContent = dark ? "☀" : "☾";
    themeBtn.setAttribute("aria-label", dark ? "Schakel naar licht thema" : "Schakel naar donker thema");
  }
  var s = stored();
  if (s === "light" || s === "dark") root.setAttribute("data-theme", s);
  label();
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store(next);
      label();
    });
  }

  // Zoeken in de begrippenlijst
  var gSearch = document.getElementById("begrip-zoek");
  if (gSearch) {
    var items = Array.prototype.slice.call(document.querySelectorAll(".glossary > div"));
    var count = document.getElementById("begrip-aantal");
    var empty = document.getElementById("begrip-leeg");
    var update = function () {
      var q = gSearch.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (el) {
        var hit = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
        el.hidden = !hit;
        if (hit) shown++;
      });
      if (count) count.textContent = shown + " van " + items.length + " begrippen";
      if (empty) empty.hidden = shown !== 0;
    };
    gSearch.addEventListener("input", update);
    update();
  }
})();
