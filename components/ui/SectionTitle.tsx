interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="w-fit">
      <h1 className="text-xl font-semibold">{title}</h1>
    </div>
  );
}
