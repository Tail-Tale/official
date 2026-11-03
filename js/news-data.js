// news.json と両方更新するの忘れない！
const NEWS_DATA = [
  // 新しいのは上に足す
  {
    id: "perseid-announce-2026",
    date: "2026.10.10",
    tag: "release",
    tagLabel: "新作",
    title: "新作ノベルゲーム『Perseid.』発表",
    summary: "新作ノベルゲーム『Perseid.』を発表しました",
    body: "<a href='https://tail-tale.github.io/perseid/' target='_blank'><img src='images/perseid_banner.png' alt='Perseid. ペルシード' style='max-width:480px;width:100%;border-radius:8px;margin-bottom:16px;'></a><p>新作ノベルゲーム『Perseid.（ペルシード）』を発表しました！</p><p><strong>あらすじ</strong></p><p>流星群が降り注ぐ夜、山の頂で空に向かって叫んだ。<br>「うちゅうじんさん、きこえますかー！」<br>あれから10年。<br>星を愛しながら人を遠ざけてきた高校生・明日斗の部室に、<br>ある夏の日、一人の少女が飛び込んでくる。<br>「宇宙人さんとおともだちになりたいんです！」<br>底抜けに明るいその笑顔は、<br>静かな星空に一筋の光が走るように、<br>彼の日常を照らし始めた——。</p><p><strong>スタッフ</strong></p><p>企画・システム　七咲凪<br>イラスト　弱肉定食<br>シナリオ　かみしろ</p><p>キャラクターやストーリーなどの詳しい情報は特設ページで公開しています。</p><p><a href='https://tail-tale.github.io/perseid/' target='_blank' style='color:#6fa0d4;'>特設ページはこちら</a></p>",
    info: {}
  },
  {
    id: "vol3-booth-2025",
    date: "2026.02.20",
    tag: "release",
    tagLabel: "新作",
    title: "新作ノベルゲームページ公開",
    summary: "新作ノベルゲームのページを公開しました",
    body: "<a href='https://tail-tale.github.io/perseid/' target='_blank'><img src='images/perseid_banner.png' alt='Perseid. ペルシード' style='max-width:480px;width:100%;border-radius:8px;margin-bottom:16px;'></a><p>新作ノベルゲームのページを公開しました。</p><p><a href='https://tail-tale.github.io/perseid/' target='_blank' style='color:#6fa0d4;'>特設ページはこちら</a></p>",
    info: {}
  },
  {
    id: "renewal-2026",
    date: "2026.02.20",
    tag: "info",
    tagLabel: "お知らせ",
    title: "サークルホームページをオープンしました",
    summary: "サークルホームページをオープンしました",
    body: "<p>サークルホームページをオープンしました。</p><p>今後ともよろしくお願いします！</p>",
    info: {}
  },
  {
    id: "tailbytale-2025",
    date: "2025.12.31",
    tag: "release",
    tagLabel: "新作",
    title: "新作「ているばいている -Tail by Tale-」発行しました",
    summary: "新作「ているばいている -Tail by Tale-」発行しました",
    body: "<p>新刊「ているばいている -Tail by Tale-」を発行しました。<br>イラスト集です。どうぞよろしくお願いします。</p><img src='images/33.png' alt='ているばいている -Tail by Tale- 表紙' style='max-width:360px;width:100%;border-radius:8px;margin-top:16px;'>",
    info: {}
  },
  {
    id: "c107-report-2025",
    date: "2025.12.31",
    tag: "event",
    tagLabel: "イベント",
    title: "コミックマーケット107 参加しました！",
    summary: "コミックマーケット107 参加しました。新刊を無事頒布できました",
    body: "<p>コミックマーケット107に参加しました！<br>新刊を無事頒布することができました。お越しいただいた皆様ありがとうございました。</p>",
    info: {
      "イベント": "コミックマーケット107",
      "日時": "2025年12月31日",
      "場所": "東京ビッグサイト"
    }
  }
];
