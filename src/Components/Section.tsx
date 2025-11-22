interface SectionProps {
  children: React.ReactNode;
  classname?: string;
}

export default function Section({ children, classname = "" }: SectionProps) {
  return <section className={`w-full ${classname}`}>{children}</section>;
}
