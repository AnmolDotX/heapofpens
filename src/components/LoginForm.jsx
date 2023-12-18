'use client'

import authService from "@/appwrite/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Input } from '@/components'
import { login as authLogin } from "@/lib/features/authSlice";

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const login = async (data) => {
        setError("");
        try {
            const session = await authService.login(data)
            if(session) {
                const userData = await authService.getCurrentUser();
                if(userData) {
                  dispatch(authLogin(userData));
                }
                router.push("/");
            }
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <>
      {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}
      <form onSubmit={handleSubmit(login)} className='mt-8'>
        <div className='space-y-5 transition-all'>
          <Input
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
            label='Password: '
            type='password'
            placeholder='Enter your password'
            {...register("password", {
              required: true,
            })}
          />
          <Button type='submit' className='w-full'>
            Sign in
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
