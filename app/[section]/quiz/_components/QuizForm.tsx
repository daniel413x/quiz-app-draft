'use client';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import {
  Form, FormDescription,
} from '@/components/ui/common/shadcn/form';
import {
  RefObject,
  useEffect, useRef, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import quizData, { Question } from '@/lib/quiz-data';
import { Button } from '@/components/ui/common/shadcn/button';
import { cn } from '@/lib/utils';
import {
  ArrowLeft, ArrowRight, CheckCircle, XCircle,
} from 'lucide-react';
import Image from 'next/image';
import qs from 'query-string';
import { useEventListener } from 'usehooks-ts';
import { renderMarkdown, shuffleQuestions } from './_utils';
import useUserQuizData from '../_hooks/useUserQuizData';
import { useTimer } from '../_hooks/useTimer';
import Code from './Code';
import QuizFormField from './QuizFormField';

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
    answersRecord, setAnswersRecord, setFinalTime, setQuestions, setProgress, progress,
  } = useUserQuizData();
  const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null);
  const router = useRouter();
  const section = useParams().section as string;
  const [questions] = useState<Question[]>(shuffleQuestions(quizData[section].questions));
  const searchParams = useSearchParams();
  const qNum = Number(searchParams.get('qNum')) || 0;
  const question = questions[qNum];
  const { answers } = question;
  const isAnsweredCorrectly = submittedAnswer === question.correctAnswer;
  const isAnsweredIncorrectly = !!submittedAnswer && submittedAnswer !== question.correctAnswer;
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
  const fieldRefs = useRef<{
    radioGroupRef: RefObject<HTMLDivElement>;
    firstRadioButtonRef: RefObject<HTMLButtonElement>;
  }>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      submitRef.current?.click();
    }
  });
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!fieldRefs.current?.radioGroupRef.current?.contains(document.activeElement)) {
        fieldRefs.current?.firstRadioButtonRef.current?.focus();
      }
    }
  });
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!fieldRefs.current?.radioGroupRef.current?.contains(document.activeElement)) {
        fieldRefs.current?.firstRadioButtonRef.current?.focus();
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
    <div className="flex flex-col mt-4">
      <div className="flex gap-3 items-center mb-2">
        <h1 className="flex text-2xl">
          Question #
          {qNum}
        </h1>
        <div className={cn('flex gap-0.5 h-[24px]', {
          'text-red-800 dark:text-red-600': isAnsweredIncorrectly,
          'text-green-800 dark:text-green-700': isAnsweredCorrectly,
        })}
        >
          {isAnsweredIncorrectly ? (
            <>
              &mdash;
              <XCircle />
              Incorrect
            </>
          ) : null}
          {isAnsweredCorrectly ? (
            <>
              &mdash;
              <CheckCircle />
              Correct
            </>
          ) : null}
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormDescription>
            {renderMarkdown(question.question)}
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
          <QuizFormField
            ref={fieldRefs}
            answers={answers}
            isAnsweredCorrectly={isAnsweredCorrectly}
            isAnsweredIncorrectly={isAnsweredIncorrectly}
            form={form}
            formAnswer={formAnswer}
            submittedAnswer={submittedAnswer}
            handleChangeAnswer={handleChangeAnswer}
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
