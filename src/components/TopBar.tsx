import { User } from "lucide-react";

const TopBar = () => {
  return (
    <header className="flex items-center justify-between px-5 py-4 safe-area-top safe-area-x">
      <h1 className="font-display text-2xl font-bold tracking-tight text-foreground">
        NIRBHAY
      </h1>
      <button
        className="touch-target flex items-center justify-center w-11 h-11 rounded-full bg-card shadow-card transition-all duration-200 hover:shadow-soft active:scale-95"
        aria-label="Profile"
      >
        <User className="w-5 h-5 text-muted-foreground" />
      </button>
    </header>
  );
};

export default TopBar;
