import { StaticImageData } from 'next/image';

export enum QuizMarkdownType {
  INLINE_KATEX, KATEX, INLINE_CODE, CODE, TEXT, IMAGE,
}

export type QuizMarkdownTuple = [QuizMarkdownType, string];

export type Answer = {
  answer: QuizMarkdownTuple[];
  order?: number;
  id: string;
};

export type Question = {
  question: QuizMarkdownTuple[];
  image?: string | StaticImageData;
  code?: string,
  katex?: string,
  answers: Answer[];
  correctAnswer: string;
};

export type Category = {
  name: string;
  slug: string;
  quizzes: QuizDataObject[];
};

export type QuizDataObject = {
  name: string;
  slug: string;
  category: Pick<Category, 'slug'>;
  questions: Question[];
};
