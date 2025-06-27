
const Navbar = () => {

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav >
      {/* Logo */}
      <div >
        {/* SVG Logo */}
        <svg
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* your SVG paths here */}
        </svg>

        <span
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
      <div >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setActiveSection(link.id)}
            
          >
            {link.label}
          </a>
        ))}

     
      </div>
    </nav>
  );
};

export default Navbar;


