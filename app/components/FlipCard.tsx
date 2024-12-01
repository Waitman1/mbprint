import React from "react";

interface FlipCardProps {
  frontText: string;
  backText: string;
  imageUrl: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontText,
  backText,
  imageUrl,
}) => {
  return (
    <div className="group relative w-64 h-64 perspective">
      {/* Карточка */}
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Передняя сторона */}
        <div className="absolute inset-0 backface-hidden">
          <img
            src={imageUrl}
            alt="Front"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 w-full text-center bg-black bg-opacity-50 text-white py-2 rounded-b-lg">
            {frontText}
          </div>
        </div>
        {/* Задняя сторона */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-gray-800 text-white flex items-center justify-center rounded-lg shadow-lg">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
