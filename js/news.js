/* ===================================================
   news.js — ている×ている NEWS一覧ページ スクリプト
   news.json からデータを読み込んで一覧を描画します
   =================================================== */

const TAG_MAP = {
  event:   { label: 'イベント', cls: 'tag-event' },
  release: { label: '新刊',     cls: 'tag-release' },
  info:    { label: 'お知らせ', cls: 'tag-info' }
};

async function loadNewsList() {
  const list = document.getElementById('news-index-list');
  if (!list) return;

  let data;
  try {
    const res = await fetch('news.json');
    data = await res.json();
  } catch (e) {
    list.innerHTML = '<p style="color:#7a6560;padding:2rem 0;">ニュースの読み込みに失敗しました。</p>';
    console.error('news.json の読み込みに失敗しました:', e);
    return;
  }

  if (!data.news || data.news.length === 0) {
    list.innerHTML = '<p style="color:#7a6560;padding:2rem 0;">ニュースはまだありません。</p>';
    return;
  }

  list.innerHTML = data.news.map((item, i) => {
    const tag = TAG_MAP[item.tag] || { label: item.tag, cls: 'tag-info' };
    return `
      <a class="news-index-item" href="news-detail.html?id=${item.id}"
         style="animation-delay:${i * 0.05}s">
        <span class="news-index-date">${item.date}</span>
        <span class="tag ${tag.cls}">${tag.label}</span>
        <span class="news-index-title">${item.title}</span>
      </a>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', loadNewsList);
