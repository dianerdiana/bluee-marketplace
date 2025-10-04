import type { IconName } from '@/types/iconNames';
import type { IconProps } from 'iconsax-reactjs';
import * as Icons from 'iconsax-reactjs';

type DynamicIconProps = {
  name: IconName;
  className?: string;
} & IconProps;

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name = 'Home',
  size = 24,
  color = 'currentColor',
  variant = 'Linear',
  className,
}) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" tidak ditemukan dalam iconsax-react`);
    return null;
  }

  return <IconComponent size={size} color={color} variant={variant} className={className} />;
};
