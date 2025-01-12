import PropTypes from 'prop-types'

function Card(props){
    return(
        <div className="card"> 
            <img className="card-image" src={props.image} alt="fruit image"></img>
            <h2 className='card-title' style={{color: props.color}}>{props.name}</h2>
            <p className='card-text' style={{color: props.color}}>{props.text} <br></br> Price: {props.price} $</p>
        </div>
    );
}

Card.PropTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    color: PropTypes.string,
    price: PropTypes.number
}

Card.defaultProps = {
    name: "Fruit",
    color: "black",
    price: 1
}
 
export default Card;