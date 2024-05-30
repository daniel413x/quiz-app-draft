import quizData from '@/lib/quiz-data';
import { ReactNode } from 'react';

interface RootLayoutProps {
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
}: RootLayoutProps) => (
  children
);

export default sectionLayout;
