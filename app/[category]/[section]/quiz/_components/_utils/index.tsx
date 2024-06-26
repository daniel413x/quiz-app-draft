import {
  Answer, Question, QuizMarkdownTuple, QuizMarkdownType,
} from '@/lib/data/types';
import shuffle from 'lodash/shuffle';
import { BlockMath, InlineMath } from 'react-katex';
import { cn } from '@/lib/utils';
import { numOfQuestions } from '../../_consts';
import Code from '../Code';
import InlineCode from '../InlineCode';

const shuffleAnswers = (answers: Answer[]) => shuffle(answers).slice().sort((a, b) => ((a.order && !b.order) || (a.order && b.order && a.order > b.order) ? 1 : 0));

export const shuffleQuestions = (questions: Question[]) => shuffle(questions.map((q) => {
  const answers = shuffleAnswers(q.answers);
  return { ...q, answers };
})).slice(0, numOfQuestions);

export const renderMarkdown = (qmd: QuizMarkdownTuple[], params?: {
  isAnsweredIncorrectly?: boolean;
  isAnsweredCorrectly?: boolean;
  isCorrectAnswer?: boolean;
}) => qmd.map((tuple, i) => {
  if (tuple[0] === QuizMarkdownType.TEXT) {
    return (
      <span key={i}>
        {tuple[1]}
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.INLINE_KATEX) {
    return (
      <span
        className={cn('px-0.5 text-black dark:text-white', {
          'dark:text-gray-900': params?.isCorrectAnswer,
        })}
        key={i}
      >
        {' '}
        <InlineMath>
          {tuple[1]}
        </InlineMath>
        {' '}
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.KATEX) {
    return (
      <span
        className={cn('text-black dark:text-white', {
          'dark:text-gray-900': params?.isCorrectAnswer,
        })}
        key={i}
      >
        <BlockMath>
          {tuple[1]}
        </BlockMath>
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.CODE) {
    return (
      <Code code={tuple[1]} key={i} />
    );
  }
  if (tuple[0] === QuizMarkdownType.INLINE_CODE) {
    return (
      <InlineCode code={tuple[1]} key={i} />
    );
  }
  return null;
});
