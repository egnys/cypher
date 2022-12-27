import React from "react";
import { Link } from "react-router-dom";
import img from '../../images/symAndAsym.png'
const Menu = () => {
    return (
        <div className="w-full px-16 mt-10">
            <h2 className="text-xl mb-6">Оберіть тип шифрування:</h2>
            <div className="grid lg:grid-cols-2 gap-8 sm:grid-cols-1">
                <Link to='/symmetrical' className="h-20 shadow-lg text-xl border-b-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-500 transition delay-75 bg-violet-100 flex items-center justify-center	">
                    Симетричне шифрування 
                </Link>
                <Link to='/asymmetrical' className="h-20 shadow-lg text-xl border-b-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-500 transition delay-75 bg-violet-100 flex items-center justify-center">
                    Асиметричне шифрування 
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <img src={img} alt="ERROR" className="lg:w-2/5  md:w-4/5 mt-10 "></img>
            </div>
        </div>
    )
}

export default Menu;