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
import { TOrder, TOrderTable } from "@/types";
import { useMyOrdersQuery } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hook";

const columns = [
  { name: "Order ID", uid: "orderId" },

  { name: "Shipping Method", uid: "shippingMethod" },
  { name: "Tracking Number", uid: "trackingNumber" },
  { name: "Status", uid: "status" },
  { name: "Action", uid: "action" },
];
const statusColorMap = {
  delivered: "success",
  pending: "danger",
};
export default function MyOrders() {
  const { user } = useAppSelector((state) => state.auth);
  const { data, isFetching } = useMyOrdersQuery(user?.email);

  const tableData = data?.result?.map((order: TOrder) => ({
    orderId: order._id,
    shippingMethod: "Cash On Delivery",
    trackingNumber: order.userInfo.phone,
    status: order.status,
    products: order.products,
  }));
  const renderCell = React.useCallback(
    (order: TOrderTable, columnKey: string | number) => {
      const cellValue = order[columnKey as keyof TOrderTable] as
        | string
        | number;

      switch (columnKey) {
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[order?.status] as "success" | "danger"}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "action":
          return (
            <div className="">
              <Button variant="shadow" color="primary" size="sm">
                Download Invoice
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  if (isFetching) {
    return <p>loading...</p>;
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
      <TableBody isLoading={isFetching} items={tableData ? tableData : []}>
        {(order: TOrderTable) => {
          // console.log(order);
          return (
            <TableRow key={order.orderId}>
              {(columnKey) => (
                <TableCell>{renderCell(order, columnKey)}</TableCell>
              )}
            </TableRow>
          );
        }}
      </TableBody>
    </Table>
  );
}
