import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDetail, addfavorite, getTodos } from '../feature/proyectSlice';
import { AiFillLike } from 'react-icons/ai'
import { AiOutlineLike } from 'react-icons/ai'
import '../Stiles/food.css';
import { Link } from 'react-router-dom';

function Food() {

    const food = useSelector(state => state.proyect.food);
    const dispatch = useDispatch();

    function like(pro) {
        dispatch(addfavorite(pro));
    }

    useEffect(() => {
        dispatch(getTodos())
    }, []);  

    return (
        <div className='padre-el'>
            <div className='food-padre'>
                {food.map((a) => {
                    return (
                        <div key={a.idMeal} >
                            <div className='card' >
                                <div>
                                    <div className='favorite-food' onClick={() => like(a.idMeal)}>{a.isFavorite ? <AiFillLike size={40} />: <AiOutlineLike size={40} /> }</div>
                                    <Link to='/detail'onClick={()=>dispatch(addDetail(a))}> <img className='food-img' src={a.strMealThumb} alt='nose' /></Link>
                                </div>
                                <div>
                                    <h4>{a.strMeal}</h4>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Food;