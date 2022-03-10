export default function Service(props) {
    return (
        <div className="service col">
            <div className="info">
                <div className="service-title-1">{props.data.type}</div>
                <div className="service-title-2">{props.data.name}</div>
                <div className="service-description">{props.data.description}</div>
            <a href="#">More</a>
            </div>
            <img src={props.data.image} className="img-fluid"
            />
        </div>
    )
}