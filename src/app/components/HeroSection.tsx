import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center animate-fade-in">
                Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-slide-in-bottom">
                Explore my projects and skills in web development, design, and more.
            </p>
            <Link href="/Skills" passHref>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-bounce">
                    Explore My Skills
                </button>
            </Link>
        </div>
    );
};

export default HeroSection;
