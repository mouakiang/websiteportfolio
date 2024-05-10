import TopNav from '../components/topnav/topnav';
import { sofia, playfair, rainbow } from '../components/font/fonts';

export default function Home() {
    return (
        <main>
            <div className="bg-gradient-to-t from-cyan-50 to-cyan-300 h-screen">
                <div>
                    <TopNav />
                </div>
                <div className="mt-60 flex justify-center">
                    <div>
                        <p
                            className={`${sofia.className} text-blue-700 text-8xl mr-4`}
                        >
                            Hello,{' '}
                        </p>
                    </div>
                    <div>
                        <p
                            className={`${playfair.className} text-white text-3xl mt-4`}
                        >
                            my name is Kia. I am a <br />
                        </p>
                        <p
                            className={`${rainbow.className} text-white text-4xl tracking-wide`}
                        >
                            Software Engineer.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
