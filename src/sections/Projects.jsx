import {motion} from "framer-motion";
import projects from "../data/projects";
import taskFlowImage from "../assets/taskflow.png";
// import { SiGithub} from "react-icons/si";
import { FaTerminal } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiGithub,
} from "react-icons/si";


const techIcons = {
  React: <SiReact className="text-sky-400 text-2xl" />,
  "Node.js": <SiNodedotjs className="text-green-500 text-2xl" />,
  "Express.js": <SiExpress className="text-white text-2xl" />,
  // "Express.js": <FaTerminal className="text-gray-300 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-400 text-2xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-2xl" />,
  Python: <SiPython className="text-yellow-300 text-2xl" />,
  Firebase: <SiFirebase className="text-orange-400 text-2xl" />,
  "C++": <SiCplusplus className="text-blue-500 text-2xl" />,
  MySQL: <SiMysql className="text-blue-400 text-2xl" />,
};


function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center">
        Projects
      </h2>


      <div className="max-w-7xl mx-auto mt-12 grid md:grid-cols-2 gap-8">

        {
          projects.map((project) => (
            <motion.div
              key={project.id}
              className="border rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >

              {/* Image Section */}
              <div className="h-40 overflow-hidden bg-slate-900">

                {
                  taskFlowImage ? (
                    <img
                      src={taskFlowImage}
                      alt={taskFlowImage}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <p className="text-gray-500">
                      Project Preview
                    </p>
                  )
                }

              </div>


              {/* Content Section */}
              <div className="p-8">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>


                <p className="text-sm line-climp-2 text-gray-600">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-5">

                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      title={tech}
                      className="hover:scale-110 transition duration-300"
                    >
                      {techIcons[tech]}
                    </div>
                  ))}

                </div>


                <div className="mt-4 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:scale-105 transition"
                  >
                    <SiGithub className="text-lg" />
                    <span>GitHub</span>
                  </a>

                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg opacity-50 cursor-not-allowed"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo (Coming Soon)</span>
                  </button>
                  
                  {/* //! after deployed change into following
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Live Demo</span>
                  </a> */}

                </div>

              </div>

            </motion.div>
          ))
        }

      </div>

    </section>
  )
}

export default Projects;