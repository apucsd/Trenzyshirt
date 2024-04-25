/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="my-6">
        <div className="mb- text-center max-w-3xl mx-auto mb-12">
          <h1 className="md:text-4xl uppercase text-center text-xl  font-semibold">
            Customer Reviews
          </h1>
          <p className=" text-[#333] mt-4 ">
            Here's what our customers have to say about TrenzyShirt
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
            <p className="text-sm text-center text-[#333] ">
              I absolutely love my new TrenzyShirt! The quality is fantastic,
              and it fits perfectly. Plus, the delivery was super fast!
            </p>
            <div className="flex flex-wrap items-center justify-center mt-8">
              <Image
                height={100}
                width={100}
                src="https://readymadeui.com/profile_2.webp"
                className="w-10 h-10 rounded-full"
                alt="Customer 1"
              />
              <div className="ml-4 text-left">
                <p className="text-sm font-semibold">Alice Johnson</p>
                <p className="text-xs text-gray-400">alice@example.com</p>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
            <p className="text-sm text-center text-[#333] ">
              TrenzyShirt has become my go-to place for trendy clothing. The
              designs are unique, and the fabric is comfortable. Highly
              recommend!
            </p>
            <div className="flex flex-wrap items-center justify-center mt-8">
              <Image
                height={100}
                width={100}
                src="https://readymadeui.com/profile_3.webp"
                className="w-10 h-10 rounded-full"
                alt="Customer 2"
              />
              <div className="ml-4 text-left">
                <p className="text-sm font-semibold">David Smith</p>
                <p className="text-xs text-gray-400">david@example.com</p>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] h-auto sm:p-8 p-4 rounded-md mx-auto shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] bg-white relative">
            <p className="text-sm text-center text-[#333] ">
              I'm impressed with the variety of options available at
              TrenzyShirt. Whether it's casual wear or formal attire, they have
              it all!
            </p>
            <div className="flex flex-wrap items-center justify-center mt-8">
              <Image
                height={100}
                width={100}
                src="https://readymadeui.com/profile_4.webp"
                className="w-10 h-10 rounded-full"
                alt="Customer 3"
              />
              <div className="ml-4 text-left">
                <p className="text-sm font-semibold">Sophia Williams</p>
                <p className="text-xs text-gray-400">sophia@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
