'use client';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import {
  Form, FormDescription, FormField, FormItem,
} from '@/components/ui/common/shadcn/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/common/shadcn/radio-group';
import {
  useEffect, useRef, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import quizData, { Question } from '@/lib/quiz-data';
import { Button, buttonVariants } from '@/components/ui/common/shadcn/button';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/common/shadcn/label';
import {
  ArrowLeft, ArrowRight, CheckCircle, XCircle,
} from 'lucide-react';
import Image from 'next/image';
import qs from 'query-string';
import { useEventListener } from 'usehooks-ts';
import { shuffleQuestions } from './_utils';
import useUserQuizData from '../_hooks/useUserQuizData';
import { useTimer } from '../_hooks/useTimer';
import Progress from './Progress';
import Code from './Code';

const formSchema = z.object({
  answer: z.string(),
});

type QuizFormValues = z.infer<typeof formSchema>;

const QuizForm = () => {
  const {
    handleStopTimer,
    timer,
  } = useTimer();
  const {
    answersRecord, setAnswersRecord, setFinalTime, setQuestions,
  } = useUserQuizData();
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const router = useRouter();
  const section = useParams().section as string;
  const [questions] = useState<Question[]>(shuffleQuestions(quizData[section].questions));
  const searchParams = useSearchParams();
  const qNum = Number(searchParams.get('qNum')) || 0;
  const question = questions[qNum];
  const { answers } = question;
  const isAnsweredCorrectly = submittedAnswer === question.correctAnswer;
  const isAnsweredIncorrectly = submittedAnswer && submittedAnswer !== question.correctAnswer;
  const isAtCurrentQuestion = answersRecord.length === qNum;
  const form = useForm<QuizFormValues>({
    resolver: zodResolver(formSchema),
  });
  const formAnswer = form.watch('answer');
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setSubmittedAnswer(values.answer);
    const newAnswersRecord = [...answersRecord];
    if (newAnswersRecord[qNum]) {
      newAnswersRecord[qNum] = [...newAnswersRecord[qNum], values.answer];
    } else {
      newAnswersRecord.push([values.answer]);
    }
    setAnswersRecord(newAnswersRecord);
    if (question.correctAnswer === values.answer) {
      setProgress(progress + 1);
    }
  };
  const getNextUrl = (p: number) => qs.stringifyUrl({
    url: window.location.href,
    query: {
      qNum: p,
    },
  });
  const handleChangeAnswer = (val: string) => {
    form.setValue('answer', val);
    setSubmittedAnswer(null);
  };
  const handlePressNextButton = () => {
    if (!isAnsweredCorrectly) {
      return null;
    }
    if (qNum === questions.length - 1) {
      setFinalTime(timer);
      setQuestions(questions);
      router.push(`/${section}/quiz/results`);
      return;
    }
    router.push(getNextUrl(qNum + 1));
    form.reset({ answer: undefined });
    setSubmittedAnswer(null);
  };
  const radioGroupRef = useRef<HTMLDivElement>(null);
  const firstRadioButtonRef = useRef<HTMLButtonElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitRef.current?.click();
    }
  });
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!radioGroupRef.current?.contains(document.activeElement)) {
        firstRadioButtonRef.current?.focus();
      }
    }
  });
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!radioGroupRef.current?.contains(document.activeElement)) {
        firstRadioButtonRef.current?.focus();
      }
    }
  });
  useEffect(() => {
    if (answersRecord[qNum]?.find((a) => a === question.correctAnswer)) {
      form.reset({ answer: question.correctAnswer });
      setSubmittedAnswer(question.correctAnswer || null);
    } else {
      form.reset({ answer: undefined });
      setSubmittedAnswer(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qNum]);
  const isFirstRender = useRef(true);
  useEffect(() => () => {
    if (!isFirstRender.current) {
      handleStopTimer();
    }
    isFirstRender.current = false;
  }, []);
  return qNum > answersRecord.length ? null : (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className={cn('flex h-[24px]', {
          'text-red-800': isAnsweredIncorrectly,
          'text-green-800': isAnsweredCorrectly,
        })}
        >
          {isAnsweredIncorrectly ? (
            <>
              <XCircle />
              Incorrect
            </>
          ) : null}
          {isAnsweredCorrectly ? (
            <>
              <CheckCircle />
              Correct
            </>
          ) : null}
        </div>
        <Progress progress={progress} questions={questions} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormDescription>
            {question.question}
            {question.image ? (
              <Image
                className="py-6"
                width={500}
                src={question.image}
                alt="Question image"
              />
            ) : null}
          </FormDescription>
          {question.code ? (
            <Code code={question.code} />
          ) : null}
          {question.katex ? (
            <BlockMath>{question.katex}</BlockMath>
          ) : null}
          <FormField
            key="answer"
            name="answer"
            control={form.control}
            render={() => (
              <FormItem>
                <RadioGroup
                  className={cn('p-4', {
                    'bg-green-50/50 dark:bg-green-50/25': isAnsweredCorrectly,
                    'bg-red-50 dark:bg-red-400': isAnsweredIncorrectly,
                  })}
                  onValueChange={(val) => handleChangeAnswer(val)}
                  value=""
                  ref={radioGroupRef}
                >
                  {answers.map((answer, i) => (
                    <div
                      className={cn(buttonVariants({ variant: 'outline', className: 'flex items-center space-x-3 border-2 border-black/5 dark:border-gray-800 shadow-sm px-4 py-10 cursor-pointer group' }), {
                        'bg-accent': answer.id === formAnswer,
                        'bg-green-100 hover:bg-green-100 dark:text-black': answer.id === formAnswer && isAnsweredCorrectly,
                        'bg-red-100 hover:bg-red-100 dark:bg-red-300 dark:text-red-800': answer.id === submittedAnswer && isAnsweredIncorrectly && !isAnsweredCorrectly,
                        'opacity-50': isAnsweredCorrectly && submittedAnswer !== answer.id,
                        'pointer-events-none': isAnsweredCorrectly,
                      })}
                      key={answer.id}
                    >
                      <RadioGroupItem
                        checked={answer.id === form.watch('answer')}
                        value={answer.id}
                        id={answer.id}
                        ref={i === 0 ? firstRadioButtonRef : undefined}
                        className={answer.id === submittedAnswer && isAnsweredIncorrectly && !isAnsweredCorrectly ? 'dark:border-red-800 dark:group-hover:bg-red-300' : ''}
                      />
                      <Label
                        className="w-full py-9 cursor-pointer whitespace-normal [line-height:2]"
                        htmlFor={answer.id}
                      >
                        {answer.answer}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormItem>
            )}
          />
          <div className="grid gap-2">
            <Button
              className={cn({
                'pointer-events-none opacity-25': (isAtCurrentQuestion && !isAnsweredCorrectly) && !form.watch().answer,
              })}
              onClick={handlePressNextButton}
              type={!isAnsweredCorrectly ? 'submit' : 'button'}
              variant="outline"
              ref={submitRef}
            >
              <span className="flex items-center relative left-2.5">
                Next
                <ArrowRight className="ml-0.5" size={12} />
              </span>
            </Button>
            <Button
              className={cn({
                'pointer-events-none opacity-25': qNum === 0,
              })}
              onClick={() => router.push(getNextUrl(qNum - 1))}
              type="button"
              variant="outline"
            >
              <span className="flex items-center">
                <ArrowLeft className="mr-0.5" size={12} />
                Previous
              </span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default QuizForm;
