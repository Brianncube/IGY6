type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2 px-1">
      <p className="font-display text-sm uppercase tracking-[0.32em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h1 className="max-w-xl font-display text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h1>
      <p className="max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
