"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={"outline"}
      size={"icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun
        className={`${theme === "dark" ? "hidden" : "h-[1.2rem] w-[1.2rem]"}`}
      />
      <Moon
        className={`${theme === "light" ? "hidden" : "h-[1.2rem] w-[1.2rem]"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
