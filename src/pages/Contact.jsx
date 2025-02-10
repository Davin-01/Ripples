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
    <div className="min-h-screen bg-black text-white flex flex-col items-center pt-16 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-bold text-blue-500">Contact Us</h1>
        <p className="mt-4 text-gray-300">
          Have questions or want to work with us? Fill out the form below or reach out through our contact details.
        </p>
      </div>

      {/* Contact Form */}
      <motion.div 
        className="bg-gray-900 rounded-2xl shadow-lg mt-8 p-6 w-full max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <Button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-600">
            Send Message
          </Button>
        </form>
      </motion.div>

      {/* Contact Details */}
      <div className="mt-8 text-center">
        <p className="text-gray-400">
          <span className="font-bold text-blue-400">Email:</span> moengadavid90@gmail.com
        </p>
        <p className="text-gray-400">
          <span className="font-bold text-blue-400">Phone:</span> +254 797682721
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://twitter.com/teamdevs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
            Twitter
          </a>
          <a href="https://linkedin.com/company/teamdevs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
            LinkedIn
          </a>
          <a href="https://github.com/teamdevs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
            GitHub
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-500 text-white py-4 mt-16 w-full text-center">
        <p className="text-sm">&copy; 2025 Ripples. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
