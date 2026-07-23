function Button({children, href="#", className="", variant="primary",}){

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-500 text-white",

        secondary: "border border-slate-700 hover:border-blue-500 text-white bg-transparent",
    };


    return(
        <a 
            href={href}
            className={`inline-flex items-center justify-center rounded-xl px-6 py-4 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
        >
            {children}
        </a>
    );
}

export default Button;