---
layout: ../layouts/Layout.astro
title: Home | Darren Harris
description: Darren Harris Speaker Trainer Coach.
---

# Closing the Mental Skills Gap
Using psychology-based principles that inspire leaders and teams to increase resilience, improve adaptability, and ignite high performance

<video controls loop autoplay muted width="600">
  <source src="/videos/homepage.mp4" type="video/mp4" />
  Your browser doesn't support video playback.
</video>

## The Defining Moment Your People Can't Afford to Get Wrong
Every role has one - the pitch, the crisis call, the crunch meeting - a moment when the true nature, strengths, or weaknesses of a person or group become clear.

People don't lose that moment because they don't know what to do. They lose it because, under pressure, they can't access what they already know. That's the mental skills gap: the space between knowing and doing.

## The Elite Level System
I use a proven, psychology-based, three-stage framework that gives your people the mental skills to close the gap and own their defining moment.
[Go to Process](/process)

## Services
You can choose how you apply the Elite Level System in your organisation. Here are the three ways clients most often book me to deliver it:
 1. Keynote Speaking.
 2. Workshop.
 3. Coaching.

[Go to Services](/services)

## Who Darren works with
When the moment can't be left to chance, this is who calls Darren in:

Logo block

## What Clients Say

<div class="testimonial-carousel" id="testimonial-carousel">
  <div class="testimonial-track">
    <blockquote class="testimonial-slide">
      <p>&ldquo;By far one of the greatest speakers I have seen&rdquo;</p>
      <footer>&mdash; <strong>Savita Holt</strong>, Learning &amp; Development Lead, <cite>UK Research and Innovation</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;Darren delivered a solid theoretical background on how to overcome obstacles as well as resilience and the toolset of regulation, re-attribution and re-framing.&rdquo;</p>
      <footer>&mdash; <strong>Dr. Tim Renner</strong>, Logistics and IT General Manager, <cite>BMW Group</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;What stood out was his ability to take the room on a deep exploration of resilience through his own lived experience.&rdquo;</p>
      <footer>&mdash; <strong>Melanie Hinds</strong>, Global Head of Internal Communications &amp; Employee Engagement, <cite>Amnesty International</cite></footer>
    </blockquote>
    <blockquote class="testimonial-slide">
      <p>&ldquo;A speaker people talked about long after he left the room, I don&rsquo;t normally use speakers, however, Darren came highly recommended and we would definitely book him again.&rdquo;</p>
      <footer>&mdash; <strong>Fleur Robinson</strong>, Commercial Director, <cite>Burton Albion Football Club</cite></footer>
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

## Meet Darren
Darren Harris built the Elite Level System the hard way — by living without it first. He lost his sight as a child and spent years waiting for a miracle cure, instead of learning how to live without one.
[Go to About](/about)