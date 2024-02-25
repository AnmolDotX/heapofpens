'use client'

import authService from "@/appwrite/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Input } from '@/components'
import { login as authLogin } from "@/lib/features/authSlice";
import thekua from "js-cookie";

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const login = async (data) => {
        setIsLoading(true);
        setError("");
        try {
            const {session, token} = await authService.login(data);
            thekua.set('user-token', token.jwt);
            if(session) {
                const userData = await authService.getCurrentUser();
                if(userData) {
                  dispatch(authLogin({userData}));
                }
                setIsLoading(false)
                router.push("/");
            }
        } catch (error) {
            setIsLoading(false)
            setError(error.message);
        }
    };

  return (
    <>
      {error && <p className='text-red-600 text-sm font-medium mt-8 text-center'>{error}</p>}
      <form onSubmit={handleSubmit(login)} className='mt-8'>
        <div className='space-y-5 transition-all'>
          <Input
            className='bg-lime-950 shadow-lime-400/50 shadow py-3 border-4 border-lime-400 focus:bg-green-950 focus:border-4 focus:border-lime-200 text-lime-300 placeholder:text-lime-400'
            label='Email: '
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
            label='Password: '
            type='password'
            placeholder='Enter your password'
            {...register("password", {
              required: true,
            })}
          />
          <Button type='submit' className='w-full'>
            {
              isLoading ? "Signing in..." : "Sign in"
            }
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
