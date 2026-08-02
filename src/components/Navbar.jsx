//      <div className="max-w-7xl mx-auto px-6 lg:px-1 grid lg:grid-cols-2 gap-40 items-center">
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center py-14">
      

        {/* Logo */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
          {"<Rohit />  "}
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex ml-100 gap-15 text-xl text-gray-300">

          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>

          <a href="#education" className="hover:text-cyan-400 transition-colors">
            Education
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;