import TopNav from '../components/topnav/topnav';
import ResumeButton from '../components/buttons/resumebutton';
import LearnMore from '../components/learnmore/learnmore';
import { sofia, playfair, rainbow } from '../components/font/fonts';
import Bubble from '../components/bubbles/bubble';

export default function Home() {
    return (
        <>
            <main>
                <div className="bg-gradient-to-t from-cyan-50 to-cyan-300 h-screen relative overflow-hidden">
                    <div>
                        <TopNav />
                    </div>
                    <div>
                        <Bubble />
                    </div>
                    <div className="mt-60 mb-40 flex flex-col md:flex-row justify-center md:items-start items-center">
                        <div>
                            <p
                                className={`${sofia.className} text-blue-700 text-8xl md:text-8xl mr-4`}
                            >
                                Hello,{' '}
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <p
                                className={`${playfair.className} text-white text-3xl md:text-3xl mt-4`}
                            >
                                my name is Kia. I am a <br />
                            </p>
                            <p
                                className={`${rainbow.className} text-white text-4xl tracking-wide rmd:text-4xl pl-2`}
                            >
                                Software Engineer.
                            </p>
                            <div className="mt-4">
                                <ResumeButton />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-40">
                        <LearnMore />
                    </div>
                </div>
            </main>
        </>
    );
}
