import React, { useState, useEffect, useRef } from "react";

interface AnimatedNumberProps {
  endValue: number;
  duration: number; // Duration of the animation in ms
  unit?: string; // Optional unit (e.g., "years", "projects", "$")
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  endValue,
  duration,
  unit,
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after visibility is detected
        }
      },
      { threshold: 0.5 } // Trigger when at least 50% of the element is visible
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      observer.disconnect(); // Cleanup observer when component unmounts
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now();

      const interval = setInterval(() => {
        const timePassed = Date.now() - startTime;
        const progress = Math.min(timePassed / duration, 1);
        setCurrentValue(Math.floor(progress * endValue));

        if (timePassed >= duration) {
          clearInterval(interval);
        }
      }, 30); // Update every 30ms for a smooth animation
    }
  }, [isVisible, endValue, duration]);

  return (
    <div ref={numberRef} className="text-4xl font-bold text-black">
      {currentValue}
      {unit}
    </div>
  );
};

export default AnimatedNumber;
