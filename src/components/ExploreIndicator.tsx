const ExploreIndicator = ({
  size = 160,
  color = "#e8e8e0",
  className = "",
  onClick,
}: {
  size?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} cursor-pointer opacity-40 hover:opacity-70 transition-opacity`}
      aria-label="Explorer le contenu"
      style={{
        width: size,
        color: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "none",
        border: "none",
        padding: 0,
      }}
    >
      <svg
        viewBox="0 -20 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="100"
          y1="-20"
          x2="100"
          y2="60"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M 94 52 L 100 64 L 106 52" fill="currentColor" />
        <text
          x="100"
          y="100"
          textAnchor="middle"
          fill="currentColor"
          fontSize="13"
          letterSpacing="0.2em"
          fontFamily="Sora"
          fontWeight="300"
        >
          EXPLORE
        </text>
      </svg>
    </button>
  );
};

export default ExploreIndicator;
