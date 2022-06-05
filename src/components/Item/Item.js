import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, name, price, category, img, stock, description}) => {
    return (
        <div className="Item">           
            <h2>{name}</h2>
            <img src={img} alt={category}></img>
            <p>{description}</p>
            <h3>${price}</h3>
            <Link to={`./detail/${id}`}>
                <button>Ver detalle</button>
            </Link>                 
           
        </div>

    )
}

export default Item