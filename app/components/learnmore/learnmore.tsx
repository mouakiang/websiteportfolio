'use client';
import { unica } from '../font/fonts';
import Link from 'next/link';
import './learnmore.css';

interface LearnMoreProps {
    onClick: () => void;
}

export default function LearnMore({ onClick }: LearnMoreProps) {
    return (
        <main>
            <div onClick={onClick}>
                <h1 className={`${unica.className} text-blue-400 text-2xl`}>
                    Learn More
                </h1>
            </div>
            <Link href="#about" className="arrow mt-96">
                <span></span>
                <span></span>
                <span></span>
            </Link>
        </main>
    );
}
