import React from "react";

interface FlipCardProps {
  imageUrl: string;
  frontText: string;
  backText: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imageUrl,
  frontText,
  backText,
}) => {
  return (
    <div className="group w-full sm:w-[350px] md:w-[400px] lg:w-[560px] h-[250px] md:h-[300px] [perspective:1000px] mx-auto">
      <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side: Image with Text */}
        <div
          className="absolute w-full h-full bg-cover bg-center text-white flex justify-center items-end text-lg sm:text-xl font-bold [backface-visibility:hidden] rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="bg-black bg-opacity-70 uppercase p-3 rounded m-4">
            {frontText}
          </div>
        </div>

        {/* Back Side: Black background with description */}
        <div className="absolute w-full h-full bg-black text-white flex justify-center items-center text-sm sm:text-base md:text-lg font-medium [transform:rotateY(180deg)] [backface-visibility:hidden] rounded-lg shadow-lg p-4">
          <div className="text-center">{backText}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
