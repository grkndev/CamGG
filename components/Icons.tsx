import { icons, IconNode } from "lucide-react-native";

const Icon = ({
  name,
  color = "black",
  size = 24,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}) => {
  
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
