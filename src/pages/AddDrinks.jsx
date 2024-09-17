import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const AddDrinks = ({onAdd}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [order, setOrder] = useState(false);
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();

        onAdd({name, price, ingredients, order})

        setName('');
        setPrice('');
        setIngredients('');
        setOrder(false);

        return navigate('/')
    }

    return (
        <div className="container m-auto max-w-2xl py-14">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                <form className="" onSubmit={onSubmit}>
                    <h2 className='text-3xl text-orange-500 text-center font-semibold mb-6'>Add drinks</h2>
                    <div className="">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="drinks">Name</label>
                        <input 
                            className= "border rounded w-full py-2 px-3 mb-2"
                            type="text" 
                            placeholder="Name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="drinks">Ingredients</label>
                        <input 
                            className= "border rounded w-full py-2 px-3 mb-2" 
                            type="text" 
                            placeholder="Drinks' ingredients"
                            value={ingredients} 
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="drinks">Price</label>
                        <input 
                            className= "border rounded w-full py-2 px-3 mb-2"
                            type="text" 
                            placeholder="Drinks' price "
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="drinks">Set order</label>
                        <input 
                            className= "border rounded  py-2 px-3 mb-2 "
                            type="checkbox" 
                            placeholder="Drinks type"
                            checked= {order} 
                            value={order} 
                            onChange={(e) => setOrder(e.currentTarget.checked)}
                        />
                    </div>
                    <input type="submit" value='Add drinks' className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline cursor-pointer'/>
                </form>
            </div>
        </div>
    );
}
 
export default AddDrinks;