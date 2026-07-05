import Link from "next/link";

export default function QuoteButton({
  className = "",
  size = "default",
  variant = "primary",
}: {
  className?: string;
  size?: "default" | "large" | "compact";
  variant?: "primary" | "outline";
}) {
  const sizeClasses = {
    compact: "px-8 py-3.5 text-[10px]",
    default: "px-10 py-4 text-[11px]",
    large: "px-12 py-[1.125rem] text-[11px]",
  }[size];

  const variantClasses =
    variant === "outline"
      ? "border border-gold/40 bg-transparent text-warm-white hover:border-gold hover:bg-gold/5"
      : "border border-gold bg-gold text-black hover:border-gold-light hover:bg-gold-light";

  return (
    <Link
      href="/enquire"
      className={`inline-flex items-center justify-center rounded-none font-body font-normal uppercase tracking-[0.25em] transition-all duration-500 hover:shadow-[0_8px_32px_rgba(196,163,90,0.15)] ${sizeClasses} ${variantClasses} ${className}`}
    >
      Enquire
    </Link>
  );
}
