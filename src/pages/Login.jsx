import React, { useState } from "react";
import { toast } from "react-toastify";
import { isEmail } from "../helpers/herlpers";
import { loginCustomer } from "../api/customers/customers";


export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([user, password].includes("")) {
      toast.error("All fields are required.");
      return;
    }

    if (!isEmail(user.trim())) return toast.error("Enter a valid email.");

    const data = await loginCustomer({email:user.trim(),password})
    if(!data.status) return toast.error(data.msg);
    return toast.success(data.msg);

  };

  return (
    <div
      className="h-screen flex items-center justify-center 
    fondo_svg"
    >
      <div className="bg-white w-[520px] mx-5  rounded-lg shadow-lg h-fit flex items-center justify-center border-[1px] border-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full gap-5 px-10 py-16 max-lg:w-full"
          action=""
        >
          <div className="space-y-2">
            <h1 className="font-bold text-3xl text-center">Sign In</h1>
          </div>

          <div className="my-3 flex items-center">
            <hr className="border-[1px] border-gray-100 w-1/3" />
            <p className="w-1/3 text-center text-gray-400 text-xs">
              With email
            </p>
            <hr className="border-[1px] border-gray-100 w-1/3" />
          </div>

          <div className="flex flex-col gap-5">
            <input
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              type="text"
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-500 text-white rounded-lg py-3 text-sm text-center hover:bg-emerald-600 duration-300 mt-5"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
