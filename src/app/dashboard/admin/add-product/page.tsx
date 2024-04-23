"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomTextArea from "@/components/form/CustomTextArea";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { Button } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const AddProductPage = () => {
  const [createProduct] = useCreateProductMutation();
  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    // Add logic to process shirt data
    try {
      const res = await createProduct(data).unwrap();
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Something went wrong!!!");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <CustomForm onSubmit={onSubmit}>
        <div className="space-y-3">
          <div className="md:flex items-center gap-2">
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="text"
              name="name"
              label="Name"
            />
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="text"
              name="brand"
              label="Brand"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="text"
              name="category"
              label="Category"
            />
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="number"
              name="price"
              label="Price"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="number"
              name="rating"
              label="Rating"
            />
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="url"
              name="image"
              label="Image URL"
            />
          </div>
          <div className="md:flex items-center gap-2">
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="text"
              name="color"
              label="Color"
            />
            <CustomInput
              isRequired={true}
              variant="bordered"
              type="text"
              name="size"
              label="Size"
            />
          </div>
          <div>
            <CustomTextArea
              isRequired={true}
              name="description"
              label="Description"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <Button
              className="my-4 w-full"
              color="primary"
              type="submit"
              variant="shadow"
            >
              Add Shirt
            </Button>
          </div>
        </div>
      </CustomForm>
    </div>
  );
};

export default AddProductPage;
