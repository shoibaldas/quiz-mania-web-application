import React, { useContext, useEffect, useRef } from 'react';
import Topics from '../Topics/Topics';
import lottie from 'lottie-web';
import { RoutesContext } from '../Main/Main';

const Home = () => {
    const [topics] = useContext(RoutesContext);
    const dataInfo = topics.data;
    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../quiz-exam.json')
        });

        return () => {
            lottie.destroy();
        };
    }, [])

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between bg-white rounded-lg shadow-2xl mb-20 relative">
                <div className="md:text-start text-center w-full md:py-8 md:px-8 sm:px-6 lg:py-4 lg:px-8 ">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block text-indigo-500">
                            Explore your brain today.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 p-4 md:p-0 text-gray-400 text-center md:text-start">
                        Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6 md:mb-0 mb-16  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container w-full md:w-8/12 h-full" ref={container}></div>
            </div>
            <h2 className='mb-12 text-3xl font-extrabold sm:text-4xl block text-indigo-600'>Choose one and play the quiz</h2>
            <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-4 xl:max-w-screen-lg sm:mx-auto">
                {
                    dataInfo.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    >
                    </Topics>)
                }
            </div>
        </div>
    );
};

export default Home;