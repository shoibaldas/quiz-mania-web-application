import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const { name } = questions.data;

    console.log(questions);
    return (
        <div className='md:mt-4 p-4 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl mb-8 text-violet-900 font-bold underline undrerline-offset-4'>Quiz of {name}</h1>
            {
                questions.data.questions.map(quiz => <Question
                    key={quiz.id}
                    quiz={quiz}
                >
                </Question>)
            }

        </div>
    );
};

export default Questions;