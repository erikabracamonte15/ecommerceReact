import { useState, useEffect } from "react"
import { getProductById } from "../AsyncMock/AsyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    const { productId } = useParams()
  

    useEffect (()=> {
        getProductById(productId).then(response => {
        
            setItem(response)
        })
    },[productId])

    
    return (
        <div className="ItemDetailContainer"> 
            <ItemDetail item={item}/>
            
        </div>
    
    )
}

export default ItemDetailContainer