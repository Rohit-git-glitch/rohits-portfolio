function About() {
  return (
    <section 
      id="about"
      className="py-20 px-6"
    >

      <h2 className="text-4xl font-bold text-center">
        About Me
      </h2>


      <div className="max-w-3xl mx-auto mt-10 text-center">

        <p className="text-lg text-gray-600 leading-8">
          I'm Rohit, an Information Technology student and
          passionate Full Stack Developer. I enjoy building
          web applications and solving real-world problems
          through technology.
        </p>


        <p className="text-lg text-gray-600 leading-8 mt-5">
          My current focus is backend development, creating
          scalable APIs, authentication systems and database
          driven applications using modern technologies.
        </p>


        <p className="text-lg text-gray-600 leading-8 mt-5">
          Along with development, I actively practice Data
          Structures and Algorithms to improve my problem
          solving skills.
        </p>

      </div>

    </section>
  )
}

export default About;