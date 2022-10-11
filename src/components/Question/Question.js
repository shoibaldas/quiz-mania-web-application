import React from 'react';
import { toast } from 'react-toastify';
import { EyeSlashIcon } from '@heroicons/react/24/solid'

const Question = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const handleButtonClick = (answer) => {
        if (JSON.stringify(answer) === JSON.stringify(correctAnswer)) {
            toast.success('The Answer is correct!', { autoClose: 1000 })
        }
        else {
            toast.error('Your Answer is wrong! Try Again.', { autoClose: 1000 })
        }
    }

    const checkCorrectAnswer = (answer) => {
        toast.info(`The correct answer is : ${correctAnswer}`, { autoClose: 1000 })
    }
    return (
        <div
            className="md:w-7/12 sm:w-11/12 flex rounded-lg border border-violet-900 shadow-lg bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <div className='flex items-center gap-4'>
                    <div>
                        <h5 className="mb-4 text-xl font-semibold tracking-tight text-violet-900">{question.slice(3, -4)}</h5>
                    </div>
                    <div>
                        <EyeSlashIcon onClick={() => checkCorrectAnswer(correctAnswer)} className='w-6 h-6 text-violet-900 cursor-pointer' />
                    </div>
                </div>

                <div className="flex mb-3">
                    <div class="flex flex-col gap-4" role="group">
                        {
                            options.map((input, idx) => <button key={idx} onClick={(event) => handleButtonClick(event.target.innerText)} className="block mt-2 border border-violet-900 rounded-lg py-2 px-6 hover:bg-violet-400 cursor-pointer">{input}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;