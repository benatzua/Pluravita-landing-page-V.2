
import React from 'react';

interface LogoProps {
  className?: string;
  isLight?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isLight = false }) => {
  const textColor = isLight ? "text-white" : "text-[#4a3728]";
  const leafColor = isLight ? "fill-white" : "fill-[#9a7b5c]";

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <svg 
        width="24" 
        height="14" 
        viewBox="0 0 24 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mb-0.5"
      >
        <path 
          d="M11.5 13C11.5 13 6 12 3 7C0 2 2 0 2 0C2 0 5 1 8 5C11 9 11.5 13 11.5 13Z" 
          className={leafColor}
        />
        <path 
          d="M12.5 13C12.5 13 18 12 21 7C24 2 22 0 22 0C22 0 19 1 16 5C13 9 12.5 13 12.5 13Z" 
          className={leafColor}
        />
      </svg>
      <span className={`font-serif-logo logo-text ${textColor}`}>pluravita</span>
    </div>
  );
};

export default Logo;
