import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm <span className="font-semibold">Pranit Shinde</span>, a
          self-taught front-end developer with a passion for crafting responsive
          and user-friendly web experiences using{" "}
          <span className="font-semibold text-blue-600">React.js</span> and{" "}
          <span className="font-semibold text-blue-600"> CSS</span>.
          <br />
          <br />I come from a civil engineering background and transitioned into
          tech with a strong focus on design and functionality. I'm always
          curious, always learning, and excited to work on meaningful projects
          that solve real problems.
        </p>
      </div>
    </section>
  );
};

export default About;
