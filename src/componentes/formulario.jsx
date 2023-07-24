import '../Stiles/formulario.css';
import { useDispatch } from 'react-redux';
import { addProfile, addlogin } from '../feature/proyectSlice';
import { useState } from 'react';

function Formulario() {

    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('');

    const dispatch = useDispatch();


    function HandleChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    function HandleSupmit(e) {
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.email)) {
            setError('¡Ingresa un correo electrónico válido!');
            return;
        }
        dispatch(addProfile(input))
        dispatch(addlogin(false))
    }

    return (
        <div className='padre-form' >
            <div >
                <div className="login-box">
                    <p>Login</p>

                    <form onSubmit={HandleSupmit}>
                        <div className="user-box">
                            <input name='name' value={input.name} onChange={(e) => HandleChange(e)} type="text" required/>
                            <label>Name Complete</label>
                        </div>
                        <div className="user-box">
                            <input name='email' value={input.email} onChange={(e) => HandleChange(e)} type="text" />
                            <label >Email</label>
                             <div className='eror'>{error}</div>
                        </div>

                        <div className="user-box">
                            <input name='password' value={input.password} onChange={(e) => HandleChange(e)} type="password" required />
                            <label>Password</label>
                        </div>

                        <button type='submit' className='submit'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;