/* ===================================================
   main.js — ている×ている トップページ スクリプト
   =================================================== */

// ===== スライドショー =====
// images/ フォルダに配置する画像ファイル名を列挙してください
const slideImages = [
  'images/001.png',
  'images/illust89.png',
  'images/33.png'
];

let currentSlide = 0;

function initSlideshow() {
  const rightEl = document.getElementById('top-right-slides');
  if (!rightEl) return;

  slideImages.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'top-right-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = 'url(' + src + ')';
    rightEl.appendChild(div);
  });

  setInterval(() => {
    goSlide((currentSlide + 1) % slideImages.length);
  }, 4500);
}

function goSlide(idx) {
  const slides = document.querySelectorAll('.top-right-slide');
  if (!slides.length) return;
  slides[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
}

// ===== ナビゲーション（スクロールで背景を付ける）=====
function initNav() {
  const nav = document.getElementById('main-nav');
  const topSection = document.getElementById('sec-top');
  if (!nav || !topSection) return;

  window.addEventListener('scroll', () => {
    const topH = topSection.offsetHeight;
    if (window.scrollY > topH * 0.6) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ===== カルーセル =====
let carouselPos = 0;

function carouselMove(dir) {
  const track = document.getElementById('works-track');
  if (!track) return;
  const cards = track.querySelectorAll('.work-card');
  if (!cards.length) return;

  const gap = 28;
  const stepWidth = cards[0].offsetWidth + gap;

  const wrap = document.querySelector('.works-carousel');
  const visibleWidth = wrap.offsetWidth;
  const visibleCount = Math.max(1, Math.floor((visibleWidth + gap) / stepWidth));
  const maxPos = Math.max(0, cards.length - visibleCount);

  carouselPos = Math.max(0, Math.min(maxPos, carouselPos + dir));
  track.style.transform = 'translateX(' + (-carouselPos * stepWidth) + 'px)';
}

window.addEventListener('resize', () => {
  carouselPos = 0;
  const track = document.getElementById('works-track');
  if (track) track.style.transform = 'translateX(0)';
}, { passive: true });

// ===== NEWSセクションをnews.jsonから動的に生成 =====
async function loadNewsSection() {
  const container = document.getElementById('news-list-top');
  if (!container) return;

  try {
    const res = await fetch('news.json');
    const data = await res.json();
    const items = data.news.slice(0, 5); // 最新5件を表示

    container.innerHTML = items.map(item => `
      <a class="news-item" href="news-detail.html?id=${item.id}">
        <span class="news-date">${item.date}</span>
        <span class="news-tag tag-${item.tag}">${item.tagLabel}</span>
        <span class="news-title">${item.title}</span>
      </a>
    `).join('');
  } catch (e) {
    console.warn('news.json の読み込みに失敗しました:', e);
  }
}

// ===== ローディング画面 =====
function initLoading() {
  const bar    = document.getElementById('loading-bar');
  const screen = document.getElementById('loading');
  if (!bar || !screen) return;

  let prog = 0;
  const interval = setInterval(() => {
    prog += Math.random() * 18 + 4;
    if (prog >= 100) {
      prog = 100;
      clearInterval(interval);
      setTimeout(() => screen.classList.add('hidden'), 400);
    }
    bar.style.width = prog + '%';
  }, 60);

  window.addEventListener('load', () => {
    setTimeout(() => {
      prog = 100;
      bar.style.width = '100%';
      setTimeout(() => screen.classList.add('hidden'), 400);
    }, 200);
  });
}

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initSlideshow();
  initNav();
  loadNewsSection();
});

// carouselMove をグローバルに公開（HTML の onclick で呼び出すため）
window.carouselMove = carouselMove;
