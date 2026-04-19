import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const id = requestAnimationFrame(() => {
      document.querySelectorAll(".rv").forEach(el => obs.observe(el));
    });
    return () => {
      cancelAnimationFrame(id);
      obs.disconnect();
    };
  }, []);
}
