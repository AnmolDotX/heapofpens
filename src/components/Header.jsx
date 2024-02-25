"use client"
import { HeaderWrap, LogoutBtn, SearchBar, ToggleDark, UserProfile } from "@/components";
import Link from "next/link";
import { FaPenFancy } from 'react-icons/fa'

const Header = () => {

    return (
        <HeaderWrap>
            <h1 className="text-3xl font-bold tracking-widest">H-O-P</h1>
            <div className="flex items-center gap-5">
                <Link href="/add-post" title="create a new post" className="flex items-center gap-2 bg-sky-600/70 transition-all duration-300 hover:bg-sky-600 active:bg-sky-500 shadow-2xl shadow-lime-500/50 py-[6px] px-3 rounded-full"><span>Write</span> <FaPenFancy /></Link>
                <SearchBar/>
                <UserProfile/>
                <ToggleDark/>
            </div>
            
        </HeaderWrap>
    );
}

export default Header;