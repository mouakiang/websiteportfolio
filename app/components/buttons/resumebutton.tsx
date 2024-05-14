import { playfair } from '../font/fonts';

export default function ResumeButton() {
    return (
        <main>
            <div>
                <a
                    className={`${playfair.className} bg-blue-700 text-white rounded-full p-2 pr-4 pl-4`}
                    href="/resume.pdf"
                    target="_blank"
                >
                    Resume
                </a>
            </div>
        </main>
    );
}
