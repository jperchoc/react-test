import SectionSeparator from "../../components/SectionSeparator";
import photo from '../../img/photo.jpg'
export default function About() {
    return (
        <>
            <SectionSeparator>A propos</SectionSeparator>
            <div className="row  align-items-center">
                <div className="col">
                    <img src={photo} className="about-photo img-fluid rounded" />
                    <span className="mx-auto font-italic d-inline-block text-center w-100 mt-1">J'adore rire !</span>
                </div>
                <div className="col">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, excepturi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos impedit suscipit, assumenda commodi veritatis, mollitia iusto, libero illum placeat quaerat cupiditate. Quo quod minus ratione qui ducimus, earum eius molestias numquam nostrum est at modi expedita voluptas quos odit architecto?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, deserunt! Nesciunt dolorem, placeat nostrum nisi eius voluptate non blanditiis dolores quis totam? Placeat sit nam ad officia soluta asperiores incidunt.</p>
                </div>
            </div>
        </>
    );
}