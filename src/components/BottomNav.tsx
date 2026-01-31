import { Home, Search, MessageCircle, User } from "lucide-react";
import { useState } from "react";

interface NavItem {
  icon: typeof Home;
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Search, label: "Search", id: "search" },
  { icon: MessageCircle, label: "Chat", id: "chat" },
  { icon: User, label: "Profile", id: "profile" },
];

const BottomNav = () => {
  const [activeId, setActiveId] = useState("home");

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border/50 safe-area-bottom safe-area-x">
      <div className="flex items-center justify-around px-2 py-2 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeId === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`nav-item touch-target ${isActive ? "active" : ""}`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon
                className={`w-6 h-6 transition-colors duration-150 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs font-medium transition-colors duration-150 ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
