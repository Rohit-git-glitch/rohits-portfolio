import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section 
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >

        <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >Hi, I'm Rohit 👋</motion.h1>


            <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >Backend + Cloud Developer</motion.h2>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        > I build modern web applications using React, 
        Node.js and MongoDB. Passionate about backend 
        development, problem solving and Data Structures 
        & Algorithms.</motion.p>
      

        <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        ><a 
          href="#projects"
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          View Projects
        </a>

        <a 
          href="/resume.pdf"
          className="px-6 py-3 rounded-lg border"
        >
          Download Resume
        </a>
        </motion.div>


      
    <motion.div
    className="flex gap-6 mt-10 text-3xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    >   <a href="#" className="hover:scale-110">
          <FaGithub />
        </a>

        <a href="#" className="hover:scale-110">
          <FaLinkedin />
        </a>

        <a href="#" className="hover:scale-110">
          <SiLeetcode />
        </a>
    </motion.div>

    
    </section>
  )
}

export default Hero;