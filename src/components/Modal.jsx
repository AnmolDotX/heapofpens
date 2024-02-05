import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isAuthenticated, onClose, user }) => {
  return (
    <div className='absolute -bottom-24 -right-24 flex items-center justify-center h-full w-full'>
      <div className='p-6 pt-8 bg-black bg-opacity-90 backdrop-filter backdrop-blur-2xl rounded-md'>
        <button className=' absolute top-2 left-2 text-gray-800 bg-white rounded-sm hover:bg-red-300 active:bg-red-200' onClick={onClose}>
          <RxCross2 size={18} color='red'  />
        </button>
        {isAuthenticated ? (
          <div className='flex flex-col gap-3'>
            <hr />
            <p className='text-sm'>
              Welcome,{" "}
              <span className='text-blue-500 font-bold tracking-wide'>
                {user.name.toUpperCase()}
              </span>
            </p>
            <hr />
            <p className="flex items-center gap-2 text-sm">
              <span>Email : </span>{user.email}
            </p>
            <hr />
          </div>
        ) : (
          <div className='flex flex-col gap-2 '>
            <p>Please login to view your profile</p>
            <Link
              onClick={onClose}
              className='text-green-500 text-sm text-center font-bold'
              href={"/login"}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
