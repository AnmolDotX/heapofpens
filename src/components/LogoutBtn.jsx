"use client";

import authService from "@/appwrite/auth";
import { logout } from "@/lib/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import thekua from "js-cookie";
import { useState } from "react";

const LogoutBtn = () => {
  const [isLaoding, setIsLaoding] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const logoutHandler = () => {
    setIsLaoding(true)
    authService.logout().then(() => {
      dispatch(logout());
      thekua.remove('user-token');
      router.push("/login");
      setIsLaoding(false)
    });
  };
  
  return (
    <button
      className="inline-bock py-2 px-3 text-sm h-8 flex items-center justify-center duration-200 transition-all bg-red-600 hover:bg-red-500 rounded-full"
      onClick={logoutHandler}
      title="Logout"
    >
      {
        isLaoding ? "logging out..." : "Logout"
      }
    </button>
  )
};

export default LogoutBtn;
