import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionTitle({ title, subtitle, className, align = "center" }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center", className)}>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
        {title.split(" ").map((word, i, arr) => (
          <span key={i}>
            {i === arr.length - 1 ? (
              <span className="text-primary text-glow-cyan">{word}</span>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("mt-4 flex items-center gap-2", align === "center" && "justify-center")}>
        <div className="w-12 h-0.5 bg-primary/50" />
        <div className="w-3 h-3 rotate-45 border-2 border-primary glow-cyan" />
        <div className="w-12 h-0.5 bg-primary/50" />
      </div>
    </div>
  );
}
