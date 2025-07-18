import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypingEffect = () => {
  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center text-center px-6 relative bg-bg-dark">
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
        Your SaaS MVP,<br />
        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Auto-Generated by AI
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-400 mb-10 h-10">
        <Typewriter
          words={[
            'Instant Deployment',
            'Optimized for SEO & Speed',
            'Pixel-perfect on All Devices',
            'AI-Powered Content Generation',
            'Powered by Next.js & Tailwind CSS',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={2000}
        />
      </p>
    </section>
  );
};

export default TypingEffect;
