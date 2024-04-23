"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { TOrder } from "@/types";
import toast from "react-hot-toast";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/api/orderApi";

const columns = [
  { name: "Customer Name", uid: "customerName" },

  { name: "Total Price", uid: "totalPrice" },
  { name: "Total Product", uid: "totalProduct" },
  { name: "Status", uid: "status" },
  { name: "Action", uid: "actions" },
];
const statusColorMap = {
  delivered: "success",
  pending: "danger",
};
export default function ManageOrders() {
  const { data, isFetching } = useGetAllOrdersQuery({});
  const [updateOrder] = useUpdateOrderMutation();
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDelete = async (_id: string) => {
    // console.log(_id);
    try {
      const res = await deleteOrder(_id).unwrap();
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  const handleDelivered = async (_id: string) => {
    try {
      const res = await updateOrder(_id).unwrap();
      // console.log(res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const ordersData = data?.result;
  const tableData = ordersData?.map(
    ({ _id, userInfo, products, price, status }: any) => ({
      _id,
      customerName: `${userInfo.firstName} ${userInfo.lastName}`,
      totalPrice: price,
      totalProduct: products.length,
      status,
      products,
    })
  );

  const renderCell = React.useCallback(
    (order: TOrder, columnKey: string | number) => {
      // console.log(product);
      const cellValue = order[columnKey];
      console.log(cellValue);
      switch (columnKey) {
        case "customerName":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm">{cellValue}</p>
            </div>
          );
        case "totalPrice":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">৳ {cellValue}</p>
            </div>
          );

        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[order.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );

        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly size="sm" variant="light">
                    <svg
                      aria-hidden="true"
                      fill="none"
                      focusable="false"
                      height={24}
                      role="presentation"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path
                        d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem onClick={() => handleDelivered(order._id)}>
                    Delivered
                  </DropdownItem>
                  <DropdownItem onClick={() => handleDelete(order._id)}>
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
      <TableBody isLoading={isFetching} items={tableData}>
        {(order: TOrder) => (
          <TableRow key={order._id}>
            {(columnKey) => (
              <TableCell>{renderCell(order, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
