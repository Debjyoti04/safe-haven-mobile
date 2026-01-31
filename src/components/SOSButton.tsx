import { useState } from "react";

interface SOSButtonProps {
  onActivate?: () => void;
}

const SOSButton = ({ onActivate }: SOSButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onActivate?.();
    // Reset after brief feedback
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer pulse rings */}
      <div className="sos-ring" style={{ animationDelay: "0s" }} />
      <div className="sos-ring" style={{ animationDelay: "1s" }} />
      
      {/* Main SOS Button */}
      <button
        onClick={handlePress}
        className={`sos-button w-36 h-36 sm:w-40 sm:h-40 z-10 ${
          isPressed ? "scale-95" : ""
        }`}
        aria-label="Emergency SOS - Press for immediate help"
      >
        <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-wide">
          SOS
        </span>
      </button>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-destructive/20 blur-3xl -z-10 scale-150" />
    </div>
  );
};

export default SOSButton;
