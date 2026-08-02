import { FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLinktree } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16"
    >

      <div className="mx-4 md:mx-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-lg px-6 py-8 md:px-10 md:py-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>

          <h2 className="text-3xl font-bold">
            Contact Me
          </h2>


          <p className="mt-5 text-gray-600 text-base leading-7 max-w-lg">
            I'm always open to discussing new projects,
            opportunities and collaborations.
            Feel free to connect with me.
          </p>


          {/* Contact Options */}
          <div className="flex flex-wrap gap-4 mt-8">


            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rhajare851@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 
              hover:bg-black hover:text-white transition duration-300"
            >
              <span className="p-2 rounded-full bg-red-100 text-red-600">
                <SiGmail />
              </span>
              Gmail
            </a>


            <a
              href="https://www.linkedin.com/in/rohit-hajare2/"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 
              hover:bg-black hover:text-white transition duration-300"
            >
              <span className="p-2 rounded-full bg-blue-100 text-blue-600">
                <FaLinkedin />
              </span>
              LinkedIn
            </a>


            <a
              href="https://linktr.ee/Rohit2_"
              className="flex items-center gap-3 border rounded-xl px-5 py-3 
              hover:bg-black hover:text-white transition duration-300"
            >
              <span className="p-2 rounded-full bg-green-100 text-green-600">
                <SiLinktree />
              </span>
              Linktree
            </a>


          </div>


          {/* Resume Button */}
          <a
            href="/rohits-resume.pdf"
            download
            className="inline-block mt-8 px-7 py-3 
            bg-blue-600 text-white rounded-lg 
            hover:bg-blue-700 hover:scale-105 
            transition duration-300"
          >
            Download Resume
          </a>


        </div>



        {/* Right Image */}
        <div className="flex justify-center md:justify-end">

          <div className="w-72 h-72 rounded-full border-4 flex items-center justify-center overflow-hidden">

            <img
              src="/profile.png"
              alt="Rohit"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

        </div>

      </div>

    </section>
  )
}

export default Contact;