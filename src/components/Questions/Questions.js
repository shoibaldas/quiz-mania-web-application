import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const { name } = questions.data;
    const [positiveScore, setPositiveScore] = useState(0);
    const [negativeScore, setNegativeScore] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    console.log(questions);
    return (
        <div className='md:grid grid-cols-2'>
            <div className='p-4 flex flex-col justify-center items-center gap-4'>

                <h1 className='font-bold text-5xl text-center text-indigo-700 mb-4'>Quiz of {name}</h1>
                {
                    questions.data.questions.map(quiz => <Question
                        key={quiz.id}
                        quiz={quiz}
                        positiveScore={positiveScore}
                        setPositiveScore={setPositiveScore}
                        negativeScore={negativeScore}
                        setNegativeScore={setNegativeScore}
                    >
                    </Question>)
                }


            </div>

            <div className="h-screen">
                <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
                    <img src="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg" alt="" className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover" />
                    <div className="bg-white shadow-2xl rounded-b-3xl pb-6">
                        <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">Score Result</h2>
                        <div className="w-5/6 m-auto">
                            <p className="text-center text-gray-500 pt-5">Try to do your best little by little. And, it will help you to acheieve your goal.</p>
                        </div>
                        <div className="flex justify-center gap-8 w-72  m-auto bg-indigo-50 mt-5 p-4 rounded-2xl">
                            <div>
                                <p className="text-gray-800 font-bold lg:text-sm">Right Answer:</p>
                            </div>
                            <div>
                                <p className="text-indigo-700 text-sm font-bold">{positiveScore}</p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-8 w-72  m-auto bg-indigo-50 mt-5 p-4 rounded-2xl">
                            <div>
                                <p className="text-gray-800 font-bold lg:text-sm">Wrong Answer:</p>
                            </div>
                            <div>
                                <p className="text-indigo-700 text-sm font-bold">{negativeScore}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;