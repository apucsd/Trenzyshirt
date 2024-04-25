"use client";
import { TProduct } from "@/types";
import { useState, useEffect } from "react";

const useGetAllCategory = () => {
  const [categories, setCategories] = useState<string[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your asynchronous code here
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/products`
        );
        const data = await res.json();

        const categories = data?.result.map((item: TProduct) => item.category);

        const uniqueCategories: string[] = Array.from(new Set(categories));
        setCategories(uniqueCategories);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { categories };
};

export default useGetAllCategory;
