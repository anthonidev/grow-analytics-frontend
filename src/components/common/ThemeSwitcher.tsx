"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Switch } from "antd";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      checkedChildren={<SunIcon className="w-5 h-5" />}
      unCheckedChildren={<MoonIcon className="w-5 h-5" />}
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
}
