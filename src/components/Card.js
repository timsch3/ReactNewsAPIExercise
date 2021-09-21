const Card = (props) => {
    return (
        <div id='card'>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.title} />
            <p>{props.description} <a href={props.url} target='_blank'>Read more</a></p>
        </div>
    );
}

export default Card;