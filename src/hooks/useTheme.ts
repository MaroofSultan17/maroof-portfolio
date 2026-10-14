import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";

export function useTheme() {
  const getSystemTheme = (): "light" | "dark" =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("ms-theme") as ThemeMode | null;
    return saved || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const apply = (t: "light" | "dark") => {
      if (t === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
    };

    if (theme === "system") {
      apply(getSystemTheme());
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => apply(e.matches ? "dark" : "light");
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else {
      apply(theme);
    }
  }, [theme]);

  const toggle = (e?: React.MouseEvent | React.KeyboardEvent) => {
    const doc = document as unknown as {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> };
    };

    if (e && "clientX" in e && doc.startViewTransition) {
      const mouseEvent = e as React.MouseEvent;
      const x = mouseEvent.clientX ?? window.innerWidth / 2;
      const y = mouseEvent.clientY ?? window.innerHeight / 2;
      const transition = doc.startViewTransition(() => {
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
