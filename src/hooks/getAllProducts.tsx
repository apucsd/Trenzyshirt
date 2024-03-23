const getAllProducts = async (query: any) => {
  // console.log(query);
  let url = `https://trenzy-shirt-server.vercel.app/products`;
  if (Object.entries(query).length > 0) {
    const [[key, value]] = Object.entries(query);
    url = `https://trenzy-shirt-server.vercel.app/products/filter?${key}=${value}`;
  }
  const res = await fetch(url, {
    cache: "no-cache",
  });
  return await res.json();
};

export default getAllProducts;
