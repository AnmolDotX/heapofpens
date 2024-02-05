'use client'
import { useEffect, useState } from "react";

const HeaderWrap = ({children}) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(()=>{
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < 20) {
                setVisible(true);
            } else {
                setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
            }
            setPrevScrollPos(currentScrollPos);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[prevScrollPos]);

    return (
        <header className={`flex z-10 justify-between items-center py-3 border-2 border-lime-400 text-white dark:text-black bg-gradient-to-br from-black/80 to-slate-950/80 dark:from-lime-600/80 dark:to-lime-400/80 px-20 backdrop-filter backdrop-blur-lg mx-auto w-[90%] rounded-lg shadow-2xl dark:shadow-lime-900 shadow-black fixed transition-all ${visible ? `mt-4` : `-mt-40`}`}>
            {children}
        </header>
    );
}

export default HeaderWrap;