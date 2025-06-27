import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white py-6 px-6 sm:px-12 md:px-20 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* SVG Logo */}
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="bg-white dark:bg-black text-black dark:text-white"
        >
          {/* your SVG paths here */}
        </svg>

        <span
          className="font-bold uppercase"
          style={{
            fontFamily: 'Segoe UI, sans-serif',
            fontWeight: 700,
            fontSize: '25px',
          }}
        >
          Anish Kumar Sinha
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center space-x-4 sm:space-x-6 text-sm sm:text-base font-segoe font-[900] text-[20px]">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveSection(link.id)}
            className={`hover:text-pink-400 px-1 rounded transition ${
              activeSection === link.id ? 'border border-pink-500' : ''
            }`}
          >
            {link.label}
          </a>
        ))}

        <button onClick={toggleTheme}>
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-blue-500" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


