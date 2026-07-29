import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import laptop from "../assets/laptop.png";

function Hero() {

  const roles = [
    "Backend Developer",
    "Cloud Enthusiast",
    "AI Enthusiast",
    "Programmer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);


  useEffect(() => {

    const currentRole = roles[roleIndex];
    const speed = deleting ? 80 : 120;
    const timer = setTimeout(() => {


      if (!deleting) {

        setText(
          currentRole.substring(0, text.length + 1)
        );


        if (text === currentRole) {
          setTimeout(() => {
            setDeleting(true);
          }, 3000);
        }

      }


      else {

        setText(
          currentRole.substring(0, text.length - 1)
        );


        if (text === "") {
          setDeleting(false);

          setRoleIndex(
            (prev) => (prev + 1) % roles.length
          );
        }

      }


    }, speed);


    return () => clearTimeout(timer);


  }, [text, deleting, roleIndex]);



  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT SIDE */}

        <div>


          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xl"
          >
            Hey there, I'm
          </motion.p>



          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mt-3"
          >
            Rohit Hajare
          </motion.h1>



          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-3xl mt-5 font-semibold text-gray-700"
          >
            Student
          </motion.h2>



          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl mt-3 font-bold text-blue-600"
          >
            {text}

            <span className="animate-pulse">
              |
            </span>

          </motion.h3>



          <p className="mt-6 text-gray-600 text-lg leading-8 max-w-xl">

            I build modern web applications and scalable
            backend systems using React, Node.js and MongoDB.
            Passionate about technology, cloud and artificial intelligence.

          </p>



          <div className="flex gap-5 mt-8">


            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
            >
              View Projects
            </a>



            <a
              href="/resume.pdf"
              className="px-6 py-3 border rounded-lg hover:bg-black hover:text-white transition"
            >
              Resume
            </a>


          </div>



          <div className="flex gap-6 mt-8 text-3xl">

            <FaGithub />
            <FaLinkedin />
            <SiLeetcode />

          </div>


        </div>

            {/* RIGHT SIDE */}

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex justify-center"
            >


              <div className="relative">


                {/* Glow Effect */}
                <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full">
                </div>



                {/* Laptop Image */}
                <img
                  src={laptop}
                  alt="Coding laptop illustration"
                  className="relative w-[420px] md:w-[500px] object-contain"
                />


              </div>


            </motion.div>

      </div>


    </section>
  )
}


export default Hero;