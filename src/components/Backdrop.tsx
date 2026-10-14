export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft ambient gradient from top */}
      <div className="absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,248,0.06),transparent_70%)]" />
      {/* Delicate grid backdrop */}
      <div className="absolute inset-0 grid-backdrop opacity-40 dark:opacity-20" />
    </div>
  );
}
