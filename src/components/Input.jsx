import { forwardRef, useId } from "react";

const Input = forwardRef(
    function Input ({
        label,
        type="text",
        className="",
        ...props
    },ref){
        const id = useId()
        return (
            <div className="w-full flex flex-col items-start">
             {
                label && <label htmlFor={id} className="inline-block mb-2 py-1 tracking-wider text-xl font-bold text-lime-300">{label}</label>
             }
             <input type={type}
             className={`px-3 py-2 rounded-lg placeholder:text-lime-950/70 outline-none focus:bg-lime-950 duration-200 transition-all w-full ${className}`}
             ref={ref}
             {...props}
             id={id}
             />
            </div>
            );
        }
    )

export default Input;