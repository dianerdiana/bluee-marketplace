import type { IconName } from '@/types/iconNames';
import { Badge } from './Badge';
import { Col } from './Col';
import { DynamicIcon } from './DynamicIcon';
import { Row } from './Row';
import { cn } from '@/configs/cn';

type ListHeaderProps = {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  label: string;
  titleSize?: string;
  labelSize?: string;
  icon: IconName;
};
type ListMenuProps = React.HTMLAttributes<HTMLUListElement>;
type ListItemProps = { icon: IconName; label: string; value: string };

export const ListHeader: React.FC<ListHeaderProps> = ({
  imageUrl,
  imageAlt = 'Picture',
  titleSize = 'xl',
  labelSize = 'lg',
  icon,
  label,
  title,
}) => {
  return (
    <Row className='items-center'>
      <Col className='grow-0'>
        <div className='overflow-hidden w-20 h-20 rounded-full'>
          <img src={imageUrl} alt={imageAlt} className='w-full h-full object-cover' />
        </div>
      </Col>
      <Col>
        <div>
          <h3 className={`font-bold text-${titleSize}`}>{title}</h3>
          <div className='flex items-center'>
            <DynamicIcon name={icon} className='text-secondary me-1' />
            <p className={`text-secondary font-semibold text-${labelSize}`}>{label}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export const ListMenu: React.FC<ListMenuProps> = ({ children, className, ...props }) => {
  return (
    <ul className={cn('px-4 border border-back rounded-2xl', className)} {...props}>
      {children}
    </ul>
  );
};

export const ListItem: React.FC<ListItemProps> = ({ icon, label, value }) => {
  return (
    <li className='not-last:border-b not-last:border-b-back py-4'>
      <Row className='items-center'>
        <Col className='grow-0'>
          <Badge variant='light-secondary' className='rounded-full px-3 py-3'>
            <DynamicIcon name={icon} />
          </Badge>
        </Col>
        <Col>
          <p className='font-bold text-lg'>{value}</p>
          <p className='text-secondary font-semibold'>{label}</p>
        </Col>
      </Row>
    </li>
  );
};

export const ListItemHorizontal: React.FC<ListItemProps> = ({ icon, label, value }) => {
  return (
    <li>
      <Row className='items-center justify-between'>
        <Col>
          <div className='flex items-center text-secondary'>
            <DynamicIcon name={icon} className='me-1.5' />
            <span className='font-medium'>{label}</span>
          </div>
        </Col>
        <Col>
          <p className='font-bold text-lg text-end'>{value}</p>
        </Col>
      </Row>
    </li>
  );
};
