const ExploreIndicator = ({
  size = 200,
  color = "#F3F3EC",
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        color: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <svg
        viewBox="0 -20 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        {/* L'Arche (demi-cercle) */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* La ligne de la flèche */}
        <line
          x1="100"
          y1="-20"
          x2="100"
          y2="60"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* La tête de la flèche */}
        <path d="M 92 50 L 100 64 L 108 50" fill="currentColor" />

        {/* Le texte */}
        <text
          x="100"
          y="100"
          textAnchor="middle"
          fill="currentColor"
          fontSize="16"
          letterSpacing="0.1em"
        >
          EXPLORE
        </text>
      </svg>
    </div>
  );
};

export default ExploreIndicator;
