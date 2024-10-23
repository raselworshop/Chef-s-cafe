
const Sidebar = ({ reciepeQueue }) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* want to cook table */}
            <div className="overflow-x-auto">
                <h3 className="text-xl font-semibold text-center border-b-2 pb-3">Want To Cook: {reciepeQueue.length}</h3>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {reciepeQueue.map((recipe, index) => (
                            <tr className="hover hover:rounded-xl" key={index}>
                                <th>{index + 1}</th>
                                <td>{recipe.recipe_name}</td>
                                <td>{recipe.preparation_time}</td>
                                <td>{recipe.calories}</td>
                                <td>
                                    <button onClick={
                                        () => console.log("cooker handle clicked")}
                                        className="btn btn-sm bg-emerald-400 rounded-full px-2 md:px-3 my-2 text-gray-800 font-bold">
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Currently Cooking Table */}
        </div>
    );
};

export default Sidebar;