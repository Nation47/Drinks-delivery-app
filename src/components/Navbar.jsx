import {NavLink} from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa'

const Navbar = () => {
    const linkClass = ({isActive}) => 
        isActive 
        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
    
    return (
        <>
            <nav className="bg-orange-500  border-b border-orange-300 px-2 fixed top-0 right-0 left-0">
                <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl">
                    <div className="flex h-20 items-center justify-between">
                        <div className="flex flex-1 justify-center items-center md:items-stretch md:justify-start">
                            <NavLink to='/' className='flex flex-shrink-0 items-center mr-4 text-lg text-white font-semibold cursor-pointer'>
                                <FaCoffee className='mr-2 w-auto h-10'/>
                                <span className='hidden md:block text-white text-2xl font-bold '>
                                    Let's Drink
                                </span>
                            </NavLink>
                            <div className='md:ml-auto'>
                                <div className='flex space-x-2 '>
                                    <NavLink to='/' className={linkClass}>
                                        Home
                                    </NavLink>
                                    <NavLink to='/menu' className={linkClass}>
                                        Menu
                                    </NavLink>
                                    <NavLink to='/order' className={linkClass}>
                                    Order
                                    </NavLink>
                                    <NavLink to='/progress' className={linkClass}>
                                        Progress
                                    </NavLink>
                                    <NavLink to='/add-drinks' className={linkClass}>
                                        Add Drinks
                                    </NavLink>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
 
export default Navbar;