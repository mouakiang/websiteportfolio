import Link from 'next/link';
export default function TopNav() {
    return (
        <main>
            <div>
                <div className="flex flex-row justify-end space-x-5 pt-5 text-white pr-20 md:h-auto">
                    <Link href="/home">HOME</Link>
                    <Link href="/about">ABOUT</Link>
                    <Link href="/projects">PROJECTS</Link>
                </div>
                <div className="my-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-100 dark:via-neutral-50"></div>
            </div>
        </main>
    );
}