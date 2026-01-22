import { useEffect } from "react";
import gsap from "gsap";

export default function CursorStarTrail() {
  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const onMove = (e) => {
      const star = document.createElement("div");

    //   const hovering = e.target.closest("button, a"); // check hover

    //   const size = hovering ? 30 : 20; // bigger if hovering
    //   const scaleEnd = hovering ? 2 : 1.6; // slightly bigger zoom on hover


      star.className = "gsap-star";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;

      star.innerHTML = `
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
          stroke="#22d3ee" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round">
          <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>
        </svg>
      `;

      document.body.appendChild(star);

      gsap.fromTo(
        star,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.5,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => star.remove(),
        }
      );
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
