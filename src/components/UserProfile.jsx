"use client";
import Image from "next/image";
import { useState } from "react";
import { Modal } from ".";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };


  const isAuthenticated = useSelector((state) => state.auth.status);

  const user = useSelector((state) => state.auth.userData)


  return (
    <div className="">
      <div
        className="flex items-center justify-center h-8 w-8 bg-red-400 rounded-full cursor-pointer"
        onClick={togglePopup}
      >
        <Image
          src="/ProfileDummy.jpg"
          width={100}
          height={100}
          className="rounded-full"
          alt="profile image"
        />
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
