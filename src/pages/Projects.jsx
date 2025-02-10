import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import pic1 from "@/assets/pic1.jpg";

const projects = [
  {
    name: "Project Alpha",
    description: "A cutting-edge web application for real-time collaboration and data analytics.",
    image: pic1, // Update with actual image path
    link: "/projects/alpha",
  },
  {
    name: "Project Beta",
    description: "An e-commerce platform with advanced payment systems and real-time order tracking.",
    image: pic1,
    link: "/projects/beta",
  },
  {
    name: "Project Gamma",
    description: "A machine learning project focused on predictive analytics for financial markets.",
    image: pic1,
    link: "/projects/gamma",
  },
  {
    name: "Project Delta",
    description: "A mobile app designed to help users improve their productivity and time management.",
    image: pic1,
    link: "/projects/delta",
  },
  {
    name: "Project Delta",
    description: "A mobile app designed to help users improve their productivity and time management.",
    image: pic1,
    link: "/projects/delta",
  },
  {
    name: "Project Delta",
    description: "A mobile app designed to help users improve their productivity and time management.",
    image: pic1,
    link: "/projects/delta",
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-16">
      {/* Centered Container */}
      <div className="container mx-auto px-6">
        {/* Projects Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-500">Our Projects</h1>
          <p className="mt-4 text-gray-300">
            We are proud to showcase the projects we've worked on, each representing our passion and dedication.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }}>
              <Card className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400">{project.name}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  <Button
                    className="mt-4 text-blue-500"
                    onclick={() => window.Location.href = project.link}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
