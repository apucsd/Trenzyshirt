"use client";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { TCartProduct, resetCart } from "@/redux/features/cartSlice";
import { CheckOutSchema, defaultValues } from "@/Schema/validation.schema";
import { useCreateOrderMutation } from "@/redux/api/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
type TModalProps = {
  products: TCartProduct[];
  total: number;
};

export default function CheckOutModal({ products, total }: TModalProps) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [createOrder] = useCreateOrderMutation();
  const handleSubmit = async (values: FieldValues) => {
    if (user) {
      try {
        const checkOutInfo = {
          userInfo: values,
          price: total,
          products,
        };
        const res = await createOrder(checkOutInfo).unwrap();
        // console.log(res);
        if (res?.success) {
          toast.success(res?.message);
          dispatch(resetCart());
        }
      } catch (error) {
        toast.error("Something went wrong while ordering!!!");
      }
    } else {
      toast.error("Please login and try again!!!");
    }
    onOpenChange();
  };
  return (
    <>
      <Button
        onPress={onOpen}
        variant="shadow"
        color="primary"
        className="uppercase w-full"
      >
        Proceed Checkout
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
                <CustomForm
                  onSubmit={handleSubmit}
                  resolver={zodResolver(CheckOutSchema)}
                  defaultValues={defaultValues}
                >
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
                    <Button disabled type="submit">
                      SSLCOMMERZ
                    </Button>
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
