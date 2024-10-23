
const Header = () => {
    return (
        <header className="sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto">
            <nav className="flex flex-col md:flex-row justify-between items-center mb-5 md:mb-12">
                <div className="p-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Recipe Calories</h2>
                </div>
                <div>
                    <ul className="text-gray-500 flex justify-between items-center m-2">
                        <li className="m-2 p-2 cursor-pointer hover:btn hover:btn-sm">Home</li>
                        <li className="m-2 p-2 cursor-pointer hover:btn hover:btn-sm">Reciepes</li>
                        <li className="m-2 p-2 cursor-pointer hover:btn hover:btn-sm">About</li>
                        <li className="m-2 p-2 cursor-pointer hover:btn hover:btn-sm">Search</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <label className="input input-bordered flex items-center gap-2 bg-gray-100 rounded-full">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" className="grow" placeholder="Search" />
                    </label>
                    <div className="border-2 m-4 p-3 rounded-full bg-emerald-300 cursor-pointer">
                       <span className="border border-black border-solid rounded-full flex-1 justify-center items-center py-1"> <i className="fa-regular fa-user m-2"></i></span>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;