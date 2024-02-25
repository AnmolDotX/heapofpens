"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import authService from "@/appwrite/auth";
import { login } from "@/lib/features/authSlice";
import Link from "next/link";
import { Button, Input } from "@/components";

const SignupPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setIsLoading(true)
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          setIsLoading(false)
          router.push("/");
        }
      }
    } catch (error) {
      setIsLoading(false)
      setError(error.message);
    }
  };

  return (
    <section className="h-full w-full flex items-center justify-center rounded-lg">
      <div
        className={`mx-auto w-full max-w-lg bg-black/70 rounded-xl p-10 border-2 shadow-black shadow-2xl backdrop-filter backdrop-blur-md border-lime-400 -translate-y-28`}
      >
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px] text-3xl text-lime-400 font-bold tracking-widest'>
            Signup
          </span>
        </div>
        <h2 className='text-center text-lg tracking-wide font-medium leading-tight '>
          Sign up to create account
        </h2>
        <p className='mt-2 text-center text-sm text-lime-400'>
          Already have an account ?&nbsp;
          <Link
            href='/login'
            className='font-medium text-primary transition-all duration-200 hover:underline text-sky-400 tracking-wider'
          >
            Sign In
          </Link>
        </p>
        {error && <p className='text-red-500 font-medium text-sm mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
            <Input
              className='bg-lime-950 shadow-lime-400/50 shadow py-3 border-4 border-lime-400 focus:bg-green-950 focus:border-4 focus:border-lime-200 text-lime-300 placeholder:text-lime-400'
              label='Full Name : '
              placeholder='Enter your full name'
              {...register("name", {
                required: true,
              })}
            />
            <Input
              className='bg-lime-950 shadow-lime-400/50 shadow py-3 border-4 border-lime-400 focus:bg-green-950 focus:border-4 focus:border-lime-200 text-lime-300 placeholder:text-lime-400'
              label='Email : '
              placeholder='Enter your email'
              type='email'
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              className='bg-lime-950 shadow-lime-400/50 shadow py-3 border-4 border-lime-400 focus:bg-green-950 focus:border-4 focus:border-lime-200 text-lime-300 placeholder:text-lime-400'
              label='Password : '
              type='password'
              placeholder='Enter your password'
              {...register("password", {
                required: true,
              })}
            />
            <Button type='submit' className='w-full'>
              {
                isLoading ? "Creating account..." : "Create Account"
              }
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupPage;
