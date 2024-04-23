"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomTextArea from "@/components/form/CustomTextArea";
import {
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/redux/api/productApi";
import { Button } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const EditProductPage = ({ params }: { params: { productId: string } }) => {
  const { data, isFetching } = useGetSingleProductQuery(params.productId);
  const [updateSingleProduct] = useUpdateSingleProductMutation();

  if (isFetching) {
    return <p>Loading...</p>;
  }
  const onSubmit = async (data: FieldValues) => {
    const newData = { ...data };
    delete newData._id;
    const updateSingleProductInfo = {
      id: params.productId,
      data: newData,
    };

    try {
      const res = await updateSingleProduct(updateSingleProductInfo).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <CustomForm onSubmit={onSubmit} defaultValues={data?.result || {}}>
        <div className="space-y-3">
          <div className="md:flex items-center gap-2">
            <CustomInput
              variant="bordered"
              type="text"
              name="name"
              label="Name"
            />
            <CustomInput
              variant="bordered"
              type="text"
              name="brand"
              label="Brand"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              variant="bordered"
              type="text"
              name="category"
              label="Category"
            />
            <CustomInput
              variant="bordered"
              type="number"
              name="price"
              label="Price"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              variant="bordered"
              type="number"
              name="rating"
              label="Rating"
            />
            <CustomInput
              variant="bordered"
              type="url"
              name="image"
              label="Image URL"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              variant="bordered"
              type="text"
              name="color"
              label="Color"
            />
            <CustomInput
              variant="bordered"
              type="text"
              name="size"
              label="Size"
            />
          </div>
          <div>
            <CustomTextArea name="description" label="Description" />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <Button
              className="my-4 w-full"
              color="primary"
              type="submit"
              variant="shadow"
            >
              Update Shirt
            </Button>
          </div>
        </div>
      </CustomForm>
    </div>
  );
};

export default EditProductPage;
