import './ItemCount.css'

const ItemCount = () => {
    return (
        <div className="itemCount">
            <div>
                <h3>Artículos</h3>
                <div className="controls">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
                
            </div>
            <div className='button'>
            <button className="addButton">Agregar al carrito</button>
            </div>
                      
        </div>
    )
}

export default ItemCount