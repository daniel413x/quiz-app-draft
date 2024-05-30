import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Quiz',
};

const sectionLayout = ({
  children,
}: RootLayoutProps) => (
  children
);

export default sectionLayout;
