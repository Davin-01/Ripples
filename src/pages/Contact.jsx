import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can send the formData to an API or email service here
  };

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
            Contact Us at <span className="text-[#06D6A0]">Ripples</span>
          </h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl mx-auto drop-shadow-md">
            Have questions or want to collaborate? We’d love to hear from you!
          </p>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <motion.div
        className="bg-gray-900 rounded-2xl shadow-lg mt-8 p-6 w-full max-w-lg mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#06D6A0]"
            required
          ></textarea>
          <Button type="submit" className="w-full text-white bg-[#06D6A0] hover:bg-[#05B28D] py-3 rounded-full text-lg font-semibold">
            Send Message
          </Button>
        </form>
      </motion.div>

      {/* Contact Details Section */}
      <div className="mt-16 text-center px-6">
        <p className="text-lg text-gray-400">
          <span className="font-bold text-[#06D6A0]">Email:</span> moengadavid90@gmail.com
        </p>
        <p className="text-lg text-gray-400 mt-2">
          <span className="font-bold text-[#06D6A0]">Phone:</span> +254 797682721
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://twitter.com/teamdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#06D6A0] hover:text-white transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/company/teamdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#06D6A0] hover:text-white transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/teamdevs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#06D6A0] hover:text-white transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#06D6A0] text-white py-4 mt-16 text-center">
        <p className="text-sm">&copy; 2025 Ripples. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
