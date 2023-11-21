function Navbar() {
  return (
    <div className="flex justify-between p-5 bg-primary-dark">
        <div></div>
        <nav className="flex justify-between w-1/2">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
            <a href="#">Blogs</a>
            <a href="#">Contact</a>
        </nav>
    </div>
  )
}

export default Navbar