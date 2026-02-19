/* ===== SLIDESHOW ===== */
const slideImages = [
  "images/illust89.jpg",
  "images/5.12.png",
  "images/イラスト8.png",
  "images/5.26.png"
];
let currentSlide = 0;

function initTop() {
  const rightEl = document.getElementById('top-right-slides');
  if (!rightEl) return;

  slideImages.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'top-right-slide' + (i === 0 ? ' active' : '');
    div.style.backgroundImage = 'url(' + src + ')';
    rightEl.appendChild(div);
  });

  setInterval(() => goSlide((currentSlide + 1) % slideImages.length), 4500);
}

function goSlide(idx) {
  const slides = document.querySelectorAll('.top-right-slide');
  slides[currentSlide].classList.remove('active');
  currentSlide = idx;
  slides[currentSlide].classList.add('active');
}

/* ===== NAV: transparent on top, white when scrolled ===== */
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

/* ===== CAROUSEL ===== */
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

window.carouselMove = carouselMove;

window.addEventListener('resize', () => {
  carouselPos = 0;
  const track = document.getElementById('works-track');
  if (track) track.style.transform = 'translateX(0)';
});

/* ===== LOADING ===== */
function initLoading() {
  const bar = document.getElementById('loading-bar');
  const screen = document.getElementById('loading');
  if (!bar || !screen) return;

  let prog = 0;
  const interval = setInterval(() => {
    prog += Math.random() * 18 + 4;
    if (prog >= 100) {
      prog = 100;
      bar.style.width = '100%';
      clearInterval(interval);
      setTimeout(() => screen.classList.add('hidden'), 400);
    } else {
      bar.style.width = prog + '%';
    }
  }, 60);

  window.addEventListener('load', () => {
    setTimeout(() => {
      bar.style.width = '100%';
      setTimeout(() => screen.classList.add('hidden'), 400);
    }, 300);
  });
}

/* ===== NEWS: news-data.js の NEWS_DATA を使用 ===== */

/* TOPセクションの最新ニュース5件 */
function renderTopNews(news) {
  const list = document.getElementById('top-news-list');
  if (!list) return;
  list.innerHTML = '';
  news.slice(0, 5).forEach(item => {
    const a = document.createElement('a');
    a.className = 'top-news-entry';
    a.href = 'news-detail.html?id=' + item.id;
    a.innerHTML =
      '<span class="top-news-d">' + item.date + '</span>' +
      '<span class="top-news-t">' + item.summary + '</span>';
    list.appendChild(a);
  });
}

/* NEWSセクションの一覧 */
function renderNewsList(news) {
  const list = document.getElementById('news-list');
  if (!list) return;
  list.innerHTML = '';
  news.forEach(item => {
    const a = document.createElement('a');
    a.href = 'news-detail.html?id=' + item.id;
    a.className = 'news-item';
    a.innerHTML =
      '<span class="news-date">' + item.date + '</span>' +
      '<span class="news-tag tag-' + item.tag + '">' + item.tagLabel + '</span>' +
      '<span class="news-title">' + item.title + '</span>';
    list.appendChild(a);
  });
}

/* ===== LIGHTBOX ===== */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  if (!lb || !lbImg) return;

  document.querySelectorAll('.work-card img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      lbImg.src = img.src;
      lb.classList.add('active');
    });
  });

  lb.addEventListener('click', () => {
    lb.classList.remove('active');
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initTop();
  initNav();
  initLightbox();

  fetch('news.json')
    .then(res => res.json())
    .then(data => {
      renderTopNews(data);
      renderNewsList(data);
    })
    .catch(() => {
      if (typeof NEWS_DATA !== 'undefined') {
        renderTopNews(NEWS_DATA);
        renderNewsList(NEWS_DATA);
      }
    });
});

/* ===== PERSEID BANNER ===== */
(function() {
  var closeBtn = document.getElementById('perseidBnrClose');
  var bnr = document.getElementById('perseidBnr');
  var top = document.getElementById('sec-top');
  if (!bnr || !top) return;

  var closed = false;

  closeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    closed = true;
    bnr.classList.add('hidden');
  });

  var shown = false;
  function checkVisible() {
    if (closed) return;
    var rect = top.getBoundingClientRect();
    var inTop = rect.bottom > window.innerHeight * 0.3;
    if (inTop && !shown) {
      shown = true;
      bnr.classList.add('show');
    } else if (!inTop && shown) {
      shown = false;
      bnr.classList.remove('show');
    }
  }
  window.addEventListener('scroll', checkVisible);
  // 初回は少し遅らせて表示
  setTimeout(checkVisible, 1000);
})();
