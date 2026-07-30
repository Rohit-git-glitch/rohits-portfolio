// function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-5">
//       <h1 className="text-2xl font-bold">
//         Rohit
//       </h1>

//       <div className="flex gap-6">
//         <a href="#home">Home</a>
//         <a href="#about">About</a>
//         <a href="#skills">Skills</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Contact</a>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 bg-slate-950/80 backdrop-blur-md">

      {/* Logo */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
        {"<Rohit />"}
      </h1>

      {/* Navigation */}
      <div className="hidden md:flex items-center gap-8 text-gray-300 font-medium">

        <a
          href="#home"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-cyan-400 transition-colors duration-300"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;