function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  ...rest
}) {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-blue-500/30",

    secondary:
      "border border-slate-600 bg-slate-900 hover:border-blue-500 hover:bg-slate-800 text-white",
  };

  return (
    <a
      href={href}
        className={`inline-flex items-center justify-center rounded-xl px-6 py-2 min-w-[190px] text-base font-semibold transition-all duration-300 hover:-translate-y-1
        ${variants[variant]}
        ${className}
      `}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Button;