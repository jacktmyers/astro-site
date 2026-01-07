import { useState } from 'react';
import "../styles/Banner.scss"

export default function Banner() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="banner">
      <a href="https://www.jacktmyers.com">
        <img 
          src={isHovered ? "/websiteNamePushed.png" : "/websiteName.png"}
          alt="JACKTMYERS.COM"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </a>
    </div>
  );
}