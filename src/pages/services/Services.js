import SectionSeparator from '../../components/SectionSeparator';
import Service from './service/Service';

import GroomImg from '../../img/yellow_dog.jpg';
import BathImg from '../../img/chien.jpg';
import ExpresshImg from '../../img/landing-chien.png';
import CarteImg from '../../img/spitz-allemand.jpg';

export default function Services() {
    const servicesList = [
        {
            type: 'Full service',
            name: 'Groom',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias vero beatae ipsa harum corrupti illo?',
            image: GroomImg
        },
        {
            type: 'Full service',
            name: 'Bath',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, molestiae.',
            image: BathImg
        },
        {
            type: 'GoGo',
            name: 'Express',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet ex delectus perferendis quis!',
            image: ExpresshImg
        },
        {
            type: 'Service',
            name: 'A la carte',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores ducimus quia et delectus!',
            image: CarteImg
        }

    ];

    return (
        <>
            <SectionSeparator>Services</SectionSeparator>
            <div className="col">
                <div className="row services d-flex flex-wrap">
                    {
                        servicesList && servicesList.map(s => <Service data={s} key={s.name}/>)      
                    }
                </div>
            </div>
        </>
    );
}
