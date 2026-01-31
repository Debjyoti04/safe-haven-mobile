import { MapPin, Phone, Route, Shield } from "lucide-react";
import TopBar from "@/components/TopBar";
import SOSButton from "@/components/SOSButton";
import FeatureCard from "@/components/FeatureCard";
import BottomNav from "@/components/BottomNav";
import SafetyStatus from "@/components/SafetyStatus";

const Index = () => {
  const handleSOSActivate = () => {
    // TODO: Connect to emergency services
    console.log("SOS Activated!");
  };

  const features = [
    {
      icon: MapPin,
      title: "Crime Hotspot",
      subtitle: "View unsafe areas",
      position: "top-left" as const,
    },
    {
      icon: Route,
      title: "Safe Route",
      subtitle: "Navigate safely",
      position: "top-right" as const,
    },
    {
      icon: Phone,
      title: "Emergency Contact",
      subtitle: "Quick dial",
      position: "bottom-left" as const,
    },
    {
      icon: Shield,
      title: "C.G.S.",
      subtitle: "Guardian System",
      position: "bottom-right" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 pb-24 relative">
        {/* Safety Status */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-fade-in">
          <SafetyStatus status="safe" />
        </div>

        {/* Feature Grid with SOS Center */}
        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
          {/* Decorative background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-border/30 opacity-50" />
            <div className="absolute w-80 h-80 rounded-full border border-border/20 opacity-30" />
          </div>

          {/* Central SOS Button */}
          <div className="absolute z-20 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <SOSButton onActivate={handleSOSActivate} />
          </div>

          {/* Feature Cards - Positioned around SOS */}
          <div className="absolute top-0 left-0 w-[45%] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <FeatureCard
              icon={features[0].icon}
              title={features[0].title}
              subtitle={features[0].subtitle}
              variant="warning"
            />
          </div>

          <div className="absolute top-0 right-0 w-[45%] animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <FeatureCard
              icon={features[1].icon}
              title={features[1].title}
              subtitle={features[1].subtitle}
              variant="safe"
            />
          </div>

          <div className="absolute bottom-0 left-0 w-[45%] animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <FeatureCard
              icon={features[2].icon}
              title={features[2].title}
              subtitle={features[2].subtitle}
            />
          </div>

          <div className="absolute bottom-0 right-0 w-[45%] animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <FeatureCard
              icon={features[3].icon}
              title={features[3].title}
              subtitle={features[3].subtitle}
              variant="safe"
            />
          </div>

          {/* Connector lines (decorative) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Top-left to center */}
            <line
              x1="22"
              y1="22"
              x2="45"
              y2="45"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              className="opacity-60"
            />
            {/* Top-right to center */}
            <line
              x1="78"
              y1="22"
              x2="55"
              y2="45"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              className="opacity-60"
            />
            {/* Bottom-left to center */}
            <line
              x1="22"
              y1="78"
              x2="45"
              y2="55"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              className="opacity-60"
            />
            {/* Bottom-right to center */}
            <line
              x1="78"
              y1="78"
              x2="55"
              y2="55"
              stroke="hsl(var(--border))"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              className="opacity-60"
            />
          </svg>
        </div>

        {/* Helper text */}
        <p className="mt-8 text-sm text-muted-foreground text-center max-w-xs animate-fade-in" style={{ animationDelay: "0.7s" }}>
          Press <span className="font-semibold text-destructive">SOS</span> for immediate emergency assistance
        </p>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Index;
