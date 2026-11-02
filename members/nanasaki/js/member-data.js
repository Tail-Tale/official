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
  lead: ["絵を描いたり、漫画を描いたり、", "ノベルゲームを作ったりしています。"],
  links: [
    { label: "X", handle: "@nanasaki_sub", url: "https://x.com/nanasaki_sub" },
    { label: "Skeb", handle: "@nanasaki_sub", url: "https://skeb.jp/@nanasaki_sub" },
    { label: "lit.link", handle: "nanasakinagi", url: "https://lit.link/nanasakinagi" }
  ]
};

const HAND_NAME = {
  src: "images/name-hand.webp",
  box: [15, 505, 1905, 540],
  breaks: { 4: 80, 8: 80, 11: 80, 15: 80, 19: 80, 25: 260 },
  strokes: [
    "M37 692L55 687L73 680L90 674L108 668L124 659L142 653L160 647L177 640L195 633L212 626L230 620L247 612",
    "M155 555L152 573L146 591L140 608L134 626L128 644L122 660L115 677L112 696L107 713L101 731L97 749L93 767L89 785L85 803L81 821L77 840L74 858L71 876L68 894L64 912L61 931L57 949L55 967",
    "M328 520L327 539L325 557L322 576L321 595L319 613L317 632",
    "M222 702L225 720L225 738L225 756L224 774L222 792L222 810L221 828L220 846L218 863L215 881L211 899L203 915L189 925L171 922L158 909L149 894L143 877L141 859L144 842L151 825L163 811L177 801L194 794L212 793L230 796L246 804L262 813L276 824L291 834L305 845L320 855",
    "M387 650L407 647L427 643L445 634L464 628L483 620L502 614",
    "M465 562L456 578L451 596L445 614L443 632L435 649L431 667L428 685L423 703L419 721L415 739L412 758L409 776L406 794L403 813L400 831L398 850L395 868L394 886L392 905L390 923L389 942",
    "M591 582L590 602L591 622L592 642L593 662L592 682",
    "M559 682L560 700L561 718L563 736L563 754L563 773L564 791L561 808L559 826L556 844L551 862L546 879L538 895L527 910L512 920L494 919L481 907L474 890L470 873L470 855L472 837L477 819L485 803L496 788L510 777L527 772L545 773L562 779L578 788L592 800L605 812L618 825L630 839L642 852L653 866L665 880",
    "M672 665L691 664L711 661L729 656L748 652L768 648L786 643L805 640L825 637L844 633L863 631L882 627",
    "M782 570L782 589L783 608L785 627L787 645L789 664L791 683L794 702L797 720L800 739L802 758L804 777L806 795L805 814L795 830",
    "M682 807L689 824L702 839L716 852L730 865L745 876L760 889L776 900L791 911L807 922L823 932L840 942L858 949L877 950",
    "M957 670L976 668L995 665L1014 661L1033 657L1052 653L1071 649L1090 648L1109 643L1128 641L1147 639",
    "M947 767L965 763L983 757L1000 751L1018 746L1036 741L1054 737L1073 732L1091 728L1109 724L1127 721L1145 717L1164 713L1182 710",
    "M1062 585L1066 604L1071 622L1076 640L1083 658L1088 676L1093 694L1099 712L1104 730L1111 748L1116 766L1118 785L1116 804L1112 822",
    "M985 860L1004 864L1021 872L1038 881L1055 891L1072 899L1089 908L1106 916L1124 923L1143 928L1162 931L1181 932L1200 934",
    "M1294 707L1312 703L1329 697L1346 691L1363 685L1378 675L1396 670L1412 663L1429 655L1446 649L1463 643L1480 637",
    "M1415 585L1402 599L1394 616L1387 633L1381 651L1377 669L1368 686L1364 704L1359 722L1354 740L1349 758L1345 777L1341 795L1338 814L1335 832L1332 851L1330 869L1330 888L1330 907",
    "M1547 596L1551 616L1558 636L1560 657L1555 677",
    "M1481 720L1481 738L1481 756L1481 775L1480 793L1479 811L1478 829L1475 847L1472 865L1467 883L1462 900L1452 916L1439 928L1422 934L1404 930L1391 918L1382 902L1376 884L1374 866L1375 848L1381 831L1392 816L1407 807L1425 804L1444 803L1461 807L1479 813L1496 819L1513 826L1529 835L1545 844L1560 854L1573 866L1585 880",
    "M1605 687L1623 683L1641 679L1659 674L1676 668L1694 663L1712 659L1730 655L1748 652L1767 649L1785 651",
    "M1610 772L1629 768L1648 765L1667 760L1685 755L1704 751L1723 746L1741 740L1760 735L1779 730L1798 726L1817 725",
    "M1707 592L1710 610L1716 628L1721 646L1727 663L1731 681L1736 699L1741 717L1745 735L1749 753L1753 771L1756 789L1756 807L1750 825",
    "M1645 852L1651 869L1665 882L1682 891L1699 897L1717 903L1735 908L1754 911L1772 914L1791 916L1810 919L1828 919L1847 920",
    "M1827 555L1830 573L1835 592L1840 609L1846 627L1852 645L1858 662L1865 680",
    "M1875 537L1879 556L1883 575L1887 594L1891 613L1894 632L1897 651L1900 670",
    "M45 1016L82 1015L118 1014L155 1013L191 1012L228 1010L265 1009L301 1008L338 1007L375 1006L411 1005L448 1004L484 1003L521 1002L558 1001L594 1000L631 1000L667 999L704 998L741 997L777 997L814 996L850 996L887 995L924 994L960 994L997 994L1034 993L1070 993L1107 993L1143 992L1180 992L1217 992L1253 992L1290 992L1326 992L1363 992L1400 992L1436 992L1473 992L1509 992L1546 992L1583 992L1619 992L1656 993L1693 993L1729 993L1766 993L1802 994L1839 994L1875 994"
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
    "茨城県出身、神奈川県在住。",
    "個人サークル「ななぶさき」で創作をしながら、同人サークル「ている×ている」ではイラストとシステムを担当しています。",
    "ノベルゲーム『Perseid.』では企画とシステムを手がけ、絵とプログラムの両方から作品づくりに関わっています。"
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
