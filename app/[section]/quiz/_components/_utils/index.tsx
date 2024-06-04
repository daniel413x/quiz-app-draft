import {
  Answer, Question, QuizMarkdownTuple, QuizMarkdownType,
} from '@/lib/quiz-data';
import shuffle from 'lodash/shuffle';
import { BlockMath, InlineMath } from 'react-katex';
import { numOfQuestions } from '../../_consts';
import Code from '../Code';
import InlineCode from '../InlineCode';

const shuffleAnswers = (answers: Answer[]) => shuffle(answers).sort((a, b) => ((a.order && !b.order) || (a.order && b.order && a.order > b.order) ? 1 : 0));

export const shuffleQuestions = (questions: Question[]) => shuffle(questions.map((q) => ({ ...q, answers: shuffleAnswers(q.answers) }))).slice(0, numOfQuestions);

export const renderMarkdown = (qmd: QuizMarkdownTuple) => {
  if (qmd[0] === QuizMarkdownType.TEXT) {
    return (
      <span key={qmd[1]}>
        {qmd[1]}
      </span>
    );
  }
  if (qmd[0] === QuizMarkdownType.INLINE_KATEX) {
    return (
      <InlineMath key={qmd[1]}>
        {qmd[1]}
      </InlineMath>
    );
  }
  if (qmd[0] === QuizMarkdownType.KATEX) {
    return (
      <BlockMath key={qmd[1]}>
        {qmd[1]}
      </BlockMath>
    );
  }
  if (qmd[0] === QuizMarkdownType.CODE) {
    return (
      <Code code={qmd[1]} key={qmd[1]} />
    );
  }
  if (qmd[0] === QuizMarkdownType.INLINE_CODE) {
    return (
      <InlineCode code={qmd[1]} key={qmd[1]} />
    );
  }
  return null;
};
