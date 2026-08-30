---

layout: ../layouts/Layout.astro

title: Performance Process | Darren Harris

description: Darren Harris Performance Process.

---



# Performance Process

The Elite Level System comprises six steps:

What elite athletes can teach business

Book/Hire a high-performance speaker

elite performance mindset



<div class="process-carousel" id="process-carousel">
  <div class="process-track">
    <article class="process-slide">
      <h2>1️⃣ Under-performance</h2>
      <p>performance anxiety</p>
      <p>3 Signs of Underperformance:</p>
      <p><strong>Performance ceiling</strong>: You&rsquo;ve plateaued rather than peaked, the self-imposed limit someone doesn&rsquo;t realise they&rsquo;ve set.</p>
      <p><strong>Performance inconsistency</strong>: You&rsquo;re good one day, average the next.</p>
      <p><strong>Performance slump</strong>: You&rsquo;ve dropped off, gradually or suddenly.</p>
    </article>
    <article class="process-slide">
      <h2>2️⃣ Performance Behaviours</h2>
      <p>disability as behaviour</p>
    </article>
    <article class="process-slide">
      <h2>3️⃣ Performance Basics</h2>
      <p>foundational skills, building blocks, life skills</p>
      <p>interpersonal and motivation, goal setting, growth mindset, people skills</p>
    </article>
    <article class="process-slide">
      <h2>4️⃣ Performance Readiness</h2>
      <p>Before a performance,</p>
      <p>pre-performance routine, performance preparation, performance anxiety, performance nerves.</p>
      <p>Arousal control (finding the right level of activation, not too flat, not too anxious).</p>
      <p>Mental imagery/visualization, and self-talk to manage nerves in the seconds before execution.</p>
    </article>
    <article class="process-slide">
      <h2>5️⃣ Performance Execution</h2>
      <p>During a performance, performance skills &mdash; mental readiness, attentional control, managing arousal/stress.</p>
      <p>Staying calm, keeping composure. Feedback is immediate and objective: you won or lost, the time was faster or slower. Decision-making under ambiguity rather than time pressure.</p>
      <p>Attention control. Emotion control.</p>
      <p>Performance under pressure, performance breakdown, performance block, choking (the technical term, blunt but widely searched), performance consistency.</p>
    </article>
    <article class="process-slide">
      <h2>6️⃣ Performance Review</h2>
      <p>After a performance &mdash; the reflection stage.</p>
      <p>Post-performance analysis, performance debrief, performance feedback loop, performance data.</p>
    </article>
  </div>
  <div class="process-nav">
    <button type="button" class="process-prev" aria-label="Previous step">&lsaquo; Previous</button>
    <span class="process-dots"></span>
    <button type="button" class="process-next" aria-label="Next step">Next &rsaquo;</button>
  </div>
</div>
<script>
  (function () {
    var carousel = document.getElementById('process-carousel');
    if (!carousel) return;
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.process-slide'));
    var prevBtn = carousel.querySelector('.process-prev');
    var nextBtn = carousel.querySelector('.process-next');
    var navWrap = carousel.querySelector('.process-nav');
    var dotsWrap = carousel.querySelector('.process-dots');
    var index = 0;
    if (slides.length <= 1 && navWrap) { navWrap.style.display = 'none'; }
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'process-dot';
      dot.setAttribute('aria-label', 'Go to step ' + (i + 1));
      dot.addEventListener('click', function () { show(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);
    function show(i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, si) { s.style.display = si === index ? '' : 'none'; });
      dots.forEach(function (d, di) { d.classList.toggle('active', di === index); });
    }
    if (prevBtn) prevBtn.addEventListener('click', function () { show(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(index + 1); });
    show(0);
  })();
</script>



**Aspirational/outcome phrases** (useful for the resolution/promise section)

Peak performance, sustainable performance, performance culture, high performance, performance breakthrough, elite performance, performance transformation.



