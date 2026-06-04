import { useRef } from "react"
import emailjs from "@emailjs/browser"

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        console.log(result.text)
        alert("Message sent successfully!")
        form.current.reset()
      },
      (error) => {
        console.log(error.text)
        alert(error.text)
      }
    )
  }

  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-32 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-slate-400 text-lg">
            Feel free to connect with me for collaborations,
            internships, or development opportunities.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            {/* Email */}
            <div className="flex items-center gap-5">

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-indigo-400 text-xl">
                <FaEnvelope />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Email
                </h3>

                <p className="text-slate-400">
                  sdhagnanarathna@gmail.com
                </p>

              </div>

            </div>

            {/* Phone */}
            <div className="flex items-center gap-5">

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-indigo-400 text-xl">
                <FaPhoneAlt />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Phone / WhatsApp
                </h3>

                <p className="text-slate-400">
                  0719336762
                </p>

              </div>

            </div>

            {/* Address */}
            <div className="flex items-center gap-5">

              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl text-indigo-400 text-xl">
                <FaMapMarkerAlt />
              </div>

              <div>

                <h3 className="text-xl font-semibold mb-1">
                  Address
                </h3>

                <p className="text-slate-400">
                  Kurunegala, Sri Lanka
                </p>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-5 pt-5">

              {/* WhatsApp */}
              <a
                href="https://wa.me/94719336762"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500 p-5 rounded-2xl text-xl transition duration-300"
              >
                <FaWhatsapp />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Gnanarathna"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500 p-5 rounded-2xl text-xl transition duration-300"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gnanarathna"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 border border-slate-800 hover:border-indigo-500 p-5 rounded-2xl text-xl transition duration-300"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* Name */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 outline-none px-6 py-5 rounded-2xl text-white"
            />

            {/* Email */}
            <input
              type="email"
              name="from_email"
              placeholder="Email"
              required
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 outline-none px-6 py-5 rounded-2xl text-white"
            />

            {/* Message */}
            <textarea
              rows="8"
              name="message"
              placeholder="Message"
              required
              className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 outline-none px-6 py-5 rounded-2xl text-white resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 px-10 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-indigo-500/20"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}

export default Contact