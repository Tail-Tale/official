/* ===== news.js: ニュース一覧ページ ===== */

const TAG_CLASS = {
  event:   'tag-event',
  release: 'tag-release',
  info:    'tag-info',
  news:    'tag-info'
};

let currentFilter = 'all';

function renderList(news) {
  const list = document.getElementById('news-card-list');
  if (!list) return;
  list.innerHTML = '';

  if (news.length === 0) {
    list.innerHTML = '<p style="color:#7a6560;padding:2rem 0;">該当する記事はありません。</p>';
    return;
  }

  news.forEach(item => {
    const a = document.createElement('a');
    a.href = 'news-detail.html?id=' + item.id;
    a.className = 'news-card';
    a.innerHTML =
      '<span class="news-card-date">' + item.date + '</span>' +
      '<span class="tag ' + (TAG_CLASS[item.tag] || 'tag-info') + '">' + item.tagLabel + '</span>' +
      '<span class="news-card-title">' + item.title + '</span>';
    list.appendChild(a);
  });
}

function filterNews(tag) {
  currentFilter = tag;

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tag === tag);
  });

  const filtered = tag === 'all' ? NEWS_DATA : NEWS_DATA.filter(n => n.tag === tag);
  renderList(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  renderList(NEWS_DATA);

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterNews(btn.dataset.tag));
  });
});
