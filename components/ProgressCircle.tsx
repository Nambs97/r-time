// /components/ProgressCircle.tsx
'use client';

export const ProgressCircle = ({ progress }: { progress: number }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg className="w-32 h-32" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#e2e8f0"
        strokeWidth="8"
        fill="transparent"
      />
      <circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#3b82f6"
        strokeWidth="8"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
        className="transition-all duration-1000"
      />
    </svg>
  );
};