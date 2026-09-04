"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_CHANGE_EVENT = "portfolio-theme-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
}

function getTheme() {
  return document.documentElement.classList.contains("light");
}

function getServerTheme() {
  return false;
}

/**
 * Toggles the `.light` class on <html>, mirroring the design's theme switch.
 * The initial class is applied pre-hydration by an inline script in the root
 * layout, so this only needs to sync React state and flip it.
 */
export function ThemeToggle() {
  const light = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggle() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className="inline-flex h-7.5 w-7.5 cursor-pointer items-center justify-center rounded-full border border-pf-line text-pf-muted transition-colors hover:border-pf-accent hover:text-pf-accent"
    >
      {light ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
