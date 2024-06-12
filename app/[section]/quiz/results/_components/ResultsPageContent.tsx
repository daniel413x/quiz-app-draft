'use client';

import { useEffect, useRef } from 'react';
import {
  Card, CardContent, CardHeader, CardTitle,
} from '@/components/ui/common/shadcn/card';
import { cn } from '@/lib/utils';
import {
  CheckCircle, ChevronLeft, MessageCircleQuestion, RefreshCcw,
} from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/common/shadcn/button';
import { Separator } from '@/components/ui/common/shadcn/separator';
import Timer from '../../_components/Timer';
import useUserQuizData from '../../_hooks/useUserQuizData';
import { useTimer } from '../../_hooks/useTimer';
import { timerStartMs } from '../../_consts';
import Code from '../../_components/Code';
import { renderMarkdown } from '../../_components/_utils';

const ResultsPageContent = () => {
  const section = useParams().section;
  const router = useRouter();
  const {
    handleStopTimer,
  } = useTimer();
  const {
    answersRecord,
    finalTime,
    questions,
    reset,
  } = useUserQuizData();
  const ref = useRef(null);
  useEffect(() => {
    handleStopTimer();
    if (!ref.current) {
      ref.current = null;
      return;
    }
    return () => {
      reset();
    };
  }, []);
  if (answersRecord.length === 0) {
    router.back();
    return;
  }
  let answeredCorrectly = answersRecord.length;
  answersRecord.forEach((a) => {
    if (a.length > 1) {
      answeredCorrectly -= 1;
    }
  });
  const grade = ((answeredCorrectly / questions.length) * 100);
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl">
          Your quiz results:
        </h1>
        <Card>
          <CardContent className="flex flex-col gap-6 pt-6 shadow-md">
            {' '}
            <div className="flex flex-col">
              <h2 className="text-2xl mb-1">
                Time taken:
              </h2>
              <Timer timer={timerStartMs - finalTime} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl mb-1">
                Time remaining:
              </h2>
              <Timer timer={finalTime} />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl mb-1">
                Grade:
              </h2>
              <span className={cn('text-red-600', {
                'text-amber-600': grade > 60,
                'text-green-500 font-semibold': grade > 80,
              })}
              >
                {grade.toFixed(1)}
                %
              </span>
              <div className="flex flex-col mt-2">
                <span className="text-purple-600">
                  Explanation:
                </span>
                <span className="mb-2">
                  {`Your answers included errors in ${questions.length - answeredCorrectly} out of ${questions.length} questions.`}
                </span>
                <span>
                  You answered without error
                  {' '}
                  <span className={cn('text-red-600', {
                    'text-amber-600': grade > 60,
                    'text-green-500 font-semibold': grade > 80,
                  })}
                  >
                    {grade.toFixed(1)}
                    %
                  </span>
                  {' '}
                  of the time.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col">
          <h2 className="text-2xl mb-3">
            Answers:
          </h2>
          <ul className="grid md:grid-cols-2 2xl:grid-cols-2 gap-8">
            {questions.map((q, i) => (
              <li key={i}>
                <Card className={cn('relative shadow-md pt-2 pb-5', {
                  'border-red-300 border-2': answersRecord[i].length > 1,
                })}
                >
                  <Button
                    className="absolute border rounded-full -right-1.5 -top-1.5 bg-card w-14 h-14"
                    variant="ghost"
                  >
                    <MessageCircleQuestion className="text-blue-600" />
                  </Button>
                  <CardHeader>
                    <CardTitle>
                      {`Question #${i + 1}`}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <Separator className="w-1/2" />
                    <span className="font-regular text-gray-600">
                      <span className="text-2xl text-gray-600/50 mr-1.5">
                        Q
                        {': '}
                      </span>
                      {renderMarkdown(q.question)}
                    </span>
                    {!q.image ? null : (
                      <Image src={q.image} width={200} height={200} alt="" />
                    )}
                    {q.code ? (
                      <Code code={q.code} />
                    ) : null}
                    <div className="flex flex-col gap-2">
                      {q.answers.map((a) => (
                        // overflow-x-auto to catch katex overflow
                        <div className="flex relative gap-4 overflow-x-auto" key={a.id}>
                          <div className={cn('shrink-0 border-2 border-black/20 rounded-full w-5 h-5 relative top-1 dark:bg-black/75 dark:border-secondary', {
                            'bg-green-100 border-green-500 dark:bg-green-100 dark:border-green-500': answersRecord[i].includes(a.id),
                            'bg-red-100 border-red-500 dark:bg-red-100 dark:border-red-500': answersRecord[i].includes(a.id) && a.id !== q.correctAnswer,
                          })}
                          />
                          <div className={cn('flex', {
                            'text-green-700': answersRecord[i].includes(a.id),
                            'text-red-500': answersRecord[i].includes(a.id) && a.id !== q.correctAnswer,
                            '[word-break:break-all]': a.answer?.map((qmd) => qmd[1]).join(' ').split(' ')[0].length > 25,
                          })}
                          >
                            <span>
                              {renderMarkdown(a.answer)}
                            </span>
                            {answersRecord[i].includes(a.id) && a.id === q.correctAnswer ? <CheckCircle className="ml-1 shrink-0" /> : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link
        href={`/${section}/quiz`}
        className={buttonVariants({ variant: 'outline', className: 'mt-8 h-[unset]' })}
      >
        <div className="flex items-center px-8 py-12">
          <ChevronLeft className="text-purple-600" />
          <RefreshCcw className="text-purple-600 mr-2" />
          <span className="ml-2 mr-4">
            Retake the quiz
          </span>
        </div>
      </Link>
    </main>
  );
};

export default ResultsPageContent;
