import logo from '../assets/zainabs.png'
import { Link } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg'
import { useState } from 'react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItemClass = "text-md text-white/80 font-medium uppercase p-1 mr-2"

  const navItem = <>
    <li className={navItemClass}><Link to="/">Home</Link></li>
    <li className={navItemClass}><Link to="/">CONTACT us</Link></li>
    <li className={navItemClass}><Link to="/">DASHBOARD</Link></li>
    <li className={navItemClass}><Link to="/our-Menu">Our Menu</Link></li>
    <li className={navItemClass}><Link to="/order">Order Food</Link></li>
  </>

return (
<div className=' bg-black bg-opacity-30 shadow-sm fixed w-full top-0 z-50 '>
  <div className="navbar w-10/12 mx-auto p-0 ">
  <div className="navbar-start">
    <Link to='/' className="text-xl">
      <img src={logo} alt="Logo" className='md:w-20 w-12 object-cover bg-center' />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="">
        <button style={{borderBottom:'3px solid rgb(255, 255, 255)', borderRadius: '8px'}} className='px-4 py-2 text-sm bg-[#151515B3] text-[#fff] uppercase font-medium cursor-pointer hover:bg-[#1f2937f1] hover:text-white duration-500 transition-all shadow-lg'>
              Login
          </button>
    </Link>

     {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <CgMenuRight className="text-2xl text-white ml-2 rounded-sm" />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="menu menu-sm absolute top-16 right-0 bg-black/80 backdrop-blur-lg rounded-b-lg z-50 w-52 p-2 shadow">
            {navItem}
          </ul>
        )}
  
  </div>
    </div>
    </div>
  )
}
