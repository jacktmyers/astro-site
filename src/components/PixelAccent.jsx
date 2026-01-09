import { useState, useEffect } from 'react';

export default function PixelAccent({
    num=-1,
    random=false,
    animate=false,
    speed=700,
    flipX = 1,
    flipY = 1,
    rotate = 0
}) {
    const maxValue = 26;
    const [flipXState, setFlipX] = useState(flipX);
    const [flipYState, setFlipY] = useState(flipY);
    const [numState, setSelected] = useState(num);
    const [rotateState, setRotate] = useState(rotate)
    const [tick, setTick] = useState(0); 

    let setRandom = () => {
        setSelected(Math.floor(Math.random() * (maxValue+1)));
        setFlipX(Math.floor(Math.random()*2)*-2 + 1);
        setFlipY(Math.floor(Math.random()*2)*-2 + 1);
        setRotate(Math.floor(Math.random()*2)*90);
    }

    useEffect(() => {
        if (random){
            setRandom()
        }

        if (animate) {
            const timer = setTimeout(() => {
                setTick(tick + 1)
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [tick]);
    
    return (
        <img
            className='pixelAccent'
            src={numState == -1 ? "/accents/blank.png" : `/accents/${numState}.png`}
            style={{transform: `scale(${flipXState}, ${flipYState}) rotate(${rotateState}deg)`}}
        ></img>
    );
}