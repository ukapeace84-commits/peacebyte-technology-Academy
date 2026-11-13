import React from "react";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div>
          <span>ABOUT PEACEBYTES TECHNOLOGY</span>
          <h1>Empowering People Through Technology</h1>
          <p>
            We are committed to making digital education accessible,
            practical and meaningful for everyone.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900"
          alt="Students learning together"
        />
      </section>

      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          Peacebytes Technology is a digital skills academy focused on
          helping learners develop practical technology skills, explore
          new opportunities and prepare for the digital future.
        </p>

        <h2>Our Mission</h2>
        <p>
          To provide accessible technology education that empowers
          individuals with relevant skills, confidence and knowledge.
        </p>

        <h2>Our Vision</h2>
        <p>
          To become a trusted learning community where people can
          discover their potential and grow through technology.
        </p>
      </section>
    </main>
  );
}

export default About;