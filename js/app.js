/* Guide citoyen — Présidentielle 2027 */
(function () {
  "use strict";

  var G = window.GUIDE;
  var NAV = [
    { href: "index.html", label: "Accueil", page: "accueil" },
    { href: "election.html", label: "L'élection", page: "election" },
    { href: "partis.html", label: "Partis politiques", page: "partis" },
    { href: "candidats.html", label: "Candidats et programmes", page: "candidats" },
    { href: "comparateur.html", label: "Comparateur", page: "comparateur" },
    { href: "questionnaire.html", label: "Questionnaire", page: "questionnaire" }
  ];

  /* ---------- Utilitaires ---------- */

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function parti(id) { return byId(G.partis, id); }
  function famille(id) { return byId(G.familles, id); }
  function theme(id) { return byId(G.themes, id); }
  function initiales(nom) { return nom.split(/[\s-]+/).map(function (m) { return m[0]; }).join("").slice(0, 2).toUpperCase(); }

  // Couleur de texte lisible (contraste) sur une couleur de fond donnée
  function texteSur(hex) {
    var c = hex.replace("#", "");
    var rgb = [0, 2, 4].map(function (i) {
      var v = parseInt(c.substr(i, 2), 16) / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    var L = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
    return (1.05 / (L + 0.05)) >= 4.5 ? "#ffffff" : "#161616";
  }

  function avatar(c, small) {
    var p = parti(c.parti);
    var bg = p ? p.couleur : "#000091";
    return '<span class="avatar' + (small ? " avatar--sm" : "") + '" aria-hidden="true" style="--avatar-color:' + bg + ';color:' + texteSur(bg) + '">' + esc(initiales(c.nom)) + "</span>";
  }

  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } },
    del: function (k) { try { window.localStorage.removeItem(k); } catch (e) { /* stockage indisponible */ } }
  };

  /* ---------- Thème ---------- */

  function appliquerTheme(t) {
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
    else document.documentElement.removeAttribute("data-theme");
  }
  appliquerTheme(store.get("theme"));

  /* ---------- Gabarit commun ---------- */

  function renderLayout() {
    var page = document.body.getAttribute("data-page");
    var rubrique = page === "candidat" ? "candidats" : page;

    var nav = NAV.map(function (n) {
      var attr = n.page === page ? ' aria-current="page"' : (n.page === rubrique ? ' aria-current="true"' : "");
      return '<li><a class="nav__link" href="' + n.href + '"' + attr + ">" + esc(n.label) + "</a></li>";
    }).join("");

    var header =
      '<div class="skiplinks"><nav aria-label="Accès rapide" class="container"><ul>' +
      '<li><a href="#contenu">Aller au contenu</a></li>' +
      '<li><a href="#navigation">Aller au menu</a></li>' +
      '<li><a href="#pied-de-page">Aller au pied de page</a></li>' +
      "</ul></nav></div>" +
      '<header class="header" role="banner">' +
      '<div class="notice"><div class="container"><p><strong>Site indépendant et non officiel.</strong> Ce guide n\'est affilié ni au Gouvernement, ni à aucun parti. Les programmes 2027 étant en cours d\'écriture, vérifiez toujours auprès des sources officielles des candidats.</p></div></div>' +
      '<div class="tricolore" aria-hidden="true"></div>' +
      '<div class="container"><div class="header__body">' +
      '<a class="brand" href="index.html" title="Accueil — Guide citoyen Présidentielle 2027">' +
      '<span class="brand__mark" aria-hidden="true"><span>Guide</span><span>2027</span></span>' +
      '<span><span class="brand__title">Présidentielle 2027</span><span class="brand__tagline">Guide citoyen des partis et des programmes</span></span>' +
      "</a>" +
      '<div class="header__tools">' +
      '<button type="button" class="btn btn--tertiary btn--sm" id="btn-theme"></button>' +
      '<button type="button" class="btn btn--tertiary btn--sm menu-toggle" aria-expanded="false" aria-controls="navigation">Menu</button>' +
      "</div></div></div>" +
      '<nav class="nav" id="navigation" aria-label="Menu principal" tabindex="-1" hidden><div class="container"><ul class="nav__list">' + nav + "</ul></div></nav>" +
      "</header>";

    var footer =
      '<footer class="footer" id="pied-de-page" role="contentinfo"><div class="container">' +
      '<div class="footer__body">' +
      '<div><p class="brand__title">Présidentielle 2027</p><p class="brand__tagline">Guide citoyen, libre et indépendant</p></div>' +
      "<div><p>Ce site présente de façon neutre les partis politiques français et les propositions des candidats à l'élection présidentielle de 2027. Il est open source : chacun peut proposer une correction sourcée.</p>" +
      '<ul class="footer__links">' +
      '<li><a href="https://www.conseil-constitutionnel.fr/" rel="noopener" target="_blank">conseil-constitutionnel.fr<span class="sr-only"> (nouvelle fenêtre)</span></a></li>' +
      '<li><a href="https://www.service-public.fr/particuliers/vosdroits/F1367" rel="noopener" target="_blank">S\'inscrire sur les listes électorales<span class="sr-only"> (nouvelle fenêtre)</span></a></li>' +
      '<li><a href="https://www.cnccfp.fr/" rel="noopener" target="_blank">cnccfp.fr<span class="sr-only"> (nouvelle fenêtre)</span></a></li>' +
      "</ul></div></div>" +
      '<div class="footer__bottom"><ul>' +
      '<li><a href="plan.html">Plan du site</a></li>' +
      '<li><a href="accessibilite.html">Accessibilité : partiellement conforme</a></li>' +
      '<li><a href="sources.html">Sources et méthodologie</a></li>' +
      '<li><button type="button" class="link-button" id="btn-affichage" aria-haspopup="dialog">Paramètres d\'affichage</button></li>' +
      "</ul><p class=\"mention\" style=\"margin:0\">Dernière mise à jour des données : " + esc(G.maj) + "</p></div>" +
      "</div></footer>" +
      '<dialog class="modal" id="modal-affichage" aria-labelledby="modal-affichage-titre">' +
      '<div class="modal__header"><button type="button" class="btn btn--tertiary btn--sm" data-close>Fermer</button></div>' +
      '<div class="modal__content"><h2 id="modal-affichage-titre" class="h3">Paramètres d\'affichage</h2>' +
      "<p>Choisissez un thème pour personnaliser l'apparence du site.</p>" +
      '<fieldset><legend class="fieldset__legend">Thème</legend><div class="answers" style="margin:0">' +
      ["light|Thème clair", "dark|Thème sombre", "system|Système (selon les paramètres de votre appareil)"].map(function (o) {
        var v = o.split("|");
        return '<div class="answer"><input type="radio" name="theme" id="theme-' + v[0] + '" value="' + v[0] + '"><label for="theme-' + v[0] + '">' + v[1] + "</label></div>";
      }).join("") +
      "</div></fieldset></div></dialog>";

    $("#layout-header").outerHTML = header;
    $("#layout-footer").outerHTML = footer;

    // Menu mobile
    var toggle = $(".menu-toggle");
    var navEl = $("#navigation");
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.textContent = open ? "Menu" : "Fermer le menu";
      navEl.hidden = open;
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true" && window.getComputedStyle(toggle).display !== "none") {
        toggle.click();
        toggle.focus();
      }
    });

    // Bascule rapide clair / sombre dans l'en-tête
    var btnTheme = $("#btn-theme");
    function themeEffectif() {
      var t = document.documentElement.getAttribute("data-theme");
      if (t) return t;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function majBoutonTheme() {
      var sombre = themeEffectif() === "dark";
      btnTheme.innerHTML = '<span aria-hidden="true">' + (sombre ? "☀" : "☾") + '</span> <span class="btn-theme__label">' + (sombre ? "Passer en thème clair" : "Passer en thème sombre") + "</span>";
    }
    btnTheme.addEventListener("click", function () {
      var t = themeEffectif() === "dark" ? "light" : "dark";
      store.set("theme", t);
      appliquerTheme(t);
      $("#theme-" + t).checked = true;
      majBoutonTheme();
    });
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) mq.addEventListener("change", majBoutonTheme);
    }
    majBoutonTheme();

    // Paramètres d'affichage
    var modal = $("#modal-affichage");
    var current = store.get("theme") || "system";
    $("#theme-" + current).checked = true;
    $("#btn-affichage").addEventListener("click", function () {
      if (typeof modal.showModal === "function") modal.showModal();
      else modal.setAttribute("open", "");
    });
    $("[data-close]", modal).addEventListener("click", function () { modal.close ? modal.close() : modal.removeAttribute("open"); });
    modal.addEventListener("click", function (e) { if (e.target === modal) modal.close(); });
    $all('input[name="theme"]', modal).forEach(function (r) {
      r.addEventListener("change", function () {
        if (r.value === "system") store.del("theme"); else store.set("theme", r.value);
        appliquerTheme(r.value);
        majBoutonTheme();
      });
    });
  }

  /* ---------- Accueil ---------- */

  function pageAccueil() {
    var el = $("#stats");
    if (!el) return;
    var stats = [
      { v: G.partis.length, l: "partis et mouvements présentés" },
      { v: G.candidats.length + G.autres.length, l: "candidatures déclarées recensées" },
      { v: G.themes.length, l: "thèmes de programme comparés" },
      { v: G.questionnaire.questions.length, l: "questions pour situer vos idées" }
    ];
    el.innerHTML = stats.map(function (s) {
      return '<li class="stat"><span class="stat__value">' + s.v + '</span><span class="stat__label">' + esc(s.l) + "</span></li>";
    }).join("");
  }

  /* ---------- L'élection ---------- */

  function pageElection() {
    var el = $("#pressentis");
    if (el) el.innerHTML = G.pressentis.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    var info = $("#infos-election");
    if (info) {
      var e = G.election;
      info.innerHTML = [
        ["Dates du scrutin", e.tours], ["Durée du mandat", e.mandat], ["Parrainages", e.parrainages],
        ["Liste officielle", e.listeOfficielle], ["Président sortant", e.sortant]
      ].map(function (r) { return '<tr><th scope="row">' + esc(r[0]) + "</th><td>" + esc(r[1]) + "</td></tr>"; }).join("");
    }
  }

  /* ---------- Partis ---------- */

  function candidatDuParti(pid) {
    return G.candidats.filter(function (c) { return c.parti === pid; })[0] || null;
  }

  function pagePartis() {
    var select = $("#filtre-famille");
    var search = $("#filtre-texte");
    var list = $("#liste-partis");
    var count = $("#nb-partis");

    select.innerHTML = '<option value="">Toutes les familles politiques</option>' +
      G.familles.map(function (f) { return '<option value="' + f.id + '">' + esc(f.label) + "</option>"; }).join("");

    var params = new URLSearchParams(window.location.search);
    if (params.get("famille")) select.value = params.get("famille");

    function render() {
      var f = select.value;
      var q = search.value.trim().toLowerCase();
      var items = G.partis.filter(function (p) {
        if (f && p.famille !== f) return false;
        if (!q) return true;
        return (p.nom + " " + p.sigle + " " + p.dirigeant + " " + p.ideologie.join(" ")).toLowerCase().indexOf(q) !== -1;
      });
      count.textContent = items.length + (items.length > 1 ? " partis affichés" : " parti affiché") + " sur " + G.partis.length;
      if (!items.length) {
        list.innerHTML = '<li class="empty">Aucun parti ne correspond à votre recherche.</li>';
        return;
      }
      list.innerHTML = items.map(function (p) {
        var c = candidatDuParti(p.id);
        var cand = c
          ? '<p><strong>Candidat·e 2027 :</strong> <a href="candidat.html?id=' + c.id + '">' + esc(c.nom) + "</a></p>"
          : "";
        return '<li><article class="card card--static" aria-labelledby="parti-' + p.id + '">' +
          '<p class="mention" style="margin-bottom:.5rem"><span class="card__swatch" style="background:' + p.couleur + '" aria-hidden="true"></span>' + esc(famille(p.famille).label) + "</p>" +
          '<h2 class="card__title" id="parti-' + p.id + '">' + esc(p.nom) + ' <span class="badge">' + esc(p.sigle) + "</span></h2>" +
          '<p class="card__desc">' + esc(p.description) + "</p>" +
          '<ul class="tags" aria-label="Courants idéologiques">' + p.ideologie.map(function (i) { return '<li class="tag">' + esc(i) + "</li>"; }).join("") + "</ul>" +
          '<dl class="card__detail" style="margin:0 0 1rem">' +
          '<div><dt style="display:inline;font-weight:700">Création : </dt><dd style="display:inline;margin:0">' + esc(p.creation) + "</dd></div>" +
          '<div><dt style="display:inline;font-weight:700">Direction : </dt><dd style="display:inline;margin:0">' + esc(p.dirigeant) + "</dd></div></dl>" +
          cand + "</article></li>";
      }).join("");
    }

    select.addEventListener("change", render);
    search.addEventListener("input", render);
    $("#form-filtres").addEventListener("submit", function (e) { e.preventDefault(); render(); });
    render();
  }

  /* ---------- Candidats ---------- */

  function pageCandidats() {
    var list = $("#liste-candidats");
    list.innerHTML = G.candidats.map(function (c) {
      var p = parti(c.parti);
      return '<li><div class="card">' +
        '<div class="profile" style="margin-bottom:1rem">' + avatar(c, true) +
        '<div><h3 class="card__title" style="margin:0"><a href="candidat.html?id=' + c.id + '">' + esc(c.nom) + "</a></h3>" +
        '<p class="mention" style="margin:0">' + esc(p.nom) + " · " + esc(famille(p.famille).label) + "</p></div></div>" +
        '<p class="card__desc">' + esc(c.statut) + "</p>" +
        '<p class="card__detail">' + Object.keys(c.programme).length + " thèmes détaillés</p>" +
        '<span class="card__arrow" aria-hidden="true">→</span>' +
        "</div></li>";
    }).join("");

    $("#autres-candidats").innerHTML = G.autres.map(function (a) {
      return '<tr><th scope="row">' + esc(a.nom) + "</th><td>" + esc(a.parti) + "</td><td>" + esc(a.resume) + "</td></tr>";
    }).join("");
  }

  function pageCandidat() {
    var id = new URLSearchParams(window.location.search).get("id");
    var c = byId(G.candidats, id);
    var root = $("#fiche");
    if (!c) {
      document.title = "Candidat introuvable — Présidentielle 2027";
      root.innerHTML = '<h1>Candidat introuvable</h1><p>Cette fiche n\'existe pas ou a été déplacée.</p><p><a class="btn" href="candidats.html">Voir tous les candidats</a></p>';
      return;
    }
    var p = parti(c.parti);
    document.title = c.nom + " : programme — Présidentielle 2027";
    $("#ariane-courant").textContent = c.nom;

    var themesPresents = G.themes.filter(function (t) { return c.programme[t.id]; });
    var manquants = G.themes.filter(function (t) { return !c.programme[t.id]; });

    root.innerHTML =
      '<div class="profile" style="margin-bottom:1.5rem">' + avatar(c) +
      "<div><h1 style=\"margin-bottom:.5rem\">" + esc(c.nom) + "</h1>" +
      '<p class="lead" style="margin:0">' + esc(p.nom) + " (" + esc(p.sigle) + ") · " + esc(famille(p.famille).label) + "</p>" +
      '<p class="mention" style="margin:0">' + esc(c.statut) + (c.slogan ? " · Slogan : " + esc(c.slogan) : "") + "</p></div></div>" +
      '<p class="highlight">' + esc(c.bio) + "</p>" +
      '<div class="callout"><p>Les propositions ci-dessous synthétisent les annonces de campagne, les prises de position publiques et, le cas échéant, le programme précédent du candidat ou de sa formation. Le programme officiel 2027 peut évoluer.</p></div>' +
      '<div class="layout-sidebar">' +
      '<nav class="summary" aria-labelledby="sommaire-titre"><h2 class="summary__title" id="sommaire-titre">Sommaire</h2><ol>' +
      themesPresents.map(function (t) { return '<li><a href="#theme-' + t.id + '">' + esc(t.label) + "</a></li>"; }).join("") +
      "</ol></nav>" +
      "<div>" +
      themesPresents.map(function (t) {
        return '<section class="theme-block" id="theme-' + t.id + '" aria-labelledby="titre-' + t.id + '">' +
          '<h2 id="titre-' + t.id + '"><span class="theme-icon" aria-hidden="true">' + t.icon + "</span>" + esc(t.label) + "</h2>" +
          "<ul>" + c.programme[t.id].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
          '<a class="back-top" href="#contenu">Haut de page</a>' +
          "</section>";
      }).join("") +
      (manquants.length
        ? '<div class="callout callout--warning" style="margin-top:2rem"><p><strong>Thèmes sans proposition détaillée recensée à ce stade :</strong> ' + manquants.map(function (t) { return esc(t.label); }).join(", ") + ".</p></div>"
        : "") +
      '<div class="btn-group"><a class="btn" href="comparateur.html">Comparer avec les autres candidats</a><a class="btn btn--secondary" href="questionnaire.html">Faire le questionnaire</a></div>' +
      "</div></div>";
  }

  /* ---------- Comparateur ---------- */

  function pageComparateur() {
    var selTheme = $("#cmp-theme");
    var checks = $("#cmp-candidats");
    var out = $("#cmp-resultats");
    var status = $("#cmp-statut");

    selTheme.innerHTML = G.themes.map(function (t) { return '<option value="' + t.id + '">' + esc(t.label) + "</option>"; }).join("");
    var params = new URLSearchParams(window.location.search);
    if (params.get("theme") && theme(params.get("theme"))) selTheme.value = params.get("theme");

    checks.innerHTML = G.candidats.map(function (c) {
      return '<div class="check"><input type="checkbox" id="cmp-' + c.id + '" value="' + c.id + '" checked><label for="cmp-' + c.id + '">' + esc(c.nom) + "</label></div>";
    }).join("");

    function render() {
      var t = theme(selTheme.value);
      var ids = $all("input:checked", checks).map(function (i) { return i.value; });
      var cands = G.candidats.filter(function (c) { return ids.indexOf(c.id) !== -1; });
      status.textContent = "Thème « " + t.label + " » : " + cands.length + " candidat" + (cands.length > 1 ? "s" : "") + " comparé" + (cands.length > 1 ? "s" : "") + ".";
      if (!cands.length) {
        out.innerHTML = '<p class="empty">Sélectionnez au moins un candidat.</p>';
        return;
      }
      out.innerHTML = '<h2 id="cmp-titre"><span class="theme-icon" aria-hidden="true">' + t.icon + "</span> " + esc(t.label) + "</h2>" +
        '<ul class="grid grid--3" style="list-style:none;padding:0">' +
        cands.map(function (c) {
          var p = parti(c.parti);
          var items = c.programme[t.id];
          return '<li><article class="card card--static" aria-labelledby="cmp-nom-' + c.id + '">' +
            '<div class="profile" style="margin-bottom:1rem;gap:1rem">' + avatar(c, true) +
            '<div><h3 class="card__title" id="cmp-nom-' + c.id + '" style="margin:0;font-size:1.125rem">' + esc(c.nom) + "</h3>" +
            '<p class="mention" style="margin:0">' + esc(p.sigle) + " · " + esc(famille(p.famille).label) + "</p></div></div>" +
            (items
              ? "<ul>" + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"
              : '<p class="mention">Pas de proposition détaillée recensée à ce stade.</p>') +
            '<p style="margin-top:auto"><a href="candidat.html?id=' + c.id + "#theme-" + t.id + '">Programme complet<span class="sr-only"> de ' + esc(c.nom) + "</span></a></p>" +
            "</article></li>";
        }).join("") + "</ul>";
    }

    selTheme.addEventListener("change", render);
    checks.addEventListener("change", render);
    $("#cmp-tous").addEventListener("click", function () { $all("input", checks).forEach(function (i) { i.checked = true; }); render(); });
    $("#cmp-aucun").addEventListener("click", function () { $all("input", checks).forEach(function (i) { i.checked = false; }); render(); });
    render();
  }

  /* ---------- Questionnaire ---------- */

  function pageQuestionnaire() {
    var Q = G.questionnaire;
    var total = Q.questions.length;
    var root = $("#quiz");
    var KEY = "quiz-reponses-v1";
    var state = { i: 0, rep: {}, imp: {} };

    try {
      var saved = JSON.parse(store.get(KEY) || "null");
      if (saved && saved.rep) state = saved;
    } catch (e) { /* données invalides : on repart de zéro */ }

    function save() { store.set(KEY, JSON.stringify(state)); }

    function focusTitre() {
      var t = $("#quiz-focus", root);
      if (t) t.focus();
    }

    function intro() {
      var reprise = Object.keys(state.rep).length > 0;
      root.innerHTML =
        '<div class="callout"><h2 class="callout__title">Comment ça marche ?</h2>' +
        "<p>" + total + " affirmations vous sont proposées, une par écran. Pour chacune, indiquez si vous êtes d'accord ou non. Vous pouvez signaler les sujets qui comptent particulièrement pour vous : ils pèseront double dans le calcul.</p>" +
        "<p>À la fin, le site calcule votre degré de proximité avec chacun des " + G.candidats.length + " principaux candidats. Vos réponses restent dans votre navigateur : rien n'est envoyé ni enregistré sur un serveur.</p></div>" +
        '<div class="callout callout--warning"><p><strong>Ce questionnaire est un outil de réflexion, pas une consigne de vote.</strong> Il simplifie des programmes complexes et ne remplace pas leur lecture. Les positions retenues pour chaque candidat sont expliquées dans la page <a href="sources.html">Sources et méthodologie</a>.</p></div>' +
        '<div class="btn-group">' +
        (reprise
          ? '<button type="button" class="btn btn--lg" id="quiz-reprendre">Reprendre le questionnaire (question ' + Math.min(state.i + 1, total) + ")</button>" +
            '<button type="button" class="btn btn--secondary btn--lg" id="quiz-start">Recommencer depuis le début</button>'
          : '<button type="button" class="btn btn--lg" id="quiz-start">Commencer le questionnaire</button>') +
        "</div>";
      $("#quiz-start").addEventListener("click", function () { state = { i: 0, rep: {}, imp: {} }; save(); etape(); });
      if (reprise) $("#quiz-reprendre").addEventListener("click", function () { if (state.i >= total) resultats(); else etape(); });
    }

    function etape() {
      var q = Q.questions[state.i];
      var t = theme(q.theme);
      var rep = state.rep[q.id];
      root.innerHTML =
        '<div class="stepper">' +
        '<h2 class="stepper__title" id="quiz-focus" tabindex="-1">Question ' + (state.i + 1) + " sur " + total + "</h2>" +
        '<p class="stepper__state">Thème : ' + esc(t.label) + "</p>" +
        '<progress class="progress" max="' + total + '" value="' + (state.i + 1) + '" aria-label="Progression du questionnaire">' + (state.i + 1) + " sur " + total + "</progress></div>" +
        '<form id="quiz-form" novalidate>' +
        '<fieldset aria-describedby="quiz-contexte' + '">' +
        '<legend class="h3" style="font-size:1.5rem;font-weight:700;margin-bottom:.75rem">' + esc(q.texte) + "</legend>" +
        '<p class="mention" id="quiz-contexte">Contexte : ' + esc(q.contexte) + "</p>" +
        '<div class="answers">' +
        Q.echelle.map(function (o, k) {
          var v = o.valeur === null ? "null" : String(o.valeur);
          var checked = rep !== undefined && String(rep) === v;
          return '<div class="answer"><input type="radio" name="reponse" id="rep-' + k + '" value="' + v + '"' + (checked ? " checked" : "") + '><label for="rep-' + k + '">' + esc(o.label) + "</label></div>";
        }).join("") +
        "</div></fieldset>" +
        '<p id="quiz-erreur" class="callout callout--warning" role="alert" hidden>Veuillez choisir une réponse (ou « Sans opinion ») pour continuer.</p>' +
        '<div class="checkbox form-group"><input type="checkbox" id="quiz-important"' + (state.imp[q.id] ? " checked" : "") + '><label for="quiz-important">Ce sujet est particulièrement important pour moi <span class="hint">Il comptera double dans le calcul</span></label></div>' +
        '<div class="btn-group">' +
        (state.i > 0 ? '<button type="button" class="btn btn--secondary" id="quiz-prev">Question précédente</button>' : "") +
        '<button type="submit" class="btn">' + (state.i === total - 1 ? "Voir mes résultats" : "Question suivante") + "</button>" +
        '<button type="button" class="btn btn--tertiary" id="quiz-stop">Interrompre et revenir à l\'accueil du questionnaire</button>' +
        "</div></form>";

      var form = $("#quiz-form");
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var r = $('input[name="reponse"]:checked', form);
        if (!r) {
          var err = $("#quiz-erreur");
          err.hidden = false;
          $("#rep-0").focus();
          return;
        }
        state.rep[q.id] = r.value === "null" ? null : Number(r.value);
        state.imp[q.id] = $("#quiz-important").checked;
        state.i++;
        save();
        if (state.i >= total) resultats(); else { etape(); }
      });
      var prev = $("#quiz-prev");
      if (prev) prev.addEventListener("click", function () {
        var r = $('input[name="reponse"]:checked', form);
        if (r) state.rep[q.id] = r.value === "null" ? null : Number(r.value);
        state.imp[q.id] = $("#quiz-important").checked;
        state.i--; save(); etape();
      });
      $("#quiz-stop").addEventListener("click", function () { save(); intro(); focusTitre(); window.scrollTo(0, 0); });
      window.scrollTo(0, root.getBoundingClientRect().top + window.pageYOffset - 16);
      focusTitre();
    }

    function calculer() {
      return G.candidats.map(function (c) {
        var num = 0, den = 0, n = 0;
        Q.questions.forEach(function (q) {
          var u = state.rep[q.id];
          var v = q.positions[c.id];
          if (u === null || u === undefined || v === null || v === undefined) return;
          var w = state.imp[q.id] ? 2 : 1;
          num += w * (1 - Math.abs(u - v) / 4);
          den += w;
          n++;
        });
        return { c: c, score: den ? Math.round((num / den) * 100) : null, n: n };
      }).sort(function (a, b) { return (b.score === null ? -1 : b.score) - (a.score === null ? -1 : a.score); });
    }

    function libelle(v) {
      if (v === null || v === undefined) return "Sans opinion / inconnue";
      for (var i = 0; i < Q.echelle.length; i++) if (Q.echelle[i].valeur === v) return Q.echelle[i].label;
      return "Position nuancée";
    }

    function resultats() {
      var res = calculer();
      var repondu = Q.questions.filter(function (q) { return state.rep[q.id] !== null && state.rep[q.id] !== undefined; }).length;

      if (repondu === 0) {
        root.innerHTML = '<h2 id="quiz-focus" tabindex="-1">Aucun résultat</h2><p>Vous avez répondu « Sans opinion » à toutes les questions : il n\'est pas possible de calculer une proximité.</p><div class="btn-group"><button type="button" class="btn" id="quiz-restart">Recommencer le questionnaire</button></div>';
        $("#quiz-restart").addEventListener("click", function () { state = { i: 0, rep: {}, imp: {} }; save(); etape(); });
        focusTitre();
        return;
      }

      root.innerHTML =
        '<h2 id="quiz-focus" tabindex="-1">Vos résultats</h2>' +
        '<p class="lead">Vous avez exprimé un avis sur ' + repondu + " question" + (repondu > 1 ? "s" : "") + " sur " + total + ". Voici votre degré de proximité avec chaque candidat, du plus proche au plus éloigné.</p>" +
        '<div class="callout callout--warning"><p>Un score élevé signifie que vos réponses rejoignent les positions connues du candidat sur ces sujets ; il ne dit rien de ses autres propositions, de sa personnalité ou de sa capacité à gouverner. <strong>Lisez les programmes avant de faire votre choix.</strong></p></div>' +
        '<ol class="results">' +
        res.map(function (r, k) {
          var p = parti(r.c.parti);
          var s = r.score === null ? "—" : r.score + " %";
          return '<li class="result" style="--result-color:' + p.couleur + '">' +
            '<div class="result__head"><h3 class="result__name"><span class="result__rank">' + (k + 1) + ".</span>" + esc(r.c.nom) + ' <span class="mention" style="font-weight:400">(' + esc(p.sigle) + ")</span></h3>" +
            '<p class="result__score" style="margin:0"><span class="sr-only">Proximité : </span>' + s + "</p></div>" +
            '<div class="bar" aria-hidden="true"><div class="bar__fill" style="width:' + (r.score || 0) + '%"></div></div>' +
            '<p class="mention" style="margin-bottom:.5rem">Calculé sur ' + r.n + " question" + (r.n > 1 ? "s" : "") + " où sa position est connue.</p>" +
            '<details class="accordion"><summary>Détail question par question<span class="sr-only"> pour ' + esc(r.c.nom) + "</span></summary><div class=\"accordion__body\"><div class=\"table-wrap\" tabindex=\"0\" role=\"region\" aria-label=\"Détail des réponses comparées à " + esc(r.c.nom) + '"><table>' +
            '<caption class="sr-only">Vos réponses comparées aux positions de ' + esc(r.c.nom) + "</caption>" +
            '<thead><tr><th scope="col">Affirmation</th><th scope="col">Votre réponse</th><th scope="col">Position de ' + esc(r.c.nom) + "</th></tr></thead><tbody>" +
            Q.questions.map(function (q) {
              return '<tr><th scope="row" style="font-weight:400">' + esc(q.texte) + (state.imp[q.id] ? ' <span class="badge">Important</span>' : "") + "</th><td>" + esc(libelle(state.rep[q.id])) + "</td><td>" + esc(libelle(q.positions[r.c.id])) + "</td></tr>";
            }).join("") +
            "</tbody></table></div>" +
            '<p><a href="candidat.html?id=' + r.c.id + '">Lire le programme de ' + esc(r.c.nom) + "</a></p></div></details>" +
            "</li>";
        }).join("") +
        "</ol>" +
        '<div class="btn-group no-print">' +
        '<button type="button" class="btn" id="quiz-modifier">Modifier mes réponses</button>' +
        '<button type="button" class="btn btn--secondary" id="quiz-restart">Recommencer à zéro</button>' +
        '<button type="button" class="btn btn--tertiary" id="quiz-print">Imprimer mes résultats</button>' +
        "</div>";

      $("#quiz-modifier").addEventListener("click", function () { state.i = 0; save(); etape(); });
      $("#quiz-restart").addEventListener("click", function () { state = { i: 0, rep: {}, imp: {} }; save(); etape(); });
      $("#quiz-print").addEventListener("click", function () { window.print(); });
      window.scrollTo(0, root.getBoundingClientRect().top + window.pageYOffset - 16);
      focusTitre();
    }

    intro();
  }

  /* ---------- Plan du site ---------- */

  function pagePlan() {
    var el = $("#plan-candidats");
    if (el) el.innerHTML = G.candidats.map(function (c) { return '<li><a href="candidat.html?id=' + c.id + '">' + esc(c.nom) + "</a></li>"; }).join("");
  }

  /* ---------- Sources ---------- */

  function pageSources() {
    var el = $("#liste-sources");
    if (el) el.innerHTML = G.sources.map(function (s) {
      return '<li><a href="' + esc(s.url) + '" rel="noopener" target="_blank">' + esc(s.titre) + '<span class="sr-only"> (nouvelle fenêtre)</span></a></li>';
    }).join("");
  }

  /* ---------- Démarrage ---------- */

  var PAGES = {
    accueil: pageAccueil, election: pageElection, partis: pagePartis, candidats: pageCandidats,
    candidat: pageCandidat, comparateur: pageComparateur, questionnaire: pageQuestionnaire,
    plan: pagePlan, sources: pageSources
  };

  function init() {
    renderLayout();
    var fn = PAGES[document.body.getAttribute("data-page")];
    if (fn) fn();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
