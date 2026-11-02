/**
 * メンバーページ共通スクリプト（案A「雪明かり」）
 * ヘッダー・フッター・各ページの中身を member-data.js から組み立てます。
 */
(function () {
  const CIRCLE_URL = "https://tail-tale.github.io/official/";
  const PAGES = [
    { key: "top", label: "Top", href: "index.html" },
    { key: "works", label: "Works", href: "works.html" },
    { key: "profile", label: "Profile", href: "index.html#profile" }
  ];

  const main = document.getElementById("page");
  const current = main ? main.dataset.page : "";

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const tentative = (on) => (on ? '<span class="tentative">仮</span>' : "");
  const circleOf = (id) => (MEMBER.circles || []).find((c) => c.id === id) || { id: "", name: "" };
  const workNo = (i) => pad(WORKS.length - i); // 古いものから 01
  const galleryNo = (i) => pad(GALLERY.length - i);

  /* ===== ヘッダー ===== */
  function renderHeader() {
    const el = document.getElementById("site-header");
    if (!el) return;
    el.className = "site-header";
    el.innerHTML = `
      <div class="wrap">
        <a class="brand" href="index.html">${esc(MEMBER.name)}</a>
        <button class="menu-btn" type="button" aria-expanded="false" aria-controls="gnav">Menu</button>
        <nav class="gnav" id="gnav" aria-label="メンバーページ">
          <ul>
            ${PAGES.map((p) => `<li><a href="${p.href}"${p.key === current ? ' aria-current="page"' : ""}>${p.label}</a></li>`).join("")}
          </ul>
          <a class="circle-link" href="${CIRCLE_URL}">ている×ている ↗</a>
        </nav>
      </div>`;
    const btn = el.querySelector(".menu-btn");
    const setOpen = (open) => {
      el.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
      document.body.style.overflow = open ? "hidden" : "";
    };
    btn.addEventListener("click", () => setOpen(!el.classList.contains("menu-open")));
    el.querySelectorAll(".gnav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && el.classList.contains("menu-open")) setOpen(false); });
  }

  /* ===== フッター ===== */
  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.className = "site-footer";
    el.innerHTML = `
      <div class="wrap">
        <div class="footer-mark">${esc(MEMBER.roman)}</div>
        <div class="footer-grid">
          <ul class="footer-nav">
            ${PAGES.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join("")}
          </ul>
          <ul class="footer-sns">
            ${MEMBER.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("")}
          </ul>
        </div>
        <div class="notice">
          <p>当サイトに掲載しているイラスト・画像の無断転載、複製、自作発言を禁止します。</p>
          <p>Unauthorized reproduction of illustrations or claiming them as your own is prohibited.</p>
          <p>© ${new Date().getFullYear()} ${esc(MEMBER.name)} ／ <a href="${CIRCLE_URL}">ている×ている</a></p>
        </div>
      </div>`;
  }

  /* ===== 共通パーツ ===== */
  const labelRow = (tag, en, jp, side) => `
    <div class="label-row">
      <${tag} class="reveal"><span class="tw-target">${en}</span><small>${jp}</small></${tag}>
      ${side || ""}
    </div>`;

  const circlesList = () =>
    `<ul class="circles">${(MEMBER.circles || [])
      .filter((c) => c.listed !== false)
      .map((c) => `<li><span class="dot ${esc(c.id)}"></span><b>${esc(c.name)}</b>${esc(c.label)}・${esc(c.role)}</li>`)
      .join("")}</ul>`;

  function indexRow(x, i, opts) {
    const c = circleOf(x.circle);
    const inner = `
      ${opts.thumb ? `<span class="thumb"><img src="${esc(x.image)}" alt="" loading="lazy"></span>` : ""}
      <span class="t">${esc(x.title)}${tentative(x.tentative)}
        ${x.kana ? `<small>${esc(x.kana)}</small>` : ""}
        <small class="sp"><span class="dot ${esc(c.id)}"></span>${esc(c.name)}</small>
      </span>
      <span class="c"><span class="dot ${esc(c.id)}"></span>${esc(c.name)}</span>
      <span class="k">${esc(x.type)}</span>
      <span class="y num">${esc(x.year)}</span>`;
    return opts.button
      ? `<li class="index-row row-stagger" data-circle="${esc(x.circle)}"><button type="button" data-index="${i}" data-img="${esc(x.image)}" id="${esc(x.id)}">${inner}</button></li>`
      : `<li class="index-row row-stagger"><a href="works.html#${esc(x.id)}" data-img="${esc(x.image)}">${inner}</a></li>`;
  }

  /* 行に触れたとき、カーソル近くに作品画像を浮かべる（マウス操作のときだけ） */
  function initPeek(scope) {
    if (!scope || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const peek = document.createElement("div");
    peek.className = "peek";
    peek.setAttribute("aria-hidden", "true");
    peek.innerHTML = "<img alt=''>";
    document.body.appendChild(peek);
    const img = peek.querySelector("img");
    scope.querySelectorAll("[data-img]").forEach((row) => {
      row.addEventListener("mouseenter", () => { img.src = row.dataset.img; peek.classList.add("on"); });
      row.addEventListener("mouseleave", () => peek.classList.remove("on"));
      row.addEventListener("mousemove", (e) => { peek.style.left = e.clientX + 120 + "px"; peek.style.top = e.clientY + 40 + "px"; });
    });
  }

  /* ===== ライトボックス共通 ===== */
  const LIGHTBOX_HTML = `
    <div class="overlay" hidden role="dialog" aria-modal="true" aria-label="イラストの拡大表示">
      <span class="ov-count num"></span>
      <button class="ov-close" type="button">Close ×</button>
      <figure class="lb-figure"><img alt=""><figcaption></figcaption></figure>
      <button class="ov-prev" type="button">← Prev</button>
      <button class="ov-next" type="button">Next →</button>
    </div>`;

  function initLightbox(lb) {
    const img = lb.querySelector("img");
    const cap = lb.querySelector("figcaption");
    const count = lb.querySelector(".ov-count");
    let cur = 0, lastFocus = null;
    function show(i) {
      cur = (i + GALLERY.length) % GALLERY.length;
      const x = GALLERY[cur];
      img.src = x.src; img.alt = "";
      cap.innerHTML = `<span class="num">No.${galleryNo(cur)}</span>`;
      count.textContent = `${pad(cur + 1)} / ${pad(GALLERY.length)}`;
    }
    function open(i) {
      lastFocus = document.activeElement;
      show(i); lb.hidden = false;
      document.body.style.overflow = "hidden";
      lb.querySelector(".ov-close").focus();
    }
    function close() {
      lb.hidden = true; document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    lb.querySelector(".ov-prev").addEventListener("click", (e) => { e.stopPropagation(); show(cur - 1); });
    lb.querySelector(".ov-next").addEventListener("click", (e) => { e.stopPropagation(); show(cur + 1); });
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".ov-close")) close(); });
    document.addEventListener("keydown", (e) => {
      if (lb.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(cur - 1);
      if (e.key === "ArrowRight") show(cur + 1);
    });
    let sx = null;
    lb.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (sx === null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
      sx = null;
    });
    return open;
  }

  /* ===== TOP ===== */
  function renderTop() {
    main.innerHTML = `
      <section class="hero hero-canvas" aria-label="${esc(MEMBER.name)}">
        <div class="hero-copy">
          <div class="kicker en">${esc(MEMBER.kicker)}</div>
          <h1 aria-label="${esc(MEMBER.roman)}"></h1>
          <div>
            <p class="lead" aria-label="${esc(MEMBER.lead.join(''))}"></p>
            ${circlesList()}
          </div>
        </div>
        <div class="hero-art" id="hero-canvas-wrap" aria-hidden="true"></div>
        <div class="hero-name" aria-hidden="true">${esc(MEMBER.name)}<small>${esc(MEMBER.kana)}</small></div>
      </section>

      <section class="sec wrap" aria-label="Works">
        ${labelRow("h2", "Works", "作品目録", `<a class="side" href="works.html">View all →</a>`)}
        <ol class="index" id="top-index">
          ${WORKS.slice(0, 5).map((x, i) => indexRow(x, i, {})).join("")}
        </ol>
      </section>

      <section class="sec wrap" id="profile" aria-label="Profile">
        ${labelRow("h2", "Profile", "プロフィール")}
        ${profileHTML()}
      </section>`;
    initPeek(document.getElementById("top-index"));
    initTypewriter();
    initHeroCanvas();
  }

  /* ===== タイプライター ===== */
  function initTypewriter() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const h1 = document.querySelector(".hero-copy h1");
      if (h1) h1.innerHTML = esc(MEMBER.roman).replace(" ", "<span>") + "</span>";
      const leadEl = document.querySelector(".lead");
      if (leadEl) leadEl.innerHTML = MEMBER.lead.map(esc).join("<br>");
      const ul = document.querySelector(".hero-copy .circles");
      if (ul) ul.classList.add("visible");
      return;
    }

    function typeText(container, text, onDone) {
      let i = 0;
      (function tick() {
        if (i < text.length) {
          container.appendChild(document.createTextNode(text[i++]));
          setTimeout(tick, 50);
        } else {
          if (onDone) onDone();
        }
      })();
    }

    setTimeout(() => {
      // 1. h1: "Nanasaki" → pause → span " Nagi"
      const h1 = document.querySelector(".hero-copy h1");
      if (!h1) return;

      // タイプ前に最終的な高さを測って確保（レイアウトシフト防止）
      const parts = MEMBER.roman.split(" ");
      const first = parts[0], second = parts[1];
      h1.innerHTML = second ? `${esc(first)}<span> ${esc(second)}</span>` : esc(first);
      h1.style.minHeight = h1.offsetHeight + "px";
      h1.innerHTML = "";

      const leadEl = document.querySelector(".lead");
      if (leadEl) {
        leadEl.innerHTML = MEMBER.lead.map(esc).join("<br>");
        leadEl.style.minHeight = leadEl.offsetHeight + "px";
        leadEl.innerHTML = "";
      }

      function afterH1Done() {
        // 2. lead: 行ごとにタイプ
        setTimeout(() => {
          const leadEl = document.querySelector(".lead");
          if (!leadEl) return;
          let lineIdx = 0, charIdx = 0;
          (function typeLead() {
            if (lineIdx >= MEMBER.lead.length) {
              const c = leadEl.closest(".hero-copy");
              if (c) { const ul = c.querySelector(".circles"); if (ul) setTimeout(() => ul.classList.add("visible"), 200); }
              return;
            }
            const line = MEMBER.lead[lineIdx];
            if (charIdx === 0 && lineIdx > 0) leadEl.appendChild(document.createElement("br"));
            if (charIdx < line.length) {
              leadEl.appendChild(document.createTextNode(line[charIdx++]));
              setTimeout(typeLead, 50);
            } else { lineIdx++; charIdx = 0; setTimeout(typeLead, 200); }
          })();
        }, 200);
      }

      typeText(h1, first, () => {
        if (second) {
          setTimeout(() => {
            const span = document.createElement("span");
            h1.appendChild(span);
            typeText(span, " " + second, afterH1Done);
          }, 200);
        } else {
          afterH1Done();
        }
      });
    }, 900);
  }

  /* ===== PROFILE（トップに掲載） ===== */
  function profileHTML() {
    const P = PROFILE;
    return `
      <div class="profile">
        <div class="profile-side reveal">
          ${MEMBER.avatar ? `<div class="avatar"><img src="${esc(MEMBER.avatar)}" alt="${esc(MEMBER.name)}"></div>` : ""}
          <div class="name">${esc(MEMBER.name)}</div>
          <div class="roman en">${esc(MEMBER.roman)}</div>
        </div>
        <div class="profile-main">
          <div class="bio reveal">${P.bio.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          <dl class="facts">
            <div class="fact reveal"><dt>Circles<small>サークル</small></dt><dd>${circlesList()}</dd></div>
            <div class="fact reveal"><dt>History<small>活動歴</small></dt><dd>
              <ol class="history">${P.history.map((h) => `<li><span class="num">${esc(h.date)}</span><span>${esc(h.text)}${tentative(h.tentative)}</span></li>`).join("")}</ol>
            </dd></div>
            ${P.commission ? `<div class="fact reveal"><dt>Commission<small>ご依頼について</small></dt><dd>
              <p>${esc(P.commission.text)}${tentative(P.commission.tentative)}</p>
              ${P.commission.link ? `<a class="text-link" href="${esc(P.commission.link.url)}" target="_blank" rel="noopener">${esc(P.commission.link.label)} →</a>` : ""}
            </dd></div>` : ""}
            ${P.tools ? `<div class="fact reveal"><dt>Tools<small>使用ツール</small></dt><dd>
              <ul class="inline-list">${P.tools.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>${tentative(P.tools.tentative)}
            </dd></div>` : ""}
            <div class="fact reveal"><dt>Links<small>リンク</small></dt><dd>
              <ul class="inline-list links">${MEMBER.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a><span class="num">${esc(l.handle)}</span></li>`).join("")}</ul>
            </dd></div>
          </dl>
        </div>
      </div>`;
  }

  /* ===== WORKS ===== */
  function renderWorks() {
    const counts = { all: WORKS.length };
    WORKS.forEach((x) => { counts[x.circle] = (counts[x.circle] || 0) + 1; });
    const filters = [{ id: "all", name: "すべて" }, ...(MEMBER.circles || [])];
    main.innerHTML = `
      <div class="wrap page-intro">
        ${labelRow("h1", "Works", "作品目録", `<span class="side">${pad(WORKS.length)} works</span>`)}
        <p>サークル「ている×ている」で制作した作品です。</p>
        <div class="filters" role="group" aria-label="サークルで絞り込む">
          ${filters.map((f, i) => `<button type="button" class="filter" data-filter="${esc(f.id)}" aria-pressed="${i === 0}">${f.id !== "all" ? `<span class="dot ${esc(f.id)}"></span>` : ""}${esc(f.name)}<span class="num">${pad(counts[f.id] || 0)}</span></button>`).join("")}
        </div>
      </div>
      <div class="wrap sec" style="padding-top:0">
        <ol class="index works-index" id="works-index">
          ${WORKS.map((x, i) => indexRow(x, i, { button: true, thumb: true })).join("")}
        </ol>
      </div>
      <div class="overlay" id="work-detail" hidden role="dialog" aria-modal="true" aria-label="作品の詳細"></div>`;

    main.querySelectorAll(".filter").forEach((b) => b.addEventListener("click", () => {
      const f = b.dataset.filter;
      main.querySelectorAll(".filter").forEach((o) => o.setAttribute("aria-pressed", String(o === b)));
      main.querySelectorAll(".works-index .index-row").forEach((r) => {
        r.hidden = !(f === "all" || r.dataset.circle === f);
        r.classList.remove("pre-reveal");
      });
    }));

    const ov = document.getElementById("work-detail");
    let lastFocus = null;
    function open(i) {
      const x = WORKS[i];
      const c = circleOf(x.circle);
      lastFocus = document.activeElement;
      ov.innerHTML = `
        <button class="ov-close" type="button">Close ×</button>
        <article class="detail">
          <div class="detail-img"><img src="${esc(x.image)}" alt="${esc(x.title)}"></div>
          <div class="detail-body">
            <div class="meta"><span><span class="dot ${esc(c.id)}"></span>${esc(c.name)}</span><span>${esc(x.type)}</span><span class="num">${esc(x.year)}</span></div>
            <h2>${esc(x.title)}${tentative(x.tentative)}</h2>
            ${x.kana ? `<div class="kana">${esc(x.kana)}</div>` : ""}
            <dl>
              ${x.role ? `<div><dt>Role</dt><dd>${esc(x.role)}</dd></div>` : ""}
              ${x.credits ? `<div><dt>Credit</dt><dd>${esc(x.credits)}</dd></div>` : ""}
            </dl>
            <p>${esc(x.text)}</p>
            ${x.link ? `<a class="text-link" href="${esc(x.link.url)}" target="_blank" rel="noopener">${esc(x.link.label)} →</a>` : ""}
          </div>
        </article>`;
      ov.hidden = false;
      document.body.style.overflow = "hidden";
      ov.querySelector(".ov-close").focus();
    }
    function close() {
      ov.hidden = true;
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    main.querySelectorAll(".works-index button").forEach((b) => b.addEventListener("click", () => open(+b.dataset.index)));
    ov.addEventListener("click", (e) => { if (e.target === ov || e.target.closest(".ov-close")) close(); });
    document.addEventListener("keydown", (e) => { if (!ov.hidden && e.key === "Escape") close(); });

    const idx = WORKS.findIndex((x) => x.id === location.hash.slice(1));
    if (idx >= 0) open(idx);
  }

  /* ===== GALLERY ===== */
  function renderGallery() {
    main.innerHTML = `
      <div class="wrap page-intro">
        ${labelRow("h1", "Gallery", "イラスト", `<span class="side">${pad(GALLERY.length)} pieces</span>`)}
      </div>
      <div class="wrap sec" style="padding-top:0">
        <ul class="masonry">
          ${GALLERY.map((x, i) => `
            <li class="reveal"><button type="button" data-index="${i}" aria-label="${esc(x.title)}を拡大">
              <div class="img"><img src="${esc(x.src)}" alt="${esc(x.title)}" loading="lazy"></div>
              <div class="cap"><span class="num">No.${galleryNo(i)}</span><span class="num">${esc(x.year)}</span></div>
            </button></li>`).join("")}
        </ul>
      </div>
      ${LIGHTBOX_HTML}`;

    const lb = main.querySelector(".overlay");
    lb.id = "lightbox";
    const openLb = initLightbox(lb);
    main.querySelectorAll(".masonry button").forEach((b) => b.addEventListener("click", () => openLb(+b.dataset.index)));
  }

  /* ===== ローディング（トップのみ。ページ内リンクで来たときは出さない） ===== */
  function initLoading() {
    const screen = document.getElementById("loading");
    const bar = document.getElementById("loading-bar");
    if (!screen || !bar) return;
    if (location.hash) { screen.classList.add("hidden"); return; }
    let prog = 0;
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      bar.style.width = "100%";
      setTimeout(() => screen.classList.add("hidden"), 450);
    };
    const t = setInterval(() => {
      prog += Math.random() * 16 + 4;
      if (prog >= 100) { clearInterval(t); done(); } else { bar.style.width = prog + "%"; }
    }, 70);
    setTimeout(done, 2500);
  }

  /* ===== スクロール表示：読み込み時に画面外にある要素だけ、表示時にふわっと出す ===== */
  function initReveal() {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = [...document.querySelectorAll(".reveal")].filter((el) => el.getBoundingClientRect().top > window.innerHeight);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("revealed"); en.target.classList.remove("pre-reveal"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    els.forEach((el) => { el.classList.add("pre-reveal"); io.observe(el); });
  }

  /* ===== セクション見出しタイプライター ===== */
  function initLabelTypewriters() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = [...document.querySelectorAll(".tw-target")];
    if (!targets.length) return;

    const cancels = new Map();

    function typeInto(el) {
      if (cancels.has(el)) { cancels.get(el)(); }
      const text = el.dataset.twText;
      el.textContent = "";
      let i = 0, cancelled = false;
      cancels.set(el, () => { cancelled = true; });
      (function type() {
        if (cancelled || i >= text.length) return;
        el.appendChild(document.createTextNode(text[i++]));
        setTimeout(type, 90);
      })();
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          typeInto(entry.target);
        } else {
          if (cancels.has(entry.target)) { cancels.get(entry.target)(); }
          entry.target.textContent = "";
        }
      });
    }, { rootMargin: "0px 0px -5% 0px" });

    targets.forEach((el) => {
      el.dataset.twText = el.textContent;
      io.observe(el);
    });
  }

  /* ===== ラベル下線アニメーション ===== */
  function initLabelUnderlines() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".label-row").forEach((el) => el.classList.add("line-drawn"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("line-drawn"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -5% 0px" });
    document.querySelectorAll(".label-row").forEach((el) => io.observe(el));
  }

  /* ===== Worksリスト スタッガーフェードイン ===== */
  function initRowReveal() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".row-stagger").forEach((el) => el.classList.add("row-animated"));
      return;
    }
    const lists = new Set([...document.querySelectorAll(".row-stagger")].map((r) => r.parentElement));
    lists.forEach((list) => {
      const rows = [...list.querySelectorAll(".row-stagger")];
      const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          rows.forEach((r, i) => { r.style.animationDelay = `${i * 70}ms`; r.classList.add("row-animated"); });
          io.disconnect();
        }
      }, { rootMargin: "0px 0px -5% 0px" });
      if (rows[0]) io.observe(rows[0]);
    });
  }

  /* ===== ヒーローキャンバス（マトリックス風テキスト） ===== */
  function initHeroCanvas() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wrap = document.getElementById("hero-canvas-wrap");
    if (!wrap) return;

    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;display:block;";
    wrap.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Perseid. 本文から抽出した文字
    const src = "鬱蒼とした背の高い草をかき分け緩やかな斜面登っていく水平線が太陽飲み込んでから数時間経っているが未だに真昼灼熱面影残している涼しげ聞こえる虫音さえ今は多少慰めにもならない肌へばりつく汗拭い空見上げる茂りに茂った樹冠隙間から白く光星覗く危ないから子供だけで山に入ってはいけないと言われているそんな忠告など忘れただ夢中なってこんなところまでやってきたあの向こう側の星に用があった触れる感触かはたまた刺されたかむずむずとした感覚振り切るようにして一歩もう進むと突然開けた暑さと興奮ですっかり上気した体には湿気含んだぬるい風ですら心地よく感じるそこ広がっていたのは満天星空吸い込まれるような宵闇幾つも宝石ちりばめられている家窓越し夜空よりもずっとずっと綺麗で手伸ばせば届いてしまいそうなほど近くに煌めく見とれていると一本白線すうっと走っていったその線は二本三本と数を増していきやがて激しい雨のように降り注ぐわぁ思わず声漏れる本で見たような流星群写真とは全然違う目の前で次々と眩い引かれては消えていくそんな光景奪われつい来た本当理由忘れかけていた目的思い出すと慌てて装置取り出すおもちゃのトランシーバー小さなライトを針金でぐるぐる巻きつけたり最近拾った綺麗な石をくっつけたそれを耳当て同じく作ったアンテナ宙掲げるうちゅうじんさんきこえますかー大きな声で叫ぶ宇宙人と仲良くなりたいいつからか思い続けてきた夢まるで荒唐無稽な願いだが降る今夜なら叶う気がしてこんなところまでやってきたのだが無論どれだけ叫んでも夜空からの返事は沈黙のみだった流れ願いを叶えてくれることもなければそれに乗って宇宙人がやってくるなんておとぎ話のような事起こるはずがないのだ流星の雨脚落ち着いてきたころ諦めて掲げていたアンテナを下ろすその時だった装置付けた石がうっすら光っていることに気づいたそれに呼応するように夜空にひと際明るい星輝いたかと思えばその光弱くなり見間違いかと瞬きをしていると再び取り戻す浮かぶどの星より明るいそれは流星とも違ってその場で明滅続けているあれはきっとUFOに違いないやっと声が届いたんだ仕舞いかけていた装置をもう一度掲げUFOの明滅に合わせるようにライトの電源をオンオフするうちゅうじんさんですかきこえたらお返事ください返事が聞こえたいや正確には聞こえたのではない頭の中に直接ノイズ交じり音声流れ込んでくるきこえるそこにいるのそれに答えるように手振り上げて必死で上げるいるよここにいるきみはだあれこっちにおいでよいっしょにあそぼうわたしはごめんねいまはそっちにはいけないのでもいつかまたにくるからそのときはうんまってるだからもしまた会えたらきっとおともだちにうん必ず気づけば明滅する点は見えなくなっていた";
    const SIZE = 20;
    const COUNT = 10;
    let W, H, streams;

    function makeStreams() {
      const spacing = W / COUNT;
      return Array.from({ length: COUNT }, (_, i) => ({
        x: spacing * (i + 0.15 + Math.random() * 0.7),
        y: -(Math.random() * (H / SIZE)),
        ci: Math.floor(i * src.length / COUNT),
        speed: 0.12 + Math.random() * 0.06,
        lastRow: -1
      }));
    }

    function resize() {
      W = canvas.width = wrap.offsetWidth;
      H = canvas.height = wrap.offsetHeight;
      streams = makeStreams();
      ctx.fillStyle = "#f7f8fa";
      ctx.fillRect(0, 0, W, H);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    function step() {
      ctx.fillStyle = "rgba(247,248,250,0.025)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${SIZE}px "Zen Kaku Gothic New","Hiragino Sans",monospace`;
      for (const s of streams) {
        if (s.y < 0) { s.y += s.speed; continue; }
        const row = s.y | 0;
        const yPx = row * SIZE;
        if (yPx < H && row !== s.lastRow) {
          ctx.fillStyle = "rgba(38,37,45,0.9)";
          ctx.fillText(src[s.ci++ % src.length], s.x, yPx);
          s.lastRow = row;
        }
        s.y += s.speed;
        if (s.y * SIZE > H + SIZE && Math.random() > 0.985) {
          s.y = -(Math.random() * 15);
        }
      }
    }
    setInterval(step, 50);
  }

  renderHeader();
  if (main) ({ top: renderTop, works: renderWorks }[current] || (() => {}))();
  renderFooter();
  initLoading();
  initReveal();
  initLabelTypewriters();
  initLabelUnderlines();
  initRowReveal();
})();
