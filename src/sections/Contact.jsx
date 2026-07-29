import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLinktree } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* Left Content */}
        <div>

          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>


          <p className="mt-6 text-gray-600 text-lg leading-8">
            I'm always open to discussing new projects,
            opportunities and collaborations.
            Feel free to connect with me.
          </p>


          {/* Contact Options */}
          <div className="flex flex-wrap gap-5 mt-10">


            <a
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 hover:bg-black hover:text-white transition"
            >
              <SiGmail />
              Gmail
            </a>


            <a
              href="#"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 hover:bg-black hover:text-white transition"
            >
              <FaLinkedin />
              LinkedIn
            </a>


            <a
              href="#"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 hover:bg-black hover:text-white transition"
            >
              <SiLinktree />
              Linktree
            </a>


          </div>


          {/* Resume Button */}
          <a
            href="/rohit's-resume.pdf"
            download
            className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
          >
            Download Resume
          </a>


        </div>



        {/* Right Image */}
        <div className="flex justify-center">

          <div className="w-72 h-72 rounded-full border-4 flex items-center justify-center overflow-hidden">

            <img
              src="/profile.png"
              alt="Rohit"
              className="w-full h-full object-cover"
            />

          </div>

        </div>


      </div>

    </section>
  )
}

export default Contact;