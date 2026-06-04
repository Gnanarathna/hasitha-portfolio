import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-white tracking-wide"
        >
          Hasitha Anjana
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-slate-300 text-lg">

          <li>
            <a
              href="#home"
              className="hover:text-indigo-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-indigo-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-indigo-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-indigo-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-indigo-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >

          {menuOpen ? <FaTimes /> : <FaBars />}

        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[400px] border-t border-slate-800"
            : "max-h-0"
        }`}
      >

        <ul className="flex flex-col items-center gap-8 py-8 bg-slate-950/95 backdrop-blur-xl text-slate-300 text-lg">

          <li>
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-indigo-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar