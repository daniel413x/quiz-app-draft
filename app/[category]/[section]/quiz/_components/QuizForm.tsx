'use client';

import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import {
  Form,
} from '@/components/ui/common/shadcn/form';
import {
  RefObject,
  useEffect, useRef, useState,
} from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Question as QuestionType } from '@/lib/data/types';
import quizData from '@/lib/data/quiz-data';
import { Button } from '@/components/ui/common/shadcn/button';
import { cn } from '@/lib/utils';
import {
  ArrowLeft, ArrowRight, CheckCircle, XCircle,
} from 'lucide-react';
import Image from 'next/image';
import qs from 'query-string';
import { useEventListener } from 'usehooks-ts';
import { QUIZ_ROUTE, RESULTS_ROUTE } from '@/lib/data/routes';
import { renderMarkdown, shuffleQuestions } from './_utils';
import useUserQuizData from '../_hooks/useUserQuizData';
import { useTimer } from '../_hooks/useTimer';
import Code from './Code';
import QuizFormFields from './QuizFormFields';
import IssueModal from './IssueModal';
import useActiveElement from '../_hooks/useActiveElement';
import useNumberOfQuestions from '../_hooks/useNumberOfQuestions';

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
  const category = useParams().category as string;
  const numOfQuestions = useNumberOfQuestions();
  const [questions] = useState<QuestionType[]>(shuffleQuestions(quizData[section].questions).slice(0, numOfQuestions));
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
      router.push(`/${category}/${section}/${QUIZ_ROUTE}/${RESULTS_ROUTE}`);
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
  const activeElement = useActiveElement();
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (Number.isInteger(parseInt(e.key, 10))) {
      if (Number(e.key) > answers.length) {
        return;
      }
      const element = fieldRefs.current?.radioGroupRef.current?.children[Number(e.key) - 1];
      // select all button elements and figure out the correct one to interact with
      // if you add more button elements to the form fields (like Code's CopyButton), then you may need to modify the following lines
      const buttonElements = element!.querySelectorAll('button');
      const button = buttonElements![buttonElements!.length - 1];
      // submit the form if the user double presses the same key
      // or just select the form item according to the key pressed
      if (!isAnsweredCorrectly) {
        if (activeElement === button) {
          submitRef.current?.click();
        } else {
          button.click();
          button.focus();
        }
      }
      if (isAnsweredCorrectly) {
        submitRef.current?.click();
      }
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isAnsweredCorrectly) {
        if (!fieldRefs.current?.radioGroupRef.current?.contains(document.activeElement)) {
          fieldRefs.current?.firstRadioButtonRef.current?.focus();
        }
      }
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (!isAnsweredCorrectly) {
        if (!fieldRefs.current?.radioGroupRef.current?.contains(document.activeElement)) {
          fieldRefs.current?.firstRadioButtonRef.current?.focus();
        }
      }
    }
    if (e.key === 'Enter') {
      submitRef.current?.click();
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
      <div className="flex justify-between">
        <div className="flex gap-3 items-center mb-2">
          <h1 className="flex text-2xl">
            Question #
            {qNum + 1}
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
        <IssueModal id={String(qNum)} />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="relative">
            {!isAnsweredCorrectly ? null : (
              <Button
                variant="blank"
                onClick={handlePressNextButton}
                className="absolute w-full h-full"
                tabIndex={-1}
              />
            )}
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {renderMarkdown(question.question)}
              {question.image ? (
                <Image
                  className="py-6 m-auto"
                  width={500}
                  src={question.image}
                  alt="Question image"
                />
              ) : null}
            </div>
            {question.code ? (
              <Code code={question.code} />
            ) : null}
            {question.katex ? (
              <BlockMath>{question.katex}</BlockMath>
            ) : null}
            <QuizFormFields
              ref={fieldRefs}
              answers={answers}
              isAnsweredCorrectly={isAnsweredCorrectly}
              isAnsweredIncorrectly={isAnsweredIncorrectly}
              form={form}
              formAnswer={formAnswer}
              submittedAnswer={submittedAnswer}
              handleChangeAnswer={handleChangeAnswer}
              submitRef={submitRef}
            />
          </div>
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
