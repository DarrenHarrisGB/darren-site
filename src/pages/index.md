---
layout: ../layouts/Layout.astro
title: Home | Darren Harris
description: Darren Harris Speaker Trainer Coach.
---

<video class="hero-video" controls autoplay muted>
  <source src="/videos/homepage.mp4" type="video/mp4" />
  Your browser doesn't support video playback.
</video>

# Closing the Mental Skills Gap
Using psychology-based principles that inspire leaders and teams to improve resilience and increase adaptability

<div class="hero-cta">
  <a class="button book-darren-cta" href="/contact/">Book Darren</a>
</div>

---

## The Defining Moment Your People Can't Afford to Get Wrong

Every role has a moment when the strengths or weaknesses of a person or group become clear, whether it's the pitch, the crisis call, or the crunch meeting.

People don't lose that moment because they don't know what to do. They lose it because, under pressure, they can't access what they already know. That's the **mental skills gap**: the space between knowing and doing.

---

## The Elite Performance Mindset
This psychology-based framework gives audiences the mental skills to become more resilient and adaptable.

[Read more →](/process)

---

## What I Do
Here are the three ways clients most often book me to deliver the **Elite Performance Mindset**. Choose the one that best fits your needs:
| Format | Audience | Duration | Outcome |
| --- | --- | --- | --- |
| High-impact keynote talk | 50+ | 30-60 minutes | Inspire, shift perspective, and provide a shared reference point |
| Interactive workshop | 11-50 | 2-3 hours | Develop a specific, measurable skill they can apply immediately |
| Performance coaching | 1-10 | 3-6 months | Work through specific challenges |

[Read more →](/services)

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

---

## Who I Am
I built my **Elite Performance Mindset** the hard way — by living without it first. I lost my sight as a child and spent years waiting for a miracle cure, instead of learning how to live without one.

[Read more →](/about)

<a class="button book-darren-cta" href="/contact/">Book Darren</a>
