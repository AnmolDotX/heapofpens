"use client";

import { useEffect, useState } from "react";
import appwriteService from "@/appwrite/services";
import { BlogCard } from "@/components";

const HomePage = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);


  return (
    <section className="flex flex-col rounded-md w-full border-lime-300 bg-slate-950/70 shadow shadow-black border-2 p-5 pb-12 min-h-screen">
      <h1 className='text-lime-200 px-5 border-x-lime-300 border-x-4 w-fit text-5xl font-bold tracking-[10px]'>Latest Blogs</h1>
      <h5 className="text-sm font-normal tracking-[0.2rem] mt-2 text-lime-300">The recent blogs on the platform</h5>
      <div>
          {
            posts.length === 0 ? (
              <div>
                No post available
              </div>
            ) : (
              <div className="w-full flex justify-center flex-wrap gap-y-8 pt-5 gap-x-12 overflow-y-scroll">
                {
                  posts.map((post)=>(
                    <div className="p-2 w-[28%]" key={post.$id}>
                       <BlogCard {...post}/>
                    </div>
                  ))
                }
              </div>
            )
          }
      </div>
    </section>
  );
};

export default HomePage;
