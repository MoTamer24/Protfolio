export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-60" />
      <div className="blob absolute -left-40 -top-40 size-[34rem] rounded-full bg-accent/25" />
      <div
        className="blob absolute -right-40 top-1/3 size-[30rem] rounded-full bg-accent-2/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="blob absolute bottom-0 left-1/3 size-[26rem] rounded-full bg-accent/15"
        style={{ animationDelay: "-12s" }}
      />
    </div>
  );
}
