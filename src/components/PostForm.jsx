"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "@/components";
import appwriteService from "../appwrite/services";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function PostForm({ post }) {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const router = useRouter();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      try {
        setIsLoading(true)
        const file = data.image[0]
        ? await appwriteService.fileUpload(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        router.push(`/blog-post/${dbPost.$id}`);
      }
      setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error(error.message);
      }
    } else {
      try {
        setIsLoading(true)
        const file = await appwriteService.fileUpload(data.image[0]);
        if (file) {
          const fileId = file.$id;
          data.featuredImage = fileId;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id,
          });
  
          if (dbPost) {
            router.push(`/blog-post/${dbPost.$id}`);
          }
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
        console.error(error.message);
      }
    }
  };

  const slugTransformation = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransformation(value.title), {
          shouldValidate: true,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransformation, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-5 border-r border-green-950/50'>
        <Input
          label='Title'
          placeholder='Enter the title of blog'
          className='mb-5 bg-green-950/70 text-green-300 placeholder:text-green-500 shadow shadow-black border-2 border-lime-300'
          {...register("title", { required: true })}
        />
        <Input
          label='Slug'
          placeholder='Slug'
          className='mb-5 bg-green-950/70 text-green-300 placeholder:text-green-500 shadow shadow-black border-2 border-lime-300'
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransformation(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          name='content'
          label='Content :'
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className='w-1/3 px-5'>
        <Input
          label='Featured Image'
          type='file'
          className='mb-5 bg-green-950/70 text-green-300 placeholder:text-green-500 shadow shadow-black border-2 border-lime-300'
          accept='image/png, image/jpg, image/jpeg, image/gif'
          {...register("image", { required: !post })}
        />
        {post && (
          <div className='w-full mb-4'>
            <Image
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className='rounded-lg'
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label='Status'
          className='mb-5 bg-green-950/70 placeholder:text-green-500 shadow shadow-black border-2 border-lime-300'
          {...register("status", { required: true })}
        />
        <div>
        <Button
          type='submit'
          className='w-2/3 z-30'
        >
          {
            isLoading ? "sending data..." : (post ? "Update" : "Submit")
          }
        </Button>
        </div>
      </div>
    </form>
  );
}
