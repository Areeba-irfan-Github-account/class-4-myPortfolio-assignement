import Navbar from "../components/Navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white">
            <Navbar/>
            <div className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-extrabold mb-8 text-center text-blue-300 animate-slide-in-left hover:text-blue-100 transition-colors duration-300">
                        Let's Connect
                    </h1>
                    <div className="bg-blue-800 bg-opacity-30 rounded-lg p-8 shadow-2xl animate-fade-in-up backdrop-blur-md hover:bg-opacity-40 transition-all duration-300">
                        <p className="text-xl mb-8 leading-relaxed text-center text-blue-100 animate-slide-in-right">
                            I'm excited to hear from you! Drop me a message, and let's create something amazing together.
                        </p>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                                    <label htmlFor="name" className="block text-sm font-medium text-blue-200">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required />
                                </div>
                                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                                    <label htmlFor="email" className="block text-sm font-medium text-blue-200">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required />
                                </div>
                            </div>
                            <div className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                                <label htmlFor="message" className="block text-sm font-medium text-blue-200">Message</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-blue-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300 hover:bg-opacity-70" required></textarea>
                            </div>
                            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 border-t border-blue-500 pt-8">
                            <h2 className="text-3xl font-bold mb-6 text-center text-blue-300 animate-fade-in hover:text-blue-100 transition-colors duration-300">Get in Touch</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1s'}}>
                                    <div className="text-4xl mb-2 text-blue-300">📧</div>
                                    <p className="font-semibold text-blue-200">Email</p>
                                    <p className="text-blue-100">areeba.irfan@example.com</p>
                                </div>
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1.2s'}}>
                                    <div className="text-4xl mb-2 text-blue-300">💼</div>
                                    <p className="font-semibold text-blue-200">LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/areeba-irfan" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-blue-300 transition-colors duration-300">linkedin.com/in/areeba-irfan</a>
                                </div>
                                <div className="animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300" style={{animationDelay: '1.4s'}}>
                                    <div className="text-4xl mb-2 text-blue-300">🐦</div>
                                    <p className="font-semibold text-blue-200">Twitter</p>
                                    <a href="https://x.com/Areeba__Irfan" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-blue-300 transition-colors duration-300">@Areeba__Irfan</a>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;