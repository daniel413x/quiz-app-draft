import { useEffect, useState } from 'react';
import { create } from 'zustand';

interface UseTimerToggleStore {
  handleStart: () => void;
  isStarted: boolean;
}

const useTimerToggle = create<UseTimerToggleStore>((set) => ({
  handleStart: () => set({ isStarted: true }),
  isStarted: false,
}));

const useTimer = () => {
  const {
    isStarted,
  } = useTimerToggle();
  const [timer, setTimer] = useState<number>(6000);
  useEffect(() => {
    if (isStarted) {
      const increment = () => {
        setTimer(timer - 1);
      };
      const id = setInterval(increment, 1000);
      return () => {
        clearInterval(id);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStarted, timer]);
  return { timer };
};

export {
  useTimerToggle,
  useTimer,
};
