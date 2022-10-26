import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-gray-700 text-gray-100 h-96 flex-col flex items-center justify-center">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-4xl">Some Qustoins about Development
		</h1>
	</div>
            </section>
            <div className='lg:px-28 px-8 mt-8'>
                <h1 className='font-semibold text-slate-700 text-2xl'>1. what is cors?</h1>
                <p className='text-sm mt-2'>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
                <h1 className='font-semibold text-slate-700 text-2xl mt-5'>2. Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p className='text-sm mt-2'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. <br></br> <br></br>
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                <h1 className='font-semibold text-slate-700 text-2xl mt-5'>3. How does the private route work?</h1>
                <p className='text-sm mt-2'>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                <h1 className='font-semibold text-slate-700 text-2xl mt-5'>4. What is Node? How does Node work?</h1>
                <p className='text-sm mt-2'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </div>
        </div>
    );
};

export default Blog;