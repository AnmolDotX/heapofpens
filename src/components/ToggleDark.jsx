'use client'

import { toggleDark } from "@/lib/features/toggleDarkSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleDark = () => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleDark())
    }

    const isDark = useSelector(state=>state.toggleDark.isDark);
    console.log(isDark);

    return (
        <button title="toggle dark/light" onClick={handleToggle}>
            {
                isDark ? <FaSun fill="white" /> : <FaMoon fill="black" />
            }
        </button>
    );
}

export default ToggleDark;