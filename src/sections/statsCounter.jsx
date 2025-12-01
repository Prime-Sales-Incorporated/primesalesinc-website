import { useEffect, useState } from "react";

export default function StatsCounter() {
  const stats = [
    { label: "ESTABLISHED", value: 1976 },
    { label: "PROJECTS COMPLETED", value: 400 },
    { label: "YEARS OF EXPERIENCE", value: 49 },
    { label: "NATIONS SERVED", value: 16 },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 3000; // 2 seconds
    const startTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const progress = Math.min(now / duration - startTime / duration, 1);

      setCounts(stats.map((stat) => Math.floor(progress * stat.value)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="w-full py-20 dark:bg-background-dark bg-background-light flex justify-center">
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
