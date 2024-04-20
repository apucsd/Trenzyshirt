"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CustomForm from "../form/CustomForm";
import { FieldValues } from "react-hook-form";
import CustomInput from "../form/CustomInput";
import toast from "react-hot-toast";

export default function CheckOutModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleSubmit = (values: FieldValues) => {
    console.log(values);
    onOpenChange();
    toast.success("Order Placed successfully!!!");
  };
  return (
    <>
      <Button
        onPress={onOpen}
        variant="shadow"
        color="primary"
        className="uppercase w-full"
      >
        Checkout
      </Button>
      <Modal
        size="xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Checkout
              </ModalHeader>
              <ModalBody>
                <CustomForm onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <CustomInput
                          name="firstName"
                          type="text"
                          label="First Name"
                        />
                      </div>
                      <div>
                        <CustomInput
                          name="lastName"
                          type="text"
                          label="Last Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 my-3">
                      <div>
                        <CustomInput name="email" type="email" label="Email" />
                      </div>
                      <div>
                        <CustomInput name="phone" type="number" label="Phone" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                      <div>
                        <CustomInput
                          name="address"
                          type="text"
                          label="Address"
                        />
                      </div>
                      <div>
                        <CustomInput name="city" type="text" label="City" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 my-3">
                      <div>
                        <CustomInput name="state" type="text" label="State" />
                      </div>
                      <div>
                        <CustomInput
                          name="zipCode"
                          type="text"
                          label="ZIP Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <Button type="submit" color="primary">
                      Get Cash On Delivery
                    </Button>
                  </div>
                </CustomForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
