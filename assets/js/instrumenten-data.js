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
    duiding: {
      ontstaan: "In 2022 werd de oriënteringsfase herwerkt. De studenten stonden van bij de start in de volle klaspraktijk, zonder pedagogisch-didactische voorbereiding. Naast de \"mentale tools\" van de andere modules hadden ze ook \"handelingstools\" nodig. Daarom kwam de module Wegwijs in kleuteronderwijs (14 studiepunten) erbij. Deze versies dateren van augustus 2022.",
      zie: "Elke module vertrekt van een finaliteit in de ik-vorm, bijvoorbeeld \"Ik kijk kritisch naar mezelf als persoon in mijn rol van leerkracht\". Het raamkader van Wegwijs geeft principes om inhouden te kiezen: direct bruikbaar, essentieel, exemplarisch en verspreid over alle leerdomeinen. Het bevat ook een zelfonderzoek voor wie start: wil en kan ik leerkracht worden via Duel?",
      context: "Het raamkader van Wegwijs was een werkdocument: de rubrieken over leeractiviteiten en evaluatie bevatten nog losse gedachten en open vragen. Studiepunten, semesters en verwijzingen naar cursussen horen bij het programma van Duel.",
      vraag: "Hoe vind je het evenwicht tussen een basispakket dat studenten meteen in hun klas kunnen gebruiken en de tijd die nodig is om te leren kijken en oordelen?"
    },
    bron: ["2022-2023/Duel/O-fase/raamkaders/"],
    downloads: [
      { label: "Wegwijs in kleuteronderwijs", href: "bronteksten/o-module-wegwijs-in-kleuteronderwijs-raamkader-2022-08.pdf", toelichting: "Raamkader, met bijlagen over de opbouw van het programma, het zelfonderzoek en de inhouden van de uitdagingen" },
      { label: "Persoonsgericht kijken", href: "bronteksten/o-module-persoonsgericht-kijken-2022-08.pdf", toelichting: "Concretisering doelen en inhouden" },
      { label: "Procesgericht kijken", href: "bronteksten/o-module-procesgericht-kijken-2022-08.pdf", toelichting: "Concretisering doelen en inhouden" },
      { label: "Reflectief en onderzoeksmatig leren", href: "bronteksten/o-module-reflectief-en-onderzoeksmatig-leren-2022-08.pdf", toelichting: "Concretisering doelen en inhouden" }
    ],
    datum: "29 augustus 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Uitdaging groeibevorderende relaties: instructiefiche en leercyclus",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De instructiefiche voor studenten (finaliteit, doelstellingen, inhouden, literatuur en evaluatie, voor de drie niveaus) en de opzet van de leercyclus voor begeleiders (finaliteit en leerweg).",
    duiding: {
      ontstaan: "De instructiefiche is geschreven voor studenten, de opzet van de leercyclus voor de begeleiders. Beide dateren van januari 2022. Samen tonen ze hoe een uitdaging naar twee kanten uitgewerkt werd.",
      zie: "Een finaliteit in de ik-vorm: \"Ik voed kinderen op.\" De leerweg vertrekt niet van een vakdomein, maar van een betekenisvolle eenheid uit de eigen praktijk: een interactie met een kind, het groepsklimaat, elk kind afzonderlijk. Van daaruit kijken studenten met telkens een andere bril naar de deelaspecten.",
      context: "De opleidingsonderdelen met hun codes en studiepunten, en de verwijzingen naar cursussen en literatuur van de opleiding. Boekcovers en een schermafdruk zijn weggelaten.",
      vraag: "Wat verandert er als je een opleidingsonderdeel opbouwt vanuit een situatie uit de praktijk in plaats van vanuit een vakdomein?"
    },
    bron: ["2021-2022/Duel/sem 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/"],
    downloads: [
      { label: "Instructiefiche", href: "bronteksten/uitdaging-groeibevorderende-relaties-instructiefiche-2022.pdf", toelichting: "Voor studenten (januari 2022)" },
      { label: "Opzet van de leercyclus", href: "bronteksten/uitdaging-groeibevorderende-relaties-leercyclus-2022.pdf", toelichting: "Voor begeleiders (januari 2022)" }
    ],
    datum: "januari 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Uitdaging krachtige speel- en leeromgeving: instructiefiche, leercyclus en een voorbeeld",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De instructiefiche voor studenten, de opzet van de leercyclus voor begeleiders, en een uitgewerkt voorbeeld: een zelfgemaakte betaalautomaat als vertrekpunt voor onderzoek en reflectie.",
    duiding: {
      ontstaan: "De instructiefiche dateert van januari 2021, de opzet van de leercyclus van januari 2022. Het voorbeeld van de betaalautomaat schreef een begeleider in juni 2021 voor een collega-begeleider, bij een eerdere versie van die opzet.",
      zie: "Cirkelgewijs verruimen: van één activiteit of hoek naar het basismilieu, en dan naar de groep en de individuele kinderen. Het voorbeeld laat zien hoe \"in iets altijd alles zit\": een zelfgemaakte betaalautomaat opent leerkansen over betrokkenheid, ontluikende gecijferdheid, spelscenario's en onderzoekend leren. Het benoemt ook wat dat van begeleiders vraagt: dat \"alles\" ook op het moment zelf zien.",
      context: "De instructiefiche verwijst naar cursussen van de reguliere opleiding; de namen van de lesgevers zijn weggelaten. Het voorbeeld is geanonimiseerd.",
      vraag: "Welk alledaags voorbeeld uit de praktijk van je studenten zou jij zo grondig kunnen uitdiepen, en lukt dat ook op het moment zelf?"
    },
    bron: ["2020-2021/Duel/2_semester 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/", "2020-2021/Z_vernieuwing/pedagogisch-didactische ondersteuning/visie opleidingswijze/"],
    downloads: [
      { label: "Instructiefiche", href: "bronteksten/uitdaging-krachtige-speel-en-leeromgeving-instructiefiche-2021.pdf", toelichting: "Voor studenten (januari 2021)" },
      { label: "Opzet van de leercyclus", href: "bronteksten/uitdaging-krachtige-speel-en-leeromgeving-leercyclus-2022.pdf", toelichting: "Voor begeleiders (januari 2022)" },
      { label: "Voorbeeld: de betaalautomaat", href: "bronteksten/uitdaging-krachtige-speel-en-leeromgeving-voorbeeld-betaalautomaat-2021.pdf", toelichting: "Werktekst van een begeleider (juni 2021), geanonimiseerd" }
    ],
    datum: "2021–2022",
    status: "gepubliceerd"
  },
  {
    titel: "Uitdaging ruimte voor initiatief: instructiefiche en leercyclus",
    groep: "inhoud", type: "Raamkader",
    principes: [3, 1, 9],
    beschrijving: "De instructiefiche voor studenten en de opzet van de leercyclus voor begeleiders, met een eenvoudig instrument om een klasdag in kaart te brengen.",
    duiding: {
      ontstaan: "De instructiefiche dateert van januari 2021, de opzet van de leercyclus van januari 2022.",
      zie: "Een concreet analyse-instrument: studenten zetten een doorsnee klasdag in een tabel en berekenen hoeveel vrij kleuterinitiatief er is, met als streefdoel dat ongeveer 70 procent van de klastijd naar vrije keuze-activiteiten gaat. Daarnaast criteria voor een efficiënte organisatie van ruimte en tijd en voor overtuigend leiden.",
      context: "Het begrippenkader (vrij kleuterinitiatief, het open frameworkmodel) komt uit het ervaringsgericht kleuteronderwijs waarop Duel steunde. Boekcovers en een schermafdruk zijn weggelaten.",
      vraag: "Welk eenvoudig instrument zou je studenten helpen hun eigen praktijk met andere ogen te bekijken?"
    },
    bron: ["2020-2021/Duel/2_semester 2/uitdagingen_instructiefiches/", "2021-2022/Duel/sem 2/uitdagingen_werkwijze/"],
    downloads: [
      { label: "Instructiefiche", href: "bronteksten/uitdaging-ruimte-voor-initiatief-instructiefiche-2021.pdf", toelichting: "Voor studenten (januari 2021)" },
      { label: "Opzet van de leercyclus", href: "bronteksten/uitdaging-ruimte-voor-initiatief-leercyclus-2022.pdf", toelichting: "Voor begeleiders (januari 2022)" }
    ],
    datum: "2021–2022",
    status: "gepubliceerd"
  },
  {
    titel: "Mandje: de wie-vraag",
    groep: "inhoud", type: "Leestekst",
    principes: [5, 2],
    beschrijving: "Wie-vragen naast wat-, hoe-, waarom- en waartoe-vragen: welke vraag kenmerkt de opleiding?",
    duiding: {
      ontstaan: "Een eerste versie dateert van september 2020, bij de start van Duel; deze herwerkte versie van november 2021. Het was een van de eerste leesteksten die studenten kregen.",
      zie: "Een eenvoudige situatie: een driejarige die zich op de eerste schooldag vastklampt aan haar moeder. Elke lezer reageert anders, en dat is net het punt. Naast wat, hoe, waarom en waartoe stelt de opleiding telkens ook de vraag: wie ben jij, hoe kijk jij ernaar? De opleiding wordt zo een vorm van zelfonderzoek, altijd gekoppeld aan onderwijs.",
      context: "Geschreven in de jij-vorm, rechtstreeks voor studenten in de eerste weken van hun opleiding.",
      vraag: "Waar krijgt de wie-vraag in jouw opleiding ruimte, en waar wordt ze (onbedoeld) overgeslagen?"
    },
    bron: ["2021-2022/Duel/sem 1/mandjes/mandje_wie-vraag_21-11-09.docx"],
    download: "bronteksten/mandje-wie-vraag-2021-11.pdf",
    datum: "9 november 2021",
    status: "gepubliceerd"
  },
  {
    titel: "Mandje: Wanneer is het goed?",
    groep: "inhoud", type: "Leestekst",
    principes: [2, 7],
    beschrijving: "Wat kwaliteitsvol onderwijs is, bekeken vanuit welbevinden en betrokkenheid: de procesgerichte benadering van onderwijskwaliteit.",
    duiding: {
      ontstaan: "Leestekst voor de module procesgericht kijken; deze versie dateert van oktober 2022.",
      zie: "De tekst vertrekt bij de eigen intuïties van de lezer en bij een student die vóór het schooljaar zijn klas met veel zorg inricht. De begeleider kan niet zeggen of het goed is: er lopen nog geen kinderen rond. Kwaliteit lees je af aan de kinderen, aan hun welbevinden en betrokkenheid, niet in de eerste plaats aan de aanpak of aan wat het oplevert.",
      context: "Gebaseerd op het ervaringsgericht onderwijs (CEGO) en de vaktermen die daarbij horen: aanpak, proces en effect, ervaringsreconstructie.",
      vraag: "Waaraan lezen jouw studenten af of hun onderwijs goed is, en waaraan lees jij af of jouw opleiding goed is?"
    },
    bron: ["2022-2023/Duel/O-fase/mandjes/mandje_procesgerichte benadering van onderwijskwaliteit_2.docx"],
    download: "bronteksten/mandje-wanneer-is-het-goed-2022-10.pdf",
    datum: "oktober 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Mandje: de leerkracht als gelaagd persoon",
    groep: "inhoud", type: "Leestekst",
    principes: [5, 9],
    beschrijving: "Het ui-model van Korthagen: hoe handelen, competenties, overtuigingen, identiteit en idealen samenhangen.",
    duiding: {
      ontstaan: "Geschreven in november 2020, in het eerste jaar van Duel, en later gebruikt in de module persoonsgericht kijken.",
      zie: "Een juf die het kiesmoment in haar klas \"democratisch\" wil laten verlopen en daarin vastloopt. Aan haar verhaal worden de spanningsvelden zichtbaar tussen wat ze doet, kan, gelooft, wie ze wil zijn en waarvoor ze het doet. Het ui-model maakt die lagen bespreekbaar, met per laag een kernvraag.",
      context: "Het ui-model komt van Korthagen; de figuur is hertekend. De tekst is in de jij-vorm voor studenten geschreven.",
      vraag: "Welke ruimte maakt jouw opleiding om naar de binnenste lagen te kijken, en hoe voorkom je dat het een verplichte oefening wordt?"
    },
    bron: ["2022-2023/Duel/O-fase/mandjes/mandje_gelaagdheid van de persoon_20-11-23.docx"],
    download: "bronteksten/mandje-gelaagdheid-van-de-persoon-2020-11.pdf",
    datum: "23 november 2020",
    status: "gepubliceerd"
  },
  {
    titel: "Mandje: reflectief en onderzoeksmatig leren",
    groep: "inhoud", type: "Leestekst",
    principes: [9],
    beschrijving: "Wat is het, waartoe doe je het en hoe? Met drie leidraden als bijlagen: de drie basisreflectievragen, GRROW en de onderzoekscyclus.",
    duiding: {
      ontstaan: "Geschreven in januari 2022 voor de oriënteringsmodule reflectief en onderzoeksmatig leren. De leidraden uit januari 2021 kregen er een plaats in als bijlagen.",
      zie: "Reflectie vertrekt van een reëel ervaren zorg, zoals die van een leerkracht na een turnles die niet liep zoals ze wilde. Theorie, praktijk en persoon worden verbonden door reflectie: \"Er is de theorie. Er is de praktijk. En ook jij bent er.\" Reflecteren is geen doel op zich, maar een dragende kracht voor verdere professionele ontwikkeling, alleen en samen.",
      context: "De drie leidraden horen bij de werkvormen van Duel (werkbegeleiding, coaching, supervisie). De figuren van het GRROW-model (naar Clement, 2015) en in bijlage 4 zijn hertekend.",
      vraag: "Vertrekt reflectie in jouw opleiding bij een zorg die studenten zelf ervaren, of bij een opdracht die de opleiding geeft?"
    },
    bron: ["2021-2022/Duel/sem 1/mandjes/Duel - mandje_reflectief en onderzoeksmatig leren_22-01-24.docx"],
    download: "bronteksten/mandje-reflectief-en-onderzoeksmatig-leren-2022-01.pdf",
    datum: "24 januari 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Mandje: leidraden voor onderzoek en reflectie",
    groep: "inhoud", type: ["Leestekst", "Leidraad"],
    principes: [9],
    beschrijving: "Hoe je reflectief en onderzoeksmatig met een uitdaging omgaat, van ontwerp tot terugblik: een onderzoekscyclus in vier fasen, GRROW om een uitdaging te bepalen, en de drie basisreflectievragen.",
    duiding: {
      ontstaan: "Geschreven in januari 2021, bij de start van de eerste uitdagingenfase. Een jaar later werden de leidraden bijlagen bij het mandje over reflectief en onderzoeksmatig leren.",
      zie: "Drie leidraden naast elkaar, elk met een eigen gerichtheid: een onderzoekscyclus (ontwerpen, uitvoeren en observeren, documenteren, delen), GRROW om vanuit inspiratie een uitdaging te bepalen, en drie basisreflectievragen voor een korte analyse. Een bijlage typeert wanneer je welke leidraad gebruikt, met supervisie en het ui-model als derde weg.",
      context: "Een compacte werktekst; de begrippen worden uitgelegd in de andere mandjes. De figuur van het GRROW-model (naar Clement, 2015) is hertekend.",
      vraag: "Geef je studenten één reflectiemodel, of meerdere, en weten ze wanneer welk model past?"
    },
    bron: ["2020-2021/Duel/mandjes/mandje_leidraad onderzoek en reflectie_21-01-06.docx"],
    download: "bronteksten/mandje-leidraden-onderzoek-en-reflectie-2021-01.pdf",
    datum: "januari 2021",
    status: "gepubliceerd"
  },
  {
    titel: "Procesgerichte micro-analyses met drie basisreflectievragen",
    groep: "inhoud", type: "Leidraad",
    principes: [9, 2, 3],
    beschrijving: "Wat gebeurde er, waaraan lag het, wat kan anders? Met voorbeelden van korte analyses van een klassituatie.",
    duiding: {
      ontstaan: "Gebruikt in september 2022 in de module reflectief en onderzoeksmatig leren, als voorbeeld bij de leidraad met de drie basisreflectievragen.",
      zie: "Drie korte analyses in drie kolommen: een moeizaam onthaal, een conflict tussen twee kleuters, een voorleesmoment. Telkens eerst een inschatting van welbevinden en betrokkenheid, dan een zoektocht naar oorzaken, ook bij zichzelf (\"Ik ging te snel over tot het spelen van scheidsrechter\"), en dan concrete voornemens.",
      context: "De namen van de kinderen zijn vervangen. De letters L, M en H staan voor een laag, matig en hoog niveau van welbevinden of betrokkenheid.",
      vraag: "Hoe kort mag een reflectie zijn om toch tot een ander handelen te leiden?"
    },
    bron: ["2022-2023/Duel/O-fase/sessies/reflectief en onderzoeksmatig leren/procesgerichte micro-analyses met 3 BRV_voorbeelden.docx"],
    download: "bronteksten/procesgerichte-micro-analyses-drie-basisreflectievragen-2022-09.pdf",
    datum: "september 2022",
    status: "gepubliceerd"
  },

  // ---------- Begeleiden en beoordelen ----------
  {
    titel: "Syntheseformulieren voor de oriënteringsfase en de uitdagingenfase",
    groep: "begeleiden", type: "Evaluatie en feedback",
    principes: [8, 1],
    beschrijving: "Hoe een kwalitatief oordeel over het leren van een student omgezet werd in een score: \"van kwaliteit naar kwantiteit\". Eén formulier voor de eindbeoordeling van een oriënteringsmodule, één voor de eindbeoordeling van een uitdaging.",
    duiding: {
      ontstaan: "Een eerste syntheseformulier ontstond in het voorjaar van 2021 en werd daarna telkens herwerkt, na feedback uit het team. De versie voor de uitdagingenfase dateert van februari 2022, die voor de vernieuwde oriënteringsfase van augustus 2022. De opleiding moest een cijfer op 20 geven; de formulieren proberen dat cijfer trouw te laten blijven aan een holistische kijk op competentie.",
      zie: "Waarop beoordeel je, en hoe wordt een rijk oordeel toch een cijfer? De formulieren geven daar een helder antwoord op. Ze onderscheiden competenties (weten, kunnen, doen) en leerkwaliteiten (de houding waarmee iemand leert), en maken voor elke fase zichtbaar wat \"goed genoeg\" is: in de oriëntering, en op de drie niveaus van de uitdagingen, van \"aanzetten tot\" over \"onderweg zijn\" naar \"verdiepen en integreren\". Elke score is concreet omschreven. En wie op de competenties of op de leerkwaliteiten de helft niet haalt, slaagt niet: houding is geen extraatje.",
      context: "De puntenregels, studiepunten en uitdagingsniveaus horen bij het programma van Duel en bij de examenregeling van de hogeschool.",
      vraag: "Waar verliest jouw beoordeling informatie als je een rijk oordeel moet samenvatten in één cijfer, en hoe vang je dat op?"
    },
    bron: [
      "2022-2023/Duel/O-fase/evaluatie/syntheseformulier_oriëntering_22-08-29.docx",
      "2021-2022/Duel/sem 2/evaluatie/syntheseformulier uitdagingen/synthese_uitdagingen_herwerking_22-02-17_na FB-2.docx"
    ],
    downloads: [
      { label: "Oriënteringsfase", href: "bronteksten/syntheseformulier-eindbeoordeling-orienteringsmodule-2022-08.pdf", toelichting: "Eindbeoordeling van een oriënteringsmodule (augustus 2022)" },
      { label: "Uitdagingenfase", href: "bronteksten/syntheseformulier-eindbeoordeling-uitdaging-2022-02.pdf", toelichting: "Eindbeoordeling van een uitdaging (februari 2022)" }
    ],
    datum: "februari en augustus 2022",
    status: "gepubliceerd"
  },
  {
    titel: "Single point rubric: begeleidings- en evaluatiedocument bij een uitdaging",
    groep: "begeleiden", type: "Evaluatie en feedback",
    principes: [8, 6],
    beschrijving: "Een rubric die alleen het verwachte niveau beschrijft en ruimte laat voor wat de student meer of anders laat zien. Student, mentor en praktijkbegeleider vullen hetzelfde document in. Hier het lege sjabloon bij de uitdaging ruimte voor initiatief.",
    duiding: {
      ontstaan: "Gemaakt in januari 2021, bij de start van de eerste uitdagingenfase. Voor elke uitdaging bestond hetzelfde sjabloon, met eigen criteria.",
      zie: "De student zit \"aan het stuur van zijn leerproces\"; begeleider, mentor en medestudenten zijn \"navigatietools\". Per criterium noteert de student zelf ontwikkelpunten, doelen en wat al gevorderd is. Daarnaast vakken voor de feedback van de mentor, de praktijkbegeleider en een medestudent, en een vaste plaats om tussentijds en op het einde de balans op te maken. Het document legt ook uit waarom: 360°-feedback, en evalueren als een manier van leren.",
      context: "Het sjabloon verwijst naar de doelen uit LOOQIN, naar het digitale portfolio en naar de studiepunten van de uitdagingsniveaus. Een ingevuld exemplaar van een student is niet gepubliceerd.",
      vraag: "Wie schrijft in jouw beoordelingsinstrumenten, en wie mag het eerst iets over het leren zeggen: de student of de begeleider?"
    },
    bron: ["2020-2021/Duel/2_semester 2/uitdagingen_instructiefiches/uitdaging_initiatief/Rubric ruimte voor initiatief_21-01-20.docx"],
    download: "bronteksten/single-point-rubric-ruimte-voor-initiatief-2021-01.pdf",
    datum: "20 januari 2021",
    status: "gepubliceerd"
  },
  {
    titel: "Feedback geven: praktische richtlijnen",
    groep: "begeleiden", type: ["Leidraad", "Evaluatie en feedback"],
    principes: [8, 6],
    beschrijving: "Richtlijnen voor begeleiders: hoe geef je feedback die het leren van de student ondersteunt?",
    duiding: {
      ontstaan: "Geschreven in september 2022, bij de start van de vernieuwde oriënteringsfase, en bijgesteld na feedback uit het team.",
      zie: "Waar en hoe de begeleider en de mentor feedback noteren, in de oriënterings- en in de uitdagingenfase. Na de feedback van het team een duidelijke keuze: zo eenvoudig mogelijk, de grote lijnen op papier en de klemtoon op het gesprek. In bijlage een voorbeeld van een inventaris waarin student en begeleider met data en nummers naar elkaars teksten verwijzen.",
      context: "De verwijzingen naar het groeidocument, het begeleidings- en beoordelingsformulier en het syntheseformulier horen bij de instrumenten van Duel. Een deel met open vragen en reacties van collega's is weggelaten.",
      vraag: "Hoeveel administratie vraagt jouw manier van feedback geven, en weegt die op tegen het gesprek?"
    },
    bron: ["2022-2023/Duel/begeleiding/werkwijze/feedback geven/Feedback geven_praktische richtlijnen_22-09-15_na FB.docx"],
    download: "bronteksten/feedback-geven-praktische-richtlijnen-2022-09.pdf",
    datum: "15 september 2022",
    status: "gepubliceerd"
  },
  {
    titel: "360°-evaluatie: werkdocument",
    groep: "begeleiden", type: "Visietekst",
    principes: [8],
    beschrijving: "Concrete initiatieven om te evolueren naar een evaluatie waarin alle relevante informatie samenhangend en continu zichtbaar wordt.",
    duiding: {
      ontstaan: "Geschreven in juni 2020 door het praktijkteam, dat de stages van de reguliere opleiding organiseerde. Het is de concretisering van het speerpunt over 360 graden begeleiding en evaluatie uit de nota \"Dromen over nieuwe keuzes\" van dezelfde datum, en werd een inspiratiebron voor Duel.",
      zie: "Evaluatie verruimen in vijf richtingen: waartoe, wat, hoe of waar, wanneer en wie. Evaluatie als een manier van leren, met eigenaarschap bij de student. In de bijlagen een beslissingsschema voor de begeleider, een rolverdeling tussen student, medestudenten, mentor en begeleiders, en een begeleidingsstijl die tegemoetkomt aan de behoefte aan autonomie, verbondenheid en competentie. Ook \"gekaderd maatwerk\" duikt hier al op.",
      context: "Geschreven voor de stages van de reguliere opleiding, met haar stageconcepten, poolwerking en beoordelingsformulieren.",
      vraag: "Wie heeft in jouw opleiding een stem in de evaluatie van een student, en wie zou er een stem moeten krijgen?"
    },
    bron: ["2022-2023/Duel/Duel-BakoA/360 graden evaluatie_werkdocument_2020-06-19b.docx"],
    download: "bronteksten/360-graden-evaluatie-werkdocument-2020-06.pdf",
    datum: "19 juni 2020",
    status: "gepubliceerd"
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
    groep: "aanloop", type: ["Leestekst", "Presentatie"],
    principes: [5, 6, 2],
    beschrijving: "Leestekst en twee lessen die samen horen. Waartoe voeden we op? Met Biesta: het verlangen wekken om op een volwassen manier in de wereld te zijn. Waaruit bestaat het pedagogisch werk?",
    duiding: {
      ontstaan: "Het hoofdstuk komt uit de cursus Opvoedingskader 1 van de reguliere opleiding (2019-2020). In Duel kreeg het een plaats in de uitdaging groeibevorderende relaties: de instructiefiche noemt het als verplichte literatuur en somt bij de inhouden \"waartoe voeden we op\" en \"waaruit bestaat het pedagogisch werk\" op; de opzet van de leercyclus vraagt bij de analyse van een interactie met een kind naar haar pedagogische waarde. De twee lessen werden in april 2023 gegeven.",
      zie: "Biesta's drie functies van onderwijs en de vraag naar het waartoe van opvoeden. In de uitdaging groeibevorderende relaties wordt die vraag concreet: wat betekent een gewone interactie met een kleuter, gezien vanuit wat opvoeden wil? Hetzelfde denken keert terug in de ontwerpprincipes: ook de student mag als persoon verschijnen.",
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
