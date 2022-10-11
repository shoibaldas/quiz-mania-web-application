import React from 'react';

const Question = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;

    return (
        <div
            className="max-w-screen-md flex rounded-lg border border-violet-900 shadow-md bg-gray-200">
            <div className="bg-white p-12 rounded-lg shadow-lg w-full">
                <h5 className="mb-4 text-xl font-semibold tracking-tight text-violet-900">{question.slice(3, -4)}</h5>
                <div class="flex items-center justify-center mb-3">
                    <div class="flex flex-col gap-4" role="group">
                        {
                            options.map((pt, idx) => <button type="button" className="block mt-2 border border-violet-900 rounded-lg py-2 px-6 hover:bg-violet-400 cursor-pointer">{pt}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};
{/* <label for="a" class=""><input id="a" type="radio" class="hidden" value="a" disabled=""> Bags</label> */ }

export default Question;