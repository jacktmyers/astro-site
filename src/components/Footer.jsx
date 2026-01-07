import { useState } from 'react';
import useMobile from './Resizer';"../components/Resizer.jsx"
import "../styles/Footer.scss"

function Magnify(){
    const [magnifyHovered, setMagnifyHovered] = useState(false);
    const [magnifyLevel, setMagnifyLevel] = useState(1);
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
                    let newMagnify = (magnifyLevel% 3) + 1;
                    document.documentElement.style.setProperty("--scaleFactor", `${1+(newMagnify - 1)*.25}`);
                    setMagnifyLevel(newMagnify);
                }}
            />
        </div>
    )
}

function SourceCode(){
    return (
        <div id="sourceCode">
            <p>See the&#160;</p> <a href="https://github.com/jacktmyers/jacktmyers.github.io"><p>SOURCE CODE.</p></a>
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