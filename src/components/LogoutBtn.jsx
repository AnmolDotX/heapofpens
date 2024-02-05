"use client";

import authService from "@/appwrite/auth";
import { logout } from "@/lib/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      removeCookie('user-token');
      router.push("/login");
    });
  };
  
  return (
    <button
      className="inline-bock py-2 px-3 text-sm h-8 flex items-center justify-center duration-200 transition-all bg-red-600 hover:bg-red-500 rounded-full"
      onClick={logoutHandler}
      title="Logout"
    >
      Logout
    </button>
  )
};

export default LogoutBtn;
