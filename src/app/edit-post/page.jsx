"use client";

import { PostForm } from "@/components";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import appwriteService from "@/appwrite/services";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const router = useRouter();
  console.log(slug);

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    } else {
      router.push("/");
    }
  }, [slug, router]);

  return post ? (
    <div className="py-8">
      <PostForm post={post} />
    </div>
  ) : null;
}
