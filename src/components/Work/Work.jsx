import React from 'react';
import Me from "../../img/me.jpg"
import "./Work.scss"
import WorkItem from "./components/WorkItem"
const Work = () => {

    const data = [
        {
            imgUrl: 'https://scontent.fdad1-3.fna.fbcdn.net/v/t1.15752-9/263979241_1047407329437955_5052726459763103301_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kK8Re49kfPIAX-mRDGC&_nc_ht=scontent.fdad1-3.fna&oh=9848c0aff3aff635217e5f55b02caa4e&oe=61D3D6ED',
            desc: 'mini Tiki',
            workUrl: 'https://clone-tiki-six.vercel.app/products?_limit=9&_page=1&_sort=salePrice%3AASC&category.id=5&isFreeShip=false&isPromotion=false',
        },
        {
            imgUrl: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.15752-9/263357944_335675747933481_158498394326775149_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=5EGgMlx3t3kAX_ocMfn&_nc_ht=scontent-sin6-2.xx&oh=57ca37ea2f56b22037314c984d9a2a28&oe=61D483B6',
            desc: 'mini Nextflix',
            workUrl: 'https://nextflix-pearl.vercel.app/',
        },
        {
            imgUrl: 'https://scontent-sin6-2.xx.fbcdn.net/v/t1.15752-9/263210209_1064796644089653_3957401450801207992_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JsEM5G0TfI8AX9Q9Kdj&tn=g5Lc4Uunlj9mNT37&_nc_ht=scontent-sin6-2.xx&oh=970b9f358e4da0b4547040b76d4c201e&oe=61D57DC4',
            desc: 'LaslesVPN',
            workUrl: 'https://ldp-github.vercel.app/',
        },
        {
            imgUrl: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t1.15752-9/263246205_1538960636465185_5774976576716284365_n.png?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_OIqy81612sAX8UeAHh&_nc_ht=scontent.fdad1-2.fna&oh=522751a77d92ac65ea6e2e5e46fb6bf9&oe=61D36E67',
            desc: 'Craft Fake',
            workUrl: 'https://hwangsoon14.github.io/',
        },
    ]

    return (
        <div className="w">
            <div className="w-wrapper">
                <div className="w-text">
                    <h1>My Works</h1>
                    <div className="a-border a-top"></div>
                    <div className="a-border a-left"></div>
                    <div className="a-border a-right"></div>
                    <div className="a-border a-bottom-left"></div>
                    <div className="a-border a-bottom-right"></div>
                </div>
                <ul classNam="w-list">
                    {data.map((i,idx) => (
                        <li key={idx}>
                            <WorkItem imgUrl={i.imgUrl} desc={i.desc} workUrl={i.workUrl}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Work;