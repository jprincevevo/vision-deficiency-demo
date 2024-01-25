import { CubeFocus, Database, GearSix, Globe } from "@phosphor-icons/react";

const icons = [CubeFocus, Database, GearSix, Globe];

export const getIcon = ({ index, color }: { index: number; color: string }) => {
  const Component = icons[index];

  return <Component color={color} size={32} weight="fill" />;
};
