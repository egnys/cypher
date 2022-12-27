import React from "react";
import { Link } from "react-router-dom";
const Symmetrical = (props) =>{
    
    return (
        <div>
            <div className="flex items-center justify-center mt-8">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
                </button>
                <div className="hidden relative md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Search icon</span>
                </div>
                    <input type="text" id="search-navbar" className="outline-0 block p-2 pl-10 w-80 text-gray-900 bg-gray-50 rounded-lg border border-violet-300 sm:text-sm focus:ring-violet-100 focus:border-violet-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
                </div>
            </div>
            <div className="grid gap-9 lg:grid-cols-3 sm:grid-cols-1 my-20 px-24 text-lg">
                {props.symNames.map( component => {
                    return <Link 
                                className="h-20 shadow-lg text-xl border-b-4 hover:border-b-4 hover:border-lime-300 hover:text-sky-500 transition delay-75 bg-violet-100 flex items-center justify-center"
                                to={'/' + component.link}
                                >
                                    {component.name}
                            </Link>    
                })}
            </div>
        </div>
    )
}

export default Symmetrical;