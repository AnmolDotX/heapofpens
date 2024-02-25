"use client";

import { useEffect, useState } from "react";
import { Modal } from ".";
import { useDispatch, useSelector } from "react-redux";
import { IoSettings } from "react-icons/io5";
import { initialiseState } from "@/lib/features/authSlice";

const UserProfile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  const isAuthenticated = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);

  useEffect(()=>{
    dispatch(initialiseState())
  },[dispatch])

  return (
    <div className="relative">
      <div
        className="flex items-center justify-center h-8 w-8 rounded-full cursor-pointer"
        onClick={togglePopup}
      >
        <IoSettings className="text-3xl hover:text-lime-500 transition-all active:text-lime-400" />
      </div>
      {isPopupOpen && (
        <Modal
          onClose={togglePopup}
          isAuthenticated={isAuthenticated}
          user={user}
        />
      )}
    </div>
  );
};

export default UserProfile;
