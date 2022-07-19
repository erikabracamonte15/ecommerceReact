const products = [
    {
        id: '1',
        name: 'Anillo Azul',
        price: 500,
        category: 'anillos',
        img: '/images/anilloAzul.jpg',
        stock: 10,
        description: 'Anillo de plata con piedra azul'

    },
    {id: '2', name: 'Pendiente Perla', price: 300, category: 'pendientes', img: '/images/pendientePerlas.jpg', stock: 6, description: 'Pendientes con perlas' },
    {id: '3', name: 'Pulsera Inicial', price: 1000, category: 'pulseras', img:'/images/pulseraInicial.jpg', stock: 20, description: 'Pulsera dorada con inicial'},
    {id: '4', name: 'Colgante Inicial', price: 1500, category: 'colgantes', img: '/images/colganteInicial.jpg', stock: 15, description: 'Colgante dorado con inicial'}

]

export const getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(products)
        }, 2000)

    })
}

export const getProductById = (productId) => {
    return new Promise (resolve => {
        setTimeout (()=> {
            resolve (products.find(prod => prod.id === productId))
        }, 2000)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}