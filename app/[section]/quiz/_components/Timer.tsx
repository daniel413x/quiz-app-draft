import { formatTime } from '@/lib/utils';

interface TimerProps {
  timer: number;
}

const Timer = ({
  timer,
}: TimerProps) => (
  <div className="flex text-3xl text-stone-500">
    {formatTime(timer)}
  </div>
);

export default Timer;
