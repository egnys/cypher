import {React} from "react";
import { Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="text-indigo-900 flex justify-between items-center h-16 text-black relative shadow-sm text-lg bg-violet-100 px-8" role='navigation'>
            <Link to='/' className="pl-8 text-3xl">Ȼ𝔂ph𝖊🅡</Link>
            <div className="px-4 cursor-pointer md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link to='/' className="p-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-400 transition delay-75">Головна</Link>
                <Link to='/menu' className="p-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-400 transition delay-75">Меню</Link>
                <Link to='/contacts' className="p-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-400 transition delay-75">Контакти</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;