import { buttonVariants } from '@/components/ui/common/shadcn/button';
import { FormField, FormItem } from '@/components/ui/common/shadcn/form';
import { Label } from '@/components/ui/common/shadcn/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/common/shadcn/radio-group';
import { Answer } from '@/lib/quiz-data';
import { cn } from '@/lib/utils';
import { UseFormReturn } from 'react-hook-form';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { renderMarkdown } from './_utils';

interface QuizFormFieldProps {
  form: UseFormReturn<{
    answer: string;
  }, any, undefined>;
  isAnsweredCorrectly: boolean;
  isAnsweredIncorrectly: boolean;
  answers: Answer[];
  handleChangeAnswer: (val: string) => void;
  formAnswer: string;
  submittedAnswer: string | null;
}

const QuizFormField = forwardRef(({
  form,
  isAnsweredCorrectly,
  isAnsweredIncorrectly,
  answers,
  handleChangeAnswer,
  formAnswer,
  submittedAnswer,
}: QuizFormFieldProps, ref) => {
  const radioGroupRef = useRef<HTMLDivElement>(null);
  const firstRadioButtonRef = useRef<HTMLButtonElement>(null);
  useImperativeHandle(ref, () => ({
    radioGroupRef,
    firstRadioButtonRef,
  }));
  return (
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
            {answers.map((answer, i) => {
              const isWrongAnswer = answer.id === submittedAnswer && isAnsweredIncorrectly && !isAnsweredCorrectly;
              const qmd = answer.answer.map(renderMarkdown);

              return (
                <Label
                  className="flex w-full cursor-pointer whitespace-normal [line-height:2] h-full max-h-full"
                  htmlFor={answer.id}
                  key={answer.id}
                >
                  <div
                    className={cn(buttonVariants({ variant: 'outline', className: 'flex w-full text-wrap justify-start space-x-3 border-2 border-black/5 dark:border-gray-800 shadow-sm px-4 py-3 cursor-pointer group h-max' }), {
                      'bg-accent': answer.id === formAnswer,
                      'bg-green-100 hover:bg-green-100 dark:text-black': answer.id === formAnswer && isAnsweredCorrectly,
                      'bg-red-100 hover:bg-red-100 dark:bg-red-300 dark:text-red-800': isWrongAnswer,
                      'opacity-50': isAnsweredCorrectly && submittedAnswer !== answer.id,
                      'pointer-events-none': isAnsweredCorrectly,
                    })}
                  >
                    <RadioGroupItem
                      checked={answer.id === form.watch('answer')}
                      value={answer.id}
                      id={answer.id}
                      ref={i === 0 ? firstRadioButtonRef : undefined}
                      className={isWrongAnswer ? 'dark:border-red-800 dark:group-hover:bg-red-300' : ''}
                    />
                    {qmd}
                  </div>
                </Label>
              );
            })}
          </RadioGroup>
        </FormItem>
      )}
    />
  );
});

export default QuizFormField;
