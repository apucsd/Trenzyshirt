import { Input } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  variant?: "flat" | "underlined" | "bordered";
  isRequired?: boolean;
};

const CustomInput = ({
  name,
  type,
  label,
  placeholder,
  variant = "underlined",
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
            <Input
              {...field}
              isRequired={isRequired}
              type={type}
              variant={variant}
              label={label}
              placeholder={placeholder}
              className="w-full "
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

export default CustomInput;
