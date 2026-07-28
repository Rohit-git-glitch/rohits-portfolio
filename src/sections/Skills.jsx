const skillGroups = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript", "Python"]
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];


function Skills() {
  return (
    <section 
      id="skills"
      className="py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center">
        Skills
      </h2>


      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">

        {
          skillGroups.map((group) => (
            <div 
              key={group.title}
              className="border rounded-xl p-6"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {group.title}
              </h3>


              <div className="flex flex-wrap gap-3">

                {
                  group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-gray-100"
                    >
                      {skill}
                    </span>
                  ))
                }

              </div>

            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Skills;