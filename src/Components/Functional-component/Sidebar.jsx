
const Sidebar = ({reciepeQueue}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            <h3>Want To Cook:{reciepeQueue.length}</h3>
        </div>
    );
};

export default Sidebar;