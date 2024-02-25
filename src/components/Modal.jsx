import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { LogoutBtn } from ".";

const Modal = ({ isAuthenticated, onClose, user }) => {
  return (
    <div className='absolute -bottom-24 -right-16 flex items-center justify-center h-full w-full'>
      <div className='p-6 pt-8 bg-black/60 min-w-[250px] bg-opacity-90 backdrop-filter backdrop-blur-2xl rounded-md shadow-2xl shadow-lime-400/50'>
        <button className=' absolute top-2 left-2 text-gray-800 bg-lime-200 rounded hover:bg-red-300 active:bg-lime-300' onClick={onClose}>
          <RxCross2 size={18} color='red'  />
        </button>
        {isAuthenticated ? (
          <div className='flex flex-col gap-3'>
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
            <LogoutBtn/>
          </div>
        ) : (
          <div className='flex flex-col gap-2 pt-2'>
            <p>Please login to view your profile</p>
            <Link
              onClick={onClose}
              className='text-green-500 border border-lime-500 w-fit px-3 py-1 rounded hover:bg-green-800/70 hover:text-white hover:backdrop-filter hover:backdrop-blur text-sm text-center font-bold'
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
