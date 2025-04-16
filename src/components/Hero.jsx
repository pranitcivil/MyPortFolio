import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-white">
      <h2 className="text-4xl font-bold">Hi, I'm Pranit 👋</h2>
      <p className="text-lg mt-4">Front-End Developer | UI Enthusiast</p>

      <div className="flex gap-4 mt-6">
        <a
          href="https://github.com/pranitcivil"
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/pranit-shinde-b44288215/"
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Hero;
