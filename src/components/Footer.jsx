import { useState, useEffect } from 'react';
import useMobile from './Resizer';
import "../styles/Footer.scss"

function Magnify(){
    const [magnifyHovered, setMagnifyHovered] = useState(false);
    const [magnifyLevel, setMagnifyLevel] = useState(() => {
        const saved = localStorage.getItem('magnifyLevel');
        return saved ? parseInt(saved) : 1;
    });
    const scaleLookUp = [1, 1.25, 1.5];
    const desktopGridLookUp = [5,4,4]
    const mobileGridLookUp = [2,1,1]

    useEffect(() => {
        document.documentElement.style.setProperty("--scaleFactor", `${scaleLookUp[magnifyLevel - 1]}`);
        document.documentElement.style.setProperty("--mobileRowCount", `${mobileGridLookUp[magnifyLevel - 1]}`);
        document.documentElement.style.setProperty("--desktopRowCount", `${desktopGridLookUp[magnifyLevel - 1]}`);
    }, []);

    useEffect(() => {
        localStorage.setItem('magnifyLevel', magnifyLevel.toString());
    }, [magnifyLevel]);

    return(
        <div className="magnifyParent">
            <img 
                id="magnifyIcon" 
                src = "/magnify.png"
            />
            <img 
                id="magnifyLevel" 
                src={`/${magnifyLevel}${magnifyHovered ? "Pushed" : ""}.png`}
                onMouseEnter={() => setMagnifyHovered(true)}
                onMouseLeave={() => setMagnifyHovered(false)}
                onClick = {() => {
                    let newMagnify = (magnifyLevel % 3) + 1;
                    document.documentElement.style.setProperty("--scaleFactor", `${scaleLookUp[newMagnify - 1]}`);
                    document.documentElement.style.setProperty("--mobileRowCount", `${mobileGridLookUp[newMagnify - 1]}`);
                    document.documentElement.style.setProperty("--desktopRowCount", `${desktopGridLookUp[newMagnify - 1]}`);
                    setMagnifyLevel(newMagnify);
                }}
            />
        </div>
    )
}

function SourceCode(){
    return (
        <div id="sourceCode">
            <p>See the&#160;</p> <a href="https://github.com/jacktmyers/astro-site"><p>SOURCE CODE.</p></a>
        </div>
    )
}

function Socials(){
    const [gitHovered, setGitHovered] = useState(false);
    const [linkedInHovered, setLinkedInHovered] = useState(false);
    return (
        <div id = "socials">
            <a href="https://www.linkedin.com/in/jack-myers-aab6811b6">
                <img 
                    id="linkedin" 
                    src={linkedInHovered ? "/linkedInLogoPushed.png" : "/linkedInLogo.png"}
                    onMouseEnter={() => setLinkedInHovered(true)}
                    onMouseLeave={() => setLinkedInHovered(false)}
                />
            </a>
            <a href="https://github.com/jacktmyers">
                <img 
                    id="github"
                    src={gitHovered ? "/githubLogoPushed.png" : "/githubLogo.png"}
                    onMouseEnter={() => setGitHovered(true)}
                    onMouseLeave={() => setGitHovered(false)}
                />
            </a>
        </div>
    )
}

export default function Footer() {
    const isMobile = useMobile();
    if (isMobile){
        return (
            <div className="footer mobile">
                <div className = "footerMobileChild">
                    <Magnify></Magnify>
                    <Socials></Socials>
                </div>
                <SourceCode></SourceCode>
            </div>
        );
    } else {
        return (
            <div className="footer">
                <Magnify></Magnify>
                <SourceCode></SourceCode>
                <Socials></Socials>
            </div>
        );
    }
}