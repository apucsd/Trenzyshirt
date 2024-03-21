import Image from "next/image";
import Link from "next/link";
const example = [
  {
    name: "Striped Cotton Shirt",
    brand: "ABC Clothing",
    category: "casual-shirts",
    description: "Classic striped cotton shirt suitable for casual occasions.",
    price: 1500,
    rating: 4.5,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2024/03/31759960-d233-4679-82c3-c96689fd8e07-300x400.jpg",
    topRated: true, // Assuming this shirt is one of the top-rated items
    flashSale: true,
  },
  {
    name: "Checkered Button-Up Shirt",
    brand: "XYZ Fashion",
    category: "casual-shirts",
    description:
      "Stylish checkered button-up shirt suitable for everyday wear.",
    price: 1800,
    rating: 4.8,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2024/03/1d42e4e5-a7a0-4b33-960e-3269bdee7694-300x400.jpg",
    topRated: true,
    flashSale: true,
  },
  {
    name: "Checkered Button-Up Shirt",
    brand: "XYZ Fashion",
    category: "formal-shirts",
    description:
      "Stylish checkered button-up shirt suitable for everyday wear.",
    price: 1800,
    rating: 4.8,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2024/03/de7d4077-249b-4237-b959-14849ef87a4f-300x400.jpg",
    topRated: true,
    flashSale: true,
  },
  {
    name: "Classic Polo Shirt",
    brand: "ABC Apparel",
    category: "polo-shirts",
    description:
      "Classic polo shirt with a comfortable fit, perfect for casual outings.",
    price: 2500,
    rating: 4.5,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2023/03/06fcbfc6-e46c-4090-9d6f-d8c4d74a3b36-300x400.jpg",
    topRated: true,
    flashSale: true,
  },
  {
    name: "Denim Button-Down Shirt",
    brand: "Denim Co.",
    category: "denim-shirts",
    description:
      "Stylish denim button-down shirt for a rugged yet trendy look.",
    price: 3200,
    rating: 4.3,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2023/04/899df3b5-ba2e-414b-a73b-1425e2fb541b-300x400.jpg",
    topRated: true,
    flashSale: false,
  },
  {
    name: "Striped Polo Shirt",
    brand: "Fashion Avenue",
    category: "polo-shirts",
    description: "Elegant striped polo shirt perfect for casual wear.",
    price: 2800,
    rating: 4.7,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2023/04/a961f38b-3a29-4953-9f09-2ac7763bf196-300x400.jpg",
    topRated: true,
    flashSale: false,
  },
  {
    name: "Classic Denim Shirt",
    brand: "DenimWorks",
    category: "denim-shirts",
    description:
      "Classic denim shirt with a versatile style for everyday wear.",
    price: 3500,
    rating: 4.6,
    image:
      "https://d23b5yck4idk5n.cloudfront.net/wp-content/uploads/2023/05/553f4b97-5bf5-4efc-8a15-0a9f73ae5f55-300x400.jpg",
    topRated: false,
    flashSale: true,
  },
];

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
                <h1 className="text-white drop-shadow-lg text-3xl">
                  {category.title}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
