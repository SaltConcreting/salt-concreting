type LogoProps = {
  size?: "default" | "large";
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({
  size = "default",
  className = "",
  variant = "light",
}: LogoProps) {
  const isLarge = size === "large";
  const primary = variant === "light" ? "text-warm-white" : "text-black";
  const secondary = variant === "light" ? "text-muted" : "text-muted-dark";

  return (
    <span className={`group inline-flex flex-col gap-1.5 ${className}`}>
      <span
        className={`font-display font-light tracking-[0.28em] transition-colors duration-500 group-hover:text-gold-light ${primary} ${
          isLarge ? "text-[1.75rem] sm:text-[2rem]" : "text-[1.375rem] sm:text-[1.5rem]"
        }`}
      >
        SALT
      </span>
      <span
        className={`font-body font-light transition-colors duration-500 ${secondary} ${
          isLarge
            ? "text-[10px] tracking-[0.08em]"
            : "text-[9px] tracking-[0.07em] sm:text-[10px]"
        }`}
      >
        Concreting &amp; Carpentry
      </span>
    </span>
  );
}
