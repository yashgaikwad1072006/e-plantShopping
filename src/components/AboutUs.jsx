import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1 className="about-title">About Paradise Nursery</h1>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Welcome to <strong>Paradise Nursery</strong> — your one-stop destination for
          beautiful, healthy houseplants. Founded in 2018, we are a passionate team of
          plant enthusiasts, horticulturists, and nature lovers dedicated to bringing the
          beauty of the natural world into your home and workspace.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Paradise Nursery, our mission is simple: to make it easy and affordable for
          everyone to enjoy the benefits of living with plants. Studies show that indoor
          plants reduce stress, purify the air, and boost productivity. We believe every
          space deserves a little green.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>🌿 A curated selection of 100+ indoor and outdoor plant varieties</li>
          <li>🪴 Expert care guides for every plant we sell</li>
          <li>📦 Fast, eco-friendly shipping directly to your door</li>
          <li>💬 A dedicated support team of plant experts</li>
          <li>♻️ Sustainable, biodegradable packaging</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <p>
          We are committed to sustainability, ethical sourcing, and community. Every plant
          sold supports our reforestation initiative — for every 10 plants purchased, we
          plant one tree in partnership with global reforestation charities.
        </p>
      </section>

      <section className="about-section">
        <h2>Get in Touch</h2>
        <p>
          Have questions? We'd love to hear from you! Reach us at{' '}
          <a href="mailto:hello@paradisenursery.com">hello@paradisenursery.com</a> or
          follow us on social media <strong>@ParadiseNursery</strong>.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
