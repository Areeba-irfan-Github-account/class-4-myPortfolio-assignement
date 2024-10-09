import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-extrabold mb-8 animate-slide-in-left text-blue-300 hover:text-blue-100 transition-colors duration-300">
                        About Us
                    </h1>
                    <div className="bg-blue-800 bg-opacity-30 rounded-lg p-8 shadow-2xl animate-fade-in-up backdrop-blur-md hover:bg-opacity-40 transition-all duration-300">
                        <p className="text-xl mb-6 leading-relaxed animate-slide-in-right text-blue-100">

                            I am a passionate software engineer with a strong focus on web development, dedicated to crafting innovative, user-centric applications while continuously enhancing my technical expertise.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center animate-bounce-in hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-blue-300">🚀</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-blue-200">Innovation</h3>
                                <p className="animate-fade-in text-blue-100">Pushing the boundaries of what's possible</p>
                            </div>
                            <div className="text-center animate-bounce-in delay-150 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-blue-300">🤝</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-blue-200">Collaboration</h3>
                                <p className="animate-fade-in text-blue-100">Working together to achieve greatness</p>
                            </div>
                            <div className="text-center animate-bounce-in delay-300 hover:transform hover:scale-105 transition-all duration-300">
                                <div className="text-5xl mb-4 animate-pulse text-blue-300">💡</div>
                                <h3 className="text-2xl font-semibold mb-2 animate-slide-in-bottom text-blue-200">Expertise</h3>
                                <p className="animate-fade-in text-blue-100">Bringing years of experience to every project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;