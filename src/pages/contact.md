---
layout: ../layouts/Layout.astro
title: Book Darren | Darren Harris
description: Enquire about booking Darren to speak at your event.
---

# Book Darren

Fill in a few details about your event and Darren will get back to you to talk through availability and fit.

<form name="booking" class="booking-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you/">
  <input type="hidden" name="form-name" value="booking" />
  <p class="visually-hidden">
    <label>Don&rsquo;t fill this out if you're human: <input name="bot-field" /></label>
  </p>

  <div class="form-field">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required />
  </div>

  <div class="form-field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required />
  </div>

  <div class="form-field">
    <label for="organisation">Organisation</label>
    <input type="text" id="organisation" name="organisation" />
  </div>

  <div class="form-field">
    <label for="event-type">What kind of event is this for?</label>
    <input type="text" id="event-type" name="event-type" required />
  </div>

  <div class="form-field">
    <label for="event-date">What date are you considering?</label>
    <input type="text" id="event-date" name="event-date" placeholder="e.g. 14 March 2027, or &ldquo;not confirmed yet&rdquo;" />
  </div>

  <div class="form-field">
    <label for="audience-size">How big is the audience?</label>
    <input type="text" id="audience-size" name="audience-size" />
  </div>

  <div class="form-field">
    <label for="budget">Do you have a budget in mind?</label>
    <input type="text" id="budget" name="budget" />
  </div>

  <button type="submit" class="button">Send Enquiry</button>
</form>

Prefer email? Reach Darren directly at [hello@darrenharrisgb.com](mailto:hello@darrenharrisgb.com).
