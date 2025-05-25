const Header = () => {
  return <header className="bg-indigo-600 text-white p-4 sticky top-0 z-10">
    <nav className="flex justify-between items-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">Shisha Lounge</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#menu" className="hover:underline">Menu</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
}

export default Header;