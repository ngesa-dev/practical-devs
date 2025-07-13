import { FaXTwitter, FaFacebookF, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-background text-white border-t border-border py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/practical_devs.png" alt="logo" className="h-6 w-6" />
          <span className="text-lg font-semibold text-primary">Practical Devs</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-white text-center sm:text-left">
          &copy; {currentYear} Practical Devs. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a href="https://x.com/ngesa_dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaXTwitter className="text-xl" />
          </a>
          <a href="https://web.facebook.com/ngesa.dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaFacebookF className="text-xl" />
          </a>
          <a href="https://www.youtube.com/@Topstories254/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaYoutube className="text-xl" />
          </a>
          <a href="https://github.com/ngesa-dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ngesa-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaLinkedinIn className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
