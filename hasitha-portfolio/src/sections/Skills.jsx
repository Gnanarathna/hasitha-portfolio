import { motion } from "framer-motion"

const skills = [
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Flask",
  "MongoDB",
  "Firebase",
  "Git",
  "GitHub",
  "CI/CD",
  "Docker",
  "Figma",
  "Responsive Design",
  "REST APIs",
  "JavaScript",
  "JWT Authentication",
  "OpenAI API",
  "WebSockets",
  "Vercel",
  "Render",
  "Postman",
]

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-28 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable,
            modern, and user-focused web applications.
          </p>

        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                scale: 1.05,
              }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500 px-7 py-4 rounded-full text-lg font-medium text-slate-200 transition duration-300 shadow-lg"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills