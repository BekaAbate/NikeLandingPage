const Button = ({ label, iconURL, bgColor, textColor, fullWidth }) => {
    return (
        <button
            className={`flex gap-2 font-montserrat text-lg leading-none 
                ${bgColor ? bgColor : "bg-coral-red"}
                ${textColor ? textColor : "text-white"} 
                ${fullWidth && fullWidth}
                rounded-full items-center justify-center px-7 py-4 border border-coral-red`}
        >
            {label}
            {iconURL && (
                <img
                    src={iconURL}
                    alt="arrow right"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
