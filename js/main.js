(function () {
  var root = document.documentElement;
  function load(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var lang = load('lang', 'vi');
  var typedTimer;

  function t(key) { return window.I18N[lang][key]; }

  var filter = 'all', query = '';

  function renderProjects() {
    var grid = document.getElementById('projectGrid');
    grid.innerHTML = '';
    var list = window.PROJECTS.filter(function (p) {
      if (filter !== 'all' && p.type !== filter) return false;
      var hay = (p.name[lang] + ' ' + p.desc[lang] + ' ' + p.tech.join(' ')).toLowerCase();
      return hay.indexOf(query) !== -1;
    });
    if (!list.length) { grid.innerHTML = '<p class="empty">' + t('projects.empty') + '</p>'; return; }
    list.forEach(function (p) {
      var main = p.type === 'web'
        ? '<a href="' + p.demo + '" target="_blank" rel="noopener">' + t('projects.demo') + '</a>'
        : '<a href="' + p.download + '" target="_blank" rel="noopener">' + t('projects.download') + '</a>';
      var card = document.createElement('article');
      card.className = 'card reveal visible';
      card.innerHTML =
        '<div class="card-top"><div class="icon">' + p.icon + '</div>' +
        '<span class="badge badge-' + p.status + '">' + t('status.' + p.status) + '</span></div>' +
        '<h3><a href="project.html?id=' + p.id + '">' + p.name[lang] + '</a></h3>' +
        '<p>' + p.desc[lang] + '</p>' +
        '<ul class="tags"><li>' + t('filter.' + p.type) + '</li>' + p.tech.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
        '<div class="card-links">' + main +
        '<a href="project.html?id=' + p.id + '">' + t('projects.details') + '</a>' +
        '<a href="' + p.github + '" target="_blank" rel="noopener">' + t('projects.code') + '</a></div>';
      grid.appendChild(card);
    });
  }

  document.getElementById('filterBtns').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    filter = b.dataset.filter;
    this.querySelectorAll('button').forEach(function (x) { x.classList.toggle('active', x === b); });
    renderProjects();
  });
  document.getElementById('searchBox').addEventListener('input', function () {
    query = this.value.trim().toLowerCase(); renderProjects();
  });

  function startTyping() {
    clearTimeout(typedTimer);
    var el = document.getElementById('typed');
    var words = t('typed'), w = 0, c = 0, del = false;
    (function tick() {
      var word = words[w];
      el.textContent = word.slice(0, c);
      if (!del && c === word.length) { del = true; typedTimer = setTimeout(tick, 1400); return; }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; }
      c += del ? -1 : 1;
      typedTimer = setTimeout(tick, del ? 40 : 90);
    })();
  }

  function applyLang() {
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.dataset.i18nPh); });
    document.getElementById('langBtn').textContent = lang === 'vi' ? 'EN' : 'VI';
    renderProjects();
    startTyping();
  }

  function applyTheme(th) {
    root.dataset.theme = th;
    document.getElementById('themeBtn').textContent = th === 'dark' ? '☾' : '☀';
  }

  document.getElementById('langBtn').addEventListener('click', function () {
    lang = lang === 'vi' ? 'en' : 'vi'; save('lang', lang); applyLang();
  });
  document.getElementById('themeBtn').addEventListener('click', function () {
    var th = root.dataset.theme === 'dark' ? 'light' : 'dark'; save('theme', th); applyTheme(th);
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = document.getElementById('cName').value, em = document.getElementById('cEmail').value, m = document.getElementById('cMsg').value;
    location.href = 'mailto:hoangluuanthai.work@gmail.com?subject=' + encodeURIComponent('Portfolio: ' + n) +
      '&body=' + encodeURIComponent(m + '\n\n' + n + ' <' + em + '>');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  applyTheme(load('theme', 'dark'));
  applyLang();
})();
