export function MeridianMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <circle cx="200" cy="200" r="178" stroke="currentColor" strokeOpacity="0.4" />
      <ellipse cx="200" cy="200" rx="68" ry="178" stroke="currentColor" strokeOpacity="0.3" />
      <ellipse cx="200" cy="200" rx="136" ry="178" stroke="currentColor" strokeOpacity="0.3" />
      <ellipse cx="200" cy="200" rx="178" ry="68" stroke="currentColor" strokeOpacity="0.22" />
      <line x1="200" y1="22" x2="200" y2="378" stroke="currentColor" strokeOpacity="0.35" />
      <line x1="22" y1="200" x2="378" y2="200" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="200" cy="22" r="3.5" fill="#c9a24b" />
      <circle cx="335" cy="128" r="3.5" fill="#c9a24b" />
      <circle cx="322" cy="312" r="3.5" fill="#c9a24b" />
    </svg>
  );
}
