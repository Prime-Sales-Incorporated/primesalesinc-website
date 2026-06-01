import { useState, useEffect } from "react";

// ─── Light-mode SVG scenes ───────────────────────────────────────────────────

const WarehouseLightSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sky-blue warehouse interior */}
    <rect width="320" height="180" fill="#f0f9ff" />
    {/* Ceiling bar */}
    <rect x="0" y="0" width="320" height="12" fill="#bae6fd" />
    {/* Ceiling lights */}
    {[40, 110, 180, 260].map((x, i) => (
      <g key={i}>
        <rect x={x - 8} y="2" width="16" height="6" fill="#7dd3fc" rx="2" />
        <polygon
          points={`${x - 8},8 ${x + 8},8 ${x + 16},42 ${x - 16},42`}
          fill="rgba(125,211,252,0.12)"
        />
        <ellipse cx={x} cy="44" rx="20" ry="5" fill="rgba(125,211,252,0.22)" />
      </g>
    ))}
    {/* Racking bays */}
    {[8, 72, 136, 200, 264].map((x, i) => (
      <g key={i}>
        {/* Uprights */}
        <rect x={x} y="18" width="5" height="130" fill="#94a3b8" rx="1" />
        <rect x={x + 44} y="18" width="5" height="130" fill="#94a3b8" rx="1" />
        {/* Beams */}
        {[32, 60, 88, 116].map((y) => (
          <rect key={y} x={x} y={y} width="49" height="3" fill="#cbd5e1" />
        ))}
        {/* Box loads on shelves - colourful for light bg */}
        <rect
          x={x + 2}
          y="22"
          width="22"
          height="10"
          fill="#16a34a"
          rx="1"
          opacity="0.9"
        />
        <rect
          x={x + 26}
          y="22"
          width="21"
          height="10"
          fill="#15803d"
          rx="1"
          opacity="0.9"
        />
        <rect
          x={x + 2}
          y="50"
          width="45"
          height="10"
          fill="#166534"
          rx="1"
          opacity="0.85"
        />
        <rect
          x={x + 2}
          y="78"
          width="28"
          height="10"
          fill="#22c55e"
          rx="1"
          opacity="0.8"
        />
        <rect
          x={x + 2}
          y="106"
          width="38"
          height="10"
          fill="#4ade80"
          rx="1"
          opacity="0.75"
        />
        {/* Pallet slats */}
        <rect x={x + 2} y="32" width="45" height="3" fill="#a16207" rx="1" />
        <rect x={x + 2} y="60" width="45" height="3" fill="#92400e" rx="1" />
        <rect x={x + 2} y="88" width="45" height="3" fill="#a16207" rx="1" />
      </g>
    ))}
    {/* Floor */}
    <rect x="0" y="148" width="320" height="32" fill="#e0f2fe" />
    <rect x="0" y="148" width="320" height="3" fill="#7dd3fc" />
    {/* Floor grid lines */}
    {[0, 64, 128, 192, 256, 320].map((x, i) => (
      <line
        key={i}
        x1={x}
        y1="148"
        x2={x}
        y2="180"
        stroke="#bae6fd"
        strokeWidth="1"
      />
    ))}
    {/* Forklift - green, high contrast */}
    <g transform="translate(108, 88)">
      <rect x="0" y="25" width="48" height="30" fill="#15803d" rx="3" />
      <rect x="48" y="33" width="9" height="22" fill="#16a34a" rx="1" />
      {/* Mast */}
      <rect x="-3" y="8" width="6" height="45" fill="#166534" rx="1" />
      {/* Forks */}
      <rect x="-3" y="8" width="14" height="3" fill="#22c55e" rx="1" />
      <rect x="-3" y="20" width="14" height="3" fill="#22c55e" rx="1" />
      {/* Cab window */}
      <rect x="10" y="28" width="30" height="16" fill="#bbf7d0" rx="2" />
      {/* Wheels */}
      <circle cx="10" cy="55" r="8" fill="#334155" />
      <circle cx="38" cy="55" r="8" fill="#334155" />
      <circle cx="10" cy="55" r="4" fill="#64748b" />
      <circle cx="38" cy="55" r="4" fill="#64748b" />
    </g>
    {/* Green glow on floor */}
    <ellipse cx="132" cy="152" rx="60" ry="6" fill="rgba(34,197,94,0.15)" />
  </svg>
);

const ColdChainLightSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Pale ice-blue background */}
    <rect width="320" height="180" fill="#f0f9ff" />
    {/* Panel seams */}
    {[0, 80, 160, 240].map((x, i) => (
      <rect
        key={i}
        x={x}
        y="0"
        width="78"
        height="180"
        fill={i % 2 === 0 ? "#e0f2fe" : "#f0f9ff"}
        stroke="#bae6fd"
        strokeWidth="1"
      />
    ))}
    {/* Ceiling pipe */}
    <rect
      x="0"
      y="6"
      width="320"
      height="8"
      fill="#bae6fd"
      stroke="#7dd3fc"
      strokeWidth="0.5"
    />
    {/* Pipe drops + cooling heads */}
    {[40, 120, 200, 280].map((x, i) => (
      <g key={i}>
        <rect x={x - 2} y="14" width="4" height="22" fill="#7dd3fc" />
        <circle
          cx={x}
          cy="38"
          r="6"
          fill="#e0f2fe"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <circle cx={x} cy="38" r="3" fill="#38bdf8" />
      </g>
    ))}
    {/* Ice crystals */}
    {[
      [30, 25],
      [95, 55],
      [170, 18],
      [248, 38],
      [62, 105],
      [195, 85],
      [138, 135],
      [278, 115],
    ].map(([cx, cy], i) => (
      <g key={i} transform={`translate(${cx},${cy})`} opacity="0.55">
        <line
          x1="0"
          y1="-10"
          x2="0"
          y2="10"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <line
          x1="-10"
          y1="0"
          x2="10"
          y2="0"
          stroke="#38bdf8"
          strokeWidth="1.5"
        />
        <line x1="-7" y1="-7" x2="7" y2="7" stroke="#7dd3fc" strokeWidth="1" />
        <line x1="7" y1="-7" x2="-7" y2="7" stroke="#7dd3fc" strokeWidth="1" />
        <circle cx="0" cy="0" r="1.5" fill="#38bdf8" />
      </g>
    ))}
    {/* Cold storage units */}
    {[8, 110, 212].map((x, i) => (
      <g key={i}>
        <rect
          x={x}
          y="42"
          width="96"
          height="88"
          fill="#dbeafe"
          rx="4"
          stroke="#93c5fd"
          strokeWidth="1.5"
        />
        <rect x={x + 5} y="48" width="86" height="72" fill="#eff6ff" rx="2" />
        {/* Shelves */}
        {[60, 76, 92, 108].map((y, j) => (
          <rect key={j} x={x + 5} y={y} width="86" height="2" fill="#bfdbfe" />
        ))}
        {/* Products */}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={x + 8 + col * 20}
              y={50 + row * 16}
              width="16"
              height="10"
              fill={["#16a34a", "#0369a1", "#1d4ed8"][col % 3]}
              rx="1"
              opacity="0.8"
            />
          )),
        )}
        {/* Door handle */}
        <circle cx={x + 92} cy={86} r="3.5" fill="#38bdf8" />
        {/* Temp display */}
        <rect
          x={x + 22}
          y={124}
          width="52"
          height="18"
          fill="#dbeafe"
          rx="3"
          stroke="#38bdf8"
          strokeWidth="1"
        />
        <text
          x={x + 48}
          y={136}
          fill="#0369a1"
          fontSize="9"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          -18°C
        </text>
      </g>
    ))}
    {/* Floor */}
    <rect x="0" y="155" width="320" height="25" fill="#e0f2fe" />
    <rect x="0" y="155" width="320" height="2" fill="#7dd3fc" />
    {/* Floor mist */}
    <ellipse cx="160" cy="157" rx="140" ry="8" fill="rgba(186,230,253,0.35)" />
  </svg>
);

const AutomationLightSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Warm light factory background */}
    <rect width="320" height="180" fill="#fefce8" />
    {/* Ceiling track */}
    <rect
      x="0"
      y="8"
      width="320"
      height="8"
      fill="#fef08a"
      stroke="#fde047"
      strokeWidth="0.5"
    />
    {/* Track hangers + sensors */}
    {[50, 130, 210, 290].map((x, i) => (
      <g key={i}>
        <rect x={x - 1} y="16" width="2" height="22" fill="#ca8a04" />
        <rect
          x={x - 10}
          y="36"
          width="20"
          height="9"
          fill="#fef9c3"
          rx="2"
          stroke="#fde047"
          strokeWidth="1"
        />
        <circle cx={x} cy="40" r="2.5" fill="#facc15" />
      </g>
    ))}
    {/* Wall panels */}
    <rect x="0" y="0" width="4" height="180" fill="#fef08a" />
    <rect x="316" y="0" width="4" height="180" fill="#fef08a" />
    {/* Conveyor belt structure */}
    <rect
      x="0"
      y="106"
      width="320"
      height="20"
      fill="#e7e5e4"
      rx="2"
      stroke="#d6d3d1"
      strokeWidth="1"
    />
    {/* Belt segments */}
    {Array.from({ length: 20 }, (_, i) => i * 16).map((x, i) => (
      <rect key={i} x={x} y="106" width="2" height="20" fill="#d6d3d1" />
    ))}
    {/* Rollers */}
    {[0, 40, 80, 120, 160, 200, 240, 280, 318].map((x, i) => (
      <ellipse
        key={i}
        cx={x}
        cy="116"
        rx="4"
        ry="10"
        fill="#a8a29e"
        stroke="#78716c"
        strokeWidth="1"
      />
    ))}
    {/* Belt highlight */}
    <rect x="0" y="106" width="320" height="4" fill="rgba(255,255,255,0.4)" />
    {/* Boxes on belt */}
    {[
      { x: 18, w: 42, h: 34, fill: "#16a34a", label: "PSI", dark: "#14532d" },
      { x: 118, w: 46, h: 38, fill: "#0369a1", label: "COLD", dark: "#1e3a5f" },
      { x: 220, w: 38, h: 30, fill: "#b45309", label: "DRY", dark: "#78350f" },
    ].map((b, i) => (
      <g key={i}>
        <rect
          x={b.x}
          y={106 - b.h}
          width={b.w}
          height={b.h}
          fill={b.fill}
          rx="2"
        />
        {/* Top face highlight */}
        <rect
          x={b.x}
          y={106 - b.h}
          width={b.w}
          height="5"
          fill="rgba(255,255,255,0.25)"
          rx="2"
        />
        {/* Cross tape lines */}
        <line
          x1={b.x + b.w / 2}
          y1={106 - b.h}
          x2={b.x + b.w / 2}
          y2={106}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        <line
          x1={b.x}
          y1={106 - b.h / 2}
          x2={b.x + b.w}
          y2={106 - b.h / 2}
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />
        {/* Label */}
        <text
          x={b.x + b.w / 2}
          y={106 - b.h / 2 + 4}
          fill="rgba(255,255,255,0.9)"
          fontSize="7.5"
          textAnchor="middle"
          fontFamily="monospace"
          fontWeight="bold"
        >
          {b.label}
        </text>
      </g>
    ))}
    {/* Robotic arm */}
    <g transform="translate(255,30)">
      {/* Base */}
      <rect x="-10" y="50" width="20" height="8" fill="#78716c" rx="2" />
      {/* Vertical arm */}
      <rect x="-4" y="6" width="8" height="48" fill="#a8a29e" rx="2" />
      {/* Horizontal arm */}
      <rect x="4" y="12" width="34" height="6" fill="#a8a29e" rx="2" />
      {/* Vertical forearm */}
      <rect x="34" y="6" width="6" height="34" fill="#a8a29e" rx="2" />
      {/* Gripper bar */}
      <rect x="28" y="38" width="18" height="4" fill="#78716c" rx="1" />
      {/* Fingers */}
      <rect x="28" y="42" width="4" height="12" fill="#facc15" rx="1" />
      <rect x="42" y="42" width="4" height="12" fill="#facc15" rx="1" />
      {/* Status light */}
      <circle cx="0" cy="4" r="4" fill="#facc15" />
      <circle cx="0" cy="4" r="2" fill="#fef08a" />
      {/* Joint dots */}
      <circle
        cx="0"
        cy="12"
        r="4"
        fill="#d6d3d1"
        stroke="#a8a29e"
        strokeWidth="1"
      />
      <circle
        cx="36"
        cy="12"
        r="4"
        fill="#d6d3d1"
        stroke="#a8a29e"
        strokeWidth="1"
      />
    </g>
    {/* Floor */}
    <rect x="0" y="126" width="320" height="54" fill="#fafaf9" />
    <rect x="0" y="126" width="320" height="2" fill="#e7e5e4" />
    {/* Floor grid */}
    {[0, 80, 160, 240, 320].map((x, i) => (
      <line
        key={i}
        x1={x}
        y1="126"
        x2={x}
        y2="180"
        stroke="#f5f5f4"
        strokeWidth="1"
      />
    ))}
    {/* Yellow glow on belt */}
    <ellipse cx="160" cy="116" rx="120" ry="7" fill="rgba(250,204,21,0.18)" />
  </svg>
);

// ─── Dark-mode SVG scenes (original) ────────────────────────────────────────

const WarehouseDarkSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="320" height="180" fill="#0f172a" />
    {[40, 120, 200, 280].map((x, i) => (
      <g key={i}>
        <rect x={x - 6} y="0" width="12" height="6" fill="#94a3b8" rx="1" />
        <polygon
          points={`${x - 6},6 ${x + 6},6 ${x + 14},40 ${x - 14},40`}
          fill="rgba(250,250,150,0.07)"
        />
        <ellipse cx={x} cy="42" rx="18" ry="5" fill="rgba(255,255,180,0.18)" />
      </g>
    ))}
    {[20, 80, 140, 200, 260].map((x, i) => (
      <g key={i}>
        <rect x={x} y="20" width="4" height="130" fill="#334155" />
        <rect x={x + 36} y="20" width="4" height="130" fill="#334155" />
        <rect x={x} y="38" width="40" height="3" fill="#475569" />
        <rect x={x} y="68" width="40" height="3" fill="#475569" />
        <rect x={x} y="98" width="40" height="3" fill="#475569" />
        <rect x={x} y="128" width="40" height="3" fill="#475569" />
        <rect x={x + 2} y="33" width="36" height="5" fill="#854d0e" rx="1" />
        <rect x={x + 2} y="63" width="36" height="5" fill="#713f12" rx="1" />
        <rect x={x + 2} y="93" width="20" height="5" fill="#854d0e" rx="1" />
      </g>
    ))}
    <rect x="0" y="150" width="320" height="2" fill="#1e293b" />
    <rect x="0" y="152" width="320" height="28" fill="#0f172a" />
    <g transform="translate(130,90)">
      <rect x="0" y="30" width="50" height="28" fill="#166534" rx="3" />
      <rect x="50" y="38" width="8" height="20" fill="#15803d" />
      <rect x="3" y="20" width="6" height="38" fill="#166534" />
      <rect x="0" y="20" width="12" height="3" fill="#22c55e" />
      <rect x="0" y="30" width="12" height="3" fill="#22c55e" />
      <circle
        cx="10"
        cy="58"
        r="7"
        fill="#1e293b"
        stroke="#475569"
        strokeWidth="2"
      />
      <circle
        cx="40"
        cy="58"
        r="7"
        fill="#1e293b"
        stroke="#475569"
        strokeWidth="2"
      />
      <circle cx="10" cy="58" r="3" fill="#334155" />
      <circle cx="40" cy="58" r="3" fill="#334155" />
      <rect x="14" y="24" width="36" height="8" fill="#0f4c20" rx="2" />
    </g>
    <ellipse cx="160" cy="155" rx="80" ry="8" fill="rgba(34,197,94,0.08)" />
  </svg>
);

const ColdChainDarkSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="320" height="180" fill="#0c1a2e" />
    {[0, 80, 160, 240].map((x, i) => (
      <g key={i}>
        <rect
          x={x}
          y="0"
          width="78"
          height="180"
          fill={i % 2 === 0 ? "#0e2233" : "#0a1c2e"}
          stroke="#1e3a5f"
          strokeWidth="0.5"
        />
      </g>
    ))}
    {[
      [30, 20],
      [90, 50],
      [170, 15],
      [250, 35],
      [60, 100],
      [200, 80],
      [140, 130],
      [280, 110],
    ].map(([cx, cy], i) => (
      <g key={i} transform={`translate(${cx},${cy})`} opacity="0.5">
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#7dd3fc" strokeWidth="1" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#7dd3fc" strokeWidth="1" />
        <line
          x1="-7"
          y1="-7"
          x2="7"
          y2="7"
          stroke="#7dd3fc"
          strokeWidth="0.8"
        />
        <line
          x1="7"
          y1="-7"
          x2="-7"
          y2="7"
          stroke="#7dd3fc"
          strokeWidth="0.8"
        />
      </g>
    ))}
    {[10, 110, 210].map((x, i) => (
      <g key={i}>
        <rect
          x={x}
          y="40"
          width="90"
          height="80"
          fill="#0f2a3f"
          rx="3"
          stroke="#1e4976"
          strokeWidth="1.5"
        />
        <rect x={x + 5} y="45" width="80" height="65" fill="#0a1f30" rx="2" />
        {[55, 70, 85, 100].map((y, j) => (
          <rect key={j} x={x + 5} y={y} width="80" height="2" fill="#1e3a5f" />
        ))}
        {[0, 1, 2].map((row) =>
          [0, 1, 2, 3].map((col) => (
            <rect
              key={`${row}-${col}`}
              x={x + 8 + col * 18}
              y={55 + row * 15}
              width="14"
              height="10"
              fill={["#164e63", "#0e4429", "#1e3a5f"][col % 3]}
              rx="1"
              opacity="0.9"
            />
          )),
        )}
        <circle cx={x + 88} cy={80} r="3" fill="#38bdf8" opacity="0.7" />
        <rect
          x={x + 25}
          y={118}
          width="40"
          height="16"
          fill="#0f2a3f"
          rx="2"
          stroke="#38bdf8"
          strokeWidth="0.8"
        />
        <text
          x={x + 45}
          y={130}
          fill="#38bdf8"
          fontSize="8"
          textAnchor="middle"
          fontFamily="monospace"
        >
          -18°C
        </text>
      </g>
    ))}
    <ellipse cx="160" cy="160" rx="140" ry="20" fill="rgba(186,230,253,0.05)" />
    <rect
      x="0"
      y="8"
      width="320"
      height="6"
      fill="#0e2233"
      stroke="#1e3a5f"
      strokeWidth="0.5"
    />
    {[40, 120, 200, 280].map((x, i) => (
      <g key={i}>
        <rect x={x - 2} y="8" width="4" height="25" fill="#1e3a5f" />
        <circle
          cx={x}
          cy="35"
          r="5"
          fill="#0c2d48"
          stroke="#38bdf8"
          strokeWidth="0.8"
        />
      </g>
    ))}
  </svg>
);

const AutomationDarkSVG = (
  <svg
    viewBox="0 0 320 180"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="320" height="180" fill="#111" />
    <rect
      x="0"
      y="100"
      width="320"
      height="18"
      fill="#1c1917"
      rx="2"
      stroke="#292524"
      strokeWidth="1"
    />
    {[
      0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
    ].map((x, i) => (
      <rect key={i} x={x} y="100" width="2" height="18" fill="#292524" />
    ))}
    {[0, 40, 80, 120, 160, 200, 240, 280, 318].map((x, i) => (
      <ellipse
        key={i}
        cx={x}
        cy="109"
        rx="4"
        ry="9"
        fill="#27272a"
        stroke="#3f3f46"
        strokeWidth="1"
      />
    ))}
    {[
      { x: 20, w: 38, h: 30, c: "#78350f", label: "PSI" },
      { x: 110, w: 44, h: 35, c: "#14532d", label: "COLD" },
      { x: 210, w: 36, h: 28, c: "#1e3a8a", label: "DRY" },
    ].map((b, i) => (
      <g key={i}>
        <rect
          x={b.x}
          y={100 - b.h}
          width={b.w}
          height={b.h}
          fill={b.c}
          rx="2"
        />
        <rect
          x={b.x}
          y={100 - b.h}
          width={b.w}
          height="4"
          fill="rgba(255,255,255,0.1)"
          rx="2"
        />
        <line
          x1={b.x + b.w / 2}
          y1={100 - b.h}
          x2={b.x + b.w / 2}
          y2={100}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <line
          x1={b.x}
          y1={100 - b.h / 2}
          x2={b.x + b.w}
          y2={100 - b.h / 2}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <text
          x={b.x + b.w / 2}
          y={100 - b.h / 2 + 4}
          fill="rgba(255,255,255,0.5)"
          fontSize="7"
          textAnchor="middle"
          fontFamily="monospace"
        >
          {b.label}
        </text>
      </g>
    ))}
    <g transform="translate(260,40)">
      <rect x="-4" y="0" width="8" height="50" fill="#3f3f46" rx="2" />
      <rect x="-20" y="45" width="40" height="6" fill="#52525b" rx="2" />
      <rect x="4" y="15" width="30" height="5" fill="#3f3f46" rx="2" />
      <rect x="30" y="10" width="6" height="30" fill="#3f3f46" rx="2" />
      <rect x="26" y="36" width="14" height="4" fill="#52525b" rx="1" />
      <rect x="26" y="40" width="4" height="10" fill="#facc15" rx="1" />
      <rect x="36" y="40" width="4" height="10" fill="#facc15" rx="1" />
      <circle cx="0" cy="5" r="3" fill="#facc15" opacity="0.9" />
    </g>
    <rect
      x="0"
      y="10"
      width="320"
      height="6"
      fill="#1c1917"
      stroke="#292524"
      strokeWidth="0.5"
    />
    {[50, 130, 210, 290].map((x, i) => (
      <g key={i}>
        <rect x={x - 1} y="16" width="2" height="20" fill="#3f3f46" />
        <rect
          x={x - 8}
          y="34"
          width="16"
          height="8"
          fill="#27272a"
          rx="2"
          stroke="#facc15"
          strokeWidth="0.5"
        />
        <circle cx={x} cy="38" r="2" fill="#facc15" opacity="0.8" />
      </g>
    ))}
    <rect x="0" y="118" width="320" height="62" fill="#0a0a0a" />
    <ellipse cx="160" cy="109" rx="100" ry="6" fill="rgba(250,204,21,0.06)" />
  </svg>
);

// ─── Slide definitions ───────────────────────────────────────────────────────

const slides = [
  {
    id: 0,
    label: "Slide 1 — Warehouse & Racking",
    gradient: "from-slate-900 via-slate-800 to-green-950",
    gradientLight: "from-sky-50 via-green-50 to-emerald-100",
    accentColor: "#22c55e",
    accentColorLight: "#15803d",
    darkIcon: WarehouseDarkSVG,
    lightIcon: WarehouseLightSVG,
    heading: "Intelligent Warehouse Storage",
    sub: "Advanced racking systems engineered for maximum space efficiency and throughput.",
  },
  {
    id: 1,
    label: "Slide 2 — Cold Chain",
    gradient: "from-sky-950 via-cyan-950 to-slate-900",
    gradientLight: "from-sky-50 via-blue-50 to-cyan-100",
    accentColor: "#38bdf8",
    accentColorLight: "#0369a1",
    darkIcon: ColdChainDarkSVG,
    lightIcon: ColdChainLightSVG,
    heading: "Cold Chain Solutions",
    sub: "Precision temperature-controlled environments for perishables and pharmaceuticals.",
  },
  {
    id: 2,
    label: "Slide 3 — Automation & Conveyor",
    gradient: "from-zinc-900 via-neutral-900 to-yellow-950",
    gradientLight: "from-yellow-50 via-amber-50 to-stone-100",
    accentColor: "#facc15",
    accentColorLight: "#b45309",
    darkIcon: AutomationDarkSVG,
    lightIcon: AutomationLightSVG,
    heading: "Automation & Conveyor Systems",
    sub: "Smart material handling technology that accelerates your supply chain performance.",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HeroCarousel({ dark }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (n) => {
    if (animating || n === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(n);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % slides.length);
  const prev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [current]);

  const slide = slides[current];
  const accent = dark ? slide.accentColor : slide.accentColorLight;

  return (
    <div className="relative w-full min-h-[50vh] md:min-h-[70vh] overflow-hidden ">
      {/* ── Slide backgrounds ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 bg-gradient-to-br ${dark ? s.gradient : s.gradientLight} transition-opacity duration-700 ease-in-out`}
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="w-full h-full"
            style={{
              transform:
                i === current && !animating ? "scale(1)" : "scale(1.05)",
              transition: "transform 700ms ease-in-out",
            }}
          >
            {dark ? s.darkIcon : s.lightIcon}
          </div>
        </div>
      ))}

      {/* ── Dark mode overlays only ── */}
      {dark && (
        <>
          <div className="absolute inset-0 bg-black/60 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-[2]" />
        </>
      )}

      {/* ── Light mode subtle overlay ── */}
      {!dark && (
        <>
          {" "}
          <div className="absolute inset-0 bg-[#f6f7f8]/50 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f6f7f8]/85 via-[#f6f7f8]/20 to-transparent z-[2]" />
        </>
      )}

      {/* ── Centered hero text ── */}
      <div className="absolute inset-0 z-10 mt-16  md:mt-4 flex items-center justify-center text-center px-4 pb-10">
        <div className="max-w-4xl">
          <div
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3 transition-all duration-500"
            style={{
              color: accent,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(-8px)" : "translateY(0)",
            }}
          >
            Prime Sales Inc. — Since 1976
          </div>
          <h1
            className={`text-xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-500 ${
              dark ? "text-white" : "text-gray-900"
            }`}
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
            }}
          >
            {slide.heading}
          </h1>
          <p
            className={`text-xs md:text-base font-light leading-relaxed max-w-3xl mx-auto transition-all duration-500 ${
              dark ? "text-gray-300" : "text-gray-700"
            }`}
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transitionDelay: "60ms",
            }}
          >
            Prime Sales Inc. (PSI), founded in 1976, is a Philippine company
            providing intralogistics solutions for both the dry and cold chain
            industries. Partnering with global manufacturers, PSI offers
            services such as warehouse design, storage systems, and after-sales
            support. With over 50 years of industry experience, PSI has built a
            strong reputation and collaborates with proven global partners to
            deliver efficient intralogistics and supply chain solutions in the
            Philippines.
          </p>

          {/* ── Inquire Now button ── */}
          <div
            className="mt-6 transition-all duration-500"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transitionDelay: "120ms",
            }}
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 md:px-7 md:py-3 px-4 py-2 rounded-full  text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: accent,
                color: dark ? "#000" : "#fff",
                boxShadow: `0 0 24px ${accent}55`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 36px ${accent}88`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 24px ${accent}55`;
              }}
            >
              Inquire Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "28px" : "9px",
              height: "9px",
              background:
                i === current
                  ? accent
                  : dark
                    ? "rgba(255,255,255,0.35)"
                    : "rgba(0,0,0,0.25)",
            }}
          />
        ))}
      </div>

      {/* ── Slide counter top-right ── */}
      <div
        className={`absolute top-4 right-5 z-20 text-xs font-mono tracking-widest ${
          dark ? "text-white/40" : "text-gray-500"
        }`}
      >
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}
