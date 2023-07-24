import '../Stiles/modProfile.css';
import { useDispatch, useSelector } from "react-redux";
import Profile from "./profile";
import { addmod } from '../feature/proyectSlice';
import { useState } from 'react';

function ModProfile() {

    const profile = useSelector((state) => state.proyect.mod)
    const dispatch = useDispatch();
    const [edit, setEdit] = useState({
        edad: '',
        Profesion: '',
        Ubicacion: '',
        Telefono: ''
    })

    function HandleChange(e) {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    function HandleClick(e) {
        e.preventDefault()
        dispatch(addmod(false))
    }
    console.log(edit)

    return (
        <div>
            <Profile
                edad= {edit.edad}
            Profesion= {edit.Profesion}
            Ubicacion= {edit.Ubicacion}
            Telefono= {edit.Telefono}
                     />
            <div >
                {profile &&
                    <div className='padre-mod' >
                        <form onSubmit={HandleClick}>
                            <div>
                                <label >Profecion</label>
                                <input className='label' name='Profesion' value={edit.Profesion} onChange={(e) => HandleChange(e)} />
                            </div>
                            <div>
                                <label >Ubicacion</label>
                                <input className='label' name='Ubicacion' value={edit.Ubicacion} onChange={(e) => HandleChange(e)} />
                            </div>
                            <div>
                                <label >Telefono</label>
                                <input className='label' name='Telefono' value={edit.Telefono} onChange={(e) => HandleChange(e)} />
                            </div>
                            <div>
                                <label >edad </label>
                                <input type='number' className='edad' name='edad' value={edit.edad} onChange={(e) => HandleChange(e)} />
                            </div>

                            <button type='submit' className='submit'>SUBMIT</button>
                        </form>
                    </div>}
            </div>
        </div>
    )
}

export default ModProfile;