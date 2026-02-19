/* ===================================================
   news-detail.js — ている×ている NEWS詳細ページ スクリプト
   URLパラメータ ?id=xxx に基づき news.json から記事を描画します
   =================================================== */

const TAG_MAP = {
  event:   { label: 'イベント', cls: 'tag-event' },
  release: { label: '新刊',     cls: 'tag-release' },
  info:    { label: 'お知らせ', cls: 'tag-info' }
};

// パンくずリストのタイトルを更新
function setBreadcrumb(title) {
  const el = document.getElementById('breadcrumb-title');
  if (el) el.textContent = title;
}

// ページタイトルを更新
function setPageTitle(title) {
  document.title = title + ' | NEWS | ている×ている';
}

// EVENT INFO ボックスをレンダリング
function renderEventInfo(eventInfo) {
  if (!eventInfo || Object.keys(eventInfo).length === 0) return '';
  const rows = Object.entries(eventInfo).map(([label, value]) => `
    <div class="info-row">
      <div class="info-label">${label}</div>
      <div class="info-value">${value}</div>
    </div>
  `).join('');

  return `
    <div class="info-box">
      <div class="info-box-header">EVENT INFO</div>
      <div class="info-box-body">${rows}</div>
    </div>
  `;
}

// 本文をレンダリング（改行を <br> に変換、段落ごとに <p> タグ）
function renderBody(body, eventInfo) {
  if (!body || body.length === 0) return '<p>（本文なし）</p>';

  // 最初の段落、EVENT INFOボックス（あれば）、残りの段落の順で構成
  const paragraphs = body.map(text => {
    const html = text.replace(/\n/g, '<br>');
    return `<p>${html}</p>`;
  });

  if (eventInfo && Object.keys(eventInfo).length > 0) {
    // 最初の段落 → EVENT INFO → 残り段落
    const first = paragraphs.slice(0, 1).join('');
    const rest  = paragraphs.slice(1).join('');
    return first + renderEventInfo(eventInfo) + rest;
  }

  return paragraphs.join('');
}

// X（Twitter）シェアリンク
function buildShareUrl(title) {
  const text = encodeURIComponent(title + ' | ている×ている');
  const url  = encodeURIComponent(window.location.href);
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
}

// 前後ナビゲーション
function renderPostNav(news, currentIndex) {
  const prev = currentIndex < news.length - 1 ? news[currentIndex + 1] : null;
  const next = currentIndex > 0               ? news[currentIndex - 1] : null;

  const prevHtml = prev
    ? `<a href="news-detail.html?id=${prev.id}" class="post-nav-item prev">
         <span class="post-nav-dir">← 前の記事</span>
         <span class="post-nav-title">${prev.title}</span>
       </a>`
    : `<div class="post-nav-placeholder"></div>`;

  const nextHtml = next
    ? `<a href="news-detail.html?id=${next.id}" class="post-nav-item next">
         <span class="post-nav-dir">次の記事 →</span>
         <span class="post-nav-title">${next.title}</span>
       </a>`
    : `<div class="post-nav-placeholder"></div>`;

  return prevHtml + nextHtml;
}

// エラー表示
function showError(message) {
  const article = document.getElementById('article-area');
  if (article) {
    article.innerHTML = `<p style="color:#7a6560;padding:2rem 0;">${message}</p>`;
  }
}

// メイン処理
async function loadArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    showError('記事IDが指定されていません。');
    return;
  }

  let data;
  try {
    const res = await fetch('news.json');
    data = await res.json();
  } catch (e) {
    showError('記事の読み込みに失敗しました。');
    console.error('news.json の読み込みに失敗しました:', e);
    return;
  }

  const news = data.news;
  const index = news.findIndex(item => item.id === id);

  if (index === -1) {
    showError('指定された記事が見つかりませんでした。');
    return;
  }

  const item = news[index];
  const tag  = TAG_MAP[item.tag] || { label: item.tag, cls: 'tag-info' };

  // ページタイトルとパンくず
  setPageTitle(item.title);
  setBreadcrumb(item.title);

  // 記事本体
  const articleArea = document.getElementById('article-area');
  if (articleArea) {
    articleArea.innerHTML = `
      <article class="article">
        <div class="article-meta">
          <span class="article-date">${item.date}</span>
          <span class="tag ${tag.cls}">${tag.label}</span>
        </div>
        <h2 class="article-title">${item.title}</h2>
        <div class="article-divider"></div>
        <div class="article-body">
          ${renderBody(item.body, item.eventInfo)}
        </div>
        <div class="share-section">
          <div class="share-label">SHARE</div>
          <a href="${buildShareUrl(item.title)}" target="_blank" rel="noopener" class="share-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            ポストする
          </a>
        </div>
      </article>
    `;
  }

  // 前後ナビ
  const postNav = document.getElementById('post-nav');
  if (postNav) {
    postNav.innerHTML = renderPostNav(news, index);
  }
}

document.addEventListener('DOMContentLoaded', loadArticle);
