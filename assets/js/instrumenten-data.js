/*
  Catalogus van instrumenten uit het Duel-archief.
  - principes: nummers 1-9 (zie principes.html)
  - bron: pad in database/2022-2023 (interne werkverwijzing; wordt later vervangen door een downloadlink)
  - type: één soort, of een lijst als het instrument meerdere vormen heeft (bv. ["Leestekst", "Presentatie"])
  - downloads: lijst van { label, href, toelichting } naar PDF's in website/bronteksten (alleen bij status "gepubliceerd");
    het oudere enkelvoudige veld "download" werkt ook nog
  - datum: versiedatum van het brondocument (optioneel)
  - status: "te publiceren" | "gepubliceerd"
  Documenten over individuele studenten horen hier niet thuis.
*/
window.DUEL_PRINCIPES = {
  1: "Gekaderd maatwerk",
  2: "Basisgrammatica en geletterdheid",
  3: "Exemplarische uitdieping en transfer",
  4: "Integratief leren",
  5: "Als persoon verschijnen",
  6: "Echte ontmoeting en gesprek",
  7: "Congruentie",
  8: "360° begeleiding en evaluatie",
  9: "Reflectief ervaringsleren"
};

window.DUEL_INSTRUMENTEN = [
  // ---------- Visieteksten ----------
  {
    titel: "Ontwerpprincipes van het Duel-curriculum",
    type: "Visietekst", context: "Visie", module: "Hele opleiding",
    principes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    beschrijving: "De kerntekst: de negen opleidingsdidactische principes, met citaten, literatuur en bijlagen over de gehanteerde begrippen en de 'gekantelde opleiding'.",
    bron: ["Duel/Duel-BakoA/Team_11-01-23 en 23-01-23/ontwerpprincipes duel-curriculum_team_23-02-03.docx"],
    download: "bronteksten/ontwerpprincipes-duel-curriculum-2023-02.pdf",
    datum: "februari 2023",
    status: "gepubliceerd"
  },
  {
    titel: "Raamkader leersituaties en begeleidingsrollen",
    type: "Visietekst", context: "Begeleiding", module: "Hele opleiding",
    principes: [4, 9],
    beschrijving: "Onderscheidt praktijk, werkbegeleiding, supervisie en studie/training: wie, waartoe, vertrekpunt en accent. Inclusief overzichtstabel.",
    bron: ["Duel/begeleiding/werkwijze/Duel_raamkader leersituaties en rollen_samenvatting_20-06-29.docx"],
    status: "te publiceren"
  },
  {
    titel: "Gerichtheid van begeleiding en beoordeling",
    type: "Visietekst", context: "Begeleiding", module: "O-fase en U-fase",
    principes: [1, 8],
    beschrijving: "Mentale tools (O-fase) versus handelingstools (U-fase), beoordelingscriteria per fase en de rolverdeling tussen opleiding en school.",
    bron: ["Duel/Duel-BakoA/gerichtheid van begeleiding en beoordeling_22-07-04.docx"],
    status: "te publiceren"
  },
  {
    titel: "Opbouw en inhoudelijke invulling van de O-fase",
    type: "Visietekst", context: "O-fase", module: "Wegwijs in kleuteronderwijs",
    principes: [1, 2, 3, 4],
    beschrijving: "Hoe de O-fase concentrisch rond één kernactiviteit werd opgebouwd, met de leidende vragen en een prototype van een woensdagsessie.",
    bron: ["Duel/woeNM-werkwijze en planning/opbouw en inhoudelijke invulling O-fase_22-08-29.docx"],
    status: "te publiceren"
  },
  {
    titel: "360°-evaluatie: werkdocument",
    type: "Visietekst", context: "Begeleiding", module: "Hele opleiding",
    principes: [8],
    beschrijving: "Concrete initiatieven om te evolueren naar een evaluatie waarin alle relevante informatie samenhangend en continu zichtbaar wordt.",
    bron: ["Duel/Duel-BakoA/360 graden evaluatie_werkdocument_2020-06-19b.docx"],
    status: "te publiceren"
  },

  // ---------- Raamkaders ----------
  {
    titel: "Raamkaders en concretisering van de O-modules",
    type: "Raamkader", context: "O-fase", module: "Alle O-modules",
    principes: [1, 2],
    beschrijving: "Per module (persoonsgericht kijken, procesgericht kijken, reflectief en onderzoeksmatig leren, WiO): finaliteit, thema's, concepten en concrete doelen.",
    bron: ["Duel/O-fase/raamkaders/"],
    status: "te publiceren"
  },
  {
    titel: "ECTS-fiches van de O-modules",
    type: "Raamkader", context: "O-fase", module: "Alle O-modules",
    principes: [1],
    beschrijving: "Officiële doelen en studiepunten van de vier oriënteringsmodules.",
    bron: ["Duel/O-fase/ECTS-fiches/"],
    status: "te publiceren"
  },
  {
    titel: "Opzet van de leercyclus per uitdaging",
    type: "Raamkader", context: "U-fase", module: "Uitdagingen",
    principes: [1, 3, 4],
    beschrijving: "Finaliteit en leerweg voor groeibevorderende relaties, krachtige speel- en leeromgeving en ruimte voor initiatief.",
    bron: ["Duel/uitdagingen_werkwijze/"],
    status: "te publiceren"
  },

  // ---------- Leesteksten (mandjes) ----------
  {
    titel: "Mandje: De leerkracht als gelaagd persoon",
    type: "Leestekst", context: "O-fase", module: "Persoonsgericht kijken",
    principes: [5, 9],
    beschrijving: "Het ui-model van Korthagen: hoe gedrag, competenties, overtuigingen, identiteit en idealen je handelen in de klas mee bepalen.",
    bron: ["Duel/O-fase/mandjes/mandje_gelaagdheid van de persoon_20-11-23.docx"],
    status: "te publiceren"
  },
  {
    titel: "Mandje: De wie-vraag",
    type: "Leestekst", context: "O-fase", module: "Persoonsgericht kijken",
    principes: [5, 2],
    beschrijving: "Wie-vragen versus wat-, hoe-, waarom- en waartoe-vragen: welke vraag kenmerkt de opleiding?",
    bron: ["Duel/O-fase/mandjes/mandje_wie-vraag_21-11-09.docx"],
    status: "te publiceren"
  },
  {
    titel: "Mandje: Wanneer is het goed? Procesgerichte onderwijskwaliteit",
    type: "Leestekst", context: "O-fase", module: "Procesgericht kijken",
    principes: [2, 7],
    beschrijving: "Wat kwaliteitsvol onderwijs is, bekeken vanuit welbevinden en betrokkenheid als procesvariabelen.",
    bron: ["Duel/O-fase/mandjes/mandje_procesgerichte benadering van onderwijskwaliteit_2.docx"],
    status: "te publiceren"
  },
  {
    titel: "Mandje: Reflectief en onderzoeksmatig leren",
    type: "Leestekst", context: "O-fase", module: "Reflectief en onderzoeksmatig leren",
    principes: [9],
    beschrijving: "Wat reflectief en onderzoeksmatig leren is, waartoe het dient en hoe je het aanpakt als student in de volle praktijk.",
    bron: ["Duel/O-fase/mandjes/Duel - mandje_reflectief en onderzoeksmatig leren_22-01-24.docx"],
    status: "te publiceren"
  },
  {
    titel: "Ervaringskansen binnen een ontwikkelveld",
    type: "Leestekst", context: "U-fase", module: "Krachtige speel- en leeromgeving",
    principes: [3, 4],
    beschrijving: "Hoe ontmoeten, zelfstandig spelen, begeleid exploreren en geleid leren kansen bieden binnen één ontwikkelveld, uitgewerkt voor wiskundig denken.",
    bron: ["Duel/uitdagingen_werkwijze/Kansen binnen een ontwikkelveld door de verschillende ervaringskansen die je kan aanbieden bij kleuters.docx"],
    status: "te publiceren"
  },
  {
    titel: "De pedagogische opdracht van de leerkracht",
    type: ["Leestekst", "Presentatie"], context: "U-fase", module: "Groeibevorderende relaties",
    principes: [5, 6, 2],
    beschrijving: "Leestekst en twee lessen die samen horen. Waartoe voeden we op? Met Biesta: het verlangen wekken om op een volwassen manier in de wereld te zijn. Waaruit bestaat het pedagogisch werk? Onderbreking, vertraging en ondersteuning, van macht naar gezag, en hoe ik-boodschappen en actief luisteren vrijheid bieden.",
    bron: [
      "Duel/A_Semester 2/Z_opvoeden/Cursus OPK-1_2019-2020_hfst 4_pedagogische opdracht.docx",
      "Duel/A_Semester 2/Z_opvoeden/les 9_waartoe voeden we op.pptx",
      "Duel/A_Semester 2/Z_opvoeden/les 10_waaruit bestaat het pedagogisch werk.pptx"
    ],
    downloads: [
      { label: "Leestekst", href: "bronteksten/pedagogische-opdracht-van-de-leerkracht-opk1-hfst4.pdf", toelichting: "Cursushoofdstuk OPK-1, hoofdstuk 4 (2019-2020)" },
      { label: "Presentatie les 9", href: "bronteksten/pedagogische-opdracht-les9-waartoe-voeden-we-op.pdf", toelichting: "Les 9: Waartoe voeden we op? (19 dia's, april 2023)" },
      { label: "Presentatie les 10", href: "bronteksten/pedagogische-opdracht-les10-waaruit-bestaat-het-pedagogisch-werk.pdf", toelichting: "Les 10: Waaruit bestaat het pedagogisch werk? (27 dia's, april 2023)" }
    ],
    datum: "leestekst 2019-2020, presentaties april 2023",
    status: "gepubliceerd"
  },
  {
    titel: "Ervaringsgericht werken als houding",
    type: "Leestekst", context: "Reguliere opleiding", module: "Opvoedingskader 2",
    principes: [7, 4],
    beschrijving: "Hoe je ervaringsgericht blijft werken als er veel tijd zit tussen plannen en realiseren.",
    bron: ["OPK/OPK-2/Lessen/Les 10_examen/EG als houding.docx"],
    status: "te publiceren"
  },

  // ---------- Leidraden ----------
  {
    titel: "Leidraad onderzoek en reflectie bij uitdagingen",
    type: "Leidraad", context: "U-fase", module: "Uitdagingen",
    principes: [9, 1],
    beschrijving: "Fasegewijze leidraad: een aanbod ontwerpen, uitvoeren, observeren, analyseren en herontwerpen.",
    bron: ["Duel/O-fase/mandjes/mandje_leidraad onderzoek en reflectie_21-01-06.docx"],
    status: "te publiceren"
  },
  {
    titel: "Stap voor stap naar een ontwerp voor je uitdagingen",
    type: "Leidraad", context: "U-fase", module: "Uitdagingen",
    principes: [1],
    beschrijving: "Praktisch stappenplan: van instructiefiche en ECTS-fiche naar een eigen ontwerp voor een uitdaging.",
    bron: ["Duel/O-fase/mandjes/Stap voor stap naar een ontwerp voor je uitdagingen.docx"],
    status: "te publiceren"
  },
  {
    titel: "Leidraad bij zelfstudie: groeibevorderende relaties",
    type: "Leidraad", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [1, 6],
    beschrijving: "Uitgebreide leidraad om de module grotendeels zelfstandig door te werken, met weinig contacturen.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/leidraad bij zelfstudie groeibevorderende relaties.docx"],
    status: "te publiceren"
  },
  {
    titel: "Doorleefd bestuderen van theorie: hulpvragen",
    type: "Leidraad", context: "Reguliere opleiding", module: "Opvoedingskader 2",
    principes: [5, 2],
    beschrijving: "Hulpvragen om theorie niet alleen correct, maar ook doorleefd te begrijpen: hoe verhoud ik me er als persoon toe?",
    bron: ["OPK/OPK-2/cursus - planning - studiewijzer/Doorleefd bestuderen van theorie.docx"],
    status: "te publiceren"
  },
  {
    titel: "Hulpvragen gelaagdheid: welke leraar wil ik zijn?",
    type: "Leidraad", context: "Reguliere opleiding", module: "Leraar in ontwikkeling 4",
    principes: [5],
    beschrijving: "Vragen om na te gaan wat voor mens en leraar je wilt zijn en hoe je dat in je dagelijkse handelen waarmaakt.",
    bron: ["LIO-4/sessie 1/gelaagdheid-hulpvragen.docx"],
    status: "te publiceren"
  },
  {
    titel: "Werken met klasbezoeken en filmpjes in de begeleiding",
    type: "Leidraad", context: "Begeleiding", module: "Begeleiding",
    principes: [8, 3],
    beschrijving: "Doelen en werkwijze om met klasbezoeken en filmfragmenten de mentale tools van studenten te versterken.",
    bron: ["Duel/begeleiding/werkwijze/schoolbezoeken en filmpjes_begeleiding _23-02-23.docx"],
    status: "te publiceren"
  },

  // ---------- Oefeningen ----------
  {
    titel: "Micro-analyses met drie basisreflectievragen",
    type: "Oefening", context: "O-fase", module: "Reflectief en onderzoeksmatig leren",
    principes: [9, 3],
    beschrijving: "Uitgewerkte voorbeelden: Wat gebeurde er? Waaraan lag dat? Wat kan ik volgende keer anders doen?",
    bron: ["Duel/O-fase/sessies/reflectief en onderzoeksmatig leren/procesgerichte micro-analyses met 3 BRV_voorbeelden.docx"],
    status: "te publiceren"
  },
  {
    titel: "Casus maïstafel: ervaringsreconstructie",
    type: "Oefening", context: "O-fase", module: "Procesgericht kijken",
    principes: [3, 7],
    beschrijving: "Achter het beschreven gedrag van kleuters en leerkracht de ervaring reconstrueren. Opdracht en verbetersleutel.",
    bron: ["Duel/O-fase/sessies/procesgericht kijken/Casus mais - ervaringsreconstructie_opdracht.docx", "Duel/O-fase/sessies/procesgericht kijken/Casus mais - ervaringsreconstructie_verbetersleutel.docx"],
    status: "te publiceren"
  },
  {
    titel: "Casus Milan wil taart",
    type: "Oefening", context: "O-fase", module: "Procesgericht kijken",
    principes: [3],
    beschrijving: "Perspectief nemen: met concretiseringsvragen de ervaring van juf en kleuter reconstrueren.",
    bron: ["Duel/O-fase/sessies/procesgericht kijken/Casus Milan - ervaringsreconstructie.docx"],
    status: "te publiceren"
  },
  {
    titel: "Belevingskernen en basisbehoeften: zes kleuters",
    type: "Oefening", context: "O-fase", module: "Procesgericht kijken",
    principes: [3],
    beschrijving: "Korte portretten van kleuters: welke basisbehoefte is gefrustreerd? Opgave en verbetersleutel.",
    bron: ["Duel/O-fase/sessies/procesgericht kijken/oefening belevingskernen en basisbehoeften 6 kleuters_opgave.docx", "Duel/O-fase/sessies/procesgericht kijken/oefening belevingskernen en basisbehoeften 6 kleuters_verbetersleutel.docx"],
    status: "te publiceren"
  },
  {
    titel: "Betrokkenheidssignalen herkennen",
    type: "Oefening", context: "Reguliere opleiding", module: "Opvoedingskader 2",
    principes: [3],
    beschrijving: "Omschrijvingen koppelen aan de signalen van betrokkenheid: concentratie, persistentie, nauwgezetheid, enzovoort.",
    bron: ["OPK/OPK-2/Lessen/Les 1_BTH en APE-model/oefening betrokkenheidssignalen.docx"],
    status: "te publiceren"
  },
  {
    titel: "Oefenen op de Leuvense empathieschaal",
    type: "Oefening", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [6],
    beschrijving: "Interacties een niveau op de empathieschaal toekennen en dat argumenteren. Met correctiesleutel.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/Opdrachten/Oefenen op de empathieschaal.docx"],
    status: "te publiceren"
  },
  {
    titel: "Oefenen op ik-boodschappen",
    type: "Oefening", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [6],
    beschrijving: "Ik-boodschappen formuleren en analyseren. Met correctiesleutel.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/Opdrachten/Oefenen op de Ik-boodschappen.doc"],
    status: "te publiceren"
  },
  {
    titel: "Opdrachten: interacties uit de eigen klas",
    type: "Oefening", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [3, 4, 6],
    beschrijving: "Interacties uit de eigen of de mentorklas noteren rond actief luisteren, ik-boodschappen en gevoeligheid voor beleving, en daar feedback op krijgen.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/Opdrachten/"],
    status: "te publiceren"
  },
  {
    titel: "Matrix ervaringskansen",
    type: "Oefening", context: "O-fase", module: "Wegwijs in kleuteronderwijs",
    principes: [4],
    beschrijving: "Raster met vier soorten ervaringskansen (zelfstandig spelen en leren, begeleid exploreren, geleid spelen en leren, ontmoeten) om het eigen aanbod in kaart te brengen.",
    bron: ["Duel/O-fase/sessies/ALG - Matrix ervaringskansen.docx"],
    status: "te publiceren"
  },
  {
    titel: "Verwerkingstaken Wegwijs in kleuteronderwijs",
    type: "Oefening", context: "O-fase", module: "Wegwijs in kleuteronderwijs",
    principes: [2, 3],
    beschrijving: "Een minimumpakket oefeningen en opdrachten om vertrouwd te raken met de concepten en redeneringen van de O-fase.",
    bron: ["Duel/O-fase/sessies/verwerkingstaken/taken  WIO_2.docx"],
    status: "te publiceren"
  },

  // ---------- Evaluatie en feedback ----------
  {
    titel: "Synthesetaak: instructiefiche (O-fase)",
    type: "Evaluatie en feedback", context: "O-fase", module: "Alle O-modules",
    principes: [2, 8, 9],
    beschrijving: "Opzet en verwachtingen van de synthesetaak die de student per module in het groeiportfolio opneemt.",
    bron: ["Duel/O-fase/evaluatie/Synthesetaak instructie_22-08-29.docx"],
    status: "te publiceren"
  },
  {
    titel: "Syntheseformulieren: eindbeoordeling O- en U-fase",
    type: "Evaluatie en feedback", context: "Begeleiding", module: "O-fase en U-fase",
    principes: [8],
    beschrijving: "Hoe de begeleider van doorlopende, kwalitatieve feedback naar een eindbeoordeling gaat.",
    bron: ["Duel/O-fase/evaluatie/syntheseformulier_oriëntering_22-08-29.docx", "Duel/U-fase/Evaluatie/synthese_uitdagingen_22-09-08.docx"],
    status: "te publiceren"
  },
  {
    titel: "Single point rubric: professionele samenwerkingsrelaties",
    type: "Evaluatie en feedback", context: "U-fase", module: "Professionele samenwerkingsrelaties",
    principes: [8],
    beschrijving: "Begeleidings- en evaluatiedocument per niveau (aanzetten tot, onderweg zijn, verdiepen en integreren).",
    bron: ["Duel/Rubric professionele samenwerkingsrelaties.docx"],
    status: "te publiceren"
  },
  {
    titel: "Feedback geven: praktische richtlijnen",
    type: "Evaluatie en feedback", context: "Begeleiding", module: "Begeleiding",
    principes: [8, 6],
    beschrijving: "Afspraken voor opleidingsbegeleiders over feedback op synthesetaken en portfolio's.",
    bron: ["Duel/begeleiding/werkwijze/feedback geven/Feedback geven_praktische richtlijnen_22-09-15_na FB.docx"],
    status: "te publiceren"
  },
  {
    titel: "Feedbacksjablonen voor starters en onderweggers",
    type: "Evaluatie en feedback", context: "Begeleiding", module: "O-fase en U-fase",
    principes: [8],
    beschrijving: "Sjablonen waarin de begeleider per module of uitdaging feedback bundelt, gekoppeld aan portfolio, klasbezoek en gesprek.",
    bron: ["Duel/begeleiding/werkwijze/feedback geven/Feedback sjabloon O-fase - starters.docx", "Duel/begeleiding/werkwijze/feedback geven/Feedback sjabloon U-fase - onderweggers.docx"],
    status: "te publiceren"
  },
  {
    titel: "Begeleidings- en evaluatieformulier voor de mentor",
    type: "Evaluatie en feedback", context: "Begeleiding", module: "Begeleiding",
    principes: [8],
    beschrijving: "Toelichting en formulier waarmee de mentor op school de Duel-student begeleidt en mee evalueert.",
    bron: ["Duel/begeleiding/werkwijze/feedback geven/DUeL - Begeleidings- en evaluatieformulier - mentor.docx"],
    status: "te publiceren"
  },

  // ---------- Presentaties ----------
  {
    titel: "Ervaringsgerichte basishouding en leerkrachtstijl",
    type: "Presentatie", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [6, 7],
    beschrijving: "Reeks presentaties: wat is leerkrachtstijl, gevoeligheid voor beleving, aanvaarding, empathie en echtheid.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/thema 1 - basishouding/"],
    status: "te publiceren"
  },
  {
    titel: "Actief luisteren en ik-boodschappen",
    type: "Presentatie", context: "U-fase", module: "Groeibevorderende relaties",
    principes: [6],
    beschrijving: "Wanneer je actief luistert of een ik-boodschap geeft, welk perspectief je dan inneemt en wat het oplevert.",
    bron: ["Duel/A_Semester 2/groeibevorderende relaties/thema 2 - sleutelvaardigheden/"],
    status: "te publiceren"
  },
  {
    titel: "Procesgericht kijken (met oefeningen)",
    type: "Presentatie", context: "O-fase", module: "Procesgericht kijken",
    principes: [3, 7],
    beschrijving: "Sessiemateriaal over welbevinden, betrokkenheid en ervaringsreconstructie.",
    bron: ["Duel/O-fase/sessies/procesgericht kijken/procesgericht kijken.ppt", "Duel/O-fase/sessies/procesgericht kijken/procesgericht kijken - oefeningen.ppt"],
    status: "te publiceren"
  },
  {
    titel: "Scannen van betrokkenheid met de LBS-K",
    type: "Presentatie", context: "Reguliere opleiding", module: "Opvoedingskader 2",
    principes: [3],
    beschrijving: "Oefeningen om betrokkenheid in te schatten met de Leuvense Betrokkenheidsschaal voor Kleuters.",
    bron: ["OPK/OPK-2/Lessen/Les 2_ - brede basiszorg, PKVS LOOQIN, betrokkenheid inschatten/BTH_oefenen met LBS-K/procesgericht kijken - scannen van betrokkenheid - oefeningen met LBS-k.ppt"],
    status: "te publiceren"
  },

  // ---------- Planning ----------
  {
    titel: "Werkstramien woensdagnamiddag in de U-fase",
    type: "Planning", context: "U-fase", module: "Uitdagingen",
    principes: [1, 6],
    beschrijving: "Overwegingen en ritme voor de woensdagnamiddag: campus, thuiswerk, individueel en in groep.",
    bron: ["Duel/woeNM-werkwijze en planning/planning/werkstramien voor U-fase_22-09-13_met FB van MS.docx"],
    status: "te publiceren"
  },
  {
    titel: "Thematische opbouw van de O-fase",
    type: "Planning", context: "O-fase", module: "Wegwijs in kleuteronderwijs",
    principes: [1, 3],
    beschrijving: "Topics per woensdag, onderweg bij te stellen naargelang de noden.",
    bron: ["Duel/O-fase/sessies/Z_planning/thematische opbouw voor O-fase_22-09-06.docx"],
    status: "te publiceren"
  }
];
