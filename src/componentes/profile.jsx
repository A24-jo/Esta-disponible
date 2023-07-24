import { useDispatch, useSelector } from 'react-redux';
import '../Stiles/profile.css'
import Miimagen from '../imagenes/pngwing.com.png'
import {MdEditNote} from 'react-icons/md'
import { addmod } from '../feature/proyectSlice';

function Profile({ edad, Profesion, Ubicacion, Telefono  }) {
    
    const selector = useSelector((state) => state.proyect.profile);
     const dispatch = useDispatch()

    return (
        <div className='img-fond'>
            <div className="perfil">
                <img src={Miimagen} alt="Foto de Perfil" />
                <h2>{selector.name}</h2>
                <p>{`CorreoElectronico : ${selector.email}`}</p>
                <p>{`password : ${selector.password}`}</p>
                <p>{`edad : ${edad}`}</p>
                <p>{`Profesion : ${Profesion}`}</p>
                <p>{`Ubicacion : ${Ubicacion}`}</p>
                <p>{`Telefono : ${Telefono}`}</p>
                <div className='edit'onClick={()=>dispatch(addmod(true))}>
                    <MdEditNote size={45} />
                </div>
            </div>
        </div>

    )
}

export default Profile;