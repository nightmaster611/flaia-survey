import { ReactPropsWithChildren } from '@/types/common';
import React from 'react';
import { ButtonProps } from './button';

const Button: ReactPropsWithChildren<ButtonProps> = ({
  children,
  bgColor,
  color,
  style,
  ...props
}) => {
  return (
    <div className="inline-block bg-primary text-white overflow-hidden rounded-md text-sm opacity-100 hover:opacity-90 transition-opacity">
      <button
        {...props}
        style={{
          padding: '4px 15px',
          height: 32,
          borderRadius: 6,
          ...(style || {}),
          backgroundColor: bgColor,
          color
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default React.memo(Button);
