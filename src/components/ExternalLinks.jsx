import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ExternalLinks = () => {
  return (
    <aside className='dark:bg-lime-400 bg-gradient-to-t from-slate-950/80 to-lime-950/90 min-h-fit py-10 px-5 w-72 rounded-md backdrop-filter backdrop-blur-md shadow-black shadow-2xl flex flex-col gap-5'>
      <div className='flex items-center gap-5'>
        <FaGithub className='drop-shadow-xl text-2xl fill-lime-300 hover:fill-lime-200' />
        <span className='text-sky-400 hover:text-sky-500 transition-all tracking-[8px] font-bold hover:scale-105 cursor-pointer'>
          Github--&gt;
        </span>
      </div>
      <div className='flex items-center gap-5'>
        <FaDiscord className='drop-shadow-xl text-2xl fill-lime-300 hover:fill-lime-200' />
        <span className='text-sky-400 hover:text-sky-500 transition-all tracking-[8px] font-bold hover:scale-105 cursor-pointer'>
          Community--&gt;
        </span>
      </div>
      <div className='flex items-center gap-5'>
        <FaXTwitter className='drop-shadow-xl text-2xl fill-lime-300 hover:fill-lime-200' />
        <span className='text-sky-400 hover:text-sky-500 transition-all tracking-[8px] font-bold hover:scale-105 cursor-pointer'>
          twitter--&gt;
        </span>
      </div>
    </aside>
  );
};

export default ExternalLinks;
