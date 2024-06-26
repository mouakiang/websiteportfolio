'use client';
import TopNav from '../components/topnav/topnav';
import ResumeButton from '../components/buttons/resumebutton';
import LearnMore from '../components/learnmore/learnmore';
import { sofia, playfair, rainbow } from '../components/font/fonts';
import Bubble from '../components/bubbles/bubble';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './home.css';

export default function Home() {
    const [showAbout, setShowAbout] = useState(false);

    const handleChange = () => {
        setShowAbout(true);
    };
    return (
        <>
            <section id="home">
                <div className="bg-gradient-to-t from-cyan-300 to-cyan-50 h-screen relative overflow-hidden">
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
                        <LearnMore onClick={handleChange} />
                    </div>
                </div>
            </section>
            <motion.section
                id="about"
                initial={{ x: '100vw' }}
                animate={{ x: showAbout ? 0 : '100vw' }}
                transition={{ type: 'tween', ease: 'easeInOut', duration: 2 }}
                className="absolute top-0 left-0 w-full h-screen bg-white"
                style={{ zIndex: showAbout ? 1 : -1 }}
            >
                <div>
                    <h1 className="text-7xl text-center">What I Do?</h1>
                </div>
            </motion.section>
        </>
    );
}
