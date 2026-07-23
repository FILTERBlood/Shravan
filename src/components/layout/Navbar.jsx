import { useState } from "react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

const navItems = ["About", "Experience", "Projects", "Skills", "Contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:block">
          <Button>Resume</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-300 hover:text-white focus:outline-none md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
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
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-slate-300 transition-colors hover:bg-slate-900 hover:text-white"
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <Button>Resume</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;