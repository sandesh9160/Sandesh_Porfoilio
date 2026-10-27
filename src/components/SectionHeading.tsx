interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        {title}
      </h2>
      <div 
        className="w-12 h-1 rounded-full bg-blue-600 mx-auto mt-2 shadow-2xs" 
        aria-hidden="true" 
      />
      {subtitle && (
        <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
