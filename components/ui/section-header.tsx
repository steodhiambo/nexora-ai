import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-600 mb-6">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary",
          badge ? "mt-4" : ""
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
