import * as React from 'react';

const About: React.FC= () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-8 lg:px-20 py-16 sm:py-24 transition-colors bg-teal-600 mx-2 rounded-lg dark-bg-black"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          The Vision That Guides Us
        </h1>
    
        <h5 className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Moving forward with a vision built around people and progress.
        </h5>
    
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          At our core, we are a team of passionate thinkers, builders, and problem-solvers
          dedicated to creating meaningful solutions. What started as a small idea
          has grown into a mission—delivering quality, innovation, and trust through
          every product and service we offer.
          <br /><br />
          We believe in simplicity, transparency, and putting people first. Every
          decision we make, every feature we build, and every step we take is driven
          by our commitment to improving lives and bringing value to our community.
          <br /><br />
          Over the years, our journey has been shaped by curiosity and continuous learning.
          We embrace challenges, celebrate progress, and evolve with purpose. Together,
          we strive to build something that not only performs well today but continues
          to make a difference for generations to come.
        </p>
      </div>
    </section>

  );
};

export default About;