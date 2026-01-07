import { useState, useEffect } from 'react';

function getIsMobile() {
    const { innerWidth: width, innerHeight: height} = window;
    const aspectThresh = 8/9;
    return (width/height < aspectThresh);
}

export default function useMobile() {
    const [isMobile, setIsMobile] = useState(getIsMobile());
    
    useEffect(() => {
        function handleResize() {
            setIsMobile(getIsMobile());
        }
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return isMobile;
}