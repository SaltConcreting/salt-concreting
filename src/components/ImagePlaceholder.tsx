type ImagePlaceholderProps = {
  seed: string;
  label?: string;
  className?: string;
  aspectRatio?: string;
};

const gradients = [
  "linear-gradient(165deg, #2a2826 0%, #1a1918 35%, #0f0e0d 100%)",
  "linear-gradient(145deg, #252320 0%, #181614 50%, #0a0a0a 100%)",
  "linear-gradient(175deg, #2c2a28 0%, #1c1a18 45%, #111010 100%)",
  "linear-gradient(135deg, #232120 0%, #161514 60%, #0c0b0a 100%)",
  "linear-gradient(155deg, #282624 0%, #1a1816 40%, #0e0d0c 100%)",
  "linear-gradient(160deg, #2e2c2a 0%, #201e1c 55%, #121110 100%)",
];

function hashSeed(seed: string) {
  return seed.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export default function ImagePlaceholder({
  seed,
  label,
  className = "",
  aspectRatio,
}: ImagePlaceholderProps) {
  const gradient = gradients[hashSeed(seed) % gradients.length];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/60 via-transparent to-charcoal-dark/20" />
      {label && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="label-luxury text-[10px] text-concrete/50">{label}</span>
        </div>
      )}
    </div>
  );
}
