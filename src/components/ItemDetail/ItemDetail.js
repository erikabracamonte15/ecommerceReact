import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        
        <div className="ItemDetail">
            <img src={item.img} alt={item.category}></img>
            <div className='info'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <h3>Precio: ${item.price}</h3>
                <p>Stock: {item.stock}</p>
                <button>Comprar</button>
            </div>         

        </div>    

    )
}


export default ItemDetail


