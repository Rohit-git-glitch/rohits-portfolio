function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5">
      <h1 className="text-2xl font-bold">
        Rohit
      </h1>

      <div className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar