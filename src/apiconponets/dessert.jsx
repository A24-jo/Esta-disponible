import { useEffect } from 'react';
import '../Stiles/Dessert.css';
import { getDessert } from '../feature/proyectSlice';
import { useDispatch, useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube'



function Dessert() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDessert());
    }, []);

    const verficando = useSelector((state) => state.proyect.Dessert);
    const foods = useSelector((state) => state.proyect.food);

    console.log(verficando);

    return (
        <div className='cuerpo-desert' >
            <div className='padre-dessert' >
                {verficando.map((a) => {
                    return (
                        <div className='video-container' key={a.idMeal}>
                            <ReactPlayer url={a.strYoutube} width='100%' height='220px' />
                            <p>{`dessert ${a.strMeal}  ${a.strArea} `}</p>
                        </div>
                    )
                })
                }
                {foods.map((a) => {
                    return (
                        <div className='video-container' key={a.idMeal}>
                            <ReactPlayer url={a.strYoutube} width='100%' height='220px' />
                            <p>{`food ${a.strMeal}  ${a.strArea} `}</p>
                        </div>
                    )
                })
                }

            </div>


        </div>
    )
}

export default Dessert;