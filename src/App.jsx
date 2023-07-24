import { Route, Routes } from 'react-router-dom';
import './App.css';
import Search from './componentes/search';
import { CgMail } from 'react-icons/cg'
import Desplegable from './componentes/menuDesplegable';
import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Formulario from './componentes/formulario';
import { useSelector, useDispatch } from 'react-redux'
import { addlogin } from './feature/proyectSlice';
import Detail from './apiconponets/detail-food';
import Food from './apiconponets/food';
import ModProfile from './componentes/modProfile';
import Dessert from './apiconponets/dessert';
import Create from './componentes/reusable';


function App() {

  const [entrada, setEntrada] = useState(false);
  function Handleclick() {
    setEntrada(!entrada);
  }
  const useselectos = useSelector((state) => state.proyect.login)

  const dispatch = useDispatch()
  function opelogin() {
    dispatch(addlogin(true))
  }


  return (
    <div className='app'>
      {useselectos ? <Formulario /> : null}
      <div >
        {entrada ?
          <div className='menu-desplegable'>
            <div className='principal'>
              <button className='menu' onClick={() => Handleclick()}><FiMenu size={25} /></button>
              <button className='rainbow-hover' >PRINCIPAL</button>
            </div>
            <Desplegable />
          </div>
          : null}
      </div>
      <div>
        <header className='header'>
          <div style={{ display: 'flex' }}>
            <button className='menu' onClick={() => Handleclick()}><FiMenu className='menupri' size={25} /></button>
            <button className='rainbow-hover'>PRINCIPAL</button>
          </div>
          <Search />
          <div className='form-login' onClick={() => opelogin()}><CgMail size={25} /><span>log in</span></div>
        </header>
        <div >
          <Routes>
            <Route path='/' Component={Create}></Route>
            <Route path='/dessert' Component={Dessert}></Route>
            <Route path='/food' Component={Food}></Route>
            <Route path='/detail' Component={Detail}></Route>
            <Route path='/profile' Component={ModProfile}></Route>

          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
