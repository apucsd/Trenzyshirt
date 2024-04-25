/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CiDatabase, CiMedal, CiSettings } from "react-icons/ci";
const Featured = () => {
  return (
    <div className="container">
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div
          className="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  opacity-90 bg-fixed z-0"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/front-view-cute-japanese-girl-shopping_23-2148665348.jpg?t=st=1713980504~exp=1713984104~hmac=020fcc50b613d1d463fa60781367c07945efcd1ee3b2f3e24c1a52c284de78bc&w=900)",
          }}
        />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="  ">
              <div className="max-w-6xl mx-auto py-16 px-4">
                <h2 className="text-3xl text-white font-bold leading-8 backdrop:backdrop-blur-3xl md:text-6xl  text-center mb-16">
                  Discover Our Exclusive Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12  mx-auto">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="p-6">
                      <CiSettings className="text-4xl my-1 " />
                      <h3 className="text-xl font-semibold mb-2">
                        Customization
                      </h3>
                      <p className=" text-sm">
                        Tailor our shirts to suit your unique style and
                        preferences.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="p-6">
                      <CiDatabase className="text-4xl my-1 " />
                      <h3 className="text-xl font-semibold mb-2">Security</h3>
                      <p className=" text-sm">
                        Shop with confidence knowing that your data is secure.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="p-6">
                      <CiMedal className="text-4xl my-1 " />
                      <h3 className="text-xl font-semibold mb-2">
                        Performance
                      </h3>
                      <p className=" text-sm">
                        Experience smooth performance while browsing our
                        website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
