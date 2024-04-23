import { Textarea } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type TInputProps = {
  name: string;

  placeholder?: string;
  label?: string;
  variant?: "flat" | "underlined" | "bordered" | "faded" | undefined;
  isRequired?: boolean;
};

const CustomTextArea = ({
  name,
  label,
  variant = "bordered",
  isRequired = false,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        return (
          <>
            <Textarea
              isRequired={isRequired}
              {...field}
              variant={variant}
              label={label}
              labelPlacement="outside"
              placeholder="Enter your description"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
            <span className="text-xs text-red-500">
              {errors[name] && (errors[name] as FieldError).message}
            </span>
          </>
        );
      }}
    />
  );
};

export default CustomTextArea;
