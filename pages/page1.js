import Icon from '../static/icon.png';
import Link from 'next/link';
import Head from 'next/head';

const page1 = () => {
    return (
        <div>
            <style jsx>
                {
                    `
                    p {
                        color: blue;
                        font-size: 3rem;
                    }`
                }
            </style>
            <Link href="page2" passHref>
                <a>
                    page2로
                </a>
            </Link>
            <p>page1</p>
            <img src={Icon}></img>
            <Head>
                <meta name="description" content="hello world" />
            </Head>

        </div>
    )
}

export default page1;