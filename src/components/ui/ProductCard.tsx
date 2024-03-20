import Image from "next/image";

const ProductCard = () => {
  return (
    <div className=" bg-white w-full md:max-w-xs shadow-md rounded-xl duration-500">
      <div className="group  flex w-full flex-col overflow-hidden bg-white">
        <div className="relative  overflow-hidden">
          <div className="relative mx-3 mt-3 flex overflow-hidden rounded-xl">
            <Image
              height={300}
              width={300}
              className="object-contain w-full h-full"
              src="https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2024/03/6ee5cf72-053e-444e-95a5-9daa07c55142-300x400.jpg"
              alt="product image"
            />
            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
              39% OFF
            </span>
          </div>

          <div className="absolute -right-16 bottom-0 mr-2 mb-4 space-y-2 transition-all duration-300 group-hover:right-0">
            <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center bg-gray-900 text-white transition hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-4 pb-5">
          <a href="#">
            <h5 className="text-center tracking-tight text-gray-500">
              Piped Linen Blend Blazer
            </h5>
          </a>
          <div className="mb-5 flex justify-center">
            <p>
              <span className="text-sm font-bold text-gray-900">$179</span>
              <span className="text-sm text-gray-400 line-through">$499</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
