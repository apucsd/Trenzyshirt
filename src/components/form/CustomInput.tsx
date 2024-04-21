import { Input } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
};

const CustomInput = ({ name, type, label, placeholder }: TInputProps) => {
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
              type={type}
              variant="underlined"
              label={label}
              placeholder={placeholder}
            />
            <span className="text-xs text-red-500">
              {" "}
              {errors[name] && (errors[name] as FieldError).message}
            </span>
          </>
        );
      }}
    />
  );
};

export default CustomInput;
