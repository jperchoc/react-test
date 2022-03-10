import SectionSeparator from "../../components/SectionSeparator";

import GroomImg from '../../img/yellow_dog.jpg';
import BathImg from '../../img/chien.jpg';
import ExpresshImg from '../../img/landing-chien.png';
import CarteImg from '../../img/spitz-allemand.jpg';


export default function Gallery() {
    const getRandomImage = () => {
        const items = [GroomImg, BathImg, ExpresshImg, CarteImg]
        return items[Math.floor(Math.random()*items.length)];
    }
    const ROWS = 4;
    const COLS = 4;
    return <>
        <SectionSeparator>Gallerie</SectionSeparator>
        <div className="row">
            <div className="col">
                {[...Array(ROWS)].map(() => 
                    <div className="row">
                        {[...Array(COLS)].map(() => 
                                <div className="col">
                                    <img src={getRandomImage()} className="img-fluid rounded m-1"/>
                                </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </>
}