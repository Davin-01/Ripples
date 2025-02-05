import React from "react";

const About = () => {
  return (
    <div className="relative bg-gray-400 min-h-screen flex items-center justify-center px-6 py-12">
      {/* Content Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          About Ripples
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Ripples is a community-driven platform built by a passionate group of
          developers. Our mission is to create innovative tech solutions that
          have a positive impact on the world. We aim to empower individuals and
          organizations to drive change through technology.
        </p>
        <div className="bg-blue-600 text-white p-4 rounded-md mb-4">
          <h2 className="text-2xl font-semibold">Our Aim:</h2>
          <p className="text-lg">
            To create impactful projects that solve real-world problems and
            make a difference in the community through technology, collaboration,
            and innovation.
          </p>
        </div>
        <p className="text-md text-gray-500">
          We believe that technology can spark change, and we are committed to
          making a meaningful difference by building solutions that truly help
          people and society.
        </p>
      </div>
    </div>
  );
};

export default About;
