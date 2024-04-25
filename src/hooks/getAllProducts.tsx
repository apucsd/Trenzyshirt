const getAllProducts = async (query: any) => {
  // console.log(query);
  let url = `${process.env.NEXT_PUBLIC_BACKEND_API}/products/filter`;

  if (query.ratings) {
    url += `?rating=${query.ratings}`;
  }
  if (query.price) {
    url += `?price=${query.price}`;
  }
  if (query.category) {
    url += `?category=${query.category}`;
  }

  const res = await fetch(url, {
    cache: "no-cache",
  });
  return await res.json();
};

export default getAllProducts;
