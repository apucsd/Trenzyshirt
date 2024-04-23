import { Checkbox } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
};

const CustomCheckBox = ({ name, label }: TInputProps) => {
  const { control } = useFormContext();
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, ...filed }, formState: { errors } }) => {
        return (
          <>
            <div className="flex flex-col gap-2 w-full">
              <Checkbox
                {...filed}
                isSelected={isSelected}
                onValueChange={(value) => {
                  setIsSelected(value);
                  onChange(value);
                }}
              >
                Checkbox
              </Checkbox>
              <p className="text-default-500">
                {label} : {isSelected ? "true" : "false"}
              </p>
            </div>
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

export default CustomCheckBox;
