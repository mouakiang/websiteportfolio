import { unica } from '../font/fonts';
import './learnmore.css';

export default function LearnMore() {
    return (
        <main>
            <div>
                <h1 className={`${unica.className} text-blue-400 text-2xl`}>
                    Learn More
                </h1>
            </div>
            <div className="arrow mt-96">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </main>
    );
}
