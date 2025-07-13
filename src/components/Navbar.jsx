import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // ✅ Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/practical_devs.png" alt="logo" className="h-8 w-8" />
          <span className="text-xl md:text-2xl font-bold text-primary">
            Practical Devs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* CTA Buttons */}
          <Link
            to="/login"
            className="text-sm font-medium text-white hover:text-primary"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm font-semibold bg-primary text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Floating Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-[72px] left-0 w-full bg-gray-900 shadow-md border-t border-gray-800 px-4 pb-4 pt-2 md:hidden z-40"
        >
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium py-2 transition hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <hr className="border-gray-700 my-2" />

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-white hover:text-primary py-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold transition-transform transform hover:scale-105 hover:bg-blue-600"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
