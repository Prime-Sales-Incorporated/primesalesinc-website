import { useEffect, useState, useRef } from "react";

export default function StatsCounter({ visible }) {
  const stats = [
    { label: "ESTABLISHED", value: 1976 },
    { label: "PROJECTS COMPLETED", value: 400 },
    { label: "YEARS OF EXPERIENCE", value: 49 },
    { label: "NATIONS SERVED", value: 16 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false); // prevents re-triggering

  useEffect(() => {
    if (!visible || hasAnimated.current) return;

    hasAnimated.current = true;

    const duration = 3000;
    const start = performance.now();

    const animate = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);

      setCounts(stats.map((stat) => Math.floor(progress * stat.value)));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <div className="w-full py-8 dark:bg-background-dark bg-background-light flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-4xl font-bold dark:text-green-500 text-gray-400">
              {counts[i]}
            </span>
            <span className="mt-2 text-sm tracking-widest dark:text-white text-black">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
