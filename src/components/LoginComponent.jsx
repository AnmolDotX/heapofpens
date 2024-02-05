import Link from "next/link";
import { LoginForm } from ".";

const LoginComponent = () => {

    return (
        <div
        className='flex items-center justify-center w-full h-full rounded-lg transition-all'
        >
            <div className={`mx-auto w-full max-w-lg bg-black/70 rounded-xl p-10 border-2 shadow-black shadow-2xl backdrop-filter backdrop-blur-md border-lime-400 -translate-y-28`}>
            <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px] text-3xl text-lime-400 font-bold tracking-widest">
                            Login
                        </span>
            </div>
            <h2 className="text-center text-lg tracking-wide font-medium leading-tight ">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-lime-400">
                        Don&apos;t have any account ?&nbsp;
                        <Link
                            href="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline text-sky-400 tracking-wider"
                        >
                            Sign Up
                        </Link>
            </p>
            <LoginForm />
            </div>
        </div>
    );
}

export default LoginComponent;