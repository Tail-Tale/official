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
  box: [15, 505, 1945, 540],
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
    "M645 665L664 662L683 658L702 654L720 649L739 644L758 640L776 634L794 629L813 624L832 622",
    "M750 575L753 593L758 611L762 628L766 646L771 663L776 681L781 698L786 716L791 734L796 751L802 768L809 785",
    "M692 800L697 818L704 834L713 850L723 866L734 880L747 894L761 905L776 916L793 923L810 928L829 929L847 927L864 921L880 912",
    "M917 645L935 642L953 637L971 633L990 629L1007 623L1025 619L1043 612L1061 607L1079 603L1097 600",
    "M937 732L955 729L973 725L991 720L1009 716L1027 711L1045 705L1062 700L1080 694L1097 686L1114 680L1132 675",
    "M1025 582L1025 600L1027 618L1029 636L1032 654L1035 671L1039 689L1043 707L1046 725L1051 742L1056 759L1062 777L1068 794L1075 810",
    "M947 845L956 861L968 875L980 889L994 901L1008 912L1024 922L1041 929L1058 934L1077 936L1095 936L1113 931L1130 925L1145 915L1159 903L1170 888",
    "M1282 710L1301 706L1319 700L1337 693L1355 686L1372 676L1390 670L1408 662L1425 654L1443 646L1461 640L1480 636",
    "M1412 577L1399 590L1390 607L1384 624L1377 642L1372 660L1368 677L1359 693L1356 712L1351 730L1347 748L1341 766L1338 784L1334 802L1331 821L1327 839L1325 858L1322 876L1320 895L1321 913L1322 932",
    "M1551 587L1554 606L1560 624L1565 642L1564 661L1560 680",
    "M1481 725L1481 743L1481 761L1481 779L1480 797L1479 815L1479 833L1476 851L1474 869L1471 887L1466 905L1461 922L1452 938L1440 951L1424 958L1406 957L1391 947L1380 933L1373 916L1369 899L1367 881L1370 863L1375 846L1386 831L1401 821L1419 817L1437 816L1454 819L1472 823L1488 830L1505 837L1522 845L1537 854L1553 864L1567 874L1580 887L1592 900",
    "M1605 702L1624 698L1642 693L1661 688L1679 682L1697 677L1716 672L1734 668L1753 663L1772 659L1791 657L1810 656",
    "M1612 800L1631 799L1649 796L1667 792L1685 786L1703 782L1721 777L1739 772L1756 767L1774 762L1792 757L1810 751L1829 749L1847 747",
    "M1722 590L1725 608L1730 626L1735 644L1740 662L1745 680L1750 698L1755 716L1759 734L1764 752L1767 771L1771 789L1775 807L1778 826L1778 844L1772 862",
    "M1662 870L1665 888L1674 905L1687 918L1701 930L1717 939L1735 946L1752 952L1771 954L1789 955L1808 953L1825 947L1841 937L1854 923L1862 907",
    "M1857 547L1862 566L1866 585L1872 604L1877 623L1883 641L1889 660L1896 678L1902 697",
    "M1910 525L1917 544L1920 563L1925 582L1929 602L1932 621L1935 641L1938 661L1942 680",
    "M45 1024L83 1023L120 1022L158 1021L195 1020L233 1018L271 1017L308 1016L346 1015L384 1014L421 1013L459 1012L496 1011L534 1010L572 1009L609 1008L647 1008L684 1007L722 1006L760 1005L797 1005L835 1004L872 1004L910 1003L948 1002L985 1002L1023 1002L1061 1001L1098 1001L1136 1001L1173 1000L1211 1000L1249 1000L1286 1000L1324 1000L1361 1000L1399 1000L1437 1000L1474 1000L1512 1000L1550 1000L1587 1000L1625 1000L1662 1000L1700 1001L1738 1001L1775 1001L1813 1001L1850 1002L1888 1002L1925 1002"
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
