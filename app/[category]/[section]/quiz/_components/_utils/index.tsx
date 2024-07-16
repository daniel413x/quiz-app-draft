import {
  Answer, Question, QuizMarkdownTuple, QuizMarkdownType,
  TableData,
} from '@/lib/data/types';
import shuffle from 'lodash/shuffle';
import { BlockMath, InlineMath } from 'react-katex';
import { cn } from '@/lib/utils';
import { numOfQuestions } from '../../_consts';
import Code from '../Code';
import InlineCode from '../InlineCode';
import DataTable from '../DataTable';

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
      // add whitespace-normal for iOS
      <span className="whitespace-normal" key={i}>
        {tuple[1] as string}
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.INLINE_KATEX) {
    return (
      <span
        className={cn('whitespace-normal px-0.5 text-black dark:text-white', {
          'dark:text-gray-900': params?.isCorrectAnswer,
        })}
        key={i}
      >
        {' '}
        <InlineMath>
          {tuple[1] as string}
        </InlineMath>
        {' '}
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.KATEX) {
    return (
      <span
        className={cn('text-black dark:text-white', {
          'dark:text-gray-900 whitespace-normal': params?.isCorrectAnswer,
        })}
        key={i}
      >
        <BlockMath>
          {tuple[1] as string}
        </BlockMath>
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.CODE) {
    return (
      <Code code={tuple[1] as string} key={i} />
    );
  }
  if (tuple[0] === QuizMarkdownType.INLINE_CODE) {
    return (
      <InlineCode code={tuple[1] as string} key={i} />
    );
  }
  if (tuple[0] === QuizMarkdownType.TABLE) {
    return (
      <DataTable tableData={tuple[1] as TableData} key={i} mbMargin={!!qmd[i + 1]} />
    );
  }
  return null;
});
