"use client";

import { useEffect } from "react";

export default function RippleProvider() {
  useEffect(() => {
    function createRipple(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest(
        ".btn-primary, .btn-outline, .btn-outline-sm, .btn-ghost-white"
      ) as HTMLElement | null;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className = "ripple-wave";
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
      target.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    }

    document.addEventListener("mousedown", createRipple);
    return () => document.removeEventListener("mousedown", createRipple);
  }, []);

  return null;
}
