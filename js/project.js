(function () {
  var root = document.documentElement;
  function load(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  var lang = load('lang', 'vi');
  var id = new URLSearchParams(location.search).get('id');
  var p = window.PROJECTS.filter(function (x) { return x.id === id; })[0];

  function t(key) { return window.I18N[lang][key]; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function render() {
    root.lang = lang;
    document.getElementById('langBtn').textContent = lang === 'vi' ? 'EN' : 'VI';
    var el = document.getElementById('detail');
    var back = '<a class="back" href="index.html#projects">' + t('detail.back') + '</a>';
    if (!p) { el.innerHTML = back + '<p>' + t('detail.notfound') + '</p>'; return; }
    document.title = p.name[lang] + ' — Thái Hoàng';

    var main = p.type === 'web'
      ? '<a class="btn btn-primary" href="' + esc(p.demo) + '" target="_blank" rel="noopener">' + t('projects.demo') + '</a>'
      : '<a class="btn btn-primary" href="' + esc(p.download) + '" target="_blank" rel="noopener">' + t('projects.download') + (p.version ? ' ' + esc(p.version) : '') + '</a>';
    var shots = p.screenshots && p.screenshots.length
      ? '<div class="shots">' + p.screenshots.map(function (s) { return '<img src="' + esc(s) + '" alt="' + esc(p.name[lang]) + '" loading="lazy">'; }).join('') + '</div>'
      : '<p class="lead">' + t('detail.noscreens') + '</p>';
    var embed = p.type === 'web' && p.embed ? '<iframe class="embed" src="' + esc(p.demo) + '" title="' + esc(p.name[lang]) + '"></iframe>' : '';
    var log = (p.changelog || []).map(function (c) { return '<li><b>' + esc(c.date) + '</b>' + esc(c[lang]) + '</li>'; }).join('');

    el.innerHTML = back +
      '<div class="detail-head"><span class="icon">' + p.icon + '</span><h1>' + esc(p.name[lang]) + '</h1></div>' +
      '<div class="detail-meta"><span class="badge badge-' + p.status + '">' + t('status.' + p.status) + '</span>' +
      '<span>' + t('filter.' + p.type) + '</span><span>' + t('detail.updated') + ': ' + esc(p.updated) + '</span></div>' +
      '<p class="lead">' + esc(p.details[lang]) + '</p>' +
      '<div class="detail-actions">' + main + '<a class="btn btn-ghost" href="' + esc(p.github) + '" target="_blank" rel="noopener">' + t('projects.code') + '</a></div>' +
      embed +
      '<h3>' + t('detail.tech') + '</h3><ul class="tags">' + p.tech.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>' +
      '<h3>' + t('detail.screens') + '</h3>' + shots +
      '<h3>' + t('detail.changelog') + '</h3><ul class="changelog">' + log + '</ul>';
  }

  function applyTheme(th) {
    root.dataset.theme = th;
    document.getElementById('themeBtn').textContent = th === 'dark' ? '☾' : '☀';
  }
  document.getElementById('langBtn').addEventListener('click', function () { lang = lang === 'vi' ? 'en' : 'vi'; save('lang', lang); render(); });
  document.getElementById('themeBtn').addEventListener('click', function () {
    var th = root.dataset.theme === 'dark' ? 'light' : 'dark'; save('theme', th); applyTheme(th);
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  applyTheme(load('theme', 'dark'));
  render();
})();
