import { forwardRef, useId } from "react";
const Select = forwardRef(function Select(
  { label, options = [], className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className='w-full'>
      <div>
      {label && <label className="inline-block font-bold text-xl border-s-4 text-lime-950 border-lime-950/50 border-e-4 rounded-2xl px-5 py-1 mb-3" htmlFor={id}>{label}</label>}
      </div>
      <select
        {...props}
        ref={ref}
        id={id}
        className={`px-3 py-3 rounded-lg text-yellow-400 outline-none duration-200 transition-all w-2/3 ${className}`}
      >
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
