import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import pic1 from "@/assets/pic1.jpg";

const teamMembers = [
  { 
    name: "David Moenga", 
    role: "FullStack Developer", 
    bio: "Passionate about UI/UX and React.js.", 
    photo: pic1, 
    details: "David loves designing intuitive user interfaces and creating seamless user experiences. He has experience working with modern web technologies like React and Vue." 
  },
  { 
    name: "Erick Jilo", 
    role: "Backend Developer", 
    bio: "Loves working with Flask and Django APIs.", 
    photo: "/path/to/erick-photo.jpg", 
    details: "Erick specializes in building robust backend systems with Flask and Django. He is also passionate about creating scalable and secure APIs." 
  },
  { 
    name: "Jabez", 
    role: "Blockchain Developer", 
    bio: "Builds web applications with and integrates with ICP", 
    photo: "/path/to/jabez-photo.jpg", 
    details: "Jabez has experience building web applications with ICP and integrating with ICP." 
  },
  { 
    name: "Festus", 
    role: "ML Engineer", 
    bio: "Loves working with TensorFlow and PyTorch.", 
    photo: "/path/to/festus-photo.jpg", 
    details: "Festus is passionate about machine learning and artificial intelligence. He has hands-on experience with popular ML frameworks like TensorFlow and PyTorch." 
  },
  { 
    name: "Barasa", 
    role: "Backend Developer", 
    bio: "Works with Flask and FastAPI.", 
    photo: "/path/to/barasa-photo.jpg", 
    details: "Barasa excels in backend development, especially with Flask and FastAPI. He focuses on creating efficient, clean, and maintainable code." 
  },
];

export default function AboutPage() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Centered Container */}
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-500">About Us</h1>
          <p className="mt-4 text-gray-300">
            We are a team of passionate developers dedicated to building impactful solutions.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="bg-gray-900 text-white rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  <Button
                    className="mt-2 text-blue-500 flex items-center"
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? "Hide Bio" : "View Bio"}
                    {expanded === index ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
                  </Button>
                  {expanded === index && (
                    <div className="mt-2 text-gray-300">
                      <div className="flex items-center mb-4">
                        <img 
                          src={member.photo} 
                          alt={member.name} 
                          className="w-12 h-12 rounded-full mr-4" 
                        />
                        <div>
                          <p className="text-sm">{member.bio}</p>
                          <p className="mt-2 text-sm">{member.details}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-500 text-center">Our Journey</h2>
          <div className="mt-8 space-y-6">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-blue-400">Founded in 2024</h3>
                <p className="text-gray-300">A group of passionate developers came together to create innovative solutions.</p>
              </div>
            </motion.div>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-blue-400">First Major Project</h3>
                <p className="text-gray-300">Successfully launched our first full-stack application.</p>
              </div>
            </motion.div>
            {/* Features Section */}
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }}>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-blue-400">Notable Features</h3>
                <ul className="text-gray-300 list-disc pl-6">
                  <li>Real-time collaboration tools</li>
                  <li>Responsive design for all devices</li>
                  <li>Advanced analytics and reporting</li>
                  <li>Seamless API integrations</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-500 text-white py-4 mt-16">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2025 Team Devs. All Rights Reserved.</p>
            <div className="mt-2">
              <a href="/privacy" className="text-white hover:text-gray-300 mx-2">Privacy Policy</a>
              <a href="/terms" className="text-white hover:text-gray-300 mx-2">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
