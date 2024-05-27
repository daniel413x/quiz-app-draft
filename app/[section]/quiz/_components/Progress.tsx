import { cn } from '@/lib/utils';
import { Question } from '@/lib/quiz-data';

interface ProgressProps {
  progress: number;
  questions: Question[];
}

const Progress = ({
  progress,
  questions,
}: ProgressProps) => (
  <div className="flex gap-1">
    <span className={cn({
      'text-green-700': progress,
    })}
    >
      {`${progress}/${questions.length}`}
    </span>
    <span>
      passed
    </span>
    <span className={cn({
      'text-green-700': progress,
    })}
    >
      {`(${(100 * (progress / questions.length)).toFixed(2)}%)`}
    </span>
  </div>
);

export default Progress;
