export default function MapPanel() {
  const pins = [
    { top: "38%", left: "55%", label: "Riverlights" },
    { top: "52%", left: "42%", label: "Compass Pointe" },
    { top: "30%", left: "60%", label: "Waterford" },
    { top: "65%", left: "48%", label: "Mallory Creek" },
    { top: "44%", left: "68%", label: "Sunset Reach" },
    { top: "22%", left: "54%", label: "Castle Hayne" },
    { top: "70%", left: "35%", label: "Brunswick Forest" },
    { top: "58%", left: "62%", label: "Tidewater" },
  ];

  return (
    <div
      className="flex-shrink-0 overflow-hidden relative"
      style={{
        position: "sticky",
        top: "var(--top-offset)",
        width: "var(--map-w)",
        height: "calc(100vh - var(--top-offset))",
        background: "#dde4ec",
      }}
    >
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-78.3%2C33.75%2C-77.65%2C34.45&layer=mapnik"
        title="Communities in Wilmington NC area"
        loading="lazy"
        className="w-full h-full border-0"
      />
      {/* Community pins */}
      <div className="absolute inset-0 pointer-events-none">
        {pins.map((pin) => (
          <div
            key={pin.label}
            title={pin.label}
            className="absolute pointer-events-auto cursor-pointer transition-transform hover:scale-125"
            style={{
              top: pin.top,
              left: pin.left,
              transform: "translate(-50%, -50%)",
              color: "var(--red)",
              fontSize: "1.8rem",
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.45))",
            }}
          >
            &#11044;
          </div>
        ))}
      </div>
    </div>
  );
}
