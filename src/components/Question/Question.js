import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const handleButtonClick = (ans) => {
        if (JSON.stringify(ans) === JSON.stringify(correctAnswer)) {
            toast.success('The Answer is correct!', { autoClose: 1000 })
        }
        else {
            toast.error('Your Answer is wrong! Try Again.', { autoClose: 1000 })
        }
    }
    return (
        <div
            className="max-w-screen-md flex rounded-lg border border-violet-900 shadow-md bg-gray-200">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full">
                <h5 className="mb-4 text-xl font-semibold tracking-tight text-violet-900">{question.slice(3, -4)}</h5>
                <div className="flex items-center justify-center mb-3">
                    <div class="flex flex-col gap-4" role="group">
                        {
                            options.map((input, idx) => <button key={idx} onClick={(event) => handleButtonClick(event.target.innerText)}  className="block mt-2 border border-violet-900 rounded-lg py-2 px-6 hover:bg-violet-400 cursor-pointer">{input}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Question;