import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBrain, FaUsers, FaCheckCircle, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

const testimonials = [
  { text: "Ripples transformed our digital presence—highly recommend!", author: "Sarah Johnson, CEO of TechCorp" },
  { text: "Their AI solutions took our automation to the next level!", author: "David Lee, CTO of InnovateX" },
  { text: "Excellent UI/UX design—our users love the new interface!", author: "Maria Gomez, Product Manager at WebX" }
];

const successStories = [
  { title: "E-commerce Platform", text: "We built a scalable online store that boosted sales by 40%." },
  { title: "AI Chatbot", text: "Our AI-powered chatbot reduced customer service response times by 60%." },
  { title: "Mobile Banking App", text: "We developed a secure and intuitive banking app that increased user engagement by 35%." }
];

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c4477] via-[#343644] to-[#06D6A0] text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-32 px-6 sm:px-12">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold sm:text-6xl drop-shadow-lg leading-tight">
            Build the Future with <span className="text-[#06D6A0]">Ripples</span>
          </h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto drop-shadow-md">
            We craft innovative, high-quality software solutions that drive real impact.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block mt-6"
          >
            <Link
              to="/about"
              className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform duration-300 hover:bg-gray-200"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Why Join Us Section */}
      <div className="py-24 px-6 bg-gray-800 text-white">
        <h2 className="text-4xl font-extrabold text-center">Why Join Us?</h2>
        <p className="text-lg opacity-90 text-center max-w-3xl mx-auto mt-4">
          Be part of a thriving community where innovation, collaboration, and growth drive meaningful impact.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            { title: "Collaboration", text: "Work with a passionate team on impactful projects.", icon: <FaUsers size={50} className="text-[#06D6A0]" /> },
            { title: "Innovation", text: "Solve real-world problems using cutting-edge technologies.", icon: <FaBrain size={50} className="text-[#FFD700]" /> },
            { title: "Growth", text: "Learn, improve, and advance your development skills.", icon: <FaCheckCircle size={50} className="text-[#FF6B6B]" /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-8 w-80 bg-gray-700 shadow-xl rounded-xl transition transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border border-gray-600"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 opacity-80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-4xl font-extrabold text-center">Success Stories</h2>
        <p className="text-lg opacity-90 text-center max-w-3xl mx-auto mt-4">
          Discover how our solutions have transformed businesses and helped clients achieve success.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <div key={index} className="p-8 w-80 bg-gray-800 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold">{story.title}</h3>
              <p className="mt-2 opacity-80">{story.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-6 bg-gray-800 text-white">
        <h2 className="text-4xl font-extrabold text-center">What Our Clients Say</h2>
        <div className="mt-12 text-center max-w-xl mx-auto">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FaQuoteLeft className="text-3xl text-[#06D6A0] mx-auto" />
            <p className="text-xl font-semibold mt-4">{testimonials[currentTestimonial].text}</p>
            <p className="mt-2 opacity-80">- {testimonials[currentTestimonial].author}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
