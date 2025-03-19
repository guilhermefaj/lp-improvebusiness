import { useEffect, useRef } from "react";

interface AnimatedBeamProps {
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  containerRef: React.RefObject<HTMLElement>;
  curvature?: number;
  endYOffset?: number;
  reverse?: boolean;
  dotted?: boolean;
  gradientStartColor?: string;
  gradientStopColor?: string;
}

export const AnimatedBeam = ({
  fromRef,
  toRef,
  containerRef,
  curvature = 0,
  endYOffset = 0,
  reverse = false,
  dotted = false,
  gradientStartColor = "#4f46e5",
  gradientStopColor = "#9333ea",
}: AnimatedBeamProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const gradientId = useRef(`gradient-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (!fromRef.current || !toRef.current || !containerRef.current) return;

    const updatePath = () => {
      const containerRect = containerRef.current!.getBoundingClientRect();
      const fromRect = fromRef.current!.getBoundingClientRect();
      const toRect = toRef.current!.getBoundingClientRect();

      const fromPoint = {
        x: fromRect.left - containerRect.left + fromRect.width / 2,
        y: fromRect.top - containerRect.top + fromRect.height / 2,
      };

      const toPoint = {
        x: toRect.left - containerRect.left + toRect.width / 2,
        y: toRect.top - containerRect.top + toRect.height / 2 + (endYOffset || 0),
      };

      const controlPoint = {
        x: (fromPoint.x + toPoint.x) / 2,
        y: (fromPoint.y + toPoint.y) / 2 + (curvature || 0),
      };

      const path = `M ${fromPoint.x} ${fromPoint.y} Q ${controlPoint.x} ${controlPoint.y} ${toPoint.x} ${toPoint.y}`;

      if (pathRef.current) {
        pathRef.current.setAttribute("d", path);
      }
    };

    updatePath();
    window.addEventListener("resize", updatePath);

    return () => {
      window.removeEventListener("resize", updatePath);
    };
  }, [fromRef, toRef, containerRef, curvature, endYOffset]);

  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none">
      <defs>
        <linearGradient id={gradientId.current} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor} />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        stroke={`url(#${gradientId.current})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray={dotted ? "3 3" : "none"}
        style={{
          animation: reverse ? "moveReverse 1s linear infinite" : "move 1s linear infinite",
        }}
      />
      <style>
        {`
          @keyframes move {
            from {
              stroke-dashoffset: 6;
            }
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes moveReverse {
            from {
              stroke-dashoffset: 0;
            }
            to {
              stroke-dashoffset: 6;
            }
          }
        `}
      </style>
    </svg>
  );
}; 