import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-64">
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
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-violet-900 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    Start Quiz
                </Link>
            </div>
        </div>
    );
};

export default Topics;