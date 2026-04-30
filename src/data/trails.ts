import type { SteamGuideSpotlight, TrailGame, TrailMapNode } from "../types";

const chest = (id: string, x: number, y: number, label: string, loot: string): TrailMapNode => ({
  id,
  x,
  y,
  kind: "chest",
  label,
  loot
});

const quest = (id: string, x: number, y: number, label: string): TrailMapNode => ({
  id,
  x,
  y,
  kind: "quest",
  label
});

const boss = (id: string, x: number, y: number, label: string): TrailMapNode => ({
  id,
  x,
  y,
  kind: "boss",
  label
});

const camp = (id: string, x: number, y: number, label: string): TrailMapNode => ({
  id,
  x,
  y,
  kind: "camp",
  label
});

export const steamGuideSpotlight: SteamGuideSpotlight = {
  title: "100% Достижений + Полное прохождение",
  gameSlug: "trails-from-zero",
  url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3610446298",
  steamId: "3610446298",
  sourceLabel: "Steam Community guide for Trails from Zero",
  status:
    "Steam помечает страницу как удаленную или несовместимую, но публичная страница с материалами гайда продолжает открываться.",
  highlights: [
    "маршрут на 100% достижений",
    "чеклист сундуков, рыбы и боевого журнала",
    "порядок скрытых квестов и дополнительных DP",
    "прохождение по дням Crossbell"
  ],
  routeCards: [
    {
      title: "Пролог и Geofront A",
      summary:
        "Сводка гайда вынесена в блок Zero: первые сундуки, анализ врагов, выбор ответа для DP и стартовая закупка по районам Crossbell."
    },
    {
      title: "Город как чеклист",
      summary:
        "Маршрут подсказывает, какие районы проверять до продвижения сюжета: магазины, рецепты, скрытые проходы, рыбалка и NPC-диалоги."
    },
    {
      title: "Финиш 100%",
      summary:
        "В базе Zero отдельным маркером отмечены достижения, где чаще всего теряют прогресс: все сундуки, все квесты, Combat Notebook и максимальный ранг."
    }
  ]
};

export const trailsGames: TrailGame[] = [
  {
    slug: "trails-in-the-sky-fc",
    order: 1,
    appId: 251150,
    remakeAppId: 3375780,
    title: "The Legend of Heroes: Trails in the Sky FC",
    shortTitle: "Sky FC",
    arc: "liberl",
    arcTitle: "Liberl Arc",
    place: "Королевство Либерл",
    releaseWindow: "2004 JP / 2014 Steam",
    color: "#2dd4bf",
    accent: "#f7c948",
    summary:
      "Первый шаг по Земурии: Estelle и Joshua становятся младшими брасерами, а локальные поручения постепенно раскрывают политический заговор в Либерле.",
    themes: ["bracers", "orbal revolution", "coming-of-age", "airships"],
    characters: [
      {
        name: "Estelle Bright",
        role: "главная героиня",
        faction: "Bracer Guild",
        note: "энергичная брасерка с посохом, через которую игрок знакомится с миром",
        tags: ["staff", "bracer", "heart"]
      },
      {
        name: "Joshua Bright",
        role: "партнер Estelle",
        faction: "Bracer Guild",
        note: "спокойный тактик с двойными клинками и личной тайной",
        tags: ["dual blades", "tactics", "mystery"]
      },
      {
        name: "Scherazard Harvey",
        role: "наставница",
        faction: "Bracer Guild",
        note: "старшая брасерка из Ролента, помогает пройти первые задания",
        tags: ["whip", "mentor", "wind"]
      },
      {
        name: "Olivier Lenheim",
        role: "странствующий бард",
        faction: "wandering noble",
        note: "харизматичный стрелок, который кажется шутом ровно до момента, когда становится важным",
        tags: ["arts", "music", "comedy"]
      },
      {
        name: "Kloe Rinz",
        role: "ученица академии",
        faction: "Jenis Royal Academy",
        note: "добрая целительница, связанная с будущим Либерла",
        tags: ["healer", "academy", "water"]
      }
    ],
    maps: [
      {
        name: "Rolent roads",
        region: "Rolent",
        focus: "стартовые поручения, башня Esmelas и Malga Mine",
        chestCount: 6,
        completionNote: "Проверяй развилки до сдачи основных заданий: ранние кварцы легко пропустить.",
        route: ["Rolent", "Milk Main Road", "Esmelas Tower", "Malga Trail", "Malga Mine"],
        nodes: [
          camp("fc-r-camp", 13, 47, "Rolent Guild"),
          chest("fc-r-1", 26, 34, "Milk road chest", "Tear Balm"),
          quest("fc-r-q", 39, 52, "farm errand"),
          chest("fc-r-2", 48, 23, "tower bend", "EP Charge"),
          chest("fc-r-3", 62, 41, "mine side room", "Septium"),
          boss("fc-r-b", 77, 30, "first monster contract")
        ]
      },
      {
        name: "Bose trade route",
        region: "Bose",
        focus: "дороги, рынок, Ravennue и Haken Gate",
        chestCount: 8,
        completionNote: "Перед сюжетным перелетом закрой боковые дороги и NPC-диалоги в торговом городе.",
        route: ["Bose Market", "East Bose Highway", "Ravennue Trail", "Haken Gate"],
        nodes: [
          camp("fc-b-camp", 18, 42, "Bose Market"),
          chest("fc-b-1", 29, 29, "east highway", "Leather Vest"),
          chest("fc-b-2", 43, 52, "forest nook", "Reviving Balm"),
          quest("fc-b-q", 58, 25, "Ravennue request"),
          chest("fc-b-3", 68, 44, "gate approach", "Action quartz"),
          boss("fc-b-b", 82, 32, "chapter boss")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Prologue: Rolent",
        pace: "медленный старт с обучением",
        goals: ["собрать стартовые рецепты", "обойти башню Esmelas", "закрыть контракты гильдии"],
        missables: ["NPC-диалоги после каждого сюжетного события", "сундуки на дороге к шахте"],
        bossPrep: "Держи Tear и анти-яд, Estelle ставь ближе к центру для лечения и CP."
      },
      {
        chapter: "Chapter 1: Bose",
        pace: "больше дорог и первый крупный город",
        goals: ["осмотреть рынок", "закрыть Ravennue", "проверить Haken Gate"],
        missables: ["газеты Liberl News", "скрытые реплики в магазинах"],
        bossPrep: "Обнови оружие Joshua и собери кварцы Action/EP для Olivier."
      },
      {
        chapter: "Finale: Grancel",
        pace: "длинная сюжетная развязка",
        goals: ["закончить брасерские задания", "подготовить экипировку", "сохраниться перед дворцом"],
        missables: ["последние книги", "дополнительные диалоги союзников"],
        bossPrep: "Собери группу под Arts-защиту и держи S-Craft для финальных фаз."
      }
    ]
  },
  {
    slug: "trails-in-the-sky-sc",
    order: 2,
    appId: 251290,
    title: "The Legend of Heroes: Trails in the Sky SC",
    shortTitle: "Sky SC",
    arc: "liberl",
    arcTitle: "Liberl Arc",
    place: "Либерл после переворота",
    releaseWindow: "2006 JP / 2015 Steam",
    color: "#fb7185",
    accent: "#60a5fa",
    summary:
      "Продолжение превращает личный поиск Joshua в большое путешествие против Ouroboros, возвращая игрока во все регионы Либерла с новой плотностью секретов.",
    themes: ["Ouroboros", "Enforcers", "second journey", "liberl recovery"],
    characters: [
      {
        name: "Estelle Bright",
        role: "ведущая брасерка",
        faction: "Bracer Guild",
        note: "берет историю в свои руки и становится эмоциональным центром арки",
        tags: ["resolve", "staff", "leader"]
      },
      {
        name: "Joshua Bright",
        role: "исчезнувший партнер",
        faction: "unknown",
        note: "его прошлое становится главным двигателем путешествия",
        tags: ["shadow", "blades", "past"]
      },
      {
        name: "Kevin Graham",
        role: "странствующий священник",
        faction: "Septian Church",
        note: "кажется легкомысленным помощником, но внимательно читает ситуацию",
        tags: ["crossbow", "church", "support"]
      },
      {
        name: "Renne",
        role: "Enforcer",
        faction: "Ouroboros",
        note: "маленькая гений с Pater-Mater и тяжелым прошлым",
        tags: ["pater-mater", "genius", "enforcer"]
      },
      {
        name: "Loewe",
        role: "Blade Lord",
        faction: "Ouroboros",
        note: "один из самых опасных мечников серии и личная тень Joshua",
        tags: ["sword", "rival", "legend"]
      }
    ],
    maps: [
      {
        name: "Liberl revisited",
        region: "All Liberl",
        focus: "возврат в знакомые зоны с новыми монстрами и сундуками",
        chestCount: 9,
        completionNote: "После каждого крупного события обновляй маршруты: SC любит менять доступность дорог.",
        route: ["Rolent", "Bose", "Ruan", "Zeiss", "Grancel"],
        nodes: [
          camp("sc-l-camp", 11, 38, "Rolent return"),
          chest("sc-l-1", 24, 26, "old road", "EP Charge II"),
          chest("sc-l-2", 39, 53, "coastal fork", "Shield quartz"),
          quest("sc-l-q", 52, 37, "regional anomaly"),
          chest("sc-l-3", 67, 23, "factory corner", "Septium vein"),
          boss("sc-l-b", 83, 45, "Ouroboros shadow")
        ]
      },
      {
        name: "Glorious airship",
        region: "Finale",
        focus: "финальный лабиринт с партиями и разделенными маршрутами",
        chestCount: 7,
        completionNote: "Сохрани отдельный файл перед сменой партий и помечай, кто забрал ключевые кварцы.",
        route: ["entry deck", "engine blocks", "residential wing", "central lift"],
        nodes: [
          camp("sc-g-camp", 15, 49, "landing point"),
          chest("sc-g-1", 31, 39, "engine cache", "Celestial Balm"),
          chest("sc-g-2", 48, 28, "crew hall", "Attack quartz"),
          chest("sc-g-3", 59, 54, "sealed room", "Zeram Powder"),
          quest("sc-g-q", 71, 35, "party split"),
          boss("sc-g-b", 86, 21, "final sequence")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Prologue: training",
        pace: "жестче, чем FC",
        goals: ["освоить новые Orbment slots", "держать анализ врагов", "экономить сильные предметы"],
        missables: ["ранние записи Combat Notebook", "диалоги учебного лагеря"],
        bossPrep: "Сделай Estelle универсальной: лечение, CP и один надежный атакующий арт."
      },
      {
        chapter: "Regional chapters",
        pace: "возврат по городам",
        goals: ["проверять старые маршруты", "читать Liberl News", "закрывать sidequests до отъезда"],
        missables: ["книги Gambler Jack", "часть скрытых BP-условий"],
        bossPrep: "Держи анти-статусы и запас EP Charge II для длинных подземелий."
      },
      {
        chapter: "Finale",
        pace: "много боссов подряд",
        goals: ["распределить кварцы по партиям", "купить лучшие аксессуары", "закрыть сундуки финального данжа"],
        missables: ["сундуки на ответвлениях", "записи уникальных врагов"],
        bossPrep: "Каждой партии дай лечение, защиту от Seal/Confuse и хотя бы один S-Craft для добивания."
      }
    ]
  },
  {
    slug: "trails-in-the-sky-3rd",
    order: 3,
    appId: 436670,
    title: "The Legend of Heroes: Trails in the Sky the 3rd",
    shortTitle: "Sky 3rd",
    arc: "liberl",
    arcTitle: "Liberl Arc",
    place: "Phantasma",
    releaseWindow: "2007 JP / 2017 Steam",
    color: "#a78bfa",
    accent: "#f97316",
    summary:
      "Эпилог Liberl Arc превращается в камерную мистерию Kevin Graham: Phantasma собирает союзников, испытания и двери памяти, которые связывают будущие арки.",
    themes: ["Septian Church", "memory doors", "phantasma", "epilogue"],
    characters: [
      {
        name: "Kevin Graham",
        role: "главный герой",
        faction: "Septian Church",
        note: "Dominion с веселой маской и очень тяжелым внутренним конфликтом",
        tags: ["stigma", "crossbow", "church"]
      },
      {
        name: "Ries Argent",
        role: "напарница Kevin",
        faction: "Septian Church",
        note: "сдержанная сестра церкви, которая знает Kevin лучше остальных",
        tags: ["templar", "halberd", "food"]
      },
      {
        name: "Renne",
        role: "гость Phantasma",
        faction: "Ouroboros",
        note: "ее дверь памяти остается одной из самых важных сцен серии",
        tags: ["door", "trauma", "Pater-Mater"]
      },
      {
        name: "Anelace Elfead",
        role: "брасерка",
        faction: "Bracer Guild",
        note: "быстрый меч и мягкая энергия, отличный темп для боев",
        tags: ["sword", "cute", "speed"]
      },
      {
        name: "Richard",
        role: "мечник",
        faction: "R&A Research",
        note: "возвращается как сильный технический персонаж после событий FC",
        tags: ["iaijutsu", "redemption", "burst"]
      }
    ],
    maps: [
      {
        name: "Hermit's Garden",
        region: "Phantasma hub",
        focus: "узел партий, дверей памяти и подготовки",
        chestCount: 5,
        completionNote: "Открывай двери по мере требований и не забывай менять состав под испытания.",
        route: ["Garden", "Moon Door", "Star Door", "Sun Door"],
        nodes: [
          camp("3rd-h-camp", 50, 46, "Garden"),
          quest("3rd-h-q1", 28, 31, "Moon Door"),
          quest("3rd-h-q2", 66, 26, "Star Door"),
          chest("3rd-h-1", 38, 58, "supply mirror", "EP Charge III"),
          chest("3rd-h-2", 72, 53, "trial corner", "Proxy Puppet"),
          boss("3rd-h-b", 84, 36, "door trial")
        ]
      },
      {
        name: "Abyss routes",
        region: "Late Phantasma",
        focus: "боевые испытания, сильные враги и финальная подготовка",
        chestCount: 7,
        completionNote: "Помечай, какие двери закрыты по уровню или составу, чтобы не пересобирать маршрут.",
        route: ["Abyss gate", "crimson path", "glass bridge", "last seal"],
        nodes: [
          camp("3rd-a-camp", 18, 48, "Abyss gate"),
          chest("3rd-a-1", 31, 35, "red alcove", "Grahl Locket"),
          chest("3rd-a-2", 45, 53, "lower bridge", "Action 5"),
          chest("3rd-a-3", 63, 28, "mirror cache", "Zeram Capsule"),
          quest("3rd-a-q", 72, 44, "party lock"),
          boss("3rd-a-b", 86, 31, "final guardian")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Early planes",
        pace: "хаб плюс короткие данжи",
        goals: ["собрать стартовый состав", "открывать двери памяти", "держать уровни равномерными"],
        missables: ["двери с условиями", "уникальные сундуки-испытания"],
        bossPrep: "Kevin лучше держать с лечением и Grail Sphere, Ries закрывает переднюю линию."
      },
      {
        chapter: "Memory doors",
        pace: "сюжет через отдельные сцены",
        goals: ["проверять новые двери после каждого босса", "читать требования к персонажам"],
        missables: ["Sun Door мини-игры", "Star Door сюжетные связки"],
        bossPrep: "Сохраняй отдельные файлы перед дверями: некоторые испытания фиксируют состав."
      },
      {
        chapter: "Final planes",
        pace: "нарастание боев",
        goals: ["прокачать несколько партий", "распределить топ-кварцы", "закрыть Abyss"],
        missables: ["сильные враги для notebook", "последние сундуки на развилках"],
        bossPrep: "Каждой группе нужен healer, Clock Down/Speed support и защита от Deathblow."
      }
    ]
  },
  {
    slug: "trails-from-zero",
    order: 4,
    appId: 1668510,
    title: "The Legend of Heroes: Trails from Zero",
    shortTitle: "Zero",
    arc: "crossbell",
    arcTitle: "Crossbell Arc",
    place: "Город-государство Crossbell",
    releaseWindow: "2010 JP / 2022 Steam",
    color: "#38bdf8",
    accent: "#f43f5e",
    summary:
      "Special Support Section пытается заслужить доверие города, где полиция, мафия, корпорации и великие державы тянут Crossbell в разные стороны.",
    themes: ["SSS", "detective work", "city routes", "political pressure"],
    characters: [
      {
        name: "Lloyd Bannings",
        role: "детектив",
        faction: "Crossbell Police Department",
        note: "лидер SSS, превращает упрямство в метод расследования",
        tags: ["tonfa", "detective", "barrier"]
      },
      {
        name: "Elie MacDowell",
        role: "дипломат",
        faction: "SSS",
        note: "политический слух команды и сильная поддержка в бою",
        tags: ["gun", "support", "politics"]
      },
      {
        name: "Tio Plato",
        role: "аналитик",
        faction: "Epstein Foundation",
        note: "орбальный сенсор и лучший друг всех, кто любит arts-урон",
        tags: ["orbal staff", "sensor", "arts"]
      },
      {
        name: "Randy Orlando",
        role: "ветеран",
        faction: "SSS",
        note: "тяжелая алебарда, боевой опыт и громкий смех до опасно серьезных сцен",
        tags: ["halberd", "break", "ex-jaeger"]
      },
      {
        name: "KeA",
        role: "ключевой ребенок",
        faction: "SSS family",
        note: "эмоциональный центр Crossbell Arc",
        tags: ["mystery", "family", "heart"]
      },
      {
        name: "Wazy Hemisphere",
        role: "лидер Testaments",
        faction: "Downtown District",
        note: "играет с правилами Crossbell и никогда не показывает все карты",
        tags: ["martial arts", "downtown", "secret"]
      }
    ],
    maps: [
      {
        name: "Geofront A",
        region: "Crossbell underground",
        focus: "первый данж, боевой журнал и стартовые сундуки",
        chestCount: 8,
        completionNote:
          "Этот маршрут связан со Steam-гайдом: он вынесен как проверочный чеклист, а полный текст открыт по ссылке.",
        route: ["CPD entrance", "Geofront A1", "Geofront A2", "charging station", "rescue point"],
        nodes: [
          camp("zero-g-camp", 15, 47, "Geofront entry"),
          chest("zero-g-1", 27, 34, "lower pipe", "Tear Balm"),
          chest("zero-g-2", 39, 55, "service room", "Smoke Grenade"),
          chest("zero-g-3", 52, 28, "upper walkway", "Septium"),
          chest("zero-g-4", 63, 47, "side chamber", "Fighter quartz"),
          quest("zero-g-q", 72, 35, "child rescue"),
          boss("zero-g-b", 84, 46, "protect objective")
        ]
      },
      {
        name: "Crossbell city loop",
        region: "Crossbell",
        focus: "скрытые рецепты, магазины, NPC и городские сундуки",
        chestCount: 10,
        completionNote: "Делай круг по районам до сдачи сюжетных задач: город постоянно обновляет реплики и награды.",
        route: ["Central Square", "West Street", "Entertainment District", "East Street", "Harbor District"],
        nodes: [
          camp("zero-c-camp", 18, 39, "SSS building"),
          quest("zero-c-q1", 31, 24, "Bakery Morge"),
          chest("zero-c-1", 43, 51, "Villa-Resen passage", "Eagle Eye"),
          quest("zero-c-q2", 54, 30, "Arc-en-Ciel"),
          chest("zero-c-2", 66, 52, "hotel alley", "Flower Pumps"),
          quest("zero-c-q3", 78, 35, "IBC route")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Prologue: Special Support Section",
        pace: "город плюс первый Geofront",
        goals: ["просканировать всех врагов", "открыть стартовые сундуки", "выбрать DP-ответ в спасательной сцене"],
        missables: ["городские рецепты", "первые выпуски Crossbell Times", "скрытые проходы с сундуками"],
        bossPrep: "Перед защитной сценой отдохни у зарядной станции и раздай Lloyd/Randy прочные позиции."
      },
      {
        chapter: "Chapter 1: city cases",
        pace: "детективная рутина становится сетью",
        goals: ["обходить все районы", "вести Combat Notebook", "закрывать скрытые квесты до сюжетного маркера"],
        missables: ["NPC-цепочки", "книги Back Alley Doctor", "рыболовные точки"],
        bossPrep: "Tio держит анализ и arts, Elie страхует лечением и CP recovery."
      },
      {
        chapter: "Finale: truth under Crossbell",
        pace: "длинный финальный рывок",
        goals: ["создать сильное оружие", "добить все квесты", "сверить сундуки перед финалом"],
        missables: ["поздние записи монстров", "условия ранга Detective"],
        bossPrep: "Подготовь защиту от статусов, сильные S-Craft и отдельный сейв до последней зоны."
      }
    ]
  },
  {
    slug: "trails-to-azure",
    order: 5,
    appId: 1668520,
    title: "The Legend of Heroes: Trails to Azure",
    shortTitle: "Azure",
    arc: "crossbell",
    arcTitle: "Crossbell Arc",
    place: "Crossbell на грани независимости",
    releaseWindow: "2011 JP / 2023 Steam",
    color: "#0ea5e9",
    accent: "#facc15",
    summary:
      "Crossbell Arc взрывается масштабом: политика, cult fallout и великие державы сталкиваются, а SSS приходится защищать город от невозможного выбора.",
    themes: ["independence", "SSS expanded", "sept-terrion", "city under siege"],
    characters: [
      {
        name: "Lloyd Bannings",
        role: "лидер SSS",
        faction: "Crossbell Police Department",
        note: "ставит команду выше страха и ищет путь там, где его будто нет",
        tags: ["tonfa", "detective", "resolve"]
      },
      {
        name: "Noel Seeker",
        role: "офицер CGF",
        faction: "Crossbell Guardian Force",
        note: "боевой водитель и надежный стрелок в расширенном составе",
        tags: ["rifle", "vehicle", "discipline"]
      },
      {
        name: "Rixia Mao",
        role: "танцовщица Arc-en-Ciel",
        faction: "Arc-en-Ciel",
        note: "ее сцены связывают сцену, преступный мир и личную честь",
        tags: ["dance", "assassin", "moon"]
      },
      {
        name: "Arios MacLaine",
        role: "Divine Blade",
        faction: "Bracer Guild",
        note: "легенда Crossbell, чьи решения давят на весь финал",
        tags: ["sword", "bracer", "wind"]
      },
      {
        name: "KeA",
        role: "сердце арки",
        faction: "SSS family",
        note: "ее природа меняет масштаб истории",
        tags: ["key", "family", "miracle"]
      }
    ],
    maps: [
      {
        name: "Crossbell perimeter",
        region: "Crossbell roads",
        focus: "новые выезды, шоссе, сторожевые посты и рыбалка",
        chestCount: 9,
        completionNote: "После крупных политических событий перепроверяй дороги: доступность меняется чаще, чем в Zero.",
        route: ["West Crossbell Highway", "Ursula Road", "East Crossbell Highway", "Tangram Gate"],
        nodes: [
          camp("azure-p-camp", 13, 41, "city gate"),
          chest("azure-p-1", 28, 31, "west fork", "EP Cut"),
          chest("azure-p-2", 41, 56, "Ursula bank", "Teara Balm"),
          quest("azure-p-q", 55, 27, "CGF checkpoint"),
          chest("azure-p-3", 68, 45, "east bend", "Evade quartz"),
          boss("azure-p-b", 84, 35, "road encounter")
        ]
      },
      {
        name: "Orchis Tower",
        region: "Crossbell center",
        focus: "сюжетный небоскреб, лифты, эвакуация и поздние бои",
        chestCount: 6,
        completionNote: "Проверяй этажи до смены сцены: башня часто закрывает короткие окна доступа.",
        route: ["lobby", "conference floors", "service lift", "upper deck"],
        nodes: [
          camp("azure-o-camp", 20, 48, "tower lobby"),
          quest("azure-o-q", 34, 35, "conference wing"),
          chest("azure-o-1", 48, 53, "service hall", "EP Charge III"),
          chest("azure-o-2", 62, 31, "archive room", "Action quartz"),
          boss("azure-o-b1", 73, 45, "security lock"),
          boss("azure-o-b2", 86, 25, "tower climax")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Early Azure",
        pace: "Zero, но плотнее и быстрее",
        goals: ["собрать расширенную SSS", "обновить Combat Notebook", "сверить новые дороги"],
        missables: ["скрытые квесты полиции", "рыбные точки", "газеты и книги"],
        bossPrep: "Noel хороша для контроля линии, Tio держит анализ, Elie прикрывает CP/лечением."
      },
      {
        chapter: "Political summit",
        pace: "много событий в городе",
        goals: ["обходить районы после каждой сцены", "закрыть временные поручения", "сохранить отдельные сейвы"],
        missables: ["одноразовые NPC-диалоги", "сундуки в временных помещениях"],
        bossPrep: "Готовь защиту от Delay и статусных атак, держи Burst для переломных фаз."
      },
      {
        chapter: "Finale",
        pace: "самый большой финал Crossbell",
        goals: ["добить побочные цепочки", "распределить топ-кварцы", "закрыть финальный лабиринт"],
        missables: ["последние враги notebook", "финальные сундуки", "условия детективного ранга"],
        bossPrep: "Партии нужны анти-статусы, сильные Arts и сохраненные S-Craft на фазовые переходы."
      }
    ]
  },
  {
    slug: "trails-of-cold-steel",
    order: 6,
    appId: 538680,
    title: "The Legend of Heroes: Trails of Cold Steel",
    shortTitle: "Cold Steel",
    arc: "erebonia",
    arcTitle: "Erebonia Arc",
    place: "Военная академия Thors",
    releaseWindow: "2013 JP / 2017 Steam",
    color: "#ef4444",
    accent: "#22c55e",
    summary:
      "Новая Class VII учится жить вместе в империи, где социальные классы, железные дороги и милитаризм готовят страну к гражданскому расколу.",
    themes: ["Class VII", "school life", "Erebonian politics", "field studies"],
    characters: [
      {
        name: "Rean Schwarzer",
        role: "студент Class VII",
        faction: "Thors Military Academy",
        note: "мечник школы Eight Leaves и связующее звено группы",
        tags: ["tachi", "ogre power", "leader"]
      },
      {
        name: "Alisa Reinford",
        role: "наследница Reinford",
        faction: "Class VII",
        note: "стрелок и лицо индустриального конфликта Erebonia",
        tags: ["bow", "crafts", "industry"]
      },
      {
        name: "Laura S. Arseid",
        role: "мечница",
        faction: "Class VII",
        note: "честная сила Arseid school, один из лучших физических дамагеров",
        tags: ["greatsword", "honor", "strength"]
      },
      {
        name: "Machias Regnitz",
        role: "сын чиновника",
        faction: "Class VII",
        note: "социальный конфликт академии в одном упрямом стрелке",
        tags: ["shotgun", "politics", "delay"]
      },
      {
        name: "Emma Millstein",
        role: "староста",
        faction: "Class VII",
        note: "arts-ядро команды и хранительница отдельной тайны",
        tags: ["staff", "witch", "arts"]
      },
      {
        name: "Fie Claussell",
        role: "молчаливая разведчица",
        faction: "Class VII",
        note: "скорость, уклонение и прошлое jaeger",
        tags: ["daggers", "evasion", "jaeger"]
      }
    ],
    maps: [
      {
        name: "Trista and Thors",
        region: "Academy hub",
        focus: "академические дни, bonding, старые школьные здания",
        chestCount: 7,
        completionNote: "Перед каждым free day проверяй кампус, общежитие и Old Schoolhouse этаж.",
        route: ["Dormitory", "Academy", "Student Union", "Old Schoolhouse"],
        nodes: [
          camp("cs1-t-camp", 18, 45, "Class VII dorm"),
          quest("cs1-t-q1", 32, 29, "student request"),
          chest("cs1-t-1", 47, 53, "old schoolhouse 1", "Teara Balm"),
          chest("cs1-t-2", 59, 34, "old schoolhouse 2", "EP Charge"),
          quest("cs1-t-q2", 70, 48, "bonding slot"),
          boss("cs1-t-b", 84, 29, "floor guardian")
        ]
      },
      {
        name: "Field study web",
        region: "Erebonia",
        focus: "региональные выезды Class VII",
        chestCount: 11,
        completionNote: "Каждая field study имеет отдельные окна квестов, книг, рецептов и monster scans.",
        route: ["Celdic", "Bareahard", "Nord", "Roer", "Heimdallr"],
        nodes: [
          camp("cs1-f-camp", 12, 38, "rail stop"),
          chest("cs1-f-1", 26, 25, "Celdic road", "Needle Shoot"),
          quest("cs1-f-q1", 39, 50, "market task"),
          chest("cs1-f-2", 55, 31, "Nord highland", "HP quartz"),
          chest("cs1-f-3", 69, 54, "Roer service path", "EP Cut"),
          boss("cs1-f-b", 84, 35, "field study crisis")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Academy routine",
        pace: "школа, bonding и первый данж",
        goals: ["распределять bonding points", "закрывать student requests", "проверять Old Schoolhouse"],
        missables: ["книги Red Moon Rose", "рецепты в Trista", "сканы боссов этажей"],
        bossPrep: "Rean с Delay, Laura как физический удар, Emma/Elliot для Arts и лечения."
      },
      {
        chapter: "Field studies",
        pace: "каждая глава как мини-поездка",
        goals: ["проверить город прибытия", "закрыть hidden quests", "сканировать региональных врагов"],
        missables: ["одноразовые NPC в поезде", "сундуки на дорогах", "AP-условия"],
        bossPrep: "Обновляй Master Quartz и ставь аксессуары под статус конкретного региона."
      },
      {
        chapter: "Final academy crisis",
        pace: "резкий разворот к имперскому конфликту",
        goals: ["купить финальную экипировку", "закрыть bonding", "сохраниться до точки невозврата"],
        missables: ["последние рецепты и книги", "сканы финальных противников"],
        bossPrep: "Сохрани CP на цепочки S-Craft и держи кастеров вне линии ударов."
      }
    ]
  },
  {
    slug: "trails-of-cold-steel-ii",
    order: 7,
    appId: 748490,
    title: "The Legend of Heroes: Trails of Cold Steel II",
    shortTitle: "Cold Steel II",
    arc: "erebonia",
    arcTitle: "Erebonia Arc",
    place: "Erebonia во время гражданской войны",
    releaseWindow: "2014 JP / 2018 Steam",
    color: "#f97316",
    accent: "#14b8a6",
    summary:
      "Class VII собирается заново после катастрофы, получает мобильную базу и проходит через гражданскую войну, Divine Knights и личные долги.",
    themes: ["civil war", "Courageous", "Divine Knights", "reunion"],
    characters: [
      {
        name: "Rean Schwarzer",
        role: "Ashen Awakener",
        faction: "Class VII",
        note: "учится использовать силу Valimar и не развалиться под ответственностью",
        tags: ["Valimar", "tachi", "awakener"]
      },
      {
        name: "Crow Armbrust",
        role: "rival Awakener",
        faction: "Noble Alliance",
        note: "самый личный конфликт Rean во второй игре",
        tags: ["dual guns", "cards", "rival"]
      },
      {
        name: "Towa Herschel",
        role: "капитан поддержки",
        faction: "Courageous",
        note: "маленький штабной двигатель всей операции",
        tags: ["support", "captain", "heart"]
      },
      {
        name: "Sara Valestein",
        role: "инструктор",
        faction: "Thors",
        note: "бывшая брасерка, которая держит класс в реальности",
        tags: ["whip sword", "mentor", "lightning"]
      },
      {
        name: "Altina Orion",
        role: "агент",
        faction: "Intelligence Division",
        note: "холодная наблюдательница, важная для будущей Class VII",
        tags: ["claiomh solais", "agent", "quiet"]
      }
    ],
    maps: [
      {
        name: "Courageous operations",
        region: "Erebonia air routes",
        focus: "мобильная база, рекрутинг союзников, возвратные зоны",
        chestCount: 10,
        completionNote: "После открытия корабля проверяй новые посадочные точки и NPC на борту.",
        route: ["Ymir", "Courageous", "Twin Dragons Bridge", "Legram", "Bareahard"],
        nodes: [
          camp("cs2-c-camp", 14, 43, "Courageous deck"),
          quest("cs2-c-q1", 27, 28, "recruit ally"),
          chest("cs2-c-1", 41, 54, "Ymir valley", "Tearal Balm"),
          chest("cs2-c-2", 56, 33, "Legram road", "Evade quartz"),
          quest("cs2-c-q2", 68, 49, "trial chest"),
          boss("cs2-c-b", 84, 31, "Divine Knight battle")
        ]
      },
      {
        name: "Infernal Castle",
        region: "Finale",
        focus: "многоэтажный финальный данж и партийные проверки",
        chestCount: 9,
        completionNote: "Перед входом раздай аксессуары по составу: финал любит длинные серии боев.",
        route: ["outer gate", "flame halls", "mirror floors", "throne ascent"],
        nodes: [
          camp("cs2-i-camp", 16, 52, "castle gate"),
          chest("cs2-i-1", 31, 36, "flame hall", "Zeram Powder"),
          chest("cs2-i-2", 45, 55, "mirror room", "Attack quartz"),
          chest("cs2-i-3", 60, 29, "upper path", "Celestial Balm"),
          boss("cs2-i-b1", 72, 42, "guardian"),
          boss("cs2-i-b2", 87, 25, "rival duel")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Reunion route",
        pace: "поиск Class VII",
        goals: ["собирать союзников", "сканировать новых врагов", "держать Valimar upgrades"],
        missables: ["ранние sidequests", "trial chests", "рецепты в Ymir"],
        bossPrep: "Не трать CP перед дуэлями и обновляй quartz под слабости региона."
      },
      {
        chapter: "Courageous phase",
        pace: "свободнее, больше возврата",
        goals: ["рекрутировать NPC", "проверить магазины корабля", "закрыть optional bosses"],
        missables: ["уникальные члены экипажа", "книги и рыбалка", "AP-условия"],
        bossPrep: "Собери две надежные партии: одна под Break/Delay, другая под Arts и лечение."
      },
      {
        chapter: "Finale and divertissement",
        pace: "длинный хвост истории",
        goals: ["закрыть финальный замок", "сохранить clear data", "прочитать эпилоговые сцены"],
        missables: ["последние scans", "сундуки финальных этажей"],
        bossPrep: "Держи аксессуары против Vanish/Faint и не оставляй кастеров без защиты."
      }
    ]
  },
  {
    slug: "trails-of-cold-steel-iii",
    order: 8,
    appId: 991270,
    title: "The Legend of Heroes: Trails of Cold Steel III",
    shortTitle: "Cold Steel III",
    arc: "erebonia",
    arcTitle: "Erebonia Arc",
    place: "Thors Branch Campus",
    releaseWindow: "2017 JP / 2020 Steam",
    color: "#8b5cf6",
    accent: "#34d399",
    summary:
      "Rean становится инструктором новой Class VII, а империя расширяется после Crossbell. Игра связывает старые арки и строит путь к финальной войне.",
    themes: ["new Class VII", "branch campus", "orders", "empire expansion"],
    characters: [
      {
        name: "Rean Schwarzer",
        role: "инструктор",
        faction: "Thors Branch Campus",
        note: "теперь он наставник, но его собственные цепи стали тяжелее",
        tags: ["teacher", "tachi", "Valimar"]
      },
      {
        name: "Juna Crawford",
        role: "студентка",
        faction: "New Class VII",
        note: "голос Crossbell внутри имперской академии",
        tags: ["tonfa guns", "crossbell", "drive"]
      },
      {
        name: "Kurt Vander",
        role: "мечник",
        faction: "New Class VII",
        note: "наследник школы Vander с кризисом предназначения",
        tags: ["dual swords", "noble", "precision"]
      },
      {
        name: "Altina Orion",
        role: "студентка",
        faction: "New Class VII",
        note: "учится быть человеком, а не инструментом разведки",
        tags: ["claiomh solais", "growth", "support"]
      },
      {
        name: "Musse Egret",
        role: "тактик",
        faction: "New Class VII",
        note: "улыбается, пока считает ходы на несколько глав вперед",
        tags: ["arts", "noble", "strategy"]
      },
      {
        name: "Ash Carbide",
        role: "проблемный студент",
        faction: "New Class VII",
        note: "агрессивный фронтлайнер с личной болью",
        tags: ["axe", "attitude", "curse"]
      }
    ],
    maps: [
      {
        name: "Branch campus",
        region: "Leeves",
        focus: "новые классы, training hall, requests и связь с городом",
        chestCount: 6,
        completionNote: "Проверяй Leeves после уроков: рецепты, книги и bonding обновляются малыми порциями.",
        route: ["Dorm", "Campus", "Leeves", "Einhel Keep"],
        nodes: [
          camp("cs3-b-camp", 18, 44, "Branch Campus"),
          quest("cs3-b-q", 33, 29, "student request"),
          chest("cs3-b-1", 47, 52, "Einhel floor", "Tearal Balm"),
          chest("cs3-b-2", 61, 34, "training hall", "Defense quartz"),
          quest("cs3-b-q2", 72, 49, "bonding"),
          boss("cs3-b-b", 85, 28, "keep test")
        ]
      },
      {
        name: "Panzer Soldat routes",
        region: "Empire field exercises",
        focus: "новая структура выездов и mech-проверки",
        chestCount: 12,
        completionNote: "В каждой главе веди два списка: обычные сундуки и trial chests под конкретный состав.",
        route: ["Sutherland", "Crossbell", "Ordis", "Heimdallr"],
        nodes: [
          camp("cs3-p-camp", 15, 39, "train platform"),
          chest("cs3-p-1", 29, 26, "field exercise road", "EP Cut"),
          quest("cs3-p-q", 43, 51, "local request"),
          chest("cs3-p-2", 58, 31, "trial chest", "Brave Seed"),
          chest("cs3-p-3", 70, 53, "fortress side", "Action quartz"),
          boss("cs3-p-b", 85, 36, "Panzer Soldat")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Instructor days",
        pace: "новая школа с плотными системами",
        goals: ["освоить Brave Orders", "прокачать new Class VII", "проверять Einhel Keep"],
        missables: ["bonding events", "books in Leeves", "trial chest составы"],
        bossPrep: "Juna хороша для turn manipulation, Altina держит защиту, Rean закрывает burst damage."
      },
      {
        chapter: "Field exercises",
        pace: "старые города с новым углом",
        goals: ["сканировать врагов", "закрывать requests до отбытия", "обновлять Panzer Soldat parts"],
        missables: ["одноразовые NPC Crossbell/Ordis", "сундуки на обходных маршрутах"],
        bossPrep: "Подбирай Orders под босса: break, defense или casting windows."
      },
      {
        chapter: "Cliffhanger finale",
        pace: "серия больших откровений",
        goals: ["распределить quartz", "закрыть последнюю тренировку", "подготовить clear data"],
        missables: ["финальные scans", "поздние книги"],
        bossPrep: "Не полагайся на один Order: держи запас BP и защиту от instant death."
      }
    ]
  },
  {
    slug: "trails-of-cold-steel-iv",
    order: 9,
    appId: 1198090,
    title: "The Legend of Heroes: Trails of Cold Steel IV",
    shortTitle: "Cold Steel IV",
    arc: "erebonia",
    arcTitle: "Erebonia Arc",
    place: "Erebonia перед Великой Сумеркой",
    releaseWindow: "2018 JP / 2021 Steam",
    color: "#dc2626",
    accent: "#fbbf24",
    summary:
      "Финал Erebonia Arc собирает героев Liberl, Crossbell и Class VII в одну кампанию против проклятия, войны и Divine Knights.",
    themes: ["great twilight", "allied front", "rivalries", "war"],
    characters: [
      {
        name: "Juna Crawford",
        role: "сердце нового класса",
        faction: "New Class VII",
        note: "держит команду вместе, пока Rean недоступен",
        tags: ["drive", "crossbell", "leader"]
      },
      {
        name: "Rean Schwarzer",
        role: "центральный Awakener",
        faction: "Class VII",
        note: "борется с проклятием и собственной силой",
        tags: ["curse", "Valimar", "tachi"]
      },
      {
        name: "Crow Armbrust",
        role: "вернувшийся союзник",
        faction: "Class VII",
        note: "хаос, карты и болезненная дружба с Rean",
        tags: ["rival", "guns", "awakener"]
      },
      {
        name: "Musse Egret",
        role: "стратег",
        faction: "Operation Mille Mirage",
        note: "ее план соединяет почти весь континент",
        tags: ["strategy", "arts", "noble"]
      },
      {
        name: "Altina Orion",
        role: "эмоциональный якорь",
        faction: "New Class VII",
        note: "прошла путь от инструмента до члена семьи",
        tags: ["growth", "support", "claiomh solais"]
      }
    ],
    maps: [
      {
        name: "Hidden village network",
        region: "Eryn and allied routes",
        focus: "сбор союзников, возврат по регионам, квестовые окна",
        chestCount: 13,
        completionNote: "CS IV часто открывает старые области заново: проверяй карту после каждого сюжетного блока.",
        route: ["Eryn", "Saint-Arkh", "Crossbell", "Bryonia Island", "Pantagruel"],
        nodes: [
          camp("cs4-h-camp", 15, 43, "Eryn"),
          quest("cs4-h-q", 29, 30, "ally request"),
          chest("cs4-h-1", 44, 54, "forest path", "Spirit Incense"),
          chest("cs4-h-2", 57, 32, "old road", "Action quartz"),
          chest("cs4-h-3", 70, 49, "island cache", "Zeram Powder"),
          boss("cs4-h-b", 85, 34, "rivalry gate")
        ]
      },
      {
        name: "Final rivalry",
        region: "Great Twilight finale",
        focus: "много партий, mech battles и финальные проверки",
        chestCount: 8,
        completionNote: "Перед финалом сохрани отдельный файл и раздай кварцы так, будто понадобится три состава подряд.",
        route: ["warship", "sanctuary", "rivalry arena", "last core"],
        nodes: [
          camp("cs4-f-camp", 16, 51, "launch point"),
          chest("cs4-f-1", 32, 34, "sanctuary wing", "Brave Soul"),
          chest("cs4-f-2", 49, 56, "sealed chest", "Lost Art"),
          quest("cs4-f-q", 62, 39, "party divide"),
          boss("cs4-f-b1", 74, 28, "rivalry"),
          boss("cs4-f-b2", 87, 43, "great twilight")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Act 1: regroup",
        pace: "команда собирает себя заново",
        goals: ["держать new Class VII прокачанной", "обходить Eryn", "собирать союзников"],
        missables: ["ранние hidden quests", "подарки и bonding", "monster scans"],
        bossPrep: "Juna и Kurt дают темп, Altina прикрывает, Ash/Musse закрывают урон по ситуации."
      },
      {
        chapter: "Act 2: allied front",
        pace: "свободные маршруты и старые зоны",
        goals: ["сверять точки fast travel", "закрывать trial chests", "проверять Crossbell"],
        missables: ["поздние NPC из прошлых арок", "рыбалка и рецепты"],
        bossPrep: "Orders подбирай под фазу: break на входе, defense на enemy S-Craft."
      },
      {
        chapter: "Finale",
        pace: "длинная развязка Erebonia",
        goals: ["собрать финальное оружие", "закрыть все испытания", "сохраниться перед точкой невозврата"],
        missables: ["final bonding choices", "финальные chest routes"],
        bossPrep: "Сделай несколько полноценных партий и держи аксессуары от Nightmare/Confuse."
      }
    ]
  },
  {
    slug: "trails-into-reverie",
    order: 10,
    appId: 1668540,
    title: "The Legend of Heroes: Trails into Reverie",
    shortTitle: "Reverie",
    arc: "reverie",
    arcTitle: "Crossroads",
    place: "Crossbell, Erebonia и True Reverie Corridor",
    releaseWindow: "2020 JP / 2023 Steam",
    color: "#06b6d4",
    accent: "#c084fc",
    summary:
      "Эпилог Crossbell и Erebonia строится на трех маршрутах: Lloyd, Rean и загадочный C ведут историю к Reverie Corridor и новым героям.",
    themes: ["three routes", "corridor", "post-war", "what comes next"],
    characters: [
      {
        name: "Lloyd Bannings",
        role: "герой Crossbell",
        faction: "SSS",
        note: "снова защищает независимость города, теперь после больших войн",
        tags: ["detective", "crossbell", "resolve"]
      },
      {
        name: "Rean Schwarzer",
        role: "герой Erebonia",
        faction: "Class VII",
        note: "пытается жить после финала CS IV и все еще оказывается в центре беды",
        tags: ["teacher", "tachi", "recovery"]
      },
      {
        name: "C",
        role: "таинственный лидер маршрута",
        faction: "unknown",
        note: "его маршрут приносит новую партию и меняет тон игры",
        tags: ["mask", "route", "spoiler-safe"]
      },
      {
        name: "Swin Abel",
        role: "беглый ассасин",
        faction: "C route",
        note: "спокойный мечник, работающий в паре с Nadia",
        tags: ["dagger", "marks", "partner"]
      },
      {
        name: "Nadia Rayne",
        role: "беглая ассасинка",
        faction: "C route",
        note: "сонная, опасная и гораздо внимательнее, чем кажется",
        tags: ["plush", "assassin", "wit"]
      },
      {
        name: "Lapis Rosenberg",
        role: "кукла",
        faction: "C route",
        note: "новый эмоциональный ключ Reverie",
        tags: ["doll", "identity", "heart"]
      }
    ],
    maps: [
      {
        name: "True Reverie Corridor",
        region: "Dream space",
        focus: "случайные этажи, trial doors, sealing stones",
        chestCount: 14,
        completionNote: "Коридор лучше вести как отдельную базу: этаж, камень, персонаж, испытание, награда.",
        route: ["central stratum", "trial gates", "phantom floors", "boss seal"],
        nodes: [
          camp("rev-c-camp", 18, 46, "central stratum"),
          chest("rev-c-1", 31, 28, "phantom chest", "U-Material"),
          quest("rev-c-q1", 43, 53, "sealing stone"),
          chest("rev-c-2", 57, 32, "trial cache", "Rare quartz"),
          quest("rev-c-q2", 70, 49, "episode gate"),
          boss("rev-c-b", 85, 36, "stratum guardian")
        ]
      },
      {
        name: "Crossbell liberation route",
        region: "Crossbell",
        focus: "городские бои и возвращение SSS",
        chestCount: 7,
        completionNote: "Сверяй маршруты Lloyd отдельно от Corridor: городские сцены имеют свои окна.",
        route: ["Central Square", "Administrative District", "IBC", "Orchis Tower"],
        nodes: [
          camp("rev-x-camp", 16, 39, "SSS checkpoint"),
          quest("rev-x-q", 29, 25, "citizen route"),
          chest("rev-x-1", 43, 51, "blocked alley", "Tearal Balm"),
          chest("rev-x-2", 59, 29, "IBC service path", "EP Charge IV"),
          boss("rev-x-b1", 72, 46, "occupation unit"),
          boss("rev-x-b2", 86, 28, "tower lock")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Route switching",
        pace: "три кампании одновременно",
        goals: ["держать уровни маршрутов близко", "вести отдельные сейвы", "не забывать Corridor"],
        missables: ["эпизоды в Corridor", "route-specific scans", "мини-игры"],
        bossPrep: "Каждый маршрут должен иметь healer, break option и аксессуары против статусов."
      },
      {
        chapter: "True Reverie Corridor",
        pace: "долгий optional-позвоночник",
        goals: ["открывать sealing stones", "закрывать trial doors", "прокачивать широкий ростер"],
        missables: ["character episodes", "rare chest rewards", "мини-боссы"],
        bossPrep: "Собери команды под роли, а не любимчиков: tank, caster, breaker, healer."
      },
      {
        chapter: "Final routes",
        pace: "сведение Crossbell, Rean и C",
        goals: ["закрыть эпизоды", "собрать финальные кварцы", "подготовить несколько партий"],
        missables: ["последние Corridor floors", "финальные scans"],
        bossPrep: "Не выноси все лучшие кварцы в одну команду: финал любит смену состава."
      }
    ]
  },
  {
    slug: "trails-through-daybreak",
    order: 11,
    appId: 2138610,
    title: "The Legend of Heroes: Trails through Daybreak",
    shortTitle: "Daybreak",
    arc: "calvard",
    arcTitle: "Calvard Arc",
    place: "Республика Calvard",
    releaseWindow: "2021 JP / 2023 Steam",
    color: "#f59e0b",
    accent: "#06b6d4",
    summary:
      "Calvard Arc меняет перспективу: Van Arkride работает spriggan-заказчиком между законом и тенями, а боевая система совмещает action field и command battle.",
    themes: ["spriggan", "calvard", "field battle", "law and gray zones"],
    characters: [
      {
        name: "Van Arkride",
        role: "spriggan",
        faction: "Arkride Solutions",
        note: "взрослый герой с сомнительной клиентурой и очень четким кодексом",
        tags: ["stun caliber", "gray work", "Grendel"]
      },
      {
        name: "Agnes Claudel",
        role: "студентка",
        faction: "Aramis High School",
        note: "нанимает Van и втягивает его в поиск Oct-Genesis",
        tags: ["orbment", "client", "genesis"]
      },
      {
        name: "Feri Al-Fayed",
        role: "jaeger",
        faction: "Kruga",
        note: "юная боец, которая учится городу и морали вне отряда",
        tags: ["bayonet", "jaeger", "fire"]
      },
      {
        name: "Aaron Wei",
        role: "звезда Langport",
        faction: "Heiyue sphere",
        note: "наглый, быстрый и опасный артист боевых искусств",
        tags: ["dual blades", "langport", "showman"]
      },
      {
        name: "Risette Twinings",
        role: "оператор",
        faction: "Marduk",
        note: "поддержка, тактика и мягкая корпоративная угроза в одном лице",
        tags: ["shield", "support", "marduk"]
      },
      {
        name: "Judith Ranster",
        role: "актриса",
        faction: "entertainment industry",
        note: "звезда, которая явно знает больше, чем можно говорить в интервью",
        tags: ["phantom thief", "arts", "style"]
      }
    ],
    maps: [
      {
        name: "Edith districts",
        region: "Capital city",
        focus: "заказы 4SPG, кафе, underground routes и alignment choices",
        chestCount: 10,
        completionNote: "Перед закрытием каждого 4SPG обходи районы Edith: Law/Gray/Chaos выборы меняют награды.",
        route: ["Old Town", "Riverside", "Station Street", "Tyrell District", "Underground"],
        nodes: [
          camp("day-e-camp", 16, 44, "Arkride office"),
          quest("day-e-q1", 31, 29, "4SPG client"),
          chest("day-e-1", 44, 52, "underground path", "Tearal Balm"),
          quest("day-e-q2", 57, 34, "alignment choice"),
          chest("day-e-2", 70, 50, "service tunnel", "Shard Token"),
          boss("day-e-b", 85, 31, "chapter mark")
        ]
      },
      {
        name: "Calvard road atlas",
        region: "Calvard",
        focus: "Tharbad, Langport, Creil и региональные сделки",
        chestCount: 12,
        completionNote: "Daybreak любит большие временные визиты: закрывай сундуки до возврата в Edith.",
        route: ["Langport", "Tharbad", "Creil", "Basel", "Oracion"],
        nodes: [
          camp("day-r-camp", 14, 39, "regional arrival"),
          chest("day-r-1", 29, 25, "harbor backroad", "EP Charge"),
          quest("day-r-q", 43, 51, "local 4SPG"),
          chest("day-r-2", 58, 32, "desert route", "Action quartz"),
          chest("day-r-3", 71, 54, "factory cache", "U-Material"),
          boss("day-r-b", 85, 36, "Grendel trigger")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Prologue: spriggan work",
        pace: "новая боевая система и город",
        goals: ["освоить field battle", "смотреть alignment", "сканировать новых врагов"],
        missables: ["4SPG choices", "городские рецепты", "локальные фильмы/кинотеатр"],
        bossPrep: "Van должен уметь stun, Agnes держит arts/heal, Feri закрывает мобильный урон."
      },
      {
        chapter: "Regional chapters",
        pace: "дела клиентов становятся политикой",
        goals: ["закрывать 4SPG до сюжетной встречи", "сверять районы", "следить за Oct-Genesis"],
        missables: ["connect events", "books and films", "сундуки временных зон"],
        bossPrep: "Прокачивай holo cores и держи Shard Skills под стиль партии."
      },
      {
        chapter: "Finale",
        pace: "темная сторона Calvard выходит наружу",
        goals: ["дособрать party tools", "закрыть alignment rewards", "подготовить Grendel fights"],
        missables: ["финальные 4SPG", "last scans", "редкие сундуки"],
        bossPrep: "Комбинируй field stun с command burst и держи защиту от fear/confuse."
      }
    ]
  },
  {
    slug: "trails-through-daybreak-ii",
    order: 12,
    appId: 2668430,
    title: "The Legend of Heroes: Trails through Daybreak II",
    shortTitle: "Daybreak II",
    arc: "calvard",
    arcTitle: "Calvard Arc",
    place: "Calvard после дела Oct-Genesis",
    releaseWindow: "2022 JP / 2025 Steam",
    color: "#ec4899",
    accent: "#22d3ee",
    summary:
      "Продолжение Daybreak разворачивает временные петли, расследования и новые угрозы вокруг Van, Agnes и возвращающихся героев Calvard.",
    themes: ["time loops", "grim cats", "expanded calvard", "mystery"],
    characters: [
      {
        name: "Van Arkride",
        role: "spriggan",
        faction: "Arkride Solutions",
        note: "снова ищет выход между заказом, долгом и Grendel",
        tags: ["spriggan", "Grendel", "calvard"]
      },
      {
        name: "Agnes Claudel",
        role: "исследовательница Genesis",
        faction: "Aramis High School",
        note: "ее связь с Genesis становится еще важнее",
        tags: ["genesis", "arts", "resolve"]
      },
      {
        name: "Elaine Auclair",
        role: "A-rank bracer",
        faction: "Bracer Guild",
        note: "Divine Blade уровня городских слухов и личная история Van",
        tags: ["sword", "bracer", "history"]
      },
      {
        name: "Swin Abel",
        role: "беглый ассасин",
        faction: "Picnic squad",
        note: "приносит связку Reverie в Calvard",
        tags: ["assassin", "marks", "guest"]
      },
      {
        name: "Nadia Rayne",
        role: "тактик хаоса",
        faction: "Picnic squad",
        note: "мягко разрушает серьезность сцен и чужие планы",
        tags: ["plush", "wit", "support"]
      },
      {
        name: "Shizuna Rem Misurugi",
        role: "Divine Blade",
        faction: "Ikaruga",
        note: "веселая катастрофа с мечом, которую невозможно игнорировать",
        tags: ["odachi", "ikaruga", "storm"]
      }
    ],
    maps: [
      {
        name: "Loop investigation board",
        region: "Edith and Calvard",
        focus: "альтернативные события, повторные проверки, временные ветки",
        chestCount: 11,
        completionNote: "Веди маршруты по состояниям главы: петли меняют то, что уже казалось проверенным.",
        route: ["Edith", "Aramis", "Riverside", "Creil", "hidden branch"],
        nodes: [
          camp("day2-l-camp", 16, 43, "Arkride office"),
          quest("day2-l-q1", 30, 27, "case board"),
          chest("day2-l-1", 44, 52, "changed alley", "EP Charge IV"),
          quest("day2-l-q2", 57, 34, "loop clue"),
          chest("day2-l-2", 70, 50, "branch cache", "Shard Booster"),
          boss("day2-l-b", 85, 32, "timeline break")
        ]
      },
      {
        name: "Marduk training layers",
        region: "Virtual space",
        focus: "боевые симуляции, challenge stages, редкие награды",
        chestCount: 8,
        completionNote: "Разделяй сюжетные зоны и симуляции: награды Marduk часто закрывают build gaps.",
        route: ["training lobby", "layer one", "layer two", "boss sim"],
        nodes: [
          camp("day2-m-camp", 18, 48, "Marduk lobby"),
          chest("day2-m-1", 32, 35, "sim cache", "U-Material"),
          chest("day2-m-2", 47, 55, "data chest", "Rare quartz"),
          quest("day2-m-q", 61, 31, "challenge gate"),
          chest("day2-m-3", 72, 49, "reward node", "Zeram Powder"),
          boss("day2-m-b", 86, 36, "training boss")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Early cases",
        pace: "знакомая команда, новые сбои",
        goals: ["отмечать branch choices", "вести enemy scans", "обходить Edith после loop-событий"],
        missables: ["вариантные диалоги", "connect events", "временные сундуки"],
        bossPrep: "Собирай Van под stun, Agnes под arts, Elaine/Shizuna под физический burst."
      },
      {
        chapter: "Fragments and loops",
        pace: "расследование через повторения",
        goals: ["сверять версии районов", "закрывать Marduk challenges", "обновлять holo cores"],
        missables: ["альтернативные clues", "редкие награды симуляций"],
        bossPrep: "Используй Shard Skills под конкретную угрозу, а не один универсальный build."
      },
      {
        chapter: "Finale",
        pace: "развязка временной аномалии",
        goals: ["закрыть optional layers", "собрать финальное снаряжение", "сохранить отдельные branch сейвы"],
        missables: ["последние scans", "branch rewards", "финальные сундуки"],
        bossPrep: "Держи защиту от Delay и Confuse, потому что потеря темпа больнее урона."
      }
    ]
  },
  {
    slug: "trails-beyond-the-horizon",
    order: 13,
    appId: 3316940,
    title: "The Legend of Heroes: Trails beyond the Horizon",
    shortTitle: "Beyond the Horizon",
    arc: "calvard",
    arcTitle: "Zemuria Endgame",
    place: "Calvard и пределы Земурии",
    releaseWindow: "2024 JP / 2026 Steam",
    color: "#fde047",
    accent: "#818cf8",
    summary:
      "Свежая на Steam глава сталкивает Van, Rean и Kevin с тайнами Marduk, тренировкой высокого уровня и вопросом, что находится за горизонтом континента.",
    themes: ["space program", "three paths", "Marduk", "zemurian core"],
    characters: [
      {
        name: "Van Arkride",
        role: "spriggan",
        faction: "Arkride Solutions",
        note: "Calvard-герой снова оказывается в центре события континентального масштаба",
        tags: ["spriggan", "Grendel", "calvard"]
      },
      {
        name: "Rean Schwarzer",
        role: "Ashen Chevalier",
        faction: "Thors and Class VII",
        note: "возвращается как один из трех крупных маршрутов",
        tags: ["tachi", "instructor", "hero"]
      },
      {
        name: "Kevin Graham",
        role: "Dominion",
        faction: "Septian Church",
        note: "связывает новую угрозу с церковной линией Sky the 3rd",
        tags: ["church", "stigma", "crossbow"]
      },
      {
        name: "Agnes Claudel",
        role: "носительница Genesis-линии",
        faction: "Aramis High School",
        note: "ее личная ставка остается центральной для Calvard",
        tags: ["genesis", "arts", "heart"]
      },
      {
        name: "Shizuna Rem Misurugi",
        role: "Divine Blade",
        faction: "Ikaruga",
        note: "самый непредсказуемый меч на поле",
        tags: ["ikaruga", "odachi", "storm"]
      },
      {
        name: "Marduk agents",
        role: "операторы тренировки",
        faction: "Marduk Total Security",
        note: "технологический каркас новой угрозы и боевых испытаний",
        tags: ["tech", "training", "marduk"]
      }
    ],
    maps: [
      {
        name: "Marduk exercise grid",
        region: "High-tech training space",
        focus: "совместная тренировка, route switching, shard commands",
        chestCount: 9,
        completionNote:
          "База подготовлена под релиз Steam 2026: живые данные берутся из API, а маршруты можно будет уточнять после полного теста.",
        route: ["briefing", "exercise zone A", "exercise zone B", "core simulation"],
        nodes: [
          camp("bth-m-camp", 17, 45, "Marduk briefing"),
          chest("bth-m-1", 31, 30, "zone A cache", "Shard material"),
          quest("bth-m-q1", 44, 52, "route switch"),
          chest("bth-m-2", 58, 33, "zone B cache", "EP Charge"),
          chest("bth-m-3", 70, 50, "sim reward", "Rare quartz"),
          boss("bth-m-b", 85, 35, "exercise boss")
        ]
      },
      {
        name: "Beyond horizon path",
        region: "Late Zemuria",
        focus: "три маршрута, space program, финальные вопросы континента",
        chestCount: 10,
        completionNote: "Финальная карта сделана как расширяемый слой: Van/Rean/Kevin routes можно развести отдельно.",
        route: ["Van route", "Rean route", "Kevin route", "horizon gate"],
        nodes: [
          camp("bth-h-camp", 15, 48, "route hub"),
          quest("bth-h-q1", 28, 33, "Van objective"),
          quest("bth-h-q2", 43, 54, "Rean objective"),
          quest("bth-h-q3", 58, 30, "Kevin objective"),
          chest("bth-h-1", 71, 49, "horizon cache", "Zeram Powder"),
          boss("bth-h-b", 86, 32, "beyond gate")
        ]
      }
    ],
    walkthrough: [
      {
        chapter: "Opening routes",
        pace: "три героя и новая механика",
        goals: ["освоить Shard Commands", "разделять build по маршрутам", "сверять Steam-данные релиза"],
        missables: ["ранние training rewards", "route-specific scans", "диалоги Marduk"],
        bossPrep: "Не переноси все ресурсы Van: Rean и Kevin тоже должны иметь самодостаточные сборки."
      },
      {
        chapter: "Marduk exercises",
        pace: "боевые тесты и континентальные ставки",
        goals: ["закрывать симуляции", "проверять rewards", "помечать route locks"],
        missables: ["симуляционные сундуки", "уникальные враги training layers"],
        bossPrep: "Shard Commands используй как план боя: offense, sustain и emergency defense."
      },
      {
        chapter: "Horizon finale",
        pace: "новейшая точка серии на Steam",
        goals: ["финализировать несколько партий", "дособрать карту сундуков", "держать отдельные сейвы"],
        missables: ["финальные scans", "маршрутные chest nodes"],
        bossPrep: "Готовься к гибридным боям: field openings экономят ресурсы command-фаз."
      }
    ]
  }
];

export const steamAppIds = trailsGames.map((game) => game.appId);
