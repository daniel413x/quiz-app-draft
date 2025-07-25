import { Separator } from '@/components/ui/common/shadcn/separator';

const Footer = () => (
  <footer className="p-6 mt-auto">
    <Separator />
    <div className="container flex justify-center">
      <span className="mt-6 opacity-60">
        &copy;
        {' '}
        QuizGPT
      </span>
    </div>
  </footer>
);

export default Footer;
