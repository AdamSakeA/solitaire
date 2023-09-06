import { FC } from "react";
import FadeUp from "../animations/FadeUp";
import { UserTypes } from "../../interfaces/UserAttributes";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

interface CardUserProps {
  data: UserTypes;
}

const CardUser: FC<CardUserProps> = ({ data }) => {
  return (
    <>
      <FadeUp className="text-gray-700 px-[20px] w-full lg:w-[50%]">
        <motion.div
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          className="flex flex-col gap-0 md:flex-row justify-between bg-white mb-[30px] shadow-md rounded-md"
        >
          <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-center">
            <div className="flex gap-2 items-center">
              <Image
                src={data?.avatar}
                alt={data.email}
                width={100}
                height={100}
                className=" rounded-lg shadow-md mr-5"
              />
              <div>
                <div className="flex gap-1">
                  <h1 className=" font-semibold text-lg">{data?.first_name}</h1>
                  <h1 className=" font-semibold text-lg">{data?.last_name}</h1>
                </div>
                <div className="text-gray-400 font-normal text-md flex items-center gap-1">
                  <MdEmail />
                  <p>{data?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </FadeUp>
    </>
  );
};

export default CardUser;
