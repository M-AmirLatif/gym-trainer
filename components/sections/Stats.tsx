"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      if (end === 0) return;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Stats() {
  const stats = [
    { value: 10, suffix: "+", label: "Years Exp." },
    { value: 500, suffix: "+", label: "Transformed" },
    { value: 15, suffix: "", label: "Awards Won" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 border-t border-white/10 pt-8 max-w-2xl text-center md:text-left">
      {stats.map((stat, idx) => (
        <div key={idx}>
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#ff3b30] mb-1">
            <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          </h4>
          <p className="text-[10px] sm:text-xs md:text-sm text-zinc-400 uppercase tracking-wider font-semibold">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
