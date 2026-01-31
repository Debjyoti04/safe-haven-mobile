const ConnectorLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Top-left to center */}
      <line
        x1="25%"
        y1="25%"
        x2="50%"
        y2="50%"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-40"
      />
      {/* Top-right to center */}
      <line
        x1="75%"
        y1="25%"
        x2="50%"
        y2="50%"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-40"
      />
      {/* Bottom-left to center */}
      <line
        x1="25%"
        y1="75%"
        x2="50%"
        y2="50%"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-40"
      />
      {/* Bottom-right to center */}
      <line
        x1="75%"
        y1="75%"
        x2="50%"
        y2="50%"
        stroke="hsl(var(--border))"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        className="opacity-40"
      />
    </svg>
  );
};

export default ConnectorLines;
