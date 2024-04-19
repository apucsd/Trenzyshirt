"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { useLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { jwtDecoder } from "@/utils/jwtDecoder";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React from "react";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
const LoginPage = () => {
  const router = useRouter();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await login(values).unwrap();

      if (res?.success) {
        const userInfo = jwtDecoder(res?.token);
        const authInfo = {
          user: userInfo,
          token: res?.token,
        };
        console.log(authInfo);
        dispatch(setUser(authInfo));
        toast.success("User login successfully");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
          {/* register design side  */}
          <div className="relative hidden h-full items-center justify-center bg-primary/80 md:flex md:w-[60%] lg:w-[60%]">
            <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-r from-yellow-200 to-pink-400"></div>
            <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"></div>
            <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-200 to-purple-800 transition-all"></div>
            <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-r from-green-200 to-blue-500"></div>
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-medium text-white/80 ">
                Welcome Back
              </h2>
              <p className="animate-pulse text-sm text-white/60">
                Please Enter Your login Information
              </p>
            </div>
          </div>
          {/* input side  */}
          <div className="flex w-full flex-col justify-center bg-white  lg:w-[40%]">
            <h2 className=" text-center text-3xl font-bold text-[#000]">
              Login Here
            </h2>
            <div className="p-10">
              <CustomForm onSubmit={handleLogin}>
                <CustomInput name="email" type="email" label="Email" />
                <CustomInput name="password" type="password" label="Password" />
                <Button
                  className="my-4
                 w-full"
                  color="primary"
                  type="submit"
                >
                  Login
                </Button>
              </CustomForm>
            </div>
            {/* divider  */}
            <div className=" flex items-center px-8 -mt-3">
              <hr className="flex-1" />
              <div className="mx-4 text-gray-400">
                <Link href="/register">Sign Up Here</Link>
              </div>
              <hr className="flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
