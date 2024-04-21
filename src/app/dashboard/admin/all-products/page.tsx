"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from "@/redux/api/productApi";
import { TProduct } from "@/types";
import toast from "react-hot-toast";

const columns = [
  { name: "Name", uid: "name" },

  { name: "Category", uid: "category" },
  { name: "Description", uid: "description" },
  { name: "Price", uid: "price" },
  { name: "Action", uid: "actions" },
];

export default function AllProducts() {
  const { data, isFetching } = useGetAllProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (_id: string) => {
    // console.log(_id);
    try {
      const res = await deleteProduct(_id).unwrap();
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  // console.log(data?.result);
  const renderCell = React.useCallback(
    (product: TProduct, columnKey: string | number) => {
      // console.log(product);
      const cellValue = product[columnKey];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "lg", src: product?.image }}
              description={product.brand}
              name={cellValue}
            >
              {product?.name}
            </User>
          );

        case "category":
          return (
            <Chip className="capitalize" size="sm" variant="flat">
              {product?.category}
            </Chip>
          );
        case "description":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm max-w-[30ch] truncate capitalize">
                {cellValue}
              </p>
            </div>
          );
        case "price":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm">৳ {cellValue}</p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <AiOutlineEdit />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span
                  onClick={() => handleDelete(product._id)}
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                >
                  <AiOutlineDelete />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody isLoading={isFetching} items={data?.result}>
        {(product: TProduct) => (
          <TableRow key={product._id}>
            {(columnKey) => (
              <TableCell>{renderCell(product, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
