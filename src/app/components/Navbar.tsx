const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-10 bg-gradient-to-r from-blue-900 to-black bg-opacity-90 backdrop-blur-lg shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <h1 className="text-3xl font-extrabold text-blue-300 hover:text-blue-100 transition-all duration-300 transform hover:scale-105">
                            Areeba Irfan
                        </h1>
                        <ul className="flex space-x-8">
                            <li>
                                <a href="/" className="text-blue-200 hover:text-white font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-300">Home</a>
                            </li>
                            <li>
                                <a href="/About" className="text-blue-200 hover:text-white font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-300">About</a>
                            </li>
                            <li>
                                <a href="/Projects" className="text-blue-200 hover:text-white font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-300">Projects</a>
                            </li>
                            <li>
                                <a href="/Contact" className="text-blue-200 hover:text-white font-medium transition-all duration-300 border-b-2 border-transparent hover:border-blue-300">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;