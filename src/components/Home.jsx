import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import Typed from '../components/Typed.jsx';
import PixelAccent from '../components/PixelAccent.jsx'
import useMobile from './Resizer';
import '../styles/Home.scss'
import '../styles/Global.scss'
import { useEffect, useState } from 'react';


function homeMobileSwitch(isMobile){
    if (isMobile){
        return (
            <div className="mobileHomeCenterParent">
                <Typed client:visible text="WELCOME" />
                <div className="homeCenter mobile">
                    <img className="headshot mobile" src="/home/headshot.png"/>
                    <div className="column mobile">
                        <div className="navButtons">
                            <p>
                                Click one of the
                                options below
                                to see some
                                cool stuff
                                I have worked on.
                                Enjoy!
                            </p>
                            <div className = "pinkButton">
                                <a href="/engineering">ENGINEERING</a>
                            </div>
                            <div className = "pinkButton">
                                <a href="/metals">METALS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className="homeCenter desktop">
                <img className="headshot desktop" src="/home/headshot.png"/>
                <div className="column">
                    <Typed client:visible text="WELCOME" />
                    <div className="navButtons">
                        <p>
                            Click one of the options below<br/>
                            to see some cool stuff<br/>
                            I have worked on. Enjoy!
                        </p>
                        <div className = "pinkButton">
                            <a href="/engineering">ENGINEERING</a>
                        </div>
                        <div className = "pinkButton">
                            <a href="/metals">METALS</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function Home(){
    const isMobile = useMobile();
    const homeChild = homeMobileSwitch(isMobile);

    return (
        <div className="main">
            <Banner sticky={false} client:load />
            <div className="homeParent">
                <div className="borderElements">
                    <PixelAccent num={3} flipX={-1}></PixelAccent>
                    <PixelAccent num={0}></PixelAccent>
                    <PixelAccent num={3} flipX={-1} flipY={-1}></PixelAccent>
                </div>
                {homeChild}
                <div className="borderElements">
                    <PixelAccent num={3}></PixelAccent>
                    <PixelAccent num={0}></PixelAccent>
                    <PixelAccent num={3} flipY={-1}></PixelAccent>
                </div>
            </div>
            <Footer client:load />
        </div>
    )
}