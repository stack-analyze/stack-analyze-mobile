import { RevealDocs } from '@/interfaces/revealLinkDocs';

const revealLinks: RevealDocs[] = [
    {
        title: 'bitly reveal',
        info: `To reveal bitly shortened sites, there are two ways to use them.

The first is every time you type, for example. http://bit.ly/Wn2Xdz At the end, you must put the plus symbol (+) to reveal the link info.

The second way is that the same stack-analyze has its own tool to reveal the bitly site without using http:// or https://example: bit.ly/Wn2Xdz because we use the bitly api.
        `,
        links: [
            {
                url: 'https://support.bitly.com/hc/en-us/articles/230650447-Can-I-preview-a-link-before-clicking-on-it-',
                title: 'bitly reveal docs',
                color: 'primary'
            },
            {
                url: '/info/bitly',
                title: 'bitly info tool',
                color: 'secondary'
            }
        ]
    },
    {
        title: 'tinyurl reveal',
        info: `Tinyurl also has its own method for both apis and browsers. For now, I can only show the browser, for example. https://tinyurl.com/y6wzdc4q Before tinyurl, you put the following preview. This way it is "https://preview.tinyurl.com/y6wzdc4q".
        `,
        links: [
            {
                url: 'https://www.howtogeek.com/howto/internet/firefox/how-to-see-where-a-tinyurl-is-really-linking-to/',
                title: 'tinyurl how to preview',
                color: 'primary'
            }
        ]
    },
    {
        title: 'cuttly reveal',
        info: `Cuttly also has a similar method to Bitly's browser, although it also has its own API, I haven't implemented it yet. It has two ways of revealing links:
The first is that at the end of your site, you should put a @ example: https://cutt.ly/sFLnm2c@
The second one is by that link "https://cutt.ly/verify". You can also check if the use of @ is not a good way to reveal links.
This was my own research and not taken from an external site.
        `,
        links: [
            {
                url: 'https://cutt.ly/verify',
                title: 'cuttly verify',
                color: 'primary'
            }
        ]
    },
    {
        title: 'bit.do reveal',
        info: `The way of revealing bit.do is similar to the previous ones, so I didn't investigate if it has an API or not, but I also realised that it is dangerous because it extracts the info it uses from the shortened site the same as bitly and cuttly, with the difference that it uses the minus symbol (-). e.g.: http://bit.do/test-
        `,
        links: [
            {
                url: 'https://bit.do/faq/',
                title: 'bitdo faq',
                color: 'primary'
            }
        ]
    },
];

export default revealLinks;
