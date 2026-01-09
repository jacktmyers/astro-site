import { useState, useEffect } from 'react';
import '../styles/Typed.scss'

export default function Typed({text}) {
    const [index, setIndex] = useState(0);
    const [cursor, setCursor] = useState("");

    const cursorChar = "_";
    const finalSpeed = 600;
    const initialSpeed = 100;

    useEffect(() => {
        let timer;
        if (index < text.length) {
            timer = setTimeout(() => {
                setIndex(index+1)
            }, initialSpeed);
        } else if (cursor !== ""){
            timer = setTimeout(() => {
                setCursor("")
            }, finalSpeed);
        } else {
            timer = setTimeout(() => {
                setCursor(cursorChar)
            }, finalSpeed);
        }
        return () => clearTimeout(timer);
    }, [index, cursor]) 

    return (
        <div className="typedParent">
            <h1 className="typed">
                {text.substring(0, index) + cursor}
                <span className="invisible">
                    {text.substring(index, text.length) + (cursor == "" ? cursorChar : "")}
                </span>
            </h1>
        </div>
    );
}
