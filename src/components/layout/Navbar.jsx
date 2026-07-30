import { useState, useEffect, useRef } from "react";
import Logo from "../ui/Logo";

const navItems = [
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
  "Education",
];

function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleNavClick = (item) => {
    setActiveSection(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo onClick={() => handleNavClick("hero")} />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => handleNavClick(item)}
                className={`transition-colors hover:text-white ${
                  activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-slate-300"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-4 w-56 rounded-xl border border-slate-800 bg-slate-950 shadow-xl">
              <ul className="flex flex-col p-3">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item)}
                      className="block w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-900 hover:text-white"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;