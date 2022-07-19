import './ItemDetail.css'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';

const ItemCount = ({onConfirm, stock, initial = 0}) => {
   
    const [count, setCount] = useState(initial);
    
    const decrement = () => {
        if(count > initial)
        setCount (count - 1)

    }

    const increment = ()=> {
        if(count < stock)
        setCount(count + 1);
    }

    

    return (
        <div className="itemCount">
            <div className='controls'>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>         
            
            <button className="button" onClick={()=> onConfirm(count)}>Agregar al carrito</button>
        </div>               
    )
               
}

const ItemDetail = ({id, name, price, category, img, stock, description}) => {
    
    const [quantity, setQuantity] = useState(0)
    
    const { addItem} = useContext(Context)

    const onAdd = (count)=> {
        
        console.log(`tienes ${count} items en el carrito`)
        setQuantity(count)
       addItem({id, name, price, quantity})
    }

    return (
        
        <div className="ItemDetail">
            <img src={img} alt={category}></img>
            <div className='info'>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>Precio: ${price}</h3>
                <p>Stock: {stock}</p>
                { quantity > 0 ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount stock={stock} onConfirm={onAdd}/> }
                
            </div>         

        </div>    

    )
}


export default ItemDetail


