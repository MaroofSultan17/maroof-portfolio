import { useEffect, useState } from "react";

export function useTheme() {
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("ms-theme");
    return saved || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t) => {
      if (t === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
    };

    if (theme === "system") {
      apply(getSystemTheme());
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => apply(e.matches ? "dark" : "light");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      apply(theme);
    }
  }, [theme]);

  const toggle = (e) => {
    if (e && document.startViewTransition) {
      const x = e.clientX ?? window.innerWidth / 2;
      const y = e.clientY ?? window.innerHeight / 2;
      const transition = document.startViewTransition(() => {
        const root = document.documentElement;
        if (root.classList.contains("dark")) {
          root.classList.remove("dark");
        } else {
          root.classList.add("dark");
        }
        
        setTheme((prev) => {
          const next = prev === "dark" ? "light" : "dark";
          localStorage.setItem("ms-theme", next);
          return next;
        });
      });
      transition.ready.then(() => {
        const endRadius = Math.hypot(
          Math.max(x, window.innerWidth - x),
          Math.max(y, window.innerHeight - y)
        );
        const isDarkNow = document.documentElement.classList.contains("dark");
        const clipPath = isDarkNow
          ? [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
          : [
              `circle(${endRadius}px at ${x}px ${y}px)`,
              `circle(0px at ${x}px ${y}px)`,
            ];
            
        document.documentElement.animate(
          { clipPath },
          {
            duration: 600,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: isDarkNow
              ? "::view-transition-new(root)"
              : "::view-transition-old(root)",
          }
        );
      });
    } else {
      setTheme((prev) => {
        const next = prev === "dark" ? "light" : "dark";
        localStorage.setItem("ms-theme", next);
        return next;
      });
    }
  };

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return { theme, toggle, isDark };
}
