"use client";
import { useGetSingleOrderQuery } from "@/redux/api/orderApi";
import { TCartProduct } from "@/redux/features/cartSlice";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@nextui-org/react";
import React, { useRef } from "react";
import { generatePDF } from "@/utils/generatePDF";
const InvoicePage = ({ params }: { params: { invoiceId: string } }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { data, isFetching } = useGetSingleOrderQuery(params.invoiceId);
  if (isFetching) {
    return <p>Loading...</p>;
  }
  const invoice = data?.result;
  const downloadPDF = () => {
    generatePDF("invoiceId");
  };
  return (
    <div>
      <div
        ref={ref}
        id="invoiceId"
        className=" m-auto bg-white  p-8  md:p-14 text-base leading-6 text-center border border-solid border-zinc-100 "
        style={{
          maxWidth: 700,
          margin: "auto",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        }}
      >
        <div className="pt-4">
          <table
            className="w-full text-left border-collapse"
            style={{ borderSpacing: 2 }}
          >
            <tbody className="border-collapse" style={{ borderSpacing: 2 }}>
              <tr className="" style={{ borderSpacing: 2 }}>
                <td
                  colSpan={2}
                  className="p-1 align-top"
                  style={{ borderSpacing: 2 }}
                >
                  <table className="w-full" style={{ borderSpacing: 2 }}>
                    <tbody style={{ borderSpacing: 2 }}>
                      <tr style={{ borderSpacing: 2 }}>
                        <td
                          className="block w-full max-auto  -my-10"
                          style={{ lineHeight: 45, borderSpacing: 2 }}
                        >
                          <div className="text-xl md:text-4xl flex gap-1">
                            <h2 className="">Trenzy</h2>
                            <span className="  rounded px-1  shadow-sm">
                              Shirt
                            </span>
                          </div>
                          <p className="mt-2 text-xs md:text-sm ">
                            Design, Give ,Take and Ship!
                          </p>
                        </td>
                        <td
                          className="block  pb-3 pt-3 w-full text-xs md:text-sm text-right"
                          style={{ borderSpacing: 2 }}
                        >
                          Invoice #: {invoice.invoiceNumber}
                          <br
                            className="text-right text-xs md:text-sm"
                            style={{ borderSpacing: 2 }}
                          />
                          Created: {formatDate(invoice.invoiceDate)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr className="" style={{ borderSpacing: 2 }}>
                <td
                  colSpan={2}
                  className=" pt-0 align-top"
                  style={{ borderSpacing: 2 }}
                >
                  <table className="w-full" style={{ borderSpacing: 2 }}>
                    <tbody style={{ borderSpacing: 2 }}>
                      <tr style={{ borderSpacing: 2 }}>
                        <td
                          className="block w-full text-xs md:text-sm text-left"
                          style={{ borderSpacing: 2 }}
                        >
                          {`${invoice.userInfo.firstName} ${invoice.userInfo.lastName}`}
                          <br style={{ borderSpacing: 2 }} />
                          {invoice.userInfo.address}
                          <br style={{ borderSpacing: 2 }} />
                          {invoice.userInfo.phone}
                          <br style={{ borderSpacing: 2 }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <table className="min-w-full divide-y divide-slate-800">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-800 sm:pl-6 md:pl-0"
              >
                Description
              </th>
              <th
                scope="col"
                className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-800 sm:table-cell"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-800 sm:table-cell"
              >
                Rate
              </th>
              <th
                scope="col"
                className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-800 sm:pr-6 md:pr-0"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.products.map((product: TCartProduct) => (
              <tr key={product._id} className="border-b border-slate-800">
                <td className="py-3 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                  <div className="font-medium text-slate-800">
                    {product.name}
                  </div>
                </td>
                <td className="hidden px-3 py-3 text-sm text-right text-slate-800 sm:table-cell">
                  {product.selectedQuantity}
                </td>
                <td className="hidden px-3 py-3 text-sm text-right text-slate-800 sm:table-cell">
                  ৳ {product.price}
                </td>
                <td className="py-3 pl-3 pr-4 text-sm text-right text-slate-800 sm:pr-6 md:pr-0">
                  ৳ {product.selectedPrice}
                </td>
              </tr>
            ))}

            <tr className="border-b border-slate-800">
              <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                <div className="font-medium text-slate-800">
                  {/* Place Additional Item Here */}
                </div>
              </td>
              <td className="hidden px-3 py-4 text-sm text-right text-slate-800 sm:table-cell">
                {/* Place Quantity Here */}
              </td>
              <td className="hidden px-3 py-4 text-sm text-right text-slate-800 sm:table-cell">
                {/* Place Rate Here */}
              </td>
              <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-800 sm:pr-6 md:pr-0">
                {/* Place Total (Quanity*Rate) Here */}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-3 pl-6 pr-3 text-sm font-light text-right text-slate-800 sm:table-cell md:pl-0"
              >
                Subtotal
              </th>
              <th
                scope="row"
                className="pt-3 pl-4 pr-3 text-sm font-light text-left text-slate-800 sm:hidden"
              >
                Subtotal
              </th>
              <td className="pt-3 pl-3 pr-4 text-sm text-right text-slate-800 sm:pr-6 md:pr-0">
                ৳ {invoice.subTotal}
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-3 pl-6 pr-3 text-sm font-light text-right text-slate-800 sm:table-cell md:pl-0"
              >
                Delivery
              </th>
              <th
                scope="row"
                className="pt-3 pl-4 pr-3 text-sm font-light text-left text-slate-800 sm:hidden"
              >
                Delivery
              </th>
              <td className="pt-3 pl-3 pr-4 text-sm text-right text-slate-800 sm:pr-6 md:pr-0">
                ৳ {invoice.deliveryCharge}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-3 pl-6 pr-3 text-sm font-normal text-right text-slate-800 sm:table-cell md:pl-0"
              >
                Total Cost
              </th>
              <th
                scope="row"
                className="pt-3 pl-4 pr-3 text-sm font-normal text-left text-slate-800 sm:hidden"
              >
                Total Cost
              </th>
              <td className="pt-3 pl-3 pr-4 text-sm font-normal text-right text-slate-800 sm:pr-6 md:pr-0">
                ৳ {invoice.price}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div
        style={{
          maxWidth: 700,
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
        }}
        className="flex  m-auto   my-3 items-center justify-end"
      >
        <Button onClick={downloadPDF} variant="shadow" color="primary">
          Download Invoice
        </Button>
      </div>
    </div>
  );
};

export default InvoicePage;
