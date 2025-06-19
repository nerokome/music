import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="p-6 sm:p-10 flex flex-col items-start h-auto bg-black text-gray-800">
      <p className="font-mono text-2xl sm:text-3xl text-blue-300">Wagmi</p>
      <div className="flex flex-col mt-4 sm:mt-5">
        <p className="text-sm sm:text-md text-gray-400">
          We look forward to connecting with you!
        </p>
        <p className="text-sm sm:text-md text-gray-400">
          Please do not hesitate to reach out to us.
        </p>
      </div>
      <div className="flex items-center mt-4 sm:mt-5">
        <FaPhoneAlt size={18} className="text-gray-200 mr-2" />
        <p className="text-sm sm:text-md text-gray-400">+1 (123) 456-7890</p>
      </div>
      <div className="flex items-center mt-6 sm:mt-8">
        <IoLocationSharp size={18} className="text-red-300 mr-2" />
        <p className="text-sm sm:text-md text-gray-400">Ikeja, Lagos</p>
      </div>
      <div className="flex items-center mt-6 sm:mt-8">
        <MdOutlineMailOutline size={18} className="text-gray-200 mr-2" />
        <p className="text-sm sm:text-md text-gray-400">contact@wagmi.com</p>
      </div>
    </div>
  );
}

export default Contact;
