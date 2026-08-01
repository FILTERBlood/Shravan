import { useState, useEffect, useRef } from "react";
import Logo from "../ui/Logo";
import { FaSearch } from "react-icons/fa";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const menuRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const filteredSuggestions =
    searchTerm.trim() === ""
      ? []
      : navItems.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        );

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (
        isSearchOpen &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setSearchTerm("");
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isSearchOpen]);

  const handleNavClick = (item) => {
    setActiveSection(item.toLowerCase());
    setIsOpen(false);
    setSearchTerm("");
    setShowSuggestions(false);
    setIsSearchOpen(false);
  };

  const handleSearchChange = (item) => {
    handleNavClick(item);
  };

  const SuggestionList = () => (
    <ul className="w-52 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-xl">
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => handleSearchChange(item)}
              className="block w-full px-4 py-2 text-left text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {item}
            </button>
          </li>
        ))
      ) : (
        searchTerm.length >= 2 && (
          <li className="px-4 py-3 text-sm text-slate-500">
            No results found
          </li>
        )
      )}
    </ul>
  );

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

        {/* Desktop Search */}
        <div className="relative hidden md:block">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                filteredSuggestions.length > 0
              ) {
                handleSearchChange(filteredSuggestions[0]);
              }
            }}
            className="w-44 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 ease-in-out focus:w-52 focus:border-blue-500"
          />

          {showSuggestions &&
            searchTerm.trim() !== "" && (
              <div className="absolute left-0 top-full mt-3 z-50">
                <SuggestionList />
              </div>
            )}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-5 md:hidden">

          {/* Mobile Search */}
          <div ref={mobileSearchRef} className="relative">

            {isSearchOpen ? (
              <>
                <input
                  autoFocus
                  type="text"
                  value={searchTerm}
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setIsSearchOpen(false);
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }

                    if (
                      e.key === "Enter" &&
                      filteredSuggestions.length > 0
                    ) {
                      handleSearchChange(filteredSuggestions[0]);
                    }
                  }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-44 rounded-full border border-blue-500 bg-slate-800 px-4 py-2 text-sm text-white outline-none transition-all duration-300 ease-in-out"
                />

                {showSuggestions &&
                  searchTerm.trim() !== "" && (
                    <div className="absolute right-0 top-full mt-3 z-50">
                      <SuggestionList />
                    </div>
                  )}
              </>
            ) : (
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                <FaSearch className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Mobile Menu */}
          <div ref={menuRef} className="relative">

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              className="rounded-full p-2 text-slate-300 transition hover:bg-slate-800 hover:text-white"
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
        </div>

      </nav>
    </header>
  );
}

export default Navbar;