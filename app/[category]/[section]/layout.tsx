import quizData from '@/lib/data/quiz-data';
import { ReactNode } from 'react';

interface SectionLayoutProps {
  children: ReactNode;
}

type MetadataProps = {
  params: { section: string };
};

export const generateMetadata = ({
  params,
}: MetadataProps) => {
  const section = quizData[params.section].name;
  return {
    title: {
      default: `${section} | Quiz App`,
      template: `%s | ${section} | Quiz App`,
    },
  };
};

const sectionLayout = ({
  children,
}: SectionLayoutProps) => (
  children
);

export default sectionLayout;
