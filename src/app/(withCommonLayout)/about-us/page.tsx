/* eslint-disable react/no-unescaped-entities */
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import shirt1 from "/public/shirts/shirt1.jpg";
import shirt2 from "/public/shirts/shirt2.jpg";
import shirt3 from "/public/shirts/shirt3.jpg";
import shirt4 from "/public/shirts/shirt4.jpg";
import shirt5 from "/public/shirts/shirt5.jpg";
import shirt6 from "/public/shirts/shirt6.jpg";
import Image from "next/image";
const AboutUsPage = () => {
  return (
    <div>
      <section className="relative my-10 p-5  bg-white">
        <div className="md:container mx-auto">
          <div className={`w-full lg:flex  gap-5`}>
            <div className="w-full lg:w-1/2 xl:w-2/3">
              <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt1}
                  alt="shirt"
                />
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt2}
                  alt="shirt"
                />
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt3}
                  alt="shirt"
                />
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt4}
                  alt="shirt"
                />
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt5}
                  alt="shirt"
                />
                <Image
                  className="w-full object-cover h-full"
                  height={600}
                  width={600}
                  src={shirt6}
                  alt="shirt"
                />
              </div>
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                <Image
                  width={200}
                  height={200}
                  src="https://readymadeui.com/google-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
                <Image
                  width={200}
                  height={200}
                  src="https://readymadeui.com/facebook-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
                <Image
                  width={200}
                  height={200}
                  src="https://readymadeui.com/linkedin-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
                <Image
                  width={200}
                  height={200}
                  src="https://readymadeui.com/pinterest-logo.svg"
                  className="w-28 mx-auto"
                  alt="google-logo"
                />
              </div>
            </div>
            <div className="w-full mt-10 ml-0 lg:mt-0 lg:flex-1 lg:w-1/2 xl:w-1/3 ">
              <div className="p-10 text-white bg-black lg:h-full">
                <div className="mt-2 text-sm uppercase">Trenzy Shirt</div>
                <div className="mt-10 mb-5 text-2xl">About Us</div>
                <p className="leading-7">
                  We are a online selling e-commerce company in Bangladesh, we
                  are the manufacturers and exporters. Our mother Office is in 7
                  no- Advocate Road, (The South of New Court) Chanmari
                  Narayanganj-1420, Bangladesh another one is in UK Manja, Unit
                  – 4B, Majid House 37-49 Devonshire Street North, Manchester,
                  M12 6JR.
                </p>
                <div className="mt-10">
                  <Button
                    as={Link}
                    variant="shadow"
                    color="secondary"
                    className="flex text-white hover:text-white"
                    href="/mens-shirts"
                  >
                    <div className="flex-initial">Shop Now Here</div>
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
