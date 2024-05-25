'use client';

import {
  Form, FormDescription, FormField, FormItem,
} from '@/components/ui/common/shadcn/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/common/shadcn/radio-group';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams } from 'next/navigation';
import quizData, { Question } from '@/lib/quiz-data';
import { Button, buttonVariants } from '@/components/ui/common/shadcn/button';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/common/shadcn/label';
import {
  ArrowLeft, ArrowRight, CheckCircle, XCircle,
} from 'lucide-react';
import Image from 'next/image';
import { shuffleQuestions } from './_utils';

const formSchema = z.object({
  answer: z.string(),
});

type QuizFormValues = z.infer<typeof formSchema>;

const QuizForm = () => {
  const section = useParams().section as string;
  const [questions] = useState<Question[]>(shuffleQuestions(quizData[section].questions));
  const [answersRecord, setAnswersRecord] = useState<string[][]>([]);
  const [submittedAnswer, setSubmittedAnswered] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [qNum, setQNum] = useState(0);
  const question = questions[qNum];
  const { answers } = question;
  const isAnsweredCorrectly = submittedAnswer === question.correctAnswer;
  const isAnsweredIncorrectly = submittedAnswer && submittedAnswer !== question.correctAnswer;
  const isAtCurrentQuestion = answersRecord.length === qNum;
  const form = useForm<QuizFormValues>({
    resolver: zodResolver(formSchema),
  });
  const formAnswer = form.watch('answer');
  const handleChangeAnswer = (val: string) => {
    form.setValue('answer', val);
    setSubmittedAnswered(null);
  };
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setSubmittedAnswered(values.answer);
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
  useEffect(() => {
    if (answersRecord[qNum]?.find((a) => a === question.correctAnswer)) {
      form.reset({ answer: question.correctAnswer });
      setSubmittedAnswered(question.correctAnswer || null);
    } else {
      form.reset({ answer: undefined });
      setSubmittedAnswered(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qNum]);
  return (
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
          <FormField
            key="answer"
            name="answer"
            control={form.control}
            render={() => (
              <FormItem>
                <RadioGroup className="p-4" onValueChange={(val) => handleChangeAnswer(val)} value="">
                  {answers.map((answer) => (
                    <div
                      className={cn(buttonVariants({ variant: 'outline', className: 'flex items-center space-x-2 border-2 border-black/5 px-4 py-10 cursor-pointer group' }), {
                        'bg-accent': answer.id === formAnswer,
                        'bg-green-100': answer.id === formAnswer && isAnsweredCorrectly,
                        'bg-red-100': answer.id === submittedAnswer && isAnsweredIncorrectly && !isAnsweredCorrectly,
                      })}
                      key={answer.id}
                    >
                      <RadioGroupItem checked={answer.id === form.watch('answer')} value={answer.id} id={answer.id} />
                      <Label className="w-full py-9 cursor-pointer" htmlFor={answer.id}>{answer.answer}</Label>
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
                'hover:bg-green-100/50': isAnsweredCorrectly,
              })}
              onClick={() => (!isAnsweredCorrectly ? null : setQNum(qNum + 1))}
              type={!isAnsweredCorrectly ? 'submit' : 'button'}
              variant="outline"
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
              onClick={() => setQNum(qNum - 1)}
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
