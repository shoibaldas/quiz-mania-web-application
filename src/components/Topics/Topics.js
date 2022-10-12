import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="flex flex-col transition duration-400 bg-white rounded-lg shadow-2xl hover:shadow">
            <div className="relative w-full h-78 md:h-48">
                <img src={logo} className="object-cover w-full h-full bg-black rounded-t" alt="Plan" />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div className='mb-4'>
                    <div className="text-lg font-semibold">{name}</div>
                    <p className="text-sm text-gray-900">
                        Total Quiz: {total}
                    </p>
                </div>
                <Link
                    to={`../home/${id}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white"
                >
                    Start Quiz
                </Link>
            </div>
        </div>
    );
};

export default Topics;