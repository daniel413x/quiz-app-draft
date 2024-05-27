interface CodeProps {
  code: string;
}

const Code = ({
  code,
}: CodeProps) => (
  <code className="text-sm text-emerald-800">
    <pre className="text-sm bg-stone-50 text-emerald-800 mt-4 mb-1 py-4 overflow-x-auto">
      {code}
    </pre>
  </code>
);

export default Code;
