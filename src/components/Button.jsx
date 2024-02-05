const Button = ({
    children,
    type="button",
    className="",
    ...props
}) => {
    return (
        <button className={`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all active:bg-blue-500 text-white tracking-widest font-bold ${className}`} {...props}>
            {children}
        </button>
    );
}

export default Button;