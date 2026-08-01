function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between py-6">

        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer">
          {"<Rohit />"}
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">

          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#skills" className="hover:text-cyan-400">Skills</a>
          <a href="#education" className="hover:text-cyan-400">Education</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;