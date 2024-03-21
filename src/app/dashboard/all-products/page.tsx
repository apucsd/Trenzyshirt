import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProduct } from "@/types";
import Image from "next/image";
const AllProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 30,
    },
  });
  const { result: allProducts } = await res.json();

  // console.log(allProducts);
  return (
    <div>
      <div className="overflow-x-auto ">
        <Table>
          <TableCaption>A list of products of this website.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SL</TableHead>
              <TableHead>Figure</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-end">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {allProducts.map((product: TProduct, i: number) => (
              <TableRow key={product._id}>
                <TableCell className="font-medium">{i + 1}</TableCell>
                <TableCell>
                  <Image
                    src={product.image as string}
                    alt="product"
                    height={30}
                    width={30}
                    className="rounded-full"
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Products</TableCell>
              <TableCell className="text-right">
                {allProducts?.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default AllProducts;
