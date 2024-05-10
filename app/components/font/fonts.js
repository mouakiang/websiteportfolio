import { Sofia, Playfair, Over_the_Rainbow } from 'next/font/google';

const sofia = Sofia({
    subsets: ['latin'],
    weight: ['400'],
});

const playfair = Playfair({
    subsets: ['latin'],
    weight: ['400'],
});

const rainbow = Over_the_Rainbow({
    subsets: ['latin'],
    weight: ['400'],
});

export { sofia, playfair, rainbow };
