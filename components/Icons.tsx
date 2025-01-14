import { icons } from "lucide-react-native";
import { createElement, useEffect, useState } from "react";
import { SvgProps } from "react-native-svg";
import { View } from "react-native";

const Icon = ({
  name,
  color = "black",
  size = 24,
}: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <View style={{ width: size, height: size }} />;
  }

  const LucideIcon = icons[name];
  return createElement(LucideIcon, { color, size } as SvgProps);
};

export default Icon;