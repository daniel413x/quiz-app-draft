/* eslint-disable */

interface HeaderProps {
  header: string;
}

const Header = ({
  header,
}: HeaderProps) => {
  console.log();
  return (
    <h1 className="text-4xl mb-8 ">
      {header}
    </h1>
  );
}

export default Header;
