import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo-quiz.png';


const Header = () => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">

                        <Link to='/home' className='flex items-center'>
                            <div>
                                <img className='w-8 h-8' src={logo} alt="" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-violet-900">QuizMania</h2>
                            </div>
                        </Link>
                        <div className="md:hidden">
                            <div
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ?
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    )
                                    :
                                    (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-gray-600 hover:text-violet-600 hover:underline hover:underline-offset-4 hover:font-semibold transition duration-700">
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className="text-gray-600 hover:text-violet-600 hover:underline hover:underline-offset-4 hover:font-semibold transition duration-700">
                                <Link to='/home'>Topics</Link>
                            </li>
                            <li className="text-gray-600 hover:text-violet-600 hover:underline hover:underline-offset-4 hover:font-semibold transition duration-700">
                                <Link to='/statistics'>Statistics</Link>
                            </li>
                            <li className="text-gray-600 hover:text-violet-600 hover:underline hover:underline-offset-4 hover:font-semibold transition duration-700">
                                <Link to='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;