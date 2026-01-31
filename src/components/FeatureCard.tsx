import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  onClick?: () => void;
  variant?: "default" | "safe" | "warning";
}

const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
  onClick,
  variant = "default",
}: FeatureCardProps) => {
  const variantStyles = {
    default: "bg-card border border-border/50",
    safe: "bg-safe/10 border border-safe/20",
    warning: "bg-destructive/5 border border-destructive/10",
  };

  const iconStyles = {
    default: "text-primary bg-primary-soft",
    safe: "text-safe bg-safe/15",
    warning: "text-destructive bg-destructive/10",
  };

  return (
    <button
      onClick={onClick}
      className={`feature-card flex flex-col items-center gap-2.5 w-full ${variantStyles[variant]} touch-target`}
      aria-label={title}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconStyles[variant]}`}
      >
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <div className="text-center">
        <p className="font-display font-bold text-sm text-foreground leading-tight">
          {title}
        </p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
        )}
      </div>
    </button>
  );
};

export default FeatureCard;
