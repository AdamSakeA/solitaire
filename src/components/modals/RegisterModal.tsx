import { Dispatch, SetStateAction } from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import { IoClose } from "react-icons/io5";
import { useRegisterMutate } from "@/src/hooks";
import Button from "../Button";
import FadeUp from "../animations/FadeUp";

interface RegisterAttributes {
  toggle: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export default function RegisterModal({ toggle, setMessage }: RegisterAttributes) {
  const [formData, setFormData] = useState({
    email: "" as string,
    password: "" as string,
  });
  const { registerUserMutation } = useRegisterMutate();

  const handleInputForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    registerUserMutation.mutate(formData, {
      onSuccess: async () => {
        handleToggle();
        setMessage("Success Register User");
      },
      onError: async () => {
        handleToggle();

        setMessage("Error Register User");
      },
    });
  };

  const handleToggle = () => {
    toggle((prevState) => !prevState);
  };

  if (registerUserMutation.isSuccess) {
    setMessage("Success Register User");
  }
  if (registerUserMutation.isError) {
    setMessage("Failed Register User");
  }

  return (
    <div className="fixed z-[999] bg-[rgba(0,0,0,0.5)] top-0 w-full h-full left-0 p-[20px]">
      <FadeUp>
        <div className="bg-white w-full m-auto mt-[100px] p-[20px] flex flex-col rounded-lg shadow-lg md:w-[500px]">
          <IoClose
            className="text-2xl text-gray-400 ml-auto cursor-pointer"
            onClick={handleToggle}
          />
          <div className="mb-2">
            <h1 className=" text-2xl text-gray-700 font-semibold">Register User</h1>
            <p className=" text-xs text-gray-500">Please register with defined account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex justify-between items-center py-2">
              <label>Email</label>
              <input
                type="text"
                value={formData.email}
                name="email"
                required
                placeholder="Input e-mail"
                onChange={handleInputForm}
                className="border-2 px-3 py-1 rounded-lg"
              />
            </div>
            <div className="w-full flex justify-between items-center py-2">
              <label>Password</label>
              <input
                type="password"
                value={formData.password}
                name="password"
                required
                placeholder="Input password"
                onChange={handleInputForm}
                className="border-2 px-3 py-1 rounded-lg"
              />
            </div>

            <Button className="px-5 mt-5 ">Submit</Button>
          </form>
        </div>
      </FadeUp>
    </div>
  );
}
