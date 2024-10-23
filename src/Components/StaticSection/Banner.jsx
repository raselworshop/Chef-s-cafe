
const Banner = () => {
    return (
        <section className="sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto mb-5 md:mb-12">
            <div className="relative bg-no-repeat object-cover bg-cover bg-center md:py-16" style={{ backgroundImage: 'url(https://i.ibb.co/CHPTQf8/pexels-reneterp-2544829.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-65"></div>

                <div className="relative z-10 p-1 flex flex-col justify-between items-center w-4/6 mx-auto">
                    <div className="flex justify-between items-center flex-col my-12">
                        <h1 className="text-center leading-10 my-5 text-2xl md:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="text-lg my-5 text-gray-200 text-center">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    </div>
                    <div className=" flex justify-center gap-5 mb-5 text-white">
                        <button className="bg-emerald-500 outline outline-1 text-sm md:text-base py-1 px-7 md:p-3 rounded-full text-black hover:btn">Explore Now</button>
                        <button className="outline outline-1 text-sm md:text-base py-1 px-7 md:p-3 rounded-full hover:text-black hover:btn">Our Feedback</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;