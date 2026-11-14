/*
  Bronteksten uit het Duel-archief (pagina instrumenten.html, "Bronteksten").
  Alleen documenten met functie A in database/BIBLIOTHEEK/REGISTER.csv, plus de aanloop in de reguliere opleiding.
  - groep: kader | opbouw | inhoud | begeleiden | aanloop (volgorde en titels: DUEL_GROEPEN)
  - type: één soort of een lijst (voor de filter op soort)
  - principes: nummers 1-9 (zie principes.html)
  - beschrijving: wat het document is (een of twee zinnen)
  - duiding: { ontstaan, zie, context, vraag } (bij gepubliceerde bronteksten)
  - downloads: lijst van { label, href, toelichting } naar PDF's in website/bronteksten; het oudere veld "download" werkt ook
  - datum: versiedatum van het brondocument
  - status: "gepubliceerd" | "in voorbereiding"
  - bron: oorspronkelijk pad in database/ (interne werkverwijzing, wordt niet getoond)
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

window.DUEL_GROEPEN = [
  { id: "kader", titel: "Het kader", tekst: "De teksten waarin het team het denken achter Duel uitschreef: de ontwerpprincipes, de leersituaties en rollen, en wat in elke fase begeleid en beoordeeld werd." },
  { id: "opbouw", titel: "De opbouw", tekst: "Hoe de oriënteringsfase en de uitdagingenfase in elkaar zaten. Een overzicht van het geheel in zes semesters staat op de pagina <a href=\"opbouw.html#semesters\">Opbouw</a>." },
  { id: "inhoud", titel: "De inhoudelijke invulling", tekst: "Wat studenten leerden en lazen: de raamkaders van de modules, de uitdagingen met hun leercyclus, en de leesteksten (\"mandjes\")." },
  { id: "begeleiden", titel: "Begeleiden en beoordelen", tekst: "Instrumenten waarmee begeleiders en studenten het leren volgden en beoordeelden." },
  { id: "aanloop", titel: "Aanloop in de reguliere opleiding", tekst: "Teksten van vóór Duel, uit de reguliere opleiding, waarin al veel van het latere denken zit." }
];

window.DUEL_INSTRUMENTEN = [
  // ---------- Het kader ----------
  {
    titel: "Ontwerpprincipes van het Duel-curriculum",
    groep: "kader", type: "Visietekst",
    principes: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    beschrijving: "De negen opleidingsdidactische ontwerpprincipes, met toelichting, citaten, literatuur en bijlagen over de gehanteerde begrippen en de \"gekantelde opleiding\".",
    duiding: {
      ontstaan: "Het team formuleerde de principes in november 2022, om expliciet te maken wat in twee jaar Duel gegroeid was. Dat gebeurde midden in de curriculumhervorming van de hele bacheloropleiding, waarin de principes daarna als \"didactische principes\" werden opgenomen.",
      zie: "Geen losse regels maar een samenhangend geheel: elk principe verwijst naar andere. Opvallend is de denkbeweging achter het geheel, de \"gekantelde opleiding\", die vertrekt vanuit de student als persoon in de volle praktijk.",
      context: "Geschreven voor collega's die Duel niet van binnenuit kenden, in het licht van een hervorming waarin Duel en de reguliere opleiding samen bekeken werden.",
      vraag: "Welke principes zitten impliciet in jouw opleiding, en zou je ze zo kunnen uitschrijven dat collega's zich erin herkennen of ermee in discussie gaan?"
    },
    bron: ["2022-2023/Duel/Duel-BakoA/Team_11-01-23 en 23-01-23/ontwerpprincipes duel-curriculum_team_23-02-03.docx"],
    download: "bronteksten/ontwerpprincipes-duel-curriculum-2023-02.pdf",
    datum: "februari 2023",
    status: "gepubliceerd"
  },
  {
    titel: "Raamkader leersituaties en begeleidingsrollen",
    groep: "kader", type: "Raamkader",
    principes: [4, 9, 6],
    beschrijving: "Vier soorten leersituaties naast elkaar: zelfstandig leren door doen in de praktijk, werkbegeleiding door de mentor, supervisie of coaching door een reflectiebegeleider, en studie en training op de hogeschool. Per situatie: wie, vertrekpunt, focus en accent.",
    duiding: {
      ontstaan: "Opgesteld in juni 2020, bij de start van Duel. De studenten stonden van bij de eerste dag in de volle praktijk. Het raamkader moest duidelijk maken wat studenten, mentoren, docenten en begeleiders waar wel en niet van elkaar mochten verwachten.",
      zie: "Reflectief ervaringsleren als integratie van praktijk, theorie en persoon. Inductief en deductief leren als complementaire wegen. En de gedachte dat afbakening geruststelt: wat hier en nu niet kan, krijgt elders en op een ander moment wél de volle aandacht. Een voorloper staat in de visietekst over reflectiebekwaamheid (ca. 2012–2013).",
      context: "De verdeling van de rollen over mentor, reflectiebegeleider en docent hoort bij de organisatie van Duel. De overzichtstabel bevat nog open vragen over het gewicht van elke component.",
      vraag: "Welke leersituaties onderscheidt jouw opleiding, en weten studenten en begeleiders wat ze waar mogen verwachten?"
    },
    bron: ["2020-2021/Duel/rollen/raamkader leersituaties en rollen_samenvatting_20-06-29.docx"],
    download: "bronteksten/raamkader-leersituaties-en-begeleidingsrollen-2020-06.pdf",
    datum: "29 juni 2020",
    status: "gepubliceerd"
  },
  {
    titel: "Gerichtheid van begeleiding en beoordeling",
    groep: "kader", type: "Visietekst",
    principes: [8, 1, 2],
    beschrijving: "Wat de oriënteringsfase en de uitdagingenfase van elkaar onderscheidt: mentale tools tegenover handelingstools, met per fase eigen beoordelingscriteria en dezelfde leerkwaliteiten.",
    duiding: {
      ontstaan: "Een eerste versie dateert van december 2021, deze versie van juli 2022. De tekst maakt expliciet wat in welke fase begeleid en beoordeeld wordt, ook tegenover de scholen, voor wie het concrete handelen in de klas vaak van bij de start centraal stond.",
      zie: "In de oriënteringsfase: correct begrijpen, doorleefd begrijpen, relaties leggen. In de uitdagingenfase: correct begrijpen, correct toepassen, ermee spelen. Doorheen beide: exploratief, coöperatief, zelfverantwoordelijk, zelfstandig en gericht op groei. En een afbakening: in de oriënteringsfase wordt het handelen in de klas nog niet beoordeeld, en over de aanstelling beslist de school.",
      context: "De koppeling aan de syntheseformulieren en aan de twee fasen van Duel.",
      vraag: "Maakt jouw opleiding duidelijk wanneer iets nog leren is en wanneer het beoordeeld wordt, en wie waarvoor verantwoordelijk is?"
    },
    bron: ["2022-2023/Duel/woeNM-werkwijze en planning/gerichtheid van begeleiding en beoordeling_22-07-04.docx"],
    download: "bronteksten/gerichtheid-van-begeleiding-en-beoordeling-2022-07.pdf",
    datum: "4 juli 2022",
    status: "gepubliceerd"
  },

  // ---------- De opbouw ----------
  {
    titel: "O-fase: opbouw en inhoudelijke invulling",
    groep: "opbouw", type: "Visietekst",
    principes: [1, 2, 3, 4, 6],
    beschrijving: "Het ontwerp van de vernieuwde oriënteringsfase: zes algemene ontwerpprincipes, een werkwijze rond één concrete klasactiviteit die telkens met een andere bril bekeken wordt, en een prototype van de woensdagnamiddag.",
    duiding: {
      ontstaan: "Opgesteld in de zomer van 2022, toen de module Wegwijs in kleuteronderwijs in de oriënteringsfase kwam, omdat studenten van bij de start ook concreet houvast nodig hadden voor het wat en hoe in hun klas.",
      zie: "Zes van de latere negen ontwerpprincipes staan hier al, elk met een kernzin: \"in iets zit altijd alles\", \"de student is een totaal-persoon; de praktijk is een totaal-gebeuren\", \"het pedagogische is niet maakbaar\". En drie vragen bij elk thema: waarover gaat het, hoe is het aanwezig in mijn praktijk, en waar komt het elders terug?",
      context: "De woensdagnamiddag als vast contactmoment en de inhouden van de module Wegwijs in kleuteronderwijs.",
      vraag: "Rond welke ene, alledaagse situatie uit de praktijk zou jij een heel semester kunnen opbouwen?"
    },
    bron: ["2022-2023/Duel/woeNM-werkwijze en planning/opbouw en inhoudelijke invulling O-fase_22-08-29.docx"],
    download: "bronteksten/o-fase-opbouw-en-inhoudelijke-invulling-2022-08.pdf",
    datum: "29 augustus 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Daag jezelf uit! Handleiding om de U-fase te starten",
    groep: "opbouw", type: ["Leidraad", "Presentatie"],
    principes: [1, 9, 8],
    beschrijving: "De presentatie waarmee studenten de uitdagingenfase startten: de zes uitdagingen, de drie niveaus, hoe je een uitdaging aanpakt en documenteert, en de beoordelingscriteria.",
    duiding: {
      ontstaan: "Gebruikt bij de start van de uitdagingenfase in 2022-2023. Bij die overgang moesten studenten zelf de regie van hun leerweg opnemen. De handleiding geeft houvast zonder de weg voor te schrijven.",
      zie: "Drie leerniveaus als groeilijn: \"aanzetten tot\" (iets door hebben, begrijpen mits sturing en onder begeleiding), \"onderweg zijn\" (onder begeleiding, maar al zelfsturend) en \"verdiepen en integreren\" (zelfsturend aan de slag gaan, eigenaarschap opnemen van het eigen leerproces en geïntegreerd en flexibel handelen vanuit een eigen identiteit en visie). Een onderzoekscyclus: ontwerpen, uitvoeren, observeren in termen van welbevinden en betrokkenheid, en documenteren. Samen leren en 360°-feedback. Het is een voorbeeld van hoe gekaderd maatwerk naar studenten toe uitgelegd werd.",
      context: "De verwijzingen naar cursussen, Canvas en het leercentrum van de hogeschool. Foto's en boekcovers zijn weggelaten.",
      vraag: "Hoe vertaal jij de verwachting \"neem je leren in eigen handen\" naar concrete eerste stappen voor studenten?"
    },
    bron: ["2022-2023/Duel/A_Semester 2/uitdagingen/Leidraad starten met een uitdaging Duel (1).pptx"],
    download: "bronteksten/daag-jezelf-uit-handleiding-u-fase-2023.pdf",
    datum: "2022-2023",
    status: "gepubliceerd"
  },

  // ---------- De inhoudelijke invulling ----------
  {
    titel: "Raamkaders van de vier O-modules",
    groep: "inhoud", type: "Raamkader",
    principes: [2, 1],
    beschrijving: "Per module (Wegwijs in kleuteronderwijs, persoonsgericht kijken, procesgericht kijken, reflectief en onderzoeksmatig leren): finaliteit, thema's, concepten en redeneringen. Wegwijs in kleuteronderwijs biedt een basispakket van de inhouden die in de uitdagingenfase verdieping krijgen.",
    bron: ["2022-2023/Duel/O-fase/raamkaders/"],
    status: "in voorbereiding"
  },
  {
    titel: "Uitdaging groeibevorderende relaties: instructiefiche en leercyclus",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De verwachtingen op drie niveaus en de opzet van de leercyclus: finaliteit en leerweg.",
    bron: ["2021-2022/Duel/sem 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/"],
    status: "in voorbereiding"
  },
  {
    titel: "Uitdaging krachtige speel- en leeromgeving: instructiefiche, leercyclus en een voorbeeld",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De verwachtingen op drie niveaus, de opzet van de leercyclus, en een uitgewerkt voorbeeld: een zelfgemaakte betaalautomaat als vertrekpunt voor onderzoek en reflectie.",
    bron: ["2020-2021/Duel/2_semester 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/"],
    status: "in voorbereiding"
  },
  {
    titel: "Uitdaging ruimte voor initiatief: instructiefiche en leercyclus",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De verwachtingen op drie niveaus en de opzet van de leercyclus: finaliteit en leerweg.",
    bron: ["2020-2021/Duel/2_semester 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/"],
    status: "in voorbereiding"
  },
  {
    titel: "Mandje: de wie-vraag",
    groep: "inhoud", type: "Leestekst",
    principes: [5, 2],
    beschrijving: "Wie-vragen naast wat-, hoe-, waarom- en waartoe-vragen: welke vraag kenmerkt de opleiding?",
    bron: ["2021-2022/Duel/sem 1/mandjes/mandje_wie-vraag_21-11-09.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Mandje: Wanneer is het goed?",
    groep: "inhoud", type: "Leestekst",
    principes: [2, 7],
    beschrijving: "Wat kwaliteitsvol onderwijs is, bekeken vanuit welbevinden en betrokkenheid: de procesgerichte benadering van onderwijskwaliteit.",
    bron: ["2022-2023/Duel/O-fase/mandjes/mandje_procesgerichte benadering van onderwijskwaliteit_2.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Mandje: de leerkracht als gelaagd persoon",
    groep: "inhoud", type: "Leestekst",
    principes: [5, 9],
    beschrijving: "Het ui-model van Korthagen: hoe handelen, competenties, overtuigingen, identiteit en idealen samenhangen.",
    bron: ["2022-2023/Duel/O-fase/mandjes/mandje_gelaagdheid van de persoon_20-11-23.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Mandje: reflectief en onderzoeksmatig leren",
    groep: "inhoud", type: "Leestekst",
    principes: [9],
    beschrijving: "Wat is het, waartoe doe je het en hoe?",
    bron: ["2021-2022/Duel/sem 1/mandjes/Duel - mandje_reflectief en onderzoeksmatig leren_22-01-24.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Mandje: leidraden voor onderzoek en reflectie",
    groep: "inhoud", type: ["Leestekst", "Leidraad"],
    principes: [9],
    beschrijving: "Hoe je reflectief en onderzoeksmatig met een uitdaging omgaat, van ontwerp tot terugblik.",
    bron: ["2020-2021/Duel/mandjes/mandje_leidraad onderzoek en reflectie_21-01-06.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Procesgerichte micro-analyses met drie basisreflectievragen",
    groep: "inhoud", type: "Leidraad",
    principes: [9, 2, 3],
    beschrijving: "Wat gebeurde er, waaraan lag het, wat kan anders? Met voorbeelden van korte analyses van een klassituatie.",
    bron: ["2022-2023/Duel/O-fase/sessies/reflectief en onderzoeksmatig leren/procesgerichte micro-analyses met 3 BRV_voorbeelden.docx"],
    status: "in voorbereiding"
  },

  // ---------- Begeleiden en beoordelen ----------
  {
    titel: "Syntheseformulier: eindbeoordeling van een uitdaging",
    groep: "begeleiden", type: "Evaluatie en feedback",
    principes: [8],
    beschrijving: "Hoe een kwalitatief oordeel over het leren van een student omgezet werd in een score: \"van kwaliteit naar kwantiteit\".",
    bron: ["2021-2022/Duel/sem 2/evaluatie/syntheseformulier uitdagingen/synthese_uitdagingen_herwerking_22-02-17_na FB-2.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Single point rubric: professionele samenwerkingsrelaties",
    groep: "begeleiden", type: "Evaluatie en feedback",
    principes: [8, 6],
    beschrijving: "Een rubric die alleen het verwachte niveau beschrijft en ruimte laat voor wat de student meer of anders laat zien.",
    bron: ["2022-2023/Duel/Rubric professionele samenwerkingsrelaties.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "Feedback geven: praktische richtlijnen",
    groep: "begeleiden", type: ["Leidraad", "Evaluatie en feedback"],
    principes: [8, 6],
    beschrijving: "Richtlijnen voor begeleiders: hoe geef je feedback die het leren van de student ondersteunt?",
    bron: ["2022-2023/Duel/begeleiding/werkwijze/feedback geven/Feedback geven_praktische richtlijnen_22-09-15_na FB.docx"],
    status: "in voorbereiding"
  },
  {
    titel: "360°-evaluatie: werkdocument",
    groep: "begeleiden", type: "Visietekst",
    principes: [8],
    beschrijving: "Concrete initiatieven om te evolueren naar een evaluatie waarin alle relevante informatie samenhangend en continu zichtbaar wordt.",
    bron: ["2022-2023/Duel/Duel-BakoA/360 graden evaluatie_werkdocument_2020-06-19b.docx"],
    status: "in voorbereiding"
  },

  // ---------- Aanloop in de reguliere opleiding ----------
  {
    titel: "Dromen over nieuwe keuzes: drie speerpunten",
    groep: "aanloop", type: "Visietekst",
    principes: [1, 8, 9],
    beschrijving: "Nota van het praktijkteam voor het team van de reguliere opleiding, met drie speerpunten: de vooruit-leun-houding, 360°-begeleiding en -evaluatie, en gekaderd maatwerk.",
    duiding: {
      ontstaan: "Geschreven in juni 2020 door het praktijkteam, dat de stages in samenhang met de andere opleidingsonderdelen organiseerde. Het werd vooral voor Duel een belangrijke inspiratiebron.",
      zie: "De vroegste uitgewerkte bron voor het beeld van \"achteruit leunen\". De nota draait de vraag om: is de \"goede wil\" van studenten om te passen in een vooraf uitgestippeld parcours misschien zelf de achteruit-leun-houding?",
      context: "Geschreven voor de reguliere opleiding, met haar stages en opleidingsonderdelen.",
      vraag: "Welke condities in jouw opleiding lokken achteruit leunen uit, ook bij de opleiders zelf?"
    },
    bron: ["2022-2023/dromen over nieuwe keuzes_3-speerpunten_20-06-19.docx"],
    download: "bronteksten/dromen-over-nieuwe-keuzes-drie-speerpunten-2020-06.pdf",
    datum: "19 juni 2020",
    status: "gepubliceerd"
  },
  {
    titel: "Ontwikkelen van reflectiebekwaamheid in de opleiding",
    groep: "aanloop", type: "Visietekst",
    principes: [3, 4, 5, 7, 9],
    beschrijving: "Intern rapport vanuit de werkgroep POP en de stagewerkgroep: de kloof tussen theorie en praktijk als opleidingsdidactische kwestie, zes kenmerken van goede reflectie, een leerlijn en een raamkader van leersituaties.",
    duiding: {
      ontstaan: "Geschreven in opdracht van het toenmalige opleidingshoofd, vermoedelijk in 2012–2013.",
      zie: "Veel van het latere Duel-denken: de kloof tussen theorie en praktijk ligt niet in de eerste plaats bij de studenten, maar bij hoe de opleiding leren opvat. Het raamkader van leersituaties is een voorloper van dat van Duel (2020).",
      context: "Een doorlichting van het programma van de reguliere opleiding in die jaren.",
      vraag: "Waar legt jouw opleiding de oorzaak als theorie en praktijk niet samenkomen?"
    },
    bron: ["reflectiebekwaamheid ontwikkelen/visietekst_ontwikkelen van reflectiebekwaamheid_BAKO.docx"],
    download: "bronteksten/ontwikkelen-van-reflectiebekwaamheid-visietekst-bako.pdf",
    datum: "ongedateerd, vermoedelijk 2012–2013",
    status: "gepubliceerd"
  },
  {
    titel: "Leren zichtbaar maken: zelfevaluatie van reflectiebekwaamheid",
    groep: "aanloop", type: "Evaluatie en feedback",
    principes: [5, 8, 9],
    beschrijving: "Werkdocument van het praktijkteam: wat doe, weet en kan ik bij het reflecteren, hoe zet ik mijn onderzoekende houding in, en hoe zit ik in mijn leren? Met een actieplan.",
    duiding: {
      ontstaan: "Gemaakt in december 2019, toen het team van de reguliere opleiding de focus op reflectiebekwaamheid wilde leggen.",
      zie: "Wat het meest bleek te ontbreken, was de onderzoekende, nieuwsgierige houding. Die vraag kwam later in Duel terug als leerkwaliteit.",
      context: "Een onafgewerkte werkversie; enkele rubrieken zijn nog niet ingevuld.",
      vraag: "Hoe maak je zichtbaar hoe studenten in hun leren staan, en niet alleen wat ze kunnen?"
    },
    bron: ["reflectiebekwaamheid ontwikkelen/reflectie_instrument_zelfevaluatie_uitgebreid_19-12-03.docx"],
    download: "bronteksten/leren-zichtbaar-maken-zelfevaluatie-reflectiebekwaamheid-2019-12.pdf",
    datum: "3 december 2019",
    status: "gepubliceerd"
  },
  {
    titel: "De pedagogische opdracht van de leerkracht",
    groep: "inhoud", type: ["Leestekst", "Presentatie"],
    principes: [5, 6, 2],
    beschrijving: "Leestekst en twee lessen die samen horen. Waartoe voeden we op? Met Biesta: het verlangen wekken om op een volwassen manier in de wereld te zijn. Waaruit bestaat het pedagogisch werk?",
    duiding: {
      ontstaan: "Het hoofdstuk komt uit de cursus Opvoedingskader 1 van de reguliere opleiding (2019-2020). De twee lessen werden in april 2023 gegeven en ook in Duel gebruikt bij de uitdaging groeibevorderende relaties.",
      zie: "Biesta's drie functies van onderwijs en de vraag naar het waartoe van opvoeden. Hetzelfde denken keert terug in de ontwerpprincipes: de student mag als persoon verschijnen.",
      context: "Geschreven als cursustekst voor studenten kleuteronderwijs.",
      vraag: "Waartoe leidt jouw opleiding op, als je de vraag van Biesta ernstig neemt?"
    },
    bron: [
      "2022-2023/Duel/A_Semester 2/Z_opvoeden/Cursus OPK-1_2019-2020_hfst 4_pedagogische opdracht.docx",
      "2022-2023/Duel/A_Semester 2/Z_opvoeden/les 9_waartoe voeden we op.pptx",
      "2022-2023/Duel/A_Semester 2/Z_opvoeden/les 10_waaruit bestaat het pedagogisch werk.pptx"
    ],
    downloads: [
      { label: "Leestekst", href: "bronteksten/pedagogische-opdracht-van-de-leerkracht-opk1-hfst4.pdf", toelichting: "Cursushoofdstuk OPK-1, hoofdstuk 4 (2019-2020)" },
      { label: "Presentatie les 9", href: "bronteksten/pedagogische-opdracht-les9-waartoe-voeden-we-op.pdf", toelichting: "Les 9: Waartoe voeden we op? (april 2023)" },
      { label: "Presentatie les 10", href: "bronteksten/pedagogische-opdracht-les10-waaruit-bestaat-het-pedagogisch-werk.pdf", toelichting: "Les 10: Waaruit bestaat het pedagogisch werk? (april 2023)" }
    ],
    datum: "leestekst 2019-2020, presentaties april 2023",
    status: "gepubliceerd"
  }
];
