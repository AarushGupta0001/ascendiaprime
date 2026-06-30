type HeroCenterLogoProps = {
  className?: string;
};

export default function HeroCenterLogo({ className = "" }: HeroCenterLogoProps) {
  return (
    <img
      src="/images/logos/logo-icon.png"
      alt=""
      className={`object-contain ${className}`.trim()}
      decoding="async"
    />
  );
}
