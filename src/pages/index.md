---
layout: ../layouts/Layout.astro
title: Two-Sport Paralympian & Award-Winning Speaker | Darren Harris
description: Get the mental skills elite athletes use to stay calm in high-pressure moments, recover quickly from mistakes, and keep performing when plans fall apart.
---

<div class="hero">
  <video class="hero-video" controls autoplay muted poster="/photos/homepage-video-poster.jpg">
    <source src="/videos/homepage.mp4" type="video/mp4" />
    Your browser doesn't support video playback.
  </video>
  <div class="hero-content">
    <h1>Become Successful</h1>
    <p>Transforming performance by giving leaders and teams the mental skills successful athletes use to stay calm in high-pressure moments, recover quickly from mistakes, and keep performing when plans fall apart.</p>
    <div class="hero-cta">
      <a class="button book-darren-cta" href="/birmingham-motivational-speaker/">Book Darren</a>
    </div>
  </div>
</div>

<div class="credential-badges">
  <a href="https://thepsa.co.uk/membership/fellows-criteria/">
    <img src="/logos/professional-speaking-association-fellow.JPG" alt="Fellow of the Professional Speaking Association" width="300" height="300" loading="lazy" />
  </a>
  <a href="https://nationalfootballmuseum.com/halloffame/darren-harris/">
    <img src="/logos/football-hall-of-fame-inductee.PNG" alt="Inductee of the Football Hall of Fame" width="1080" height="720" loading="lazy" />
  </a>
</div>

---

## The Mental Skills Gap

Every role has a moment when the strengths or weaknesses of a person or group become clear, whether it's the pitch, the crisis call, or the crunch meeting.

People don't lose that moment because they don't know what to do. They lose it because, under pressure, they can't access what they already know. That's the **mental skills gap**: the space between knowing and doing.

[Take the assessment →](/assessment)

---

## The Elite Performance Mindset

Here are the three talks clients most often book me to deliver, each built on the **Elite Performance Mindset**:

| Become a Successful Leader | Become a Successful Team | Become a Successful Network |
| --- | --- | --- |
| What kind of leader are you when the pressure is on? Learn the mental skills to stay calm, think clearly and make the call, so your team gets your best, not your stress. | In blind football, you can't see your teammates, yet you win by talking with and trusting each other. Remote and hybrid teams face the same challenge. Develop the mental skills so distance never becomes disconnection. | Grow your allies, influence your leaders, and keep momentum when energy dips. The result? Your Employee Resource Groups go from a calendar of events to a driving force for change. |

---

## Who I've Worked With

![Client logo block including HSBC in finance, NHS in healthcare, Deltatre in technology, Vision Express in retail, BMW in manufacturing, BBC in media, MOD in government, Oxford University in education, and Amnesty International in charity](/photos/client-logo-block.png)

---

## What Clients Say

<div class="testimonial-carousel" id="testimonial-carousel">
  <div class="testimonial-track">
    <blockquote class="testimonial-slide">
      <p>&ldquo;By far one of the greatest speakers I have seen&rdquo;</p>
      <footer>&mdash; <strong>Savita Holt</strong>, Learning &amp; Development Lead, <cite>UK Research and Innovation</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;What strikes most is his vivid storytelling connecting the structure to his personal path&rdquo;</p>
      <footer>&mdash; <strong>Dr. Tim Renner</strong>, Logistics and IT General Manager, <cite>BMW Group</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;He is a very gifted speaker and his openness and authenticity was very well received by the audience&rdquo;</p>
      <footer>&mdash; <strong>Frances Hill</strong>, Head of Diversity, Equity &amp; Inclusion, <cite>Bank of England</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;What stood out was his ability to take the room on a deep exploration of resilience through his own lived experience&rdquo;</p>
      <footer>&mdash; <strong>Melanie Hinds</strong>, Global Head of Internal Communications &amp; Employee Engagement, <cite>Amnesty International</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;A talk full of motivational insights and powerful anecdotes you can take away&rdquo;</p>
      <footer>&mdash; <strong>Naomi Turner</strong>, Diversity, Equity and Inclusion Lead, <cite>Southern Water</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;Darren had the audience in the palm of his hand&rdquo;</p>
      <footer>&mdash; <strong>George Hawes</strong>, Vice President, <cite>Deltatre</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;There were 6 or 7 speakers, all highly rated... there is no doubt that Darren was the best of them all&rdquo;</p>
      <footer>&mdash; <strong>Michael Ledzion </strong>, Chief Executive, <cite>Sports for Schools</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;An incredibly articulate, thoughtful and inspiring individual who offers some of the clearest, most grounded and authentic perspectives I've ever encountered&rdquo;</p>
      <footer>&mdash; <strong>Henry Hobbs</strong>, Marketing Co-ordinator, <cite>Owen James Group</cite></footer>
    </blockquote>
    <!-- To add another testimonial: copy the blockquote block above and paste a new one right here. The carousel picks it up automatically -- no other changes needed. -->
  </div>
  <div class="testimonial-nav">
    <button type="button" class="testimonial-prev" aria-label="Previous testimonial">&lsaquo; Previous</button>
    <span class="testimonial-dots"></span>
    <button type="button" class="testimonial-next" aria-label="Next testimonial">Next &rsaquo;</button>
  </div>
</div>
<script>
  (function () {
    var carousel = document.getElementById('testimonial-carousel');
    if (!carousel) return;
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.testimonial-slide'));
    var prevBtn = carousel.querySelector('.testimonial-prev');
    var nextBtn = carousel.querySelector('.testimonial-next');
    var navWrap = carousel.querySelector('.testimonial-nav');
    var dotsWrap = carousel.querySelector('.testimonial-dots');
    var index = 0;
    if (slides.length <= 1 && navWrap) { navWrap.style.display = 'none'; }
    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'testimonial-dot';
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
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

---

## Who I Am
I built my **Elite Performance Mindset** the hard way — by living without it first. I lost my sight as a child and spent years waiting for a miracle cure, instead of learning how to live without one.

[Read more →](/two-sport-paralympian/)

<a class="button book-darren-cta" href="/birmingham-motivational-speaker/">Book Darren</a>
