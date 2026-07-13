(() => {
  'use strict';

  /* ── year ── */
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ── mobile nav ── */
  const toggle = document.getElementById('nav-toggle');
  const nav    = document.getElementById('primary-nav');
  const icon   = document.getElementById('nav-icon');
  const close  = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); icon.innerHTML='<use href="#i-menu"/>'; };
  const open   = () => { nav.classList.add('open');    toggle.setAttribute('aria-expanded','true');  icon.innerHTML='<use href="#i-close"/>'; };
  if (toggle) toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  nav.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', close));

  /* ── scroll-spy ── */
  const sections = document.querySelectorAll('main section[id]');
  const links    = document.querySelectorAll('.nav-link');
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin:'-45% 0px -50% 0px' }).observe || sections.forEach(() => {}); // fallback no-op
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting)
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin:'-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ── reveal on scroll ── */
  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  /* ── skill bars ── */
  const barObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('go'); obs.unobserve(e.target); } });
  }, { threshold: 0.4 });
  document.querySelectorAll('.fill').forEach(el => barObs.observe(el));

  /* ── back to top ── */
  const btt = document.getElementById('btt');
  window.addEventListener('scroll', () => btt.classList.toggle('show', scrollY > 600), { passive: true });

  /* ============================================================
     LIGHTNING CANVAS ANIMATION
     Matches the purple electric energy circle in the screenshot:
     - Concentric rotating orbit rings
     - Glowing particle nodes on the rings
     - Jagged lightning bolt arcs that fire randomly around the circle
     - Ambient particle drift in the background
     - All purple/violet colour family
  ============================================================ */
  const canvas = document.getElementById('lightning-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const photoArea = canvas.parentElement;

  let W, H, cx, cy, R;     // canvas dimensions + circle centre + radius
  let raf;
  let t = 0;                // global time counter

  function resize() {
    const rect = photoArea.getBoundingClientRect();
    W = canvas.width  = rect.width  * devicePixelRatio;
    H = canvas.height = rect.height * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    cx = rect.width  / 2;
    cy = rect.height / 2;
    // orbit radius = slightly outside the photo frame (which is 72% of area)
    R  = (Math.min(rect.width, rect.height) / 2) * 0.74;
  }

  /* ── colour helpers ── */
  const COL = {
    violet:  (a=1) => `rgba(139,92,246,${a})`,
    light:   (a=1) => `rgba(196,181,253,${a})`,
    white:   (a=1) => `rgba(255,255,255,${a})`,
    blue:    (a=1) => `rgba(99,102,241,${a})`,
    deep:    (a=1) => `rgba(91,33,182,${a})`,
  };

  /* ── lightning bolt class ── */
  class Bolt {
    constructor() { this.reset(); }
    reset() {
      // starting angle on the circle
      this.angle  = Math.random() * Math.PI * 2;
      // arc span in radians (short — looks like a spark jumping the gap)
      this.span   = (Math.random() * 0.5 + 0.2) * (Math.random() < .5 ? 1 : -1);
      this.life   = 0;
      this.maxLife = 18 + Math.random() * 20;
      // how far outward the bolt extends (fraction of R)
      this.outR   = R * (0.12 + Math.random() * 0.28);
      // inward bolt (goes toward the photo edge)
      this.inR    = R * (0.06 + Math.random() * 0.15);
      this.alpha  = 0;
      this.segs   = this._buildPath();
    }
    _buildPath() {
      // build a jagged segmented path from start angle along the arc
      const pts = [];
      const steps = 6 + Math.floor(Math.random() * 6);
      // choose outward or inward
      const dir    = Math.random() < .6 ? 1 : -1; // 1=outward, -1=inward
      const extR   = dir === 1 ? this.outR : -this.inR;
      for (let i = 0; i <= steps; i++) {
        const frac  = i / steps;
        const a     = this.angle + this.span * frac;
        const jitter = (1 - Math.abs(frac - .5) * 2) * R * 0.08 * (Math.random() - .5);
        const r     = R + extR * Math.sin(frac * Math.PI) + jitter;
        pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
      }
      return pts;
    }
    update() { this.life++; }
    isDead() { return this.life >= this.maxLife; }
    draw() {
      const prog  = this.life / this.maxLife;
      // fade in fast, then linger, then fade out
      const alpha = prog < .25
        ? prog / .25
        : prog > .75
          ? 1 - (prog - .75) / .25
          : 1;

      // draw the bolt segments
      ctx.save();
      ctx.lineJoin = 'round';

      // outer glow pass
      ctx.shadowBlur  = 18;
      ctx.shadowColor = COL.light(.9);
      ctx.strokeStyle = COL.light(alpha * .55);
      ctx.lineWidth   = 2.5;
      ctx.beginPath();
      this.segs.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.stroke();

      // core bolt
      ctx.shadowBlur  = 6;
      ctx.shadowColor = COL.white(.8);
      ctx.strokeStyle = COL.white(alpha * .9);
      ctx.lineWidth   = 1;
      ctx.beginPath();
      this.segs.forEach((p, i) => i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y));
      ctx.stroke();

      // spark node at branch point (tip)
      const tip = this.segs[Math.floor(this.segs.length / 2)];
      const grad = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, 8);
      grad.addColorStop(0, COL.white(alpha));
      grad.addColorStop(1, COL.violet(0));
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(tip.x, tip.y, 8, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  /* ── ambient floating particles ── */
  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      const a = Math.random() * Math.PI * 2;
      const r = R * (.55 + Math.random() * .9);
      this.x  = cx + Math.cos(a) * r;
      this.y  = cy + Math.sin(a) * r;
      this.vx = (Math.random() - .5) * .35;
      this.vy = (Math.random() - .5) * .35;
      this.size = .8 + Math.random() * 1.8;
      this.life = init ? Math.random() * 80 : 0;
      this.maxLife = 60 + Math.random() * 80;
      this.col = Math.random() < .6 ? COL.violet : COL.light;
    }
    update() {
      this.x += this.vx; this.y += this.vy; this.life++;
      if (this.life >= this.maxLife) this.reset(false);
    }
    draw() {
      const a = this.life < 10
        ? this.life / 10
        : this.life > this.maxLife - 10
          ? (this.maxLife - this.life) / 10 : 1;
      ctx.save();
      ctx.shadowBlur  = 6;
      ctx.shadowColor = this.col(.8);
      ctx.fillStyle   = this.col(a * .85);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  /* ── orbit ring nodes ── */
  class RingNode {
    constructor(ring, index, total) {
      this.ring  = ring;    // 0=outer, 1=mid, 2=inner
      this.index = index;
      this.total = total;
      // base angle + rotation speed
      this.speed = ring === 0 ? .004 : ring === 1 ? -.006 : .009;
      this.offset = (index / total) * Math.PI * 2;
    }
    getPos(time) {
      const rr = ring_radii[this.ring];
      const a  = this.offset + time * this.speed;
      return { x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr, a };
    }
    draw(time) {
      const { x, y } = this.getPos(time);
      const rr = ring_radii[this.ring];
      const sz = this.ring === 0 ? 4 : this.ring === 1 ? 3 : 2.5;

      // pulsing glow node
      const pulse = .7 + .3 * Math.sin(time * .08 + this.index);
      ctx.save();
      ctx.shadowBlur  = 14 * pulse;
      ctx.shadowColor = COL.light(1);
      ctx.fillStyle   = COL.light(pulse);
      ctx.beginPath();
      ctx.arc(x, y, sz, 0, Math.PI * 2);
      ctx.fill();
      // inner white core
      ctx.shadowBlur = 4;
      ctx.shadowColor = COL.white(1);
      ctx.fillStyle   = COL.white(.9);
      ctx.beginPath();
      ctx.arc(x, y, sz * .4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  let ring_radii = [];
  let bolts      = [];
  let particles  = [];
  let nodes      = [];

  function initObjects() {
    ring_radii = [ R * 1.04, R * .85, R * .67 ];

    bolts = [];
    // pre-warm some bolts
    for (let i = 0; i < 3; i++) {
      const b = new Bolt();
      b.life = Math.floor(Math.random() * b.maxLife);
      bolts.push(b);
    }

    particles = Array.from({ length: 55 }, () => new Particle());

    nodes = [];
    [6, 5, 4].forEach((count, ring) => {
      for (let i = 0; i < count; i++) nodes.push(new RingNode(ring, i, count));
    });
  }

  /* ── draw orbit ring ── */
  function drawRing(radius, rotation, alpha, dashed) {
    ctx.save();
    if (dashed) ctx.setLineDash([6, 10]);
    // subtle gradient ring
    const grad = ctx.createConicalGradient
      ? null // not supported everywhere
      : null;

    ctx.strokeStyle = COL.violet(alpha);
    ctx.lineWidth   = 1;
    ctx.shadowBlur  = 8;
    ctx.shadowColor = COL.violet(alpha * .6);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();
  }

  /* ── main draw ── */
  function draw() {
    // use logical size (before DPR scaling)
    const lw = W / devicePixelRatio;
    const lh = H / devicePixelRatio;
    ctx.clearRect(0, 0, lw, lh);

    t++;

    // ── 1. ambient particles ──
    particles.forEach(p => { p.update(); p.draw(); });

    // ── 2. orbit rings ──
    drawRing(ring_radii[0], t * .004,  .55, false);
    drawRing(ring_radii[1], -t * .006, .38, true);
    drawRing(ring_radii[2], t * .009,  .28, false);

    // ── 3. ring nodes ──
    nodes.forEach(n => n.draw(t));

    // ── 4. lightning bolts ──
    bolts.forEach(b => { b.update(); b.draw(); });
    // cull dead bolts
    for (let i = bolts.length - 1; i >= 0; i--) {
      if (bolts[i].isDead()) bolts.splice(i, 1);
    }
    // spawn new bolts at random intervals (avg ~every 22 frames)
    if (Math.random() < .045 && bolts.length < 6) bolts.push(new Bolt());

    // ── 5. bright centre glow dot ──
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * .12);
    cg.addColorStop(0, COL.violet(.18));
    cg.addColorStop(1, COL.violet(0));
    ctx.fillStyle = cg;
    ctx.beginPath();
    ctx.arc(cx, cy, R * .12, 0, Math.PI * 2);
    ctx.fill();

    raf = requestAnimationFrame(draw);
  }

  // init & start
  resize();
  initObjects();
  draw();

  // re-init on resize
  const ro = new ResizeObserver(() => {
    cancelAnimationFrame(raf);
    // reset canvas DPR scaling
    const rect = photoArea.getBoundingClientRect();
    W = canvas.width  = rect.width  * devicePixelRatio;
    H = canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    cx = rect.width  / 2;
    cy = rect.height / 2;
    R  = (Math.min(rect.width, rect.height) / 2) * .74;
    ring_radii = [ R * 1.04, R * .85, R * .67 ];
    initObjects();
    draw();
  });
  ro.observe(photoArea);

})();
