import './ItemListContainer.css'
import { useState, useEffect } from "react"
import { getProducts } from "../AsyncMock/AsyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../AsyncMock/AsyncMock'


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()
  

    useEffect (()=> {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    if(loading) {
        return <img  src='https://i.gifer.com/YCZH.gif' alt='loading'></img>
    }

    
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>  
            <ItemList products={products}/>
            
        </div>
    
    )
}

export default ItemListContainer