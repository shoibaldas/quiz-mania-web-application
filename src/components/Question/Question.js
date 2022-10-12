import React from 'react';
import { toast } from 'react-toastify';
import { EyeSlashIcon } from '@heroicons/react/24/solid'

const Question = ({ quiz, positiveScore, setPositiveScore, negativeScore, setNegativeScore }) => {
    const { question, options, correctAnswer } = quiz;

    const handleButtonClick = (answer) => {
        if (JSON.stringify(answer) === JSON.stringify(correctAnswer)) {
            setPositiveScore(positiveScore + 1);
            toast.success('The Answer is correct!', { autoClose: 1000 })
        }
        else {
            setNegativeScore(negativeScore < 0 ? 0 : negativeScore + 1);
            toast.error('Your Answer is wrong! Try Again.', { autoClose: 1000 })
        }
    }

    const checkCorrectAnswer = (answer) => {
        toast.info(`The correct answer is : ${correctAnswer}`, { autoClose: 1000 })
    }
    return (
        <div
            className="sm:w-11/12 flex rounded-lg drop-shadow-2xl bg-gray-200">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                <div className='flex items-center gap-4'>
                    <div>
                        <h5 className="mb-4 text-xl font-semibold text-start tracking-tight text-violet-900">{question.slice(3, -4)}</h5>
                    </div>
                    <div>
                        <EyeSlashIcon onClick={() => checkCorrectAnswer(correctAnswer)} className='w-6 h-6 text-violet-900 cursor-pointer' />
                    </div>
                </div>

                <div className="flex mb-3">
                    <div class="flex flex-col gap-4" role="group">
                        {
                            options.map((input, idx) => <button key={idx} onClick={(event) => handleButtonClick(event.target.innerText)} className="block mt-2 border border-violet-900 rounded-lg py-2 px-6 hover:bg-violet-200 cursor-pointer">{input}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;