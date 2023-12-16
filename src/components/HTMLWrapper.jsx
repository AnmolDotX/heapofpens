'use client'
import { useSelector } from "react-redux";

const HTMLWrapper = ({children}) => {
    const isDark = useSelector(state => state.toggleDark.isDark);
    return (
        <html className={isDark ? "dark" : ""}>
            {children}
        </html>
    );
}

export default HTMLWrapper;