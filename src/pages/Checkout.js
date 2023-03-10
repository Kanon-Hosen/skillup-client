import React from "react";
import { useLocation } from "react-router";

const Checkout = () => {
  const location = useLocation();
  console.log("🚀 ~ file: Checkout.js ~ line 6 ~ Checkout ~ location", location)
  return (
    <div className="mt-20 lg:px-20 md:px-10 px-8">
          <h1 className="text-center font-semibold text-slate-700 text-3xl py-5">
        {location.state?.name}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="md:w-1/2 w-full">
          <img className="rounded-lg p-1" src={location.state?.img} alt="" />
          <p className="mt-4 text-gray-600">{location.state?.des}</p>
          <p className="font-semibold text-teal-500 mt-4 text-2xl">{location.state?.price}</p>    
              </div>
        <div className="md:w-1/2 w-full">
          <section className="p-6 text-gray-800">
            <form
              className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
            >
              <fieldset className="grid grid-cols-4 gap-4 p-6 rounded-md shadow-sm ">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label for="firstname" className="text-sm">
                      First name
                    </label>
                    <input
                      id="firstname"
                      type="text"
                      placeholder="First name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-2 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label for="lastname" className="text-sm">
                      Last name
                    </label>
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full ">
                    <label for="email" className="text-sm">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full">
                    <label for="address" className="text-sm">
                      Address
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="city" className="text-sm">
                      City
                    </label>
                    <input
                      id="city"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="state" className="text-sm">
                      State{" "}
                    </label>
                    <input
                      id="state"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label for="zip" className="text-sm">
                      ZIP 
                    </label>
                    <input
                      id="zip"
                      type="text"
                      placeholder=""
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 border-2 focus:ring-violet-400 border-gray-700 text-gray-900 p-3"
                    />
                  </div>
                </div>
              </fieldset>
              </form>
              <button className="px-6 text-gray-50 font-semibold py-3 ml-6 bg-teal-500 rounded-full">Purchase</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
