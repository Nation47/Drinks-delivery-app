import ListOfDrink from "./ListOfDrink";

const DrinksLists = ({drinks, onDelete, onToggle}) => {
   
    return (
        <>
            <div className="container m-auto max-w-2xl py-5">
            <h2 className="text-2xl mb-3 text-center text-orange-600 font-semibold">Menu</h2>
                {drinks.map((drink) => (
                        <ListOfDrink key={drink.id} drink={drink} onDelete={onDelete} onToggle={onToggle}/>
                ))}
            </div>
        </>
    );
}
 
export default DrinksLists;