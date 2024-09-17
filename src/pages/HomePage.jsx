import Drinks from "../components/Drinks";
import DrinksLists from "../components/DrinksLists";
import Hero from "../components/Hero";

import { useState, useEffect } from "react";
import AddDrinks from "./AddDrinks";

const HomePage = () => {
    const [drinks, setDrinks] = useState ([]);

    // to fetch data from server
    useEffect(() => {
        const getDrinks = async () => {
        const drinkFromServer = await fetchDrinks();
        setDrinks(drinkFromServer);
        }
        getDrinks()
    }, []);
    
    // fetch all/multiple data
    const fetchDrinks = async () => {
        const res = await fetch('http://localhost:5000/drinks');
        const data = await res.json();
        return data
    }

    // fetch single data/item
    const fetchDrink = async (id) => {
        const res = await fetch(`http://localhost:5000/drinks/${id}`);
        const data = await res.json()
        return data
    }

    // delete function on ui and server
    const deleteDrink = async (id) => {
        await fetch(`http://localhost:5000/drinks/${id}`,{
            method: 'DELETE'
        });
    
        setDrinks(drinks.filter((drink) => drink.id !== id))
    };

    
    // update reminder/order
    const toggleOrder = async (id) => {
        const drinkToOrder = await fetchDrink(id);
        const orderedDrink = {...drinkToOrder, order:!drinkToOrder.order}

        const res = await fetch(`http://localhost:5000/drinks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(orderedDrink)
        })

        const data = await res.json()
        setDrinks(
            drinks.map((drink) => 
                drink.id === id ? {...drink, order:
                 data.order} : drink
            )
        )
    }

    // to hide form 
    // const [showAddDrinks, setShowAddDrinks] = useState(false);

    return (
        <>
            <Hero />
            {drinks.length > 0 ? (<DrinksLists drinks={drinks} onDelete={deleteDrink} onToggle={toggleOrder}/>) : ('No drinks on the menu')}
            {/* <Drinks onAdd = {() => setShowAddDrinks(!showAddDrinks)} showAdd = {showAddDrinks}/>
            {showAddDrinks && <AddDrinks onAdd={addDrink} />} */}
        </>
    );
}
 
export default HomePage;