import Image from 'next/image';

const Home = () => (
  <main className="relative">
    <Image
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      src="/navbar-logo.png"
      alt="Next.js Logo"
      width={96}
      height={40}
      priority
    />
  </main>
);

export default Home;
