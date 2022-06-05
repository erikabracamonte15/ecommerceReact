import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () =>{
    return (
        <nav className='NavBar'>
            <Link to='/' className='link'>
            <h1 className='nav-logo'>Joyitas</h1>
            </Link>
            
            <div className='categories'>
                <NavLink to='/category/anillos'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Anillos</NavLink>
                <NavLink to='/category/pendientes'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pendientes</NavLink>
                <NavLink to='/category/pulseras'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pulseras</NavLink>
                <NavLink to='/category/colgantes'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Colgantes</NavLink>
                <NavLink to='/contacto' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
            </div>
            <CartWidget/>
             
    
        </nav>
    )
}

export default NavBar