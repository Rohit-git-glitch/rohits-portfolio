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
      className="min-h-screen flex items-start"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-40 items-center">

        {/* LEFT SIDE */}

        <div  className="md:pl-0">


          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 leading-normal font-extrabold"
          >

            <span className="block text-6xl md:text-7xl">
              Hey, there!
            </span>
            

            <span className="block text-6xl md:text-7xl text-white">
              I am
            </span>

            <span className="block text-6xl md:text-7xl bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Rohit Hajare
            </span>

          </motion.h1>



          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl md:text-2xl font-medium text-gray-400"
          >
            Computer Engineering Student
          </motion.h2>



          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-3xl md:text-5xl font-bold text-cyan-400 h-16"
            >
            {text}

            <span className="animate-pulse">
              |
            </span>

          </motion.h3>



          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

            Building scalable backend systems and modern web applications. Exploring Cloud, AI, and DSA every day


        </p>
        </div>
        {/* RIGHT SIDE */}

        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex justify-center items-center"
        >

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>

          {/* React Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute -top-6 left-10 px-4 py-2 bg-slate shadow-lg rounded-full"
          >
            React
          </motion.div>

          {/* Node Badge */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute bottom-10 -left-8 px-4 py-2 bg-slate shadow-lg rounded-full"
          >
            Node.js
          </motion.div>

          {/* MongoDB Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.8, repeat: Infinity }}
            className="absolute top-16 -right-10 px-4 py-2 bg-slate shadow-lg rounded-full"
          >
            MongoDB
          </motion.div>

          {/* Express Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.2, repeat: Infinity }}
            className="absolute bottom-4 right-0 px-4 py-2 bg-slate shadow-lg rounded-full"
          >
            Express
          </motion.div>


          {/* Laptop */}
          <img
            src={laptop}
            alt="Laptop"
            className="relative w-[220px] md:w-[300px] object-contain"
          />

        </motion.div>
            
      </div>


    </section>
  )
}


export default Hero;