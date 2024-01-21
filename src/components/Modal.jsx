import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isAuthenticated, onClose, user }) => {
  return (
    <div className="fixed top-24 left-[30%] flex items-center justify-center w-full h-full">
      <div className=" p-6 bg-black bg-opacity-50 rounded-md">
        <button className=" absolute -top-1 text-gray-800" onClick={onClose}>
          <RxCross2 size={18} color="red" className="" />
        </button>
        {isAuthenticated ? (
          <p className="text-base">Welcome, <span className="text-blue-500 font-bold tracking-wide">{user.name}</span></p>
        ) : ( 
          <div className="flex flex-col gap-2 ">
            <p>Please login to view your profile.</p>
            <Link onClick={onClose} className="text-green-500 text-sm text-center font-bold" href={"/login"}>Login</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
