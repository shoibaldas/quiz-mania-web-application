import React from 'react';

const Blog = () => {
    return (
        <div className='md:mt-8 flex flex-col justify-center items-center gap-4'>
            <div
                className="max-w-screen-md rounded-lg border border-gray-200 shadow-md bg-gray-200 dark:border-gray-700">
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-violet-700">What is the purpose of React Router?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 text-justify">  The method of routing involves sending users to various websites in response to their requests or actions. The major use for ReactJS Router is the creation of single page web applications. Multiple routes are defined in the application using React Router. A user will be sent to a certain route when they enter a particular URL into their browser and that URL path matches any of the "routes" in the router file. <br />
                        <span className='font-bold'>Purpose of React Router: </span>
                        To display numerous views in a single page application, React Router is crucial. Multiple views cannot be shown in React apps without React Router. React Router is used by the majority of social media platforms, including Facebook and Instagram, to render multiple views.

                    </p>
                </div>
            </div>
            <div
                className="max-w-screen-md rounded-lg border border-gray-200 shadow-md bg-gray-200 dark:border-gray-700">
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-violet-700"> How does context API works?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-800 text-justify">An efficient approach for a React project to create global variables that can be passed around is using the React Context API. The alternative to "prop drilling" or passing along props from grandma to child to parent and so on is to do this. Instead of delivering information down a chain of props, it enables data to be sent directly from parent to children nested far down the component tree. <br />
                        React.create All you require is context(). Both a customer and a supplier are returned. The component known as the provider, as its name implies, gives the state to its offspring. All the components that would require that "store" will have it as their parent and it will hold the "store." Unsurprisingly, the consumer is a component that utilizes and consumes the state.</p>

                </div>
            </div>
            <div
                className="max-w-screen-md bg-gray-200 rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
                <div className="p-5">
                    <a href="/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-violet-700">What is useRef hook?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-800 text-justify">You may maintain values between renderings by using the useRef Hook.A changeable value that does not require a re-render when modified can be stored there.It may be used to get immediate access to a DOM element. <br />
                        UseRef produces a mutable ref object with the supplied argument initialized to its.current property ( initialValue ). The returned object will remain persistent for the whole component lifespan. UseRef functions essentially as a "box" with a.current attribute that may store a changeable value.</p>
                </div>
            </div>
        </div >
    );
};

export default Blog;
// What is the purpose of React Router ?
//     How does context API works ?
//         What is useRef hook ?