import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFDF2] text-black shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Ripples
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-500 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-500 transition">About</Link>
          <Link to="/projects" className="hover:text-gray-500 transition">Projects</Link>
          <Link to="/contact" className="hover:text-gray-500 transition">Contact</Link>
          <Link to="/team" className="hover:text-gray-500 transition">Our Team</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFFDF2] border-t border-gray-300">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="hover:text-gray-500 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
