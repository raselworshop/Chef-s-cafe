import { useEffect } from "react";
import { useState } from "react";

const ReciepesCard = () => {
    const [reciepes, setReciepes] = useState([]);

    useEffect(() => {
        fetch('../../../public/recipes.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setReciepes(data))
    }, [])
    console.log(reciepes)
    return (
        <div className="md:w-2/3">
            <h2>Recieps card: {reciepes.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reciepes.map(reciepe =>
                    <div key={reciepe.recipe_id} className="card bg-base-100 shadow-xl">
                        <figure className="px-8 pt-6">
                            <img className="w-full md:h-52 rounded-xl"
                                src={reciepe.image}
                                alt="Recipe image" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg text-gray-800 font-medium">{reciepe.recipe_name}!</h2>
                            <p className="text-gray-600 text-base">{reciepe.short_description}</p>
                            <h3 className=" text-lg text-gray-800 font-medium">Ingradients:{reciepe.ingredients.length}</h3>
                            <ul className="ml-8">
                                {reciepe.ingredients.map((item, index)=>(
                                    <li className="list-disc text-gray-600" key={index}> {item}
                                </li>))}
                            </ul>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReciepesCard;