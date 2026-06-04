import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import {
  FaDownload,
} from "react-icons/fa"

import profile from "../assets/profile.png"

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center px-6 pt-28 pb-16"
    >

      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-60 h-60 md:w-72 md:h-72 bg-indigo-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-60 h-60 md:w-72 md:h-72 bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 lg:gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center order-2 lg:order-1"
        >

          {/* Subtitle */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="uppercase tracking-[0.25em] md:tracking-[0.35em] text-indigo-400 mb-5 text-sm sm:text-lg md:text-2xl"
            repeat={Infinity}
          />

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1] mb-6 text-white">

            Building

            <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Scalable Web
            </span>

            <span className="block text-white">
              Applications
            </span>

          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">

Focused on building high-performance web applications, interactive digital experiences, and impactful software solutions with clean architecture and modern development practices.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-8">

            <a
              href="#projects"
              className="text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center gap-3 border border-slate-700 hover:border-indigo-500 px-8 py-4 rounded-2xl font-semibold transition duration-300 text-slate-300"
            >
              <FaDownload />
              Download CV
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-[100px] rounded-full" />

          {/* Image Card */}
          <div className="relative bg-slate-900/70 border border-slate-800 backdrop-blur-xl rounded-[30px] md:rounded-[40px] p-4 md:p-5 shadow-2xl">

            <img
              src={profile}
              alt="profile"
              className="w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] rounded-[25px] md:rounded-[30px] object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero