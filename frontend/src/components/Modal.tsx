import React, { useEffect } from 'react';
import { DynamicIcon } from './DynamicIcon';
import { cn } from '@/configs/cn';

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean;
  onClose: () => void;
};

type ModalHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  onClose?: () => void;
};
type ModalTitleProps = React.HTMLAttributes<HTMLHeadingElement> & { tag?: TitleTag };
type ModalBodyProps = React.HTMLAttributes<HTMLDivElement>;
type ModalFooterProps = React.HTMLAttributes<HTMLDivElement>;

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Tutup modal dengan tombol ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-fadeIn',
      )}
    >
      <div className='bg-white rounded-xl overflow-hidden shadow-lg w-full max-w-md animate-fadeIn'>{children}</div>
    </div>
  );
};

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, onClose, className, ...props }) => {
  return (
    <div className={cn('flex items-center justify-between bg-dark p-4', className)} {...props}>
      {children}
      {onClose && (
        <button onClick={onClose} className='p-0 rounded-md transition-colors cursor-pointer'>
          <DynamicIcon name='CloseCircle' className='text-white' />
        </button>
      )}
    </div>
  );
};

export const ModalTitle: React.FC<ModalTitleProps> = ({ children, className, tag: Tag = 'h2', ...props }) => {
  return (
    <Tag className={cn('text-lg font-semibold text-white', className)} {...props}>
      {children}
    </Tag>
  );
};

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn('p-4 text-gray-700', className)} {...props}>
      {children}
    </div>
  );
};

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn('flex justify-end gap-3 border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl', className)}
      {...props}
    >
      {children}
    </div>
  );
};
