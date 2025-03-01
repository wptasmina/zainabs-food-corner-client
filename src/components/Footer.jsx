import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaFacebookF, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
  <footer>
  <div className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-neutral text-neutral-content px-4 md:px-28 py-10">
  <aside className='bg-[#1F2937] py-4 w-full flex justify-center items-center flex-col rounded-md'>
    <div className='flex justify-center items-center flex-col px-4'>
    <Link to="/">
      <img src={logo} alt="Logo" className='w-16' />
    </Link>
      <p className='text-center font-bold pt-1'> ZAINAB'S FOOD CORNER</p>
    </div>
    <p className='px-4 text-center'>
    123 ABS Street, Uni 21, Bangladesh <br/>
    +88 123456789  <br/>
    Mon - Fri: 08:00 - 22:00  <br/>
    Sat - Sun: 10:00 - 23:00  <br/>
    </p>
  </aside>
  <nav className='bg-[#111827] flex justify-center items-center py-12 w-full rounded-md '>
    <div className='text-center px-4 py-2'>
      <h6 className="footer-title">Follow US :</h6>
      <p className='text-center pt-1'>Join us on social media</p>
    <div className="grid grid-flow-col gap-4 text-center pt-3">
      <Link to="https://x.com/wptasmina">
        <FaXTwitter className='text-2xl' />
      </Link>
      <Link to="https://www.linkedin.com/in/wptasmina">
        <FaLinkedinIn className='text-2xl' />
      </Link>
      <Link to="https://github.com/wptasmina">
        <FaGithub className='text-2xl' />
      </Link>
      <Link to="https://www.facebook.com/wptasmina">
        <FaFacebookF className='text-2xl' />
      </Link>
     
    </div>
    </div>
  </nav>
</div>
<div className=" footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ZAINAB'S FOOD CORNER Ltd.</p>
  </aside>
</div>
    </footer>
  )
}
