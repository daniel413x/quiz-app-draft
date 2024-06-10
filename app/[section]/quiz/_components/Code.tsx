import { Button } from '@/components/ui/common/shadcn/button';
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
}: CodeProps) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };
  return (
    <div className="relative">
      <Button className="absolute right-0 h-8" onClick={copyCode} type="button" variant="ghost">
        copy
      </Button>
      <code className={cn(courierP, 'text-sm text-emerald-800')}>
        <pre className="text-sm bg-black text-emerald-500 mt-4 mb-1 py-12 ps-14 overflow-x-auto">
          {code}
        </pre>
      </code>
    </div>
  );
};

export default Code;
