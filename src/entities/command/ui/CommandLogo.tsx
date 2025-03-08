export interface CommandLogoProps {
  name: string;
  logoUrl: string;
  position?: "left" | "right";
}

const CommandLogo = ({
  name,
  logoUrl,
  position = "left",
}: CommandLogoProps) => {
  const flexDirection = position === "left" ? "flex-row" : "flex-row-reverse";

  return (
    <div className={`w-fit flex items-center gap-3.5 ${flexDirection}`}>
      <div className="w-12 h-12 bg-center bg-contain">
        <img src={logoUrl} alt="command logo" />
      </div>
      <span className="text-l font-semibold text-white">{name}</span>
    </div>
  );
};

export default CommandLogo;
