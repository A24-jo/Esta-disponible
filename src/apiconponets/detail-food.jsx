import { useSelector } from "react-redux";
import '../Stiles/detail-food.css';


function Detail() {

    const detailGlod = useSelector(state => state.proyect.detail);
    console.log(detailGlod)

    return (
        <div className='cuerpo-detail'>
            <h1 className="titulo">{detailGlod.strMeal}</h1>
            <div className='padre-detail'>
                <div>
                    <div><h4>Origin</h4>{detailGlod.strCategory} {detailGlod.strArea} </div>
                    <div >
                        <h3>INGREDIENTS</h3>
                        <div> {detailGlod.strTags} </div>
                        <div className='ingredient'>
                            <div>
                                <div> {detailGlod.strIngredient1}</div>
                                <div>{detailGlod.strIngredient2}</div>
                                <div>{detailGlod.strIngredient3}</div>
                                <div>{detailGlod.strIngredient4}</div>
                                <div>{detailGlod.strIngredient5}</div>
                                <div>{detailGlod.strIngredient6}</div>
                                <div>{detailGlod.strIngredient7}</div>
                                <div>{detailGlod.strIngredient8}</div>
                                <div>{detailGlod.strIngredient9}</div>
                                <div>{detailGlod.strIngredient10}</div>
                                <div>{detailGlod.strIngredient11}</div>
                                <div>{detailGlod.strIngredient12}</div>
                                <div>{detailGlod.strIngredient13}</div>
                            </div>
                            <div>
                                <div> {detailGlod.strMeasure1} </div>
                                <div>  {detailGlod.strMeasure2} </div>
                                <div>  {detailGlod.strMeasure3} </div>
                                <div>  {detailGlod.strMeasure4} </div>
                                <div>  {detailGlod.strMeasure5} </div>
                                <div>  {detailGlod.strMeasure6} </div>
                                <div>  {detailGlod.strMeasure7} </div>
                                <div>  {detailGlod.strMeasure8} </div>
                                <div>  {detailGlod.strMeasure9} </div>
                                <div>  {detailGlod.strMeasure10} </div>
                                <div>  {detailGlod.strMeasure11} </div>
                                <div>  {detailGlod.strMeasure12} </div>
                                <div>  {detailGlod.strMeasure13} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='img-detail' src={detailGlod.strMealThumb} alt='Thumbnaild' />
                </div>
            </div>
            <div className='detail-inst'>
                <div className="instruction">
                    {detailGlod.strInstructions}
                </div>
            </div>
        </div>
    )
};

export default Detail;