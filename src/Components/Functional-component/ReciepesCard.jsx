import { useEffect } from "react";
import { useState } from "react";

const ReciepesCard = ({handleToCook}) => {
    const [reciepes, setReciepes] = useState([]);

    useEffect(() => {
        fetch('../../../public/recipes.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setReciepes(data))
    }, [])
    // console.log(reciepes)
    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reciepes.map(reciepe =>
                    <div key={reciepe.recipe_id} className="card bg-base-100 border-2">
                        <figure className="px-8 pt-6">
                            <img className="w-full md:h-52 rounded-xl"
                                src={reciepe.image}
                                alt="Recipe image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl text-gray-800 font-semibold">{reciepe.recipe_name}!</h2>
                            <p className="text-gray-600 text-base">{reciepe.short_description}</p>
                            <h3 className=" text-lg text-gray-800 font-medium">Ingradients:{reciepe.ingredients.length}</h3>
                            <ul className="ml-8">
                                {reciepe.ingredients.map((item, index) => (
                                    <li className="list-disc text-gray-600" key={index}> {item}
                                    </li>))}
                            </ul>
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                                    <p>{reciepe.preparation_time}.</p>
                                </div>
                                <div className="flex items-center">
                                    <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                                    <p>{reciepe.calories}.</p>
                                </div>
                            </div>
                            <div className="card-actions">
                                <button onClick={()=>handleToCook(reciepe)} className="btn bg-emerald-400 rounded-full px-8 text-xl text-gray-800 font-medium mt-5">Want To Cook</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReciepesCard;