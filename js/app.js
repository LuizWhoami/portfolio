/* ============================================================
   app.js — Renderização + interações do portfólio
   Depende de data.js (carregado antes).
   ============================================================ */

(function () {
  'use strict';

  /* ───────────── Helpers ───────────── */
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const el = (tag, attrs = {}, ...children) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') n.className = v;
      else if (k === 'html') n.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') n.addEventListener(k.slice(2).toLowerCase(), v);
      else n.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c === null || c === undefined || c === false) continue;
      n.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return n;
  };

  const statusLabel = (s) => s === 'completed' ? 'COMPLETED' : s === 'in_progress' ? 'IN PROGRESS' : String(s || '').toUpperCase();
  const statusClass = (s) => s === 'completed' ? 'done' : 'prog';
  const statusClassMachine = (s) => s === 'completed' ? 'pwned' : 'progress';
  const safe = (v, fallback = '----') => (v === null || v === undefined || v === '') ? fallback : v;

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (m) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[m]));
  }

  /* ══════════════ 1. WHOAMI ══════════════ */
  function renderWhoami() {
    $('#whoami-lead').textContent = (profile.bio || []).join(' ');

    const tags = $('#whoami-tags');
    tags.innerHTML = '';
    (profile.focus || []).forEach(t => tags.appendChild(el('li', {}, t)));

    const id = profile.id || {};
    $('#whoami-id').textContent =
      `uid=${safe(id.uid)}` + '\n' +
      `role=${safe(id.role)}` + '\n' +
      `focus=${safe(id.focus)}` + '\n' +
      `environment=${safe(id.environment)}`;
  }

  /* ══════════════ 2. STATS ══════════════ */
  function computeStats() {
    const htb = (typeof htbMachines !== 'undefined' ? htbMachines : []).length;
    const thm = (typeof thmRooms    !== 'undefined' ? thmRooms    : []).length;
    const webLabs =
      projects.filter(p => p.category === 'web').length +
      (typeof htbMachines !== 'undefined' ? htbMachines.filter(m => (m.tags || []).includes('Web')).length : 0);
    const certs = (typeof certifications !== 'undefined' ? certifications : []).length;
    const projs = (typeof projects !== 'undefined' ? projects : []).length;
    return { htb, thm, webLabs, certs, projs };
  }

  function renderStats() {
    const s = computeStats();
    const pad = (label, value) => label.padEnd(18, ' ') + String(value);
    $('#stats-panel').innerHTML =
      `<span class="k">${pad('HTB MACHINES', '')}</span><span class="v">${s.htb}</span>\n` +
      `<span class="k">${pad('THM ROOMS', '')}</span><span class="v">${s.thm}</span>\n` +
      `<span class="k">${pad('WEB LABS', '')}</span><span class="v">${s.webLabs}</span>\n` +
      `<span class="k">${pad('CERTIFICATIONS', '')}</span><span class="v">${s.certs}</span>\n` +
      `<span class="k">${pad('PROJECTS', '')}</span><span class="v">${s.projs}</span>`;
  }

  /* ══════════════ 3. SKILLS ══════════════ */
  function renderSkills() {
    const grid = $('#skills-grid');
    grid.innerHTML = '';
    skills.forEach(g => {
      grid.appendChild(el('div', { class: 'skill-group' },
        el('h3', {}, g.group),
        el('ul', {}, ...g.items.map(i => el('li', {}, i)))
      ));
    });
  }

  /* ══════════════ 4. PROJECTS ══════════════ */
  function projectCard(p) {
    const links = [];
    if (p.github) links.push(el('a', { href: p.github, target: '_blank', rel: 'noopener noreferrer' }, '[ SOURCE ]'));
    if (p.demo)   links.push(el('a', { href: p.demo,   target: '_blank', rel: 'noopener noreferrer' }, '[ DEMO ]'));

    return el('article', { class: 'project', 'data-category': p.category },
      el('div', { class: 'project-head' },
        el('h3', { class: 'project-name' }, p.name),
        el('span', { class: `project-status status-${p.status === 'completed' ? 'done' : 'prog'}` }, statusLabel(p.status))
      ),
      el('p', { class: 'project-desc' }, p.description || ''),
      el('div', { class: 'project-meta' },
        el('span', {}, el('span', { class: 'k' }, 'TYPE: '), p.category || '--'),
        p.stack && p.stack.length
          ? el('span', {}, el('span', { class: 'k' }, 'STACK: '), p.stack.join(' / '))
          : null
      ),
      links.length ? el('div', { class: 'project-links' }, ...links) : null
    );
  }

  function renderProjects() {
    const grid = $('#projects-grid');
    grid.innerHTML = '';
    projects.forEach(p => grid.appendChild(projectCard(p)));
  }

  function initFilters() {
    const filters = $$('.filter');
    filters.forEach(btn => {
      btn.addEventListener('click', () => {
        filters.forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');

        const f = btn.dataset.filter;
        $$('.project').forEach(card => {
          const match = f === 'all' || card.dataset.category === f;
          card.style.display = match ? '' : 'none';
        });
      });
    });
  }

  /* ══════════════ 5. LABS ══════════════ */
  function machineItem(m) {
    const meta = [];
    if (m.os)          meta.push(el('div', {}, el('span', { class: 'k' }, 'OS:'), ' ', m.os));
    if (m.difficulty)  meta.push(el('div', {}, el('span', { class: 'k' }, 'Difficulty:'), ' ', m.difficulty));
    if (m.completedAt) meta.push(el('div', {}, el('span', { class: 'k' }, 'Pwned:'), ' ', m.completedAt));
    if (m.tags && m.tags.length) {
      meta.push(el('div', {}, el('span', { class: 'k' }, 'Tags:'), ' ',
        el('span', { class: 'machine-tags' }, m.tags.join(' / '))));
    }

    return el('li', { class: `machine ${m.status === 'in_progress' ? 'is-progress' : ''}` },
      el('div', { class: 'machine-head' },
        el('span', { class: 'machine-name' }, m.name),
        el('span', { class: `machine-status ${statusClassMachine(m.status)}` },
          m.status === 'completed' ? 'PWNED' : 'IN PROGRESS')
      ),
      meta.length ? el('div', { class: 'machine-meta' }, ...meta) : null,
      m.link    ? el('a', { class: 'machine-link', href: m.link,    target: '_blank', rel: 'noopener noreferrer' }, '[ view on platform ↗ ]') : null,
      m.writeup ? el('a', { class: 'machine-link', href: m.writeup, target: '_blank', rel: 'noopener noreferrer' }, '[ writeup ↗ ]') : null
    );
  }

  function thmItem(r) {
    const meta = [];
    if (r.type)        meta.push(el('div', {}, el('span', { class: 'k' }, 'Type:'), ' ', r.type));
    if (r.difficulty)  meta.push(el('div', {}, el('span', { class: 'k' }, 'Difficulty:'), ' ', r.difficulty));
    if (r.completedAt) meta.push(el('div', {}, el('span', { class: 'k' }, 'Completed:'), ' ', r.completedAt));
    if (r.tags && r.tags.length) {
      meta.push(el('div', {}, el('span', { class: 'k' }, 'Tags:'), ' ',
        el('span', { class: 'machine-tags' }, r.tags.join(' / '))));
    }

    return el('li', { class: `machine ${r.status === 'in_progress' ? 'is-progress' : ''}` },
      el('div', { class: 'machine-head' },
        el('span', { class: 'machine-name' }, r.name),
        el('span', { class: `machine-status ${statusClassMachine(r.status)}` },
          r.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS')
      ),
      r.description ? el('p', { class: 'machine-desc' }, r.description) : null,
      meta.length ? el('div', { class: 'machine-meta' }, ...meta) : null,
      r.link    ? el('a', { class: 'machine-link', href: r.link,    target: '_blank', rel: 'noopener noreferrer' }, '[ view on TryHackMe ↗ ]') : null,
      r.writeup ? el('a', { class: 'machine-link', href: r.writeup, target: '_blank', rel: 'noopener noreferrer' }, '[ writeup ↗ ]') : null
    );
  }

  function renderLabs() {
    // ── HTB ──
    const htb = $('#htb-list');
    htb.innerHTML = '';
    (htbMachines || []).forEach(m => htb.appendChild(machineItem(m)));
    if (!htbMachines || !htbMachines.length) {
      htb.appendChild(el('li', { class: 'empty-hint' }, '// nenhuma máquina cadastrada ainda'));
    }

    // ── THM ──
    const thm = $('#thm-list');
    thm.innerHTML = '';
    (thmRooms || []).forEach(r => thm.appendChild(thmItem(r)));
    $('#thm-empty').hidden = !!(thmRooms && thmRooms.length);
  }

  /* ══════════════ 6. EDUCATION ══════════════ */
  function renderEducation() {
    const list = $('#edu-list');
    list.innerHTML = '';
    (education || []).forEach(e => {
      const periodTxt = e.period ? `[${e.period}]` : '[----]';
      const st = e.status === 'completed' ? 'CONCLUÍDO' : 'EM ANDAMENTO';
      const stCls = e.status === 'completed' ? 'done' : 'prog';

      list.appendChild(el('li', { class: 'edu-item' },
        el('div', { class: 'edu-head' },
          el('span', { class: 'edu-period' }, periodTxt),
          el('span', { class: 'edu-course' }, e.course),
          el('span', { class: 'edu-inst' }, e.institution ? `— ${e.institution}` : ''),
          el('span', { class: 'edu-status' }, 'Status: ', el('span', { class: stCls }, st))
        )
      ));
    });
  }

  /* ══════════════ 7. CERTIFICATIONS ══════════════ */
  function certCard(c) {
    const meta = [];
    if (c.date)         meta.push(el('div', {}, el('span', { class: 'k' }, 'DATE:'), ' ', c.date));
    if (c.credentialId) meta.push(el('div', {}, el('span', { class: 'k' }, 'ID:'), ' ', c.credentialId));
    if (c.link)         meta.push(el('div', {}, el('a', { href: c.link, target: '_blank', rel: 'noopener noreferrer' }, '[ verificar credencial ↗ ]')));
    if (c.certificate)  meta.push(el('div', {}, el('a', { href: c.certificate, target: '_blank', rel: 'noopener noreferrer' }, '[ certificado ↗ ]')));

    return el('article', { class: 'cert' },
      el('div', { class: 'cert-head' },
        el('span', {}, 'CERTIFICATION'),
        el('span', { class: `cert-status ${statusClass(c.status)}` }, statusLabel(c.status))
      ),
      el('div', { class: 'cert-name' }, c.name),
      c.institution ? el('div', { class: 'cert-inst' }, c.institution) : null,
      c.area ? el('div', { class: 'cert-area' }, c.area) : null,
      meta.length ? el('div', { class: 'cert-meta' }, ...meta) : null
    );
  }

  function renderCertifications() {
    const done = $('#certs-done');
    const prog = $('#certs-progress');
    done.innerHTML = ''; prog.innerHTML = '';

    (certifications || []).forEach(c => {
      (c.status === 'completed' ? done : prog).appendChild(certCard(c));
    });

    if (!done.children.length) done.appendChild(el('p', { class: 'empty-hint' }, '// nenhuma certificação concluída cadastrada'));
    if (!prog.children.length) prog.appendChild(el('p', { class: 'empty-hint' }, '// nenhuma certificação em andamento'));
  }

  /* ══════════════ 8. TIMELINE ══════════════ */
  function renderTimeline() {
    const ol = $('#timeline');
    ol.innerHTML = '';
    (timeline || []).forEach(t => {
      ol.appendChild(el('li', {},
        el('span', { class: 'tl-period' }, t.period || '----'),
        el('span', { class: 'tl-title' }, t.title),
        t.place ? el('span', { class: 'tl-place' }, ` — ${t.place}`) : null
      ));
    });
  }

  /* ══════════════ 9. CONTACT ══════════════ */
  function renderContact() {
    const list = $('#contact-list');
    list.innerHTML = '';
    const c = (profile.contact || {});
    const entries = [
      ['GitHub',   c.github,   v => v.replace(/^https?:\/\//, '')],
      ['LinkedIn', c.linkedin, v => v.replace(/^https?:\/\//, '')],
      ['Email',    c.email,    v => v],
      ['Telegram', c.telegram, v => v.replace(/^https?:\/\//, '')]
    ].filter(([, v]) => v);

    if (!entries.length) {
      $('#contact-empty').hidden = false;
      return;
    }
    $('#contact-empty').hidden = true;

    entries.forEach(([label, url, fmt]) => {
      const href = label === 'Email' ? `mailto:${url}` : url;
      list.appendChild(el('li', { class: 'contact-item' },
        el('a', { href, target: label === 'Email' ? null : '_blank', rel: 'noopener noreferrer' },
          el('span', { class: 'contact-label' }, label),
          el('span', { class: 'contact-value' }, fmt(url))
        )
      ));
    });
  }

  /* ══════════════ 10. NAV + HERO CHIPS ══════════════ */
  function initNav() {
    const toggle = $('.nav-toggle');
    const list = $('#nav-list');
    toggle.addEventListener('click', () => {
      const open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    list.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        list.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function initHeroChips() {
    $$('.chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = document.querySelector(btn.dataset.target);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ══════════════════════════════════════════════════════════
     11. TERMINAL INTERATIVO (mini-filesystem virtual)
     ══════════════════════════════════════════════════════════ */

  /* Mapa: arquivo virtual → handler */
  const virtualFS = {
    'profile.txt':        'whoami',
    'skills.txt':         'skills',
    'projects.txt':       'projects',
    'htb.txt':            'htb',
    'thm.txt':            'thm',
    'education.txt':      'education',
    'certifications.txt': 'certifications',
    'contact.txt':        'contact',
    'stats.txt':          'stats',
    'history.txt':        'history',
    'README.md':          'help'
  };

  /* Handlers (chamados por `cat <file>` e pelos atalhos diretos) */
  const termCommands = {
    help() {
      this.print(
        'Usage:\n' +
        '  <span class="hl">cat &lt;file&gt;</span>     read a file from the portfolio\n' +
        '  <span class="hl">ls</span>              list available files\n' +
        '  <span class="hl">clear</span>           clear the screen\n\n' +
        'Available files:\n\n' +
        Object.keys(virtualFS).map(f => `  <span class="hl">${f}</span>`).join('\n') +
        '\n\nShortcuts (equivalentes a `cat`):\n\n' +
        ['whoami','skills','projects','htb','thm','education','certifications','contact','stats','history']
          .map(c => `  <span class="hl">${c}</span>`).join('\n')
      );
    },

    whoami() {
      this.print(
        `<span class="hl">${profile.name}</span>\n` +
        `${profile.role} | ${profile.tagline}`
      );
    },

    skills() {
      const txt = skills.map(g =>
        `<span class="hl">${g.group}</span>\n` + g.items.map(i => `  ├── ${i}`).join('\n')
      ).join('\n\n');
      this.print(txt);
    },

    projects() {
      const txt = projects.map(p =>
        `<span class="hl">PROJECT:</span> ${p.name}\n` +
        `  TYPE: ${p.category}\n` +
        `  STACK: ${(p.stack && p.stack.length) ? p.stack.join(' / ') : '--'}\n` +
        `  STATUS: ${p.status === 'completed' ? 'Completed' : 'In Progress'}`
      ).join('\n\n');
      this.print(txt || '// nenhum projeto cadastrado');
    },

    htb() {
      const list = (htbMachines || []);
      if (!list.length) return this.print('// nenhuma máquina cadastrada');
      const txt = list.map(m =>
        `<span class="hl">├── ${m.name}</span>\n` +
        `│   ├─ Difficulty: ${m.difficulty || '--'}\n` +
        `│   ├─ OS: ${m.os || '--'}\n` +
        `│   ├─ Status: ${m.status === 'completed' ? 'PWNED' : 'IN PROGRESS'}\n` +
        `│   └─ Tags: ${(m.tags || []).join(' / ') || '--'}`
      ).join('\n');
      this.print(txt);
    },

    thm() {
      const list = (thmRooms || []);
      if (!list.length) return this.print('// nenhuma room cadastrada ainda');
      const txt = list.map(r => {
        const lines = [
          `<span class="hl">├── ${r.name}</span>`,
          `│   ├─ Type: ${r.type || '--'}`,
          `│   ├─ Difficulty: ${r.difficulty || '--'}`,
          `│   └─ Status: ${r.status === 'completed' ? 'COMPLETED' : 'IN PROGRESS'}`
        ];
        return lines.join('\n');
      }).join('\n');
      this.print(txt);
    },

    education() {
      const txt = education.map(e =>
        `<span class="hl">${e.period ? `[${e.period}]` : '[----]'}</span> ${e.course}` +
        (e.institution ? `\n  ${e.institution}` : '') +
        `\n  Status: ${e.status === 'completed' ? 'CONCLUÍDO' : 'EM ANDAMENTO'}`
      ).join('\n\n');
      this.print(txt);
    },

    certifications() {
      const done = certifications.filter(c => c.status === 'completed');
      const prog = certifications.filter(c => c.status !== 'completed');
      const fmt = (c) =>
        `<span class="hl">${c.name}</span>` +
        (c.institution ? `\n  ${c.institution}` : '') +
        (c.area ? `\n  ${c.area}` : '');
      let txt = '';
      if (done.length) txt += `// CERTIFIED\n\n` + done.map(fmt).join('\n\n');
      if (prog.length) txt += `\n\n// IN PROGRESS\n\n` + prog.map(fmt).join('\n\n');
      this.print(txt || '// nenhuma certificação cadastrada');
    },

    contact() {
      const c = profile.contact || {};
      const lines = [];
      if (c.github)   lines.push(`GitHub:   ${c.github}`);
      if (c.linkedin) lines.push(`LinkedIn: ${c.linkedin}`);
      if (c.email)    lines.push(`Email:    ${c.email}`);
      if (c.telegram) lines.push(`Telegram: ${c.telegram}`);
      this.print(lines.length ? lines.join('\n') : '// adicione seus contatos em data.js');
    },

    stats() {
      const s = computeStats();
      this.print(
        `HTB MACHINES       ${s.htb}\n` +
        `THM ROOMS          ${s.thm}\n` +
        `WEB LABS           ${s.webLabs}\n` +
        `CERTIFICATIONS     ${s.certs}\n` +
        `PROJECTS           ${s.projs}`
      );
    },

    history() {
      const txt = timeline.map(t =>
        `<span class="hl">${t.period || '----'}</span>\n└── ${t.title}${t.place ? ` — ${t.place}` : ''}`
      ).join('\n\n');
      this.print(txt);
    },

    ls() {
      const files = Object.keys(virtualFS);
      this.print(
        `total ${files.length}\n\n` +
        files.map(f => `  <span class="hl">${f}</span>`).join('\n')
      );
    },

    pwd() { this.print('/home/luiz/portfolio'); },

    exit() { this.print('Connection closed. (simulação — nada foi encerrado de verdade)'); },

    clear() { this.out.innerHTML = ''; }
  };

  const term = {
    out: null, input: null, form: null,
    history: [], historyIdx: -1,

    init() {
      this.out   = $('#term-out');
      this.input = $('#term-input');
      this.form  = $('#term-form');
      if (!this.form) return;

      this.print(
        'Welcome to <span class="hl">luiz@portfolio</span> — interactive shell.\n' +
        'Type <span class="hl">help</span> for commands or <span class="hl">ls</span> to list files.\n' +
        'Tip: use <span class="hl">cat &lt;file&gt;</span> to open any section quickly.\n'
      );

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cmd = this.input.value.trim();
        if (!cmd) return;
        this.input.value = '';
        this.history.push(cmd);
        this.historyIdx = this.history.length;
        this.run(cmd);
      });

      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
          if (this.historyIdx > 0) { this.historyIdx--; this.input.value = this.history[this.historyIdx]; }
          e.preventDefault();
        } else if (e.key === 'ArrowDown') {
          if (this.historyIdx < this.history.length - 1) {
            this.historyIdx++; this.input.value = this.history[this.historyIdx];
          } else {
            this.historyIdx = this.history.length; this.input.value = '';
          }
          e.preventDefault();
        }
      });

      this.out.addEventListener('click', () => this.input.focus());
    },

    print(html, cls = 'resp') {
      const block = document.createElement('div');
      block.className = cls;
      block.innerHTML = html;
      this.out.appendChild(block);
      this.out.scrollTop = this.out.scrollHeight;
    },

    echo(cmd) {
      const line = document.createElement('div');
      line.className = 'user-cmd';
      line.innerHTML = `<span class="p">luiz@portfolio:~$</span> ${escapeHtml(cmd)}`;
      this.out.appendChild(line);
      this.out.scrollTop = this.out.scrollHeight;
    },

    resolveFile(name) {
      if (!name) return null;
      const n = name.toLowerCase();
      if (virtualFS[n]) return n;
      return Object.keys(virtualFS).find(f =>
        f.toLowerCase() === n + '.txt' || f.toLowerCase() === n + '.md'
      ) || null;
    },

    catFile(name) {
      const key = this.resolveFile(name);
      if (!key) {
        this.print(`cat: ${escapeHtml(name)}: No such file or directory`, 'err');
        return;
      }
      this.print(`<span class="hl">── ${key} ──</span>`);
      termCommands[virtualFS[key]].call(this);
    },

    run(raw) {
      this.echo(raw);
      const tokens = raw.trim().split(/\s+/);
      const cmd  = tokens[0].toLowerCase();
      const args = tokens.slice(1);

      if (cmd === 'cat') {
        if (!args.length) {
          this.print(
            'usage: cat &lt;file&gt;\n\nAvailable files:\n\n' +
            Object.keys(virtualFS).map(f => `  <span class="hl">${f}</span>`).join('\n'),
            'err'
          );
          return;
        }
        args.forEach(f => this.catFile(f));
        return;
      }

      const fn = termCommands[cmd];
      if (!fn) {
        this.print(
          `command not found: <span class="hl">${escapeHtml(cmd)}</span>. ` +
          `Type <span class="hl">help</span> or <span class="hl">ls</span>.`,
          'err'
        );
        return;
      }
      fn.call(this, args);
    }
  };

  /* ══════════════ INIT ══════════════ */
  function init() {
    renderWhoami();
    renderStats();
    renderSkills();
    renderProjects();
    initFilters();
    renderLabs();
    renderEducation();
    renderCertifications();
    renderTimeline();
    renderContact();
    initNav();
    initHeroChips();
    term.init();
    $('#year').textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
