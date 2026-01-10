import { useEffect, useRef } from "react";
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

export default function TubesComponent() {
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const tubesRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = appRef.current;

    if (!canvas || !wrapper) return;

    canvas.width = wrapper.clientWidth;
    canvas.height = wrapper.clientHeight;

    tubesRef.current = TubesCursor(canvas, {
      tubes: {
        colors: ["#f967fb", "#53bc28", "#6958d5"],
        lights: {
          intensity: 200,
          colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        }
      }
    });

    const handleMove = e => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const cx = Math.max(0, Math.min(rect.width, x));
      const cy = Math.max(0, Math.min(rect.height, y));

      tubesRef.current.cursor.set(cx, cy);
    };

    wrapper.addEventListener("pointermove", handleMove);

    // FIX ICI
    return () => {
      if (wrapper) {
        wrapper.removeEventListener("pointermove", handleMove);
      }
    };
  }, []);

  return (
    <div id="tubes" ref={appRef}>
      <canvas ref={canvasRef} />
    </div>
  );
}
