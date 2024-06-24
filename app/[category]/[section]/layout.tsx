import quizData from '@/lib/data/quiz-data';
import { ReactNode } from 'react';
import Breadcrumbs from './_components/Breadcrumbs';

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
  <>
    <Breadcrumbs />
    {children}
  </>
);

export default sectionLayout;
