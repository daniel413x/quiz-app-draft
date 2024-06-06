import {
  Answer, Question, QuizMarkdownTuple, QuizMarkdownType,
} from '@/lib/quiz-data';
import shuffle from 'lodash/shuffle';
import { BlockMath, InlineMath } from 'react-katex';
import { numOfQuestions } from '../../_consts';
import Code from '../Code';
import InlineCode from '../InlineCode';

const shuffleAnswers = (answers: Answer[]) => shuffle(answers).slice().sort((a, b) => ((a.order && !b.order) || (a.order && b.order && a.order > b.order) ? 1 : 0));

export const shuffleQuestions = (questions: Question[]) => shuffle(questions.map((q) => {
  const answers = shuffleAnswers(q.answers);
  return { ...q, answers };
})).slice(0, numOfQuestions);

export const renderMarkdown = (qmd: QuizMarkdownTuple[]) => qmd.map((tuple, i) => {
  if (tuple[0] === QuizMarkdownType.TEXT) {
    return (
      <span key={i}>
        {tuple[1]}
      </span>
    );
  }
  if (tuple[0] === QuizMarkdownType.INLINE_KATEX) {
    return (
      <InlineMath key={i}>
        {tuple[1]}
      </InlineMath>
    );
  }
  if (tuple[0] === QuizMarkdownType.KATEX) {
    return (
      <span className="text-black">
        <BlockMath key={i}>
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
