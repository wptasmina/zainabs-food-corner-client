import logo from '../assets/zainabs.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const navItemClass = "text-md text-white/80 font-medium uppercase p-1 mr-2"

  const navItem = <>
    <li className={navItemClass}><Link to="/">Home</Link></li>
    <li className={navItemClass}><Link to="/">CONTACT us</Link></li>
    <li className={navItemClass}><Link to="/">DASHBOARD</Link></li>
    <li className={navItemClass}><Link to="/">Our Menu</Link></li>
    <li className={navItemClass}><Link to="/">Our Shop</Link></li>
  </>

return (
<div className=' bg-black bg-opacity-30 shadow-sm fixed w-full top-0 z-50 '>
  <div className="navbar w-10/12 mx-auto p-0 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {navItem}
      </ul>
    </div>
    <Link to='/' className="text-xl">
      <img src={logo} alt="Logo" className='w-20 object-cover bg-center' />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1">
      {navItem}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn">Login</Link>
  </div>
</div>
    </div>
  )
}
