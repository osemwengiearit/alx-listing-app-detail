// components/common/Card.tsx

import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
