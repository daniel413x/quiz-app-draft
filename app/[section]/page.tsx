import quizData from '@/lib/quiz-data';
import { Metadata } from 'next';
import SectionPageContent from './_components/SectionPageContent';

type MetadataProps = {
  params: { section: string };
};

export const generateMetadata: (props: MetadataProps) => Metadata = ({
  params,
}: MetadataProps) => {
  const section = quizData[params.section].name;
  return {
    title: {
      default: section,
      template: `%s / ${section}`,
    },
  };
};

const SectionPage = () => (
  <SectionPageContent />
);

export default SectionPage;
