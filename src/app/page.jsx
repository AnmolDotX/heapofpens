"use client";

import { useEffect, useState } from "react";
import appwriteService from "@/appwrite/services";

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    
  },[])

  return (
    <section className="flex flex-col justify-between rounded-md bg-teal-100 w-[75%] min-h-screen">
      <h1 className='text-black'>Latest Blogs</h1>
      <h5>Yaha rahega blogs</h5>
      <div>
        
      </div>
    </section>
  );
};

export default HomePage;
