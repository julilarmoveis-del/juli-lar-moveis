// Ilustração original em SVG usada como imagem de produto enquanto
// fotos reais não são adicionadas. Substitua por fotos do produto
// (via next/image) quando estiverem disponíveis.
export function ProductIllustration({
  accent,
  className,
}: {
  accent: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Ilustração do produto"
    >
      <rect width="200" height="200" rx="24" fill="#FFFFFF" />
      <rect x="16" y="16" width="168" height="168" rx="18" fill="#FBF6EF" />
      <g opacity="0.9">
        <rect x="46" y="60" width="108" height="88" rx="10" fill={accent} opacity="0.15" />
        <rect x="58" y="76" width="84" height="14" rx="7" fill={accent} />
        <rect x="58" y="100" width="84" height="14" rx="7" fill={accent} opacity="0.7" />
        <rect x="58" y="124" width="56" height="14" rx="7" fill={accent} opacity="0.45" />
      </g>
      <circle cx="150" cy="52" r="10" fill={accent} opacity="0.35" />
    </svg>
  );
}
