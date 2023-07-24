import '../Stiles/menuDesplegable.css';
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { PiVideo } from 'react-icons/pi'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { IoIosCreate } from 'react-icons/io'
import { PiBowlFoodThin } from 'react-icons/pi'
import { BsFillPersonFill } from 'react-icons/bs'
import Miimagen from '../imagenes/pngwing.com.png'
import { Link } from 'react-router-dom';


function Desplegable() {


    return (
        <div>
            <Link to='/' className='link'><div className='menu-list'><AiOutlineHome />  <span>Principal</span></div></Link>
            <Link to='/food' className='link'><div className='menu-list'>< PiBowlFoodThin />  <span>Food</span></div></Link>
            <div className='menu-list'><MdOutlineFavoriteBorder />  <span>Favoritos</span></div>
            <Link to='/dessert' className='link'><div className='menu-list'><PiVideo />  <span>video tutorial</span></div></Link>
            <div className='menu-list'><IoIosCreate /> <span>create</span></div>
            <div className='menu-list'><MdOutlineLibraryBooks /><span>Biblioteca</span></div>
            <Link to='/profile' className='link'><div className='menu-list'> <BsFillPersonFill />  <span>Profile</span></div></Link>
            <div className='contimagen'><img className='imagen' src={Miimagen} alt='forot' /></div>
        </div>
    )
}

export default Desplegable;