import { motion } from "framer-motion"
import { FaGraduationCap, FaCertificate } from "react-icons/fa"

const certificates = [
  {
    title: "FigMate UI/UX Workshop 2025",
    role: "Publicity Team Member",
    file: "/figmate-certificate.png",
  },

  {
    title: "Nexora 1.0 Inter University Datathon 2025",
    role: "Publicity Team Member",
    file: "/nexora-certificate.png",
  },

  {
    title: "DataDive 2025 Power BI Workshop & Competition",
    role: "Publicity Team Member",
    file: "/datadive-certificate.jpg",
  },
]

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 md:py-32 px-4 sm:px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Passionate full-stack developer focused on building
            scalable web applications, AI-powered systems,
            and modern digital experiences using modern technologies.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10"
          >

            {/* Education */}
            <div className="flex items-center gap-4 mb-8">

              <div className="bg-indigo-500/20 text-indigo-400 p-3 sm:p-4 rounded-2xl text-xl sm:text-2xl">
                <FaGraduationCap />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Education
              </h3>

            </div>

            <div className="space-y-6">

              <div>

                <h4 className="text-xl sm:text-2xl font-semibold mb-3 leading-snug">
                  BSc (Hons) Computer Science
                </h4>

                <p className="text-indigo-400 text-base sm:text-lg mb-2">
                  NSBM Green University, Sri Lanka
                </p>

                <p className="text-slate-400 mb-4 text-sm sm:text-base">
                  Jan 2023 – Present
                </p>

                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  Currently pursuing a Bachelor of Science (Honours)
                  in Computer Science affiliated with the
                  University of Plymouth, United Kingdom.
                  Focused on full-stack development, AI integration,
                  scalable systems, and modern software engineering practices.
                </p>

              </div>

              {/* Additional Activities */}
              <div className="pt-6 border-t border-slate-800">

                <h4 className="text-xl sm:text-2xl font-semibold mb-4">
                  Activities & Leadership
                </h4>

                <ul className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">

                  <li>
                    • Publicity Team Member – FigMate UI/UX Workshop 2025
                  </li>

                  <li>
                    • Publicity Team Member – Nexora 1.0 Inter University Datathon 2025
                  </li>

                  <li>
                    • Publicity Team Member – DataDive 2025 Power BI Workshop & Competition
                  </li>

                  <li>
                    • Sergeant at Arms – Interact Club,
                    Maliyadeva Adarsha Maha Vidyalaya, Kurunegala
                  </li>

                </ul>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10"
          >

            {/* Certificates Header */}
            <div className="flex items-center gap-4 mb-10">

              <div className="bg-purple-500/20 text-purple-400 p-3 sm:p-4 rounded-2xl text-xl sm:text-2xl">
                <FaCertificate />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Certifications
              </h3>

            </div>

            {/* Certificates */}
            <div className="space-y-5 sm:space-y-6">

              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-900 border border-slate-800 hover:border-indigo-500 rounded-2xl p-5 sm:p-6 transition duration-300"
                >

                  <h4 className="text-lg sm:text-xl font-semibold mb-2 leading-snug">
                    {certificate.title}
                  </h4>

                  <p className="text-slate-400 mb-5 text-sm sm:text-base">
                    {certificate.role}
                  </p>

                  <a
                    href={certificate.file}
                    download
                    className="inline-block w-full sm:w-auto text-center bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-indigo-500/20"
                  >
                    Download Certificate
                  </a>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About