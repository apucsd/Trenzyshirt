import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-5xl px-4 py-5 border-t-primary">
        <div className="flex justify-center text-teal-600">
          <h1>
            Trenzy<span className="text-[#6e5fbe] text-[2rem]">Shirt</span>
          </h1>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
          Explore TrenzyShirt for the latest trends in men's fashion.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <Link href="/trending-products">
              <div className="text-gray-700 transition hover:text-gray-700/75">
                Trending Products
              </div>
            </Link>
          </li>

          <li>
            <Link href="/categories-brands">
              <div className="text-gray-700 transition hover:text-gray-700/75">
                Categories/Brands
              </div>
            </Link>
          </li>

          <li>
            <Link href="/about-us">
              <div className="text-gray-700 transition hover:text-gray-700/75">
                About Us
              </div>
            </Link>
          </li>

          <li>
            <Link href="/contact-us">
              <div className="text-gray-700 transition hover:text-gray-700/75">
                Contact Us
              </div>
            </Link>
          </li>

          <li>
            <Link href="/customer-care">
              <div className="text-gray-700 transition hover:text-gray-700/75">
                Customer Care
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
