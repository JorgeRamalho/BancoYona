type SectionBackdropProps = {
  variant: "hero" | "app" | "world" | "identity" | "products" | "photo" | "invite";
};

export function SectionBackdrop({ variant }: SectionBackdropProps) {
  return (
    <div className={`section-backdrop section-backdrop--${variant}`} aria-hidden="true">
      <div className="backdrop-mesh" />
      <div className="backdrop-grain" />
      {variant === "hero" && (
        <>
          <span className="backdrop-orb backdrop-orb--teal" />
          <span className="backdrop-orb backdrop-orb--coral" />
          <span className="backdrop-orb backdrop-orb--yellow" />
          <svg className="backdrop-mark" viewBox="0 0 120 120" fill="none">
            <path
              d="M60 8 L98 92 H22 Z"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.12"
            />
          </svg>
        </>
      )}
      {variant === "app" && (
        <svg className="backdrop-grid" viewBox="0 0 400 400">
          <defs>
            <pattern id="yona-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#yona-grid)" />
        </svg>
      )}
      {variant === "world" && (
        <>
          <span className="backdrop-ring backdrop-ring--1" />
          <span className="backdrop-ring backdrop-ring--2" />
        </>
      )}
      {variant === "identity" && (
        <svg className="backdrop-arcs" viewBox="0 0 800 400">
          <path
            d="M-40 320 Q 200 40 400 200 T 840 80"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
          <path
            d="M-20 380 Q 240 120 420 260 T 860 140"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            opacity="0.12"
          />
        </svg>
      )}
      {variant === "products" && (
        <span className="backdrop-y-mark">Y</span>
      )}
      {variant === "photo" && (
        <>
          <span className="backdrop-stripe backdrop-stripe--1" />
          <span className="backdrop-stripe backdrop-stripe--2" />
        </>
      )}
      {variant === "invite" && (
        <span className="backdrop-glow-pulse" />
      )}
    </div>
  );
}
