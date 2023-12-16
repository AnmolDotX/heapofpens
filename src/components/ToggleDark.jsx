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
        <button name="toggle dark/light" onClick={handleToggle}>
            {
                isDark ? <FaSun /> : <FaMoon />
            }
        </button>
    );
}

export default ToggleDark;