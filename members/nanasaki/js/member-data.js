const MEMBER = {
  name: "七咲凪",
  kana: "ななさきなぎ",
  roman: "Nanasaki Nagi",
  role: "イラスト・システム",
  // listed: false はサークル一覧に出さない
  circles: [
    { id: "nanabusaki", name: "ななぶさき", label: "個人サークル", role: "主宰" },
    { id: "tail-tale", name: "ている×ている", label: "参加サークル", role: "イラスト・システム担当", url: "https://tail-tale.github.io/official/", listed: false },
    { id: "guest", name: "寄稿", label: "ゲスト参加", listed: false }
  ],
  avatar: "images/avatar.jpg",
  kv: "shared/illust89.jpg",
  kicker: "Illustration & System",
  lead: ["淡い色彩とやわらかい線で、", "日常の中のちいさなきらめきを描く。"],
  links: [
    { label: "X", handle: "@nanasaki_sub", url: "https://x.com/nanasaki_sub" },
    { label: "Skeb", handle: "@nanasaki_sub", url: "https://skeb.jp/@nanasaki_sub" },
    { label: "lit.link", handle: "nanasakinagi", url: "https://lit.link/nanasakinagi" }
  ]
};

// 新しい順
const WORKS = [
  {
    id: "perseid",
    circle: "tail-tale",
    title: "Perseid.",
    kana: "",
    type: "ノベルゲーム",
    year: "2026",
    role: "企画・システム",
    image: "shared/perseid_thumb.jpg",
    text: "流星群の夜に宇宙人へ呼びかけた少年と、宇宙人と友だちになりたい少女の、ひと夏の物語。\nている×ているの新作ノベルゲームで、企画とシステムを担当しています。",
    credits: "企画・システム　七咲凪 ／ イラスト　弱肉定食 ／ シナリオ　かみしろ",
    link: { label: "特設ページを見る", url: "https://tail-tale.github.io/perseid/" }
  },
  {
    id: "yuki-yume-aruiwa-hana",
    circle: "nanabusaki",
    title: "ゆき、ゆめ、あるいは花",
    kana: "",
    type: "漫画",
    year: "2025",
    role: "イラスト",
    image: "images/yukiyume.webp",
    text: "コミックマーケット107にて頒布。",
    credits: "",
    link: null
  },
  {
    id: "tail-by-tale",
    circle: "tail-tale",
    title: "ているばいている -Tail by Tale-",
    kana: "",
    type: "イラスト集",
    year: "2025",
    role: "イラスト",
    image: "shared/33.png",
    text: "ている×ているのイラスト集。\nケモミミの女の子たちを中心に、ふわふわとした日常の空気をまとめた一冊です。",
    credits: "",
    link: null
  },
  {
    id: "lian-fortuna",
    circle: "guest",
    title: "Lian Fortuna",
    kana: "ごちうさオールキャラ合同誌",
    type: "合同誌（寄稿）",
    year: "2025",
    role: "寄稿（イラスト）",
    image: null,
    text: "ごちうさオールキャラ合同誌。コミックマーケット107にてゲスト参加しました。",
    credits: "",
    link: null
  },
  {
    id: "stella-ensemble-3",
    circle: "guest",
    title: "StellaEnsemble 3+",
    kana: "きゃべつそふと合同誌",
    type: "合同誌（寄稿）",
    year: "2025",
    role: "寄稿（イラスト）",
    image: null,
    text: "きゃべつそふと合同誌。コミックマーケット107にてゲスト参加しました。",
    credits: "",
    link: null
  },
  {
    id: "stardust-owl",
    circle: "guest",
    title: "Stardust Owl",
    kana: "篠澤広百人合同誌",
    type: "合同誌（寄稿）",
    year: "2025",
    role: "寄稿（イラスト）",
    image: null,
    text: "篠澤広百人合同誌。学園スターフェスティバル02（2025.11.16）にてゲスト参加しました。",
    credits: "",
    link: null
  },
  {
    id: "saku-awayuki-ni-soete-c106",
    circle: "nanabusaki",
    title: "咲く淡雪に添えて",
    kana: "",
    type: "漫画",
    year: "2025",
    role: "イラスト",
    image: "images/sakuawayuki.webp",
    text: "コミックマーケット106にて頒布。C106初回版。",
    credits: "",
    link: null
  },
  {
    id: "sunlite-score",
    circle: "guest",
    title: "SUNLITE SCORE",
    kana: "倉本千奈合同誌",
    type: "合同誌（寄稿）",
    year: "2025",
    role: "寄稿（イラスト）",
    image: null,
    text: "倉本千奈合同誌。コミックマーケット106にてゲスト参加しました。",
    credits: "",
    link: null
  },
  {
    id: "stella-ensemble-2",
    circle: "guest",
    title: "StellaEnsemble 2+",
    kana: "きゃべつそふと合同誌",
    type: "合同誌（寄稿）",
    year: "2025",
    role: "寄稿（イラスト）",
    image: null,
    text: "きゃべつそふと合同誌。コミックマーケット106にてゲスト参加しました。",
    credits: "",
    link: null
  },
  {
    id: "ashiato-ni-saku-futatsu",
    circle: "nanabusaki",
    title: "あしあとに咲くふたつ",
    kana: "",
    type: "漫画",
    year: "2025",
    role: "イラスト",
    image: "images/ashiato.webp",
    text: "学園アイドルマスター ひろ＆ちな 非公式ファンブック。\n学園スターフェスティバル01にて頒布。",
    credits: "",
    link: null
  }
];

// 新しい順
const GALLERY = [
  { src: "images/illust8.webp" },
  { src: "images/HTAdqSLagAA6Mi8.webp" },
  { src: "images/HU0-1eUbQAEw7i4.webp" },
  { src: "images/HUWoCR9bcAA9Yfy.webp" },
  { src: "images/HTAXYGwaYAALNSv.webp" },
  { src: "images/HSgZWVfaoAABzHx.webp" },
  { src: "images/HS0NC0eaQAA-G6g.webp" },
  { src: "images/HTXzh6xagAA8CaX.webp" },
  { src: "images/HSae-kmaYAAponk.webp" },
  { src: "images/HScP68pbcAA9pCg.webp" },
  { src: "images/GxBwce-bUAIrdZ-.webp" },
  { src: "images/GZ7_J4JaMAAQVL0.webp" },
  { src: "images/GYyEq4-bQAAiL4J.webp" },
  { src: "images/GfQEl5IasAAyKjQ.webp" },
  { src: "images/GUiE0BxWsAAzsj_.webp" }
];

const PROFILE = {
  bio: [
    "個人サークル「ななぶさき」で創作をしながら、同人サークル「ている×ている」ではイラストとシステムを担当しています。",
    "淡い色彩とやわらかい線で、日常の中のちいさなきらめきを描くのが好きです。ノベルゲーム『Perseid.』では企画とシステムを手がけ、絵とプログラムの両方から作品づくりに関わっています。"
  ],
  history: [
    { date: "2026.10", text: "新作ノベルゲーム『Perseid.』を発表（企画・システム）" },
    { date: "2026.04", text: "ごちうさWEBオンリー『てくてくうさぎの通り道』を主催" },
    { date: "2026.02", text: "サークルホームページを公開（システム）" },
    { date: "2025.12", text: "コミックマーケット107 に参加、『ゆき、ゆめ、あるいは花』を発行（ななぶさき）／イラスト集『ているばいている -Tail by Tale-』を発行（ている×ている）" },
    { date: "2025.08", text: "コミックマーケット106 に参加、『咲く淡雪に添えて』を発行（ななぶさき）" },
    { date: "2025.06", text: "学園スターフェスティバル01 に参加、『あしあとに咲くふたつ』を発行（ななぶさき）" },
    { date: "2025",    text: "サークル「ている×ている」の活動を開始" },
    { date: "—",       text: "個人サークル「ななぶさき」として活動を開始" }
  ],
  commission: {
    text: "イラストのご依頼はSkebで受け付けています。受付状況はSkebのページでご確認ください。その他のご相談はXのDMへどうぞ。",
    link: { label: "Skebを見る", url: "https://skeb.jp/@nanasaki_sub" }
  },
  tools: { items: ["CLIP STUDIO PAINT EX", "GAOMON 液タブ PD2200 21.5インチ", "iPad Pro 12.9インチ / Apple Pencil"] }
};
