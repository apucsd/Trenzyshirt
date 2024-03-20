import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const shirtCategories = [
    {
      id: 1,
      img: "https://example.com/images/casual-shirts.jpg",
      title: "Casual Shirts",
      link: "/mens-shirts?category=casual-shirts",
    },
    {
      id: 2,
      img: "https://example.com/images/formal-shirts.jpg",
      title: "Formal Shirts",
      link: "/mens-shirts?category=formal-shirts",
    },
    {
      id: 3,
      img: "https://example.com/images/t-shirts.jpg",
      title: "T-Shirts",
      link: "/mens-shirts?category=t-shirts",
    },
    {
      id: 4,
      img: "https://example.com/images/polo-shirts.jpg",
      title: "Polo Shirts",
      link: "/mens-shirts?category=polo-shirts",
    },
    // {
    //   id: 5,
    //   img: "https://example.com/images/denim-shirts.jpg",
    //   title: "Denim Shirts",
    //   link: "/mens-shirts?category=denim-shirts",
    // },
    // {
    //   id: 6,
    //   img: "https://example.com/images/button-down-shirts.jpg",
    //   title: "Button-Down Shirts",
    //   link: "/mens-shirts?category=button-down-shirts",
    // },
  ];

  return (
    <div className="my-5">
      <h1 className="md:text-4xl text-xl text-center font-medium">
        Top Categories
      </h1>

      <div className="my-10 grid md:grid-cols-3 border-t-2 border-primary pt-5 rounded-full gap-5 place-items-center">
        {shirtCategories.map((category, i) => (
          <Link
            href={category.link}
            key={i}
            className={`${i % 2 === 0 ? "row-span-2" : ""} group`}
          >
            <div className="relative border-2 p-3  overflow-hidden">
              <div className="w-[300px]">
                <Image
                  height={400}
                  width={400}
                  className=" object-cover hover:scale-110 transition duration-300"
                  src="https://dorjibari.com.bd/public/uploads/products/thumbnail/WpQwjyp2EKA2oMqJjFsZ6Ovj7cFulGC5gplBSZUn.jpeg"
                  alt="category image"
                />
              </div>
              <div className="absolute bottom-0 mb-10 flex w-full justify-center space-x-4">
                <h1 className="text-white text-3xl">{category.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
