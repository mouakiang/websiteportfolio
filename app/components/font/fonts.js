import { Sofia, Playfair, Over_the_Rainbow, Unica_One } from 'next/font/google';

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

const unica = Unica_One({
    subsets: ['latin'],
    weight: ['400'],
});

export { sofia, playfair, rainbow, unica };
