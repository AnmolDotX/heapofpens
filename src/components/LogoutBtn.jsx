"use client";

import authService from "@/appwrite/auth";
import { logout } from "@/lib/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { TbLogout } from "react-icons/tb";
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

  const status = useSelector((state) => state.auth.status);
  return status ? (
    <button
      className="inline-bock p-2 h-8 w-8 duration-200 transition-all bg-red-400/80 hover:bg-red-400 rounded-full"
      onClick={logoutHandler}
      title="Logout"
    >
      <TbLogout />
    </button>
  ) : null;
};

export default LogoutBtn;
