const skills = [
  {
    name: "C++",
    icon: "devicon-cplusplus-plain colored",
  },
  
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
 
  {
    name: "HTML",
    icon: "devicon-html5-plain colored",
  },
  {
    name: "CSS",
    icon: "devicon-css3-plain colored",
  },
  {
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original colored",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "Express.js",
    icon: "devicon-express-original",
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    name: "GitHub",
    icon: "devicon-github-original",
  },
  {
    name: "VS Code",
    icon: "devicon-vscode-plain colored",
  },
  {
    name: "Postman",
    icon: "devicon-postman-plain colored",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                border
                rounded-xl
                p-6
                flex
                flex-col
                items-center
                justify-center
                gap-4
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <i className={`${skill.icon} text-6xl`}></i>

              <p className="font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;