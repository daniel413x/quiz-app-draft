'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export const DarkModeToggle = () => {
  const { setTheme, theme } = useTheme();
  const handleChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <button className="bg-0 flex p-3 -m-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" type="button" onClick={handleChangeTheme}>
      {/* anims won't work if disableTransitionOnChange on ThemeProvider */}
      <Sun className="h-[1.2rem] w-[1.2rem] dark:rotate-0 dark:scale-100 transition-all -rotate-90 scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] dark:rotate-90 dark:scale-0 transition-all rotate-0 scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};
