import { useState, useEffect } from "react"
import { getProductById } from "../AsyncMock/AsyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()
  

    useEffect (()=> {
     
        getProductById(productId).then(response => {
            setProduct(response)
        })
            
    },)

    
    return (
        <div className="ItemDetailContainer"> 
            <ItemDetail {...product} />
            
        </div>
    
    )
}

export default ItemDetailContainer