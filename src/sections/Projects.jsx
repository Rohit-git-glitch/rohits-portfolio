import {motion} from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center">
        Projects
      </h2>


      <div className="max-w-4xl mx-auto mt-12">

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
              <div className="h-64 bg-gray-200 flex items-center justify-center">

                {
                  project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
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

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>


                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>


                <div className="flex flex-wrap gap-3 mt-6">

                  {
                    project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full border text-sm"
                      >
                        {tech}
                      </span>
                    ))
                  }

                </div>


                <div className="mt-6">

                  <h4 className="text-xl font-semibold">
                    Features
                  </h4>


                  <ul className="mt-3 list-disc ml-5 text-gray-600">

                    {
                      project.features.map((feature) => (
                        <li key={feature}>
                          {feature}
                        </li>
                      ))
                    }

                  </ul>

                </div>


                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    className="px-5 py-2 bg-black text-white rounded-lg hover:scale-105 transition"
                  >
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
                  >
                    Live Demo
                  </a>

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