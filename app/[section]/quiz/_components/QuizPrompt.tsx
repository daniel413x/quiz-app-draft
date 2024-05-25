'use client';

import { Button } from '@/components/ui/common/shadcn/button';
import { useTimerToggle } from '../_hooks/useTimer';

const QuizPrompt = () => {
  const {
    handleStart,
  } = useTimerToggle();
  return (
    <div className="flex flex-col">
      Once you press start
      <Button className="w-max m-auto p-8" onClick={() => handleStart()}>
        Start
      </Button>
    </div>

  );
};

export default QuizPrompt;
