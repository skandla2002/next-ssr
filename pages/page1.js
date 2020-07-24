import React from 'react'
import icon from '../static/icon.png';
import Link from 'next/link';

const page1 = () => {
    return (
        <div>
            <Link href="page2" passHref>
                <a>
                    page2로
                </a>
            </Link>
            <p>page1</p>
            <img src={icon}></img>
        </div>
    )
}

export default page1;