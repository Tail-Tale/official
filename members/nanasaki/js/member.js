(function () {
  const CIRCLE_URL = "https://tail-tale.github.io/official/";
  const PAGES = [
    { key: "top", label: "Top", href: "index.html" },
    { key: "works", label: "Works", href: "works.html" },
    { key: "gallery", label: "Gallery", href: "gallery.html" },
    { key: "profile", label: "Profile", href: "index.html#profile" }
  ];

  const main = document.getElementById("page");
  const current = main ? main.dataset.page : "";

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const circleOf = (id) => (MEMBER.circles || []).find((c) => c.id === id) || { id: "", name: "" };
  const galleryNo = (i) => pad(GALLERY.length - i);

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
          <a class="circle-link" href="${CIRCLE_URL}"><img src="../../images/logo.png" alt="ている×ている" width="400" height="140"></a>
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

  function renderFooter() {
    const el = document.getElementById("site-footer");
    if (!el) return;
    el.className = "site-footer";
    el.innerHTML = `
      <div class="wrap">
        <div class="footer-head">
          <img class="footer-mark" src="${HAND_NAME.src}" alt="${esc(MEMBER.roman)}" width="1500" height="416" loading="lazy">
          <a class="footer-logo" href="${CIRCLE_URL}"><img src="../../images/logo.png" alt="ている×ている" width="400" height="140"></a>
        </div>
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
          <p>© ${new Date().getFullYear()} ${esc(MEMBER.name)} ／ 個人サークル ななぶさき ／ <a href="${CIRCLE_URL}">ている×ている</a></p>
        </div>
      </div>`;
  }

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
      ${opts.thumb ? `<span class="thumb">${x.image ? `<img src="${esc(x.image)}" alt="" loading="lazy">` : `<span class="thumb-noimg">NO<br>IMAGE</span>`}</span>` : ""}
      <span class="t">${esc(x.title)}
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

  function initPeek(scope) {
    if (!scope || !matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const peek = document.createElement("div");
    peek.className = "peek";
    peek.setAttribute("aria-hidden", "true");
    peek.innerHTML = "<img alt=''>";
    document.body.appendChild(peek);
    const img = peek.querySelector("img");
    scope.querySelectorAll("[data-img]").forEach((row) => {
      row.addEventListener("mouseenter", () => { if (!row.dataset.img) return; img.src = row.dataset.img; peek.classList.add("on"); });
      row.addEventListener("mouseleave", () => peek.classList.remove("on"));
      row.addEventListener("mousemove", (e) => { peek.style.left = e.clientX + 120 + "px"; peek.style.top = e.clientY + 40 + "px"; });
    });
  }

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

  function renderTop() {
    const g = GALLERY.slice(0, 5);
    main.innerHTML = `
      <section class="hero" aria-label="${esc(MEMBER.name)}">
        <div class="hero-art">
          <img src="${esc(MEMBER.kv)}" alt="${esc(MEMBER.name)}のイラスト">
        </div>
        <div class="hero-copy">
          <div class="kicker en">${esc(MEMBER.kicker)}</div>
          <h1 aria-label="${esc(MEMBER.roman)}"></h1>
          <div>
            <p class="lead" aria-label="${esc(MEMBER.lead.join(''))}"></p>
            ${circlesList()}
          </div>
        </div>
        <div class="hero-name" aria-hidden="true">${esc(MEMBER.name)}<small>${esc(MEMBER.kana)}</small></div>
      </section>

      <a class="nnb-inline" href="https://x.com/nanasaki_sub/status/2107063255373885559" target="_blank" rel="noopener" aria-label="ななぶさき 名探偵プリキュア あんみく漫画本">
        <div class="nnb-inline-text">
          <p class="nnb-bnr-label">参加予定イベント</p>
          <!-- イベント終わったら差し替える -->
          <p class="nnb-bnr-date">2027.01.16</p>
          <p class="nnb-bnr-event">レインボーフレーバー37</p>
        </div>
        <div class="nnb-inline-img">
          <img src="images/nanabusaki_bnr.webp" alt="ななぶさき 名探偵プリキュア あんみく漫画本" loading="lazy">
        </div>
      </a>

      <section class="sec wrap" aria-label="Works">
        ${labelRow("h2", "Works", "作品目録", `<a class="side" href="works.html">View all →</a>`)}
        <ol class="index top-works-scroll" id="top-index">
          ${WORKS.map((x, i) => indexRow(x, i, {})).join("")}
        </ol>
      </section>

      <section class="sec wrap" aria-label="Gallery">
        ${labelRow("h2", "Gallery", "イラスト", `<a class="side" href="gallery.html">View all →</a>`)}
        <div class="g-feature" id="top-gallery">
          ${g[0] ? `<button type="button" class="big reveal" data-index="0" aria-label="No.${galleryNo(0)}を拡大"><img src="${esc(g[0].src)}" alt=""><span class="cap num">No.${galleryNo(0)}</span></button>` : ""}
          <div class="smalls">
            ${g.slice(1).map((x, j) => `<button type="button" class="reveal" data-index="${j + 1}" aria-label="No.${galleryNo(j + 1)}を拡大"><img src="${esc(x.src)}" alt="" loading="lazy"><span class="cap num">No.${galleryNo(j + 1)}</span></button>`).join("")}
          </div>
        </div>
      </section>

      <section class="sec wrap" id="profile" aria-label="Profile">
        ${labelRow("h2", "Profile", "プロフィール")}
        ${profileHTML()}
      </section>
      ${LIGHTBOX_HTML}`;
    initPeek(document.getElementById("top-index"));
    const topLb = main.querySelector(".overlay");
    topLb.id = "top-lightbox";
    const openTopLb = initLightbox(topLb);
    main.querySelectorAll("#top-gallery button[data-index]").forEach((b) => b.addEventListener("click", () => openTopLb(+b.dataset.index)));
    initTypewriter();
  }

  function handNameHTML() {
    const [x, y, w, h] = HAND_NAME.box;
    const box = `x="${x}" y="${y}" width="${w}" height="${h}"`;
    return `
      <svg class="hand-name" viewBox="${x} ${y} ${w} ${h}" aria-hidden="true">
        <mask id="hand-name-mask" maskUnits="userSpaceOnUse" ${box}>
          ${HAND_NAME.strokes.map((d) => `<path d="${d}" pathLength="1" stroke-dasharray="1 2" stroke-dashoffset="1"/>`).join("")}
        </mask>
        <image href="${HAND_NAME.src}" ${box} mask="url(#hand-name-mask)"/>
      </svg>`;
  }

  function drawHandName(svg) {
    const plan = [];
    let at = 0;
    [...svg.querySelectorAll("mask path")].forEach((path, i) => {
      if (i) at += HAND_NAME.breaks[i] ?? 25;
      const dur = 40 + path.getTotalLength() * 0.08;
      plan.push({ path, at, dur });
      at += dur;
    });

    const ease = (t) => t * t * (3 - 2 * t);
    let start, next = 0;
    (function frame(now) {
      start ??= now;
      const t = now - start;
      for (; next < plan.length && plan[next].at + plan[next].dur <= t; next++) {
        plan[next].path.style.stroke = "#fff";
        plan[next].path.setAttribute("stroke-dashoffset", 0);
      }
      const cur = plan[next];
      if (cur && cur.at <= t) {
        cur.path.style.stroke = "#fff";
        cur.path.setAttribute("stroke-dashoffset", 1 - ease((t - cur.at) / cur.dur));
      }
      if (next < plan.length) { requestAnimationFrame(frame); return; }
      svg.querySelector("image").removeAttribute("mask");
      svg.nextElementSibling.classList.add("visible");
    })(performance.now());
  }

  function initTypewriter() {
    const h1 = document.querySelector(".hero-copy h1");
    if (h1) h1.innerHTML = `${handNameHTML()}<span class="hand-roman" aria-hidden="true">${esc(MEMBER.roman)}</span>`;

    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (h1) {
        h1.querySelector("image").removeAttribute("mask");
        h1.querySelector(".hand-roman").classList.add("visible");
      }
      const leadEl = document.querySelector(".lead");
      if (leadEl) leadEl.innerHTML = MEMBER.lead.map(esc).join("<br>");
      const ul = document.querySelector(".hero-copy .circles");
      if (ul) ul.classList.add("visible");
      return;
    }

    const lead = document.querySelector(".lead");
    if (lead) {
      lead.innerHTML = MEMBER.lead.map(esc).join("<br>");
      lead.style.minHeight = lead.offsetHeight + "px";
      lead.innerHTML = "";
    }

    function typeLead() {
      const leadEl = document.querySelector(".lead");
      if (!leadEl) return;
      let lineIdx = 0, charIdx = 0;
      (function tick() {
        if (lineIdx >= MEMBER.lead.length) {
          const c = leadEl.closest(".hero-copy");
          if (c) { const ul = c.querySelector(".circles"); if (ul) setTimeout(() => ul.classList.add("visible"), 200); }
          return;
        }
        const line = MEMBER.lead[lineIdx];
        if (charIdx === 0 && lineIdx > 0) leadEl.appendChild(document.createElement("br"));
        if (charIdx < line.length) {
          leadEl.appendChild(document.createTextNode(line[charIdx++]));
          setTimeout(tick, 50);
        } else { lineIdx++; charIdx = 0; setTimeout(tick, 200); }
      })();
    }

    const ink = new Image();
    ink.src = HAND_NAME.src;
    Promise.all([ink.decode().catch(() => {}), pageShown]).then(() => {
      setTimeout(() => {
        drawHandName(h1.firstElementChild);
        typeLead();
      }, 120);
    });
  }

  function profileHTML() {
    const P = PROFILE;
    return `
      <div class="profile">
        <div class="profile-side reveal">
          <div class="avatar"><img src="${esc(MEMBER.avatar)}" alt="${esc(MEMBER.name)}"></div>
          <div class="name">${esc(MEMBER.name)}</div>
          <div class="roman en">${esc(MEMBER.roman)}</div>
        </div>
        <div class="profile-main">
          <div class="bio reveal">${P.bio.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
          <dl class="facts">
            <div class="fact reveal"><dt>Circles<small>サークル</small></dt><dd>${circlesList()}</dd></div>
            <div class="fact reveal"><dt>History<small>活動歴</small></dt><dd>
              <ol class="history">${P.history.map((h) => `<li><span class="num">${esc(h.date)}</span><span>${esc(h.text)}</span></li>`).join("")}</ol>
            </dd></div>
            <div class="fact reveal"><dt>Commission<small>ご依頼について</small></dt><dd>
              <p>${esc(P.commission.text)}</p>
              ${P.commission.link ? `<a class="text-link" href="${esc(P.commission.link.url)}" target="_blank" rel="noopener">${esc(P.commission.link.label)} →</a>` : ""}
            </dd></div>
            <div class="fact reveal"><dt>Tools<small>使用ツール</small></dt><dd>
              <ul class="inline-list">${P.tools.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            </dd></div>
            <div class="fact reveal"><dt>Links<small>リンク</small></dt><dd>
              <ul class="inline-list links">${MEMBER.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a><span class="num">${esc(l.handle)}</span></li>`).join("")}</ul>
            </dd></div>
          </dl>
        </div>
      </div>`;
  }

  function renderWorks() {
    const counts = { all: WORKS.length };
    WORKS.forEach((x) => { counts[x.circle] = (counts[x.circle] || 0) + 1; });
    const filters = [{ id: "all", name: "すべて" }, ...(MEMBER.circles || [])];
    main.innerHTML = `
      <div class="wrap page-intro">
        ${labelRow("h1", "Works", "作品目録", `<span class="side">${pad(WORKS.length)} works</span>`)}
        <p>個人サークル「ななぶさき」と、参加サークル「ている×ている」で制作した作品です。</p>
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
          ${x.image ? `<div class="detail-img"><img src="${esc(x.image)}" alt="${esc(x.title)}"></div>` : ""}
          <div class="detail-body">
            <div class="meta"><span><span class="dot ${esc(c.id)}"></span>${esc(c.name)}</span><span>${esc(x.type)}</span><span class="num">${esc(x.year)}</span></div>
            <h2>${esc(x.title)}</h2>
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

  function renderGallery() {
    main.innerHTML = `
      <div class="wrap page-intro">
        ${labelRow("h1", "Gallery", "イラスト", `<span class="side">${pad(GALLERY.length)} pieces</span>`)}
      </div>
      <div class="wrap sec" style="padding-top:0">
        <ul class="masonry">
          ${GALLERY.map((x, i) => `
            <li class="reveal"><button type="button" data-index="${i}" aria-label="No.${galleryNo(i)}を拡大">
              <div class="img"><img src="${esc(x.src)}" alt="" loading="lazy"></div>
              <div class="cap"><span class="num">No.${galleryNo(i)}</span></div>
            </button></li>`).join("")}
        </ul>
      </div>
      ${LIGHTBOX_HTML}`;

    const lb = main.querySelector(".overlay");
    lb.id = "lightbox";
    const openLb = initLightbox(lb);
    main.querySelectorAll(".masonry button").forEach((b) => b.addEventListener("click", () => openLb(+b.dataset.index)));
  }

  let showPage;
  const pageShown = new Promise((resolve) => { showPage = resolve; });

  function initLoading() {
    const screen = document.getElementById("loading");
    const bar = document.getElementById("loading-bar");
    if (!screen || !bar) { showPage(); return; }
    if (location.hash) { screen.classList.add("hidden"); showPage(); return; }
    let prog = 0;
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      bar.style.width = "100%";
      setTimeout(() => { screen.classList.add("hidden"); showPage(); }, 450);
    };
    const t = setInterval(() => {
      prog += Math.random() * 16 + 4;
      if (prog >= 100) { clearInterval(t); done(); } else { bar.style.width = prog + "%"; }
    }, 70);
    setTimeout(done, 2500);
  }

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
        // 速すぎると読めない
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

  function initNanabBanner() {
    const bnr = document.createElement("a");
    bnr.id = "nnbBnr";
    bnr.className = "nnb-bnr";
    bnr.href = "https://x.com/nanasaki_sub/status/2107063255373885559";
    bnr.target = "_blank";
    bnr.rel = "noopener";
    bnr.setAttribute("aria-label", "ななぶさき 名探偵プリキュア あんみく漫画本");
    bnr.innerHTML = `
      <div class="nnb-bnr-body">
        <div class="nnb-bnr-text">
          <p class="nnb-bnr-label">参加予定イベント</p>
          <p class="nnb-bnr-date">2027.01.16</p>
          <p class="nnb-bnr-event">レインボーフレーバー37</p>
        </div>
        <div class="nnb-bnr-img">
          <img src="images/nanabusaki_bnr.webp" alt="ななぶさき 名探偵プリキュア あんみく漫画本">
        </div>
      </div>
      <span class="nnb-bnr-close" id="nnbBnrClose" role="button" aria-label="閉じる">&times;</span>`;
    document.body.appendChild(bnr);

    const closeBtn = document.getElementById("nnbBnrClose");
    let closed = false;
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closed = true;
      bnr.classList.remove("show");
      bnr.classList.add("hidden");
    });

    const hero = document.querySelector(".hero");
    if (!hero) return;

    let shown = false;
    function check() {
      if (closed) return;
      const inHero = hero.getBoundingClientRect().bottom > window.innerHeight * 0.7;
      if (inHero && !shown) { shown = true; bnr.classList.add("show"); }
      else if (!inHero && shown) { shown = false; bnr.classList.remove("show"); }
    }
    window.addEventListener("scroll", check, { passive: true });
    setTimeout(check, 1000);
  }

  renderHeader();
  if (main) ({ top: renderTop, works: renderWorks, gallery: renderGallery }[current] || (() => {}))();
  renderFooter();
  initLoading();
  initReveal();
  initLabelTypewriters();
  initLabelUnderlines();
  initRowReveal();
  initNanabBanner();
})();
