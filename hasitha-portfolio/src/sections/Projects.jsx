import { motion } from "framer-motion"

const projects = [
  {
    title: "PerSoMedia News",
    description:
      "AI-powered personalized news platform featuring fake news detection, OpenAI integration, JWT authentication, analytics dashboards, and personalized content management.",
    tech: [
      "React.js",
      "Flask",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "OpenAI API",
    ],
    github:
      "https://github.com/Gnanarathna/PerSoMedia-News-Web-Application",
  },

  {
    title: "FurneX",
    description:
      "Interactive furniture and room layout platform built using Three.js with responsive UI, authentication systems, and scalable full-stack architecture.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Three.js",
      "JWT",
    ],
    github:
      "https://github.com/nykendelpitiya/FurneX",
  },

  {
    title: "NovaFlow",
    description:
      "Full-stack project management system with Kanban workflows, role-based authentication, Docker deployment, and real-time collaboration features.",
    tech: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "WebSockets",
    ],
  },

  {
    title: "MoodFlix",
    description:
      "AI-powered mood-based movie recommendation platform using facial emotion recognition and personalized recommendation logic.",
    tech: [
      "React.js",
      "Redux Toolkit",
      "TMDB API",
      "face-api.js",
    ],
    github:
      "https://github.com/rgwdbandara/MoodFlix-App",
    live:
      "https://mood-flix-app-1k8h.vercel.app",
  },

  {
    title: "VendPay",
    description:
      "IoT-enabled smart vending machine with QR-based payment integration and automated product dispensing using ESP32 and Firebase.",
    tech: [
      "ESP32",
      "Firebase",
      "JavaScript",
      "IoT",
    ],
    live:
      "https://vendpay-ede09.firebaseapp.com",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of modern full-stack, AI-powered
            applications focused on building
            scalable digital experiences and solving
            real-world problems using modern technologies.
          </p>

        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative bg-slate-950 border border-slate-800 hover:border-indigo-500 rounded-3xl p-10 transition duration-500 overflow-hidden"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/10 to-transparent" />

              <div className="relative z-10">

                {/* Project Title */}
                <h3 className="text-3xl font-bold mb-6">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-10">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-full text-sm hover:border-indigo-500 transition"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-indigo-500/20"
                    >
                      View Repository
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-xl font-semibold transition duration-300"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects