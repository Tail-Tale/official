/* ===== news-detail.js ===== */

/* タグのクラス名マッピング */
const TAG_CLASS = {
  event:   'tag-event',
  release: 'tag-release',
  info:    'tag-news',
  news:    'tag-news'
};

async function loadArticle() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');

  let news;
  try {
    const res = await fetch('news.json');
    if (!res.ok) throw new Error('news.json not found');
    news = await res.json();
  } catch (e) {
    showError('ニュースデータの読み込みに失敗しました。');
    return;
  }

  const idx = news.findIndex(n => n.id === id);
  if (idx === -1) {
    showError('記事が見つかりませんでした。');
    return;
  }

  const item = news[idx];
  const prev = news[idx + 1] || null;
  const next = news[idx - 1] || null;

  /* ページタイトル */
  document.title = `${item.title} | ている×ている`;

  /* パンくず */
  const bc = document.getElementById('breadcrumb-title');
  if (bc) bc.textContent = item.title;

  /* 記事メタ */
  const dateEl = document.getElementById('article-date');
  if (dateEl) dateEl.textContent = item.date;

  const tagEl = document.getElementById('article-tag');
  if (tagEl) {
    tagEl.textContent = item.tagLabel;
    tagEl.className = 'tag ' + (TAG_CLASS[item.tag] || 'tag-news');
  }

  /* タイトル */
  const titleEl = document.getElementById('article-title');
  if (titleEl) titleEl.textContent = item.title;

  /* 本文 */
  const bodyEl = document.getElementById('article-body');
  if (bodyEl) {
    let html = item.body || '';

    /* イベント情報ボックス */
    if (item.info && Object.keys(item.info).length > 0) {
      html += '<div class="info-box"><div class="info-box-header">EVENT INFO</div><div class="info-box-body">';
      for (const [label, value] of Object.entries(item.info)) {
        html += `<div class="info-row">
          <div class="info-label">${label}</div>
          <div class="info-value">${value}</div>
        </div>`;
      }
      html += '</div></div>';
    }

    bodyEl.innerHTML = html;
  }

  /* Xシェアリンク */
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    const shareText = encodeURIComponent(`${item.title} | ている×ている`);
    const shareUrl = encodeURIComponent(location.href);
    shareBtn.href = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
  }

  /* 前後ナビ */
  const prevNav = document.getElementById('nav-prev');
  const nextNav = document.getElementById('nav-next');

  if (prevNav) {
    if (prev) {
      prevNav.href = `news-detail.html?id=${prev.id}`;
      const titleSpan = prevNav.querySelector('.post-nav-title');
      if (titleSpan) titleSpan.textContent = prev.title;
    } else {
      prevNav.style.visibility = 'hidden';
    }
  }

  if (nextNav) {
    if (next) {
      nextNav.href = `news-detail.html?id=${next.id}`;
      const titleSpan = nextNav.querySelector('.post-nav-title');
      if (titleSpan) titleSpan.textContent = next.title;
    } else {
      nextNav.style.visibility = 'hidden';
    }
  }
}

function showError(msg) {
  const bodyEl = document.getElementById('article-body');
  if (bodyEl) bodyEl.innerHTML = `<p style="color:#e8829a;">${msg}</p>`;
}

document.addEventListener('DOMContentLoaded', loadArticle);
