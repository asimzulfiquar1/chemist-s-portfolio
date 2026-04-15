const BenzeneRing = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <polygon points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5" />
    <circle cx="50" cy="50" r="25" />
  </svg>
);

const benzenePositions = [
  { top: '5%', left: '3%', size: 80, opacity: 0.12, rotate: 15, delay: 0 },
  { top: '12%', right: '5%', size: 120, opacity: 0.1, rotate: 45, delay: 2 },
  { top: '25%', left: '8%', size: 60, opacity: 0.14, rotate: -20, delay: 1 },
  { top: '35%', right: '12%', size: 90, opacity: 0.1, rotate: 30, delay: 3 },
  { top: '45%', left: '2%', size: 100, opacity: 0.12, rotate: -10, delay: 0.5 },
  { top: '55%', right: '3%', size: 70, opacity: 0.14, rotate: 60, delay: 1.5 },
  { top: '65%', left: '10%', size: 110, opacity: 0.1, rotate: 25, delay: 2.5 },
  { top: '72%', right: '8%', size: 55, opacity: 0.12, rotate: -35, delay: 0.8 },
  { top: '80%', left: '5%', size: 85, opacity: 0.1, rotate: 50, delay: 3.5 },
  { top: '88%', right: '6%', size: 95, opacity: 0.12, rotate: -15, delay: 1.2 },
  { top: '18%', left: '45%', size: 50, opacity: 0.08, rotate: 40, delay: 2.2 },
  { top: '40%', left: '50%', size: 65, opacity: 0.1, rotate: -45, delay: 0.3 },
  { top: '60%', left: '40%', size: 75, opacity: 0.08, rotate: 20, delay: 1.8 },
  { top: '92%', left: '35%', size: 60, opacity: 0.1, rotate: 10, delay: 2.8 },
  { top: '3%', left: '60%', size: 45, opacity: 0.11, rotate: -30, delay: 3.2 },
  { top: '50%', left: '85%', size: 70, opacity: 0.1, rotate: 55, delay: 0.7 },
];

const BenzeneBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden text-primary">
    {benzenePositions.map((pos, i) => (
      <div
        key={i}
        className="absolute animate-float"
        style={{
          top: pos.top,
          left: pos.left,
          right: pos.right,
          width: pos.size,
          height: pos.size,
          opacity: pos.opacity,
          transform: `rotate(${pos.rotate}deg)`,
          animationDelay: `${pos.delay}s`,
          animationDuration: `${8 + (i % 4) * 2}s`,
        }}
      >
        <BenzeneRing className="w-full h-full" />
      </div>
    ))}
  </div>
);

export default BenzeneBackground;
