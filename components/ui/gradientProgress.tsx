const rarityMap = {
  Common: "#E14EC6",
  Silver: "#D3D6EA",
  Gold: "#CAE001",
  Platinum: "#3B95FF",
  Rare: "#AE46FF",
  Epic: "#0CD392",
  Legendary: "#FF5B36",
};

const positionMap = {
  Common: "7%",
  Silver: "21%",
  Gold: "34.86%",
  Platinum: "50%",
  Rare: "64%",
  Epic: "78%",
  Legendary: "92%",
};

const textColorMap = {
  Common: "white",
  Silver: "black",
  Gold: "black",
  Platinum: "white",
  Rare: "white",
  Epic: "black",
  Legendary: "white",
};

const Tooltip = ({
  color,
  position,
  rarity,
  textColor,
}: {
  color: string;
  position: string;
  rarity: string;
  textColor: string;
}) => {
  return (
    <div
      className="rounded-[18px] px-2 py-1 relative"
      style={{
        background: color,
        color: textColor,
        position: "absolute",
        top: -50,
        left: position,
        transform: "translateX(-50%)",
      }}
    >
      {rarity}
      <div
        className="absolute left-1/2 -bottom-2 w-0 h-0 -translate-x-1/2"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: `8px solid ${color}`,
        }}
      ></div>
    </div>
  );
};

const GradientProgress = ({
  rarity = "Common",
}: {
  rarity?: keyof typeof rarityMap;
}) => {
  const color = rarityMap[rarity];
  const position = positionMap[rarity];
  const textColor = textColorMap[rarity];

  return (
    <div className="flex justify-center items-center  ">
      <div
        className="w-[300px] h-2 rounded-[6px] relative "
        style={{
          background:
            "linear-gradient(90deg, #E14EC6 7%, #D3D6EA 21%, #CAE001 34.86%, #3B95FF 50%, #AE46FF 64%, #0CD392 78%, #FF5B36 92%)",
        }}
      >
        <Tooltip
          color={color}
          position={position}
          rarity={rarity}
          textColor={textColor}
        />
      </div>
    </div>
  );
};

export default GradientProgress;
