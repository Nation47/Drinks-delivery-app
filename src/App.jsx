import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import OrderPage from "./pages/OrderPage";
import MenuPage from "./pages/MenuPage";
import ProgressPage from "./pages/ProgressPage";
import HomePage from "./pages/HomePage";
import AddDrinks from "./pages/AddDrinks";
import { useEffect, useState } from "react";




const App = () => {

  const [drinks, setDrinks] = useState ([]);

// to add items/drinks

const addDrink = async (drink) => {
    const res = await fetch('http://localhost:5000/drinks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(drink)
    });
    const data = await res.json()
    setDrinks([...drinks, data])
}; 

  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element = {<MainLayout />}>
        <Route index element = {<HomePage />} />
        <Route path="/order" element = {<OrderPage />} />
        <Route path="/menu" element = {<MenuPage />} />
        <Route path="/progress" element = {<ProgressPage />} />
        <Route path="/add-drinks" element = {<AddDrinks onAdd = {addDrink} />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}
 
export default App;