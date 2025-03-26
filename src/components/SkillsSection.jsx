import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      {/* Skills Heading */}
      <h2 className="text-4xl font-bold mb-8">Skills</h2>

      {/* Skill Cards */}
      <div className="flex justify-center space-x-12">
        {/* Skill 1 - JavaScript */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-purple-500">JavaScript</h3>
          <p className="text-sm text-gray-600">
            JavaScript is my primary programming language for dynamic web applications.
          </p>
        </div>

        {/* Skill 2 - React */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-purple-500">React.Js</h3>
          <p className="text-sm text-gray-600">
            React allows me to build fast, scalable, and interactive user interfaces.
          </p>
        </div>

        {/* Skill 3 - Node.js */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-purple-500">Node.Js</h3>
          <p className="text-sm text-gray-600">
            I use Node.js for building server-side applications with a non-blocking event-driven model.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
