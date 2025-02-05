import { React } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c4477] via-[#343644] to-[#06D6A0] text-white">
      {/* Hero Section */}
      <div className="relative text-center py-32 px-6 sm:px-12">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold sm:text-6xl drop-shadow-lg">
            Build the Future with Ripples
          </h1>
          <p className="text-lg mt-4 opacity-90 drop-shadow-md">
          We are a group of passionate developers dedicated to building innovative solutions that create a lasting impact in our communities.
          </p>
          <Link 
            to="/about" 
            className="inline-block mt-6 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      {/* <div className="flex flex-col items-center justify-center py-16 px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-black">
          Our Mission
        </h2>
        <p className="text-lg text-gray-50 max-w-2xl text-center">
          We are a group of passionate developers dedicated to building innovative solutions that create a lasting impact in our communities.
        </p>
        <Link 
          to="/projects" 
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition duration-300"
        >
          Explore Projects
        </Link>
      </div> */}

      {/* Highlights Section */}
      <div className="py-16 px-6 text-center bg-black text-white">
        <h2 className="text-4xl font-extrabold mb-4">Why Join Us?</h2>
        <p className="text-lg opacity-90 mb-6">
          Connect, innovate, make a difference and get solutions from our talented team.
        </p>
        <div className="flex justify-center space-x-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Collaboration</h3>
            <p className="mt-2 opacity-80">Work with a passionate team on impactful projects.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Innovation</h3>
            <p className="mt-2 opacity-80">Solve real-world problems using cutting-edge technologies.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition">
            <h3 className="text-2xl font-bold">Growth</h3>
            <p className="mt-2 opacity-80">Learn, improve, and advance your development skills.</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>© 2025 Ripples. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
