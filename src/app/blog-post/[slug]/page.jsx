"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import appwriteService from "@/appwrite/services";
import parse from "html-react-parser";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const router = useRouter();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          router.replace("/");
        }
      });
    }
  }, [slug, router]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        router.replace("/");
      }
    });
  };
  return post ? (
    <article className='py-8'>
        <div className='w-full flex justify-center mb-4 relative border rounded-xl p-2'>
          <Image
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className='rounded-xl'
          />

          {isAuthor && (
            <div className='absolute right-6 top-6'>
              <Link href={`/edit-post/${post.$id}`}>
                <Button bgColor='bg-green-500' className='mr-3'>
                  <FaEdit />
                </Button>
              </Link>
              <Button bgColor='bg-red-500' onClick={deletePost}>
                <RiDeleteBin6Line />
              </Button>
            </div>
          )}
        </div>
        <div className='w-full mb-6'>
          <h1 className='text-2xl font-bold'>{post.title}</h1>
        </div>
        <div className='browser-css'>{parse(post.content)}</div>
    </article>
  ) : (
    <div>No post available</div>
  );
};

export default BlogPostDetail;
