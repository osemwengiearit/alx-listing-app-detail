// components/common/Button.tsx

import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-2xl text-white font-medium transition-all duration-200
        ${
          disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'
        }`}
    >
      {label}
    </button>
  );
};

export default Button;
