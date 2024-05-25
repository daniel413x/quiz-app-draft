import { Separator } from '@/components/ui/common/shadcn/separator';

const Footer = () => (
  <footer className="p-6 mt-auto">
    <Separator />
    <div className="container flex justify-center">
      <span className="mt-6">
        &copy;QuizTime
      </span>
    </div>
  </footer>
);

export default Footer;
