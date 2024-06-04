'use client';
import styles from './bubble.module.css';
import { useState, useEffect } from 'react';

interface SingleBubbleProps {
    style: React.CSSProperties;
}

function SingleBubble({ style }: SingleBubbleProps) {
    return <div className={styles.bubble} style={style} />;
}

export default function Bubble() {
    const [bubbles, setBubbles] = useState<null[]>([]);
    const [minSize, setMinSize] = useState(60);

    useEffect(() => {
        setBubbles(
            Array(
                window.innerWidth > 480 ? 40 : window.innerWidth > 320 ? 10 : 8
            ).fill(null)
        );
        setMinSize(
            window.innerWidth > 768 ? 60 : window.innerWidth > 480 ? 40 : 20
        );
    }, []);

    return (
        <div className={`${styles.bubble}`}>
            {bubbles.map((_, index) => {
                const size = minSize + Math.random() * 50;
                const style = {
                    left: `${Math.random() * 100}vw`,
                    top: `${Math.random() * 100}vh`,
                    right: `${Math.random() * 100}vw`,
                    bottom: `${Math.random() * 100}vh`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDelay: `${Math.random() * 10}s`,
                };
                return <SingleBubble key={index} style={style} />;
            })}
        </div>
    );
}
