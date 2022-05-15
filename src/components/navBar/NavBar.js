import './NavBar.css'


const NavBar = () =>{
    return (
        <nav className='NavBar'>
            <h1 className='nav-logo'>Joyitas</h1>
            <div className='items'>
                <a href='' >Anillos</a>
                <a href=''>Pendientes</a>
                <a href=''>Pulseras</a>
                <a href=''>Collares</a>
                <a href=''>Contacto</a>

            </div>
        </nav>
    )
}

export default NavBar