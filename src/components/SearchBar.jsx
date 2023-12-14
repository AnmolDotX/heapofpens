"use client";
import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.element);
  };
  return (
    <form onSubmit={(e) => submitHandler(e)} id='search' className='flex items-center'>
      <input type='text' name='search' placeholder='search...' className="py-[9px] text-lime-400 transition-all duration-300 text-sm rounded-s-full px-5 bg-black shadow-2xl shadow-lime-500/30" />
      <button type='submit' className="px-4 bg-lime-500/50 hover:bg-lime-500 transition-all duration-300 active:bg-lime-400 text-sm py-[13px] rounded-e-full"><FaSearch /></button>
    </form>
  );
};

export default SearchBar;
