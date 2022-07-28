import Head from 'next/head';

import Hero from '../components/Hero';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hulu Clone Example</title>
                <link rel='icon' href='' />
            </Head>
        
            <Hero />
        </div>
    );
}
