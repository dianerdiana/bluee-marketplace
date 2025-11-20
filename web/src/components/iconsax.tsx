import type { IconsaxName } from '@/types/iconsax-names';
import type { IconProps } from 'iconsax-reactjs';
import * as Icons from 'iconsax-reactjs';

type IconsaxProps = {
  name: IconsaxName;
  className?: string;
} & IconProps;

export const Iconsax: React.FC<IconsaxProps> = ({
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
