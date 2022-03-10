import SectionSeparator from "../../components/SectionSeparator";
import contactImage from "../../img/contact.jpg";
export default function Contact() {
    return (
        <>
            <SectionSeparator>On se bigophone ?</SectionSeparator>
            <div className="row">
                <div className="col">
                <img src={contactImage} className="img-fluid" />
                </div>
                <div className="col">
                    <a className="phone d-flex align-items-center" href="tel:+33123456789">
                        <span className="material-icons mr-2">call</span>01.23.45.67.89
                        </a>
                        <a className="mail d-flex align-items-center mt-1" href="mailto:toto@pwet.com">
                        <span className="material-icons mr-2">mail</span>toto@pwet.com
                        </a>
                </div>
            </div>
        </>
    )
}