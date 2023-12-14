"use client";
import { BlogCard } from "@/components";
import { useSelector } from "react-redux";

const HomePage = () => {
  const data = useSelector((state) => state.demo.demoName);
  // console.log(data);
  return (
    <section className="flex flex-col justify-between rounded-md bg-teal-100 w-[75%]">
      <h1 className='text-black'>Latest Blogs</h1>
      <h5>Yaha rahega blogs</h5>
    </section>
  );
};

export default HomePage;
