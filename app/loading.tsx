export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617]">
      <div
        className="w-12 h-12 rounded-full border-2 border-[#3F8BF9]/30 border-t-[#3F8BF9] animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
