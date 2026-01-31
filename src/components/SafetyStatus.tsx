import { Shield, CheckCircle } from "lucide-react";

interface SafetyStatusProps {
  status?: "safe" | "monitoring" | "alert";
}

const SafetyStatus = ({ status = "safe" }: SafetyStatusProps) => {
  const statusConfig = {
    safe: {
      icon: CheckCircle,
      text: "You are safe",
      className: "safe-indicator",
    },
    monitoring: {
      icon: Shield,
      text: "Monitoring active",
      className: "safe-indicator bg-primary/15 text-primary",
    },
    alert: {
      icon: Shield,
      text: "Alert mode",
      className: "safe-indicator bg-destructive/15 text-destructive",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={config.className}>
      <Icon className="w-4 h-4" />
      <span>{config.text}</span>
    </div>
  );
};

export default SafetyStatus;
