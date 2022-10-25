import React from 'react';

const Faq = () => {
    return (
        <div className='mt-8'>
            <section className=" text-gray-800">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-3xl font-bold leading-none text-center">Frequently Asked Questions</h2>
		<div className="grid gap-20 px-32  md:grid-cols-2 ">
			<div>
				<h3 className="font-semibold">When does the course start and finish?</h3>
				<p className="mt-1 text-gray-600 text-sm">The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish.</p>
			</div>
			<div>
				<h3 className="font-semibold">How long do I have access to the course?</h3>
				<p className="mt-1 text-gray-600 text-sm">How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own.</p>
			</div>
			<div>
				<h3 className="font-semibold">What if I am unhappy with the course?</h3>
				<p className="mt-1 text-gray-600 text-sm">We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us in the first 30 days and we will give you a full refund.</p>
			</div>
			<div>
				<h3 className="font-semibold">Do I need any prerequisites?</h3>
				<p className="mt-1 text-gray-600 text-sm">A bit of HTML and CSS helps!</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Faq;