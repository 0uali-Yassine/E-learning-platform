import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context';
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


function Footer() {
    const {isAuth,isMyHome} = useGlobalContext();
  return (
    <footer className="footer h-[200px] flex justify-between  relative overflow-hidden p-[20px] bg-gray-200">
        <NavLink to='/' className='font-bold text-[30px]'>Educate</NavLink> 
        <div>
            <ul>
                <h1 className='font-medium header-font text-[18px]'>Links</h1>
                <li>
                    <NavLink to='/about' className='font-medium hover:underline hover:text-[#8a40cf] header-font'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/studyin-process' className='font-medium hover:underline hover:text-[#8a40cf] header-font'>Studying Process</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className='font-medium hover:underline hover:text-[#8a40cf] header-font'>Contact</NavLink>
                </li>
                <li>
                    {
                        isAuth && isMyHome && <NavLink to='/myhome' className='font-medium hover:underline hover:text-[#8a40cf] header-font'>MyHome</NavLink>
                    }
                </li>
            </ul>
        </div>

        <div className='flex flex-col gap-[10px]'>
            <h1 className='header-font'>Subscribe to our email newsletter</h1>
            <form onSubmit={(e)=> e.preventDefault()} className='flex gap-[10px] items-center'>
                <input type="email" className='main-font text-[14px] w-[170px] outline-none rounded-md border-black border px-[8px] py-[5px]' placeholder='Your email....' required/>
                <button className='register bg-yellow-200 main-font font-medium rounded-md px-[10px] py-[5px] w-[fit-content]'>SUBSCRIBE</button>
            </form>
            <div className='flex flex-col gap-[5px]'>
                <h1 className='header-font'>Follow us</h1>
                <ul className='flex gap-[5px]'>
                    <li><FaSquareFacebook className='cursor-pointer text-[#316FF6]' size={20}/></li>
                    <li><FaInstagramSquare className='cursor-pointer text-[#8a3ab9]' size={20}/></li>
                    <li><FaSquareXTwitter className='cursor-pointer' size={20}/></li>
                </ul>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;