export default function Logo({ className = "w-8 h-8", textClassName = "text-xl" }: { className?: string, textClassName?: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* The Icon: A stylized wave/T shape */}
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect width="40" height="40" rx="12" className="fill-blue-600" />
        <path
          d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20V28H20C15.5817 28 12 24.4183 12 20Z"
          fill="white"
        />
        <circle cx="28" cy="12" r="4" className="fill-blue-400" />
      </svg>
      {/* The Text */}
      <span className={`font-bold tracking-tight text-gray-900 ${textClassName}`}>
        Tidal<span className="text-blue-600">.</span>
      </span>
    </div>
  );
}