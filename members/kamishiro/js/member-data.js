/**
 * かみしろ メンバーページ データ
 * 作品やプロフィールを更新するときは、このファイルだけ編集してください。
 */
const MEMBER = {
  name: "かみしろ",
  kana: "かみしろ",
  roman: "Kamishiro",
  role: "シナリオ",
  circles: [
    { id: "tail-tale", name: "ている×ている", label: "参加サークル", role: "シナリオ担当", url: "https://tail-tale.github.io/official/", listed: false }
  ],
  avatar: null,
  kv: null,
  kvCaption: "",
  kicker: "Scenario",
  lead: ["泣きゲーとチルい雰囲気ゲーが好き。", "弱すぎず強すぎない特殊能力が欲しい。"],
  links: [
    { label: "X", handle: "@kamisiro_poke", url: "https://x.com/kamisiro_poke" }
  ]
};

/* WORKS：新しいものを上に */
const WORKS = [
  {
    id: "perseid",
    circle: "tail-tale",
    title: "Perseid.",
    kana: "ペルシード",
    type: "ノベルゲーム",
    year: "2026",
    role: "シナリオ",
    image: "shared/perseid_thumb.jpg",
    text: "流星群の夜に宇宙人へ呼びかけた少年と、宇宙人と友だちになりたい少女の、ひと夏の物語。\nている×ているの新作ノベルゲームで、シナリオを担当しています。",
    credits: "企画・システム　七咲凪 ／ イラスト　弱肉定食 ／ シナリオ　かみしろ",
    link: { label: "特設ページを見る", url: "https://tail-tale.github.io/perseid/" }
  }
];

/* GALLERY：イラストなし */
const GALLERY = [];

/* PROFILE */
const PROFILE = {
  bio: [
    "同人サークル「ている×ている」でシナリオを担当しています。",
    "泣きゲーとチルい雰囲気ゲーが好き。弱すぎず強すぎない特殊能力が欲しい。"
  ],
  history: [
    { date: "2026.03", text: "新作ノベルゲーム『Perseid.』を発表（シナリオ）", tentative: false },
    { date: "2025",    text: "サークル「ている×ている」の活動を開始", tentative: false }
  ],
  commission: null,
  tools: null
};
