import Typed from '../components/Typed.jsx';
import PixelAccent from '../components/PixelAccent.jsx'
import useMobile from './Resizer.jsx';

function pixelAccents(isMobile){

}

export default function PageHeader({text}){
    const isMobile = useMobile()

    if (isMobile){
        return(
            <div className='pageHeader'>
                <div className='mobileAccents'>
                    <PixelAccent random={true} ></PixelAccent>
                    <PixelAccent random={true} ></PixelAccent>
                    <PixelAccent random={true} ></PixelAccent>
                </div>
                <Typed client:visible text={text} />
            </div>
        )
    } else {
        return(
            <div className='pageHeader'>
                <Typed client:visible text={text} />
                <PixelAccent random={true} ></PixelAccent>
                <PixelAccent random={true} ></PixelAccent>
                <PixelAccent random={true} ></PixelAccent>
            </div>
        )
    }
}