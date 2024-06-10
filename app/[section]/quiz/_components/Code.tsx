import { cn } from '@/lib/utils';
import {
  Courier_Prime,
} from 'next/font/google';

interface CodeProps {
  code: string;
}

const courierP = Courier_Prime({ subsets: ['latin'], weight: '400' });

const Code = ({
  code,
}: CodeProps) => (
  <code className={cn(courierP, 'text-sm text-emerald-800')}>
    <pre className="text-sm bg-black text-emerald-500 mt-4 mb-1 py-4 overflow-x-auto">
      {code}
    </pre>
  </code>
);

export default Code;
