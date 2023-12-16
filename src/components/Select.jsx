import { forwardRef, useId } from "react";
const Select = forwardRef(function Select(
  { label, options = [], className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className='w-full'>
      {label && <label htmlFor={id}>{label}</label>}
      <select
        {...props}
        ref={ref}
        id={id}
        className={`px-3 py-2 rounded-lg bg-lime-500 text-yellow-400 outline-none focus:bg-lime-400 duration-200 transition-all w-full ${className}`}
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
