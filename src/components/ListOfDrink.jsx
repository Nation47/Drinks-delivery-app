import {FaTimes} from 'react-icons/fa'
const ListOfDrink = ({drink, onDelete, onToggle}) => {
    return (
        <>
            
            <div className='mb-5 bg-gray-100 shadow-md w-100 py-2 px-5 rounded-md' >
                <div className='mx-4 ' >
                    <div className=' '>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-lg text-orange-500 font-semibold'>{drink.name} </h2>
                            <h3 className='font-semibold text-orange-950'>{drink.price} Tsh</h3>
                        </div>
                        <div>
                            <p className='text-sm text-gray-600'>{drink.ingredients} </p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between '>
                        <button className={`${drink.order ? ' bg-orange-800 text-white py-1 px-2 rounded-md': 'bg-green-800 text-white py-1 px-2 rounded-md'}`} onClick={() => onToggle(drink.id)}>order</button>
                        <FaTimes style = {{color: 'red', cursor: 'pointer'}} onClick = {() => onDelete(drink.id)} />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default ListOfDrink;