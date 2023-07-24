import '../Stiles/search.css';
import {CiSearch} from 'react-icons/ci'


function Search() {
    return (
        <div className='search'>
            <input type='text' className='search__input' placeholder='Type your text' />
            <button className='boton'>
             <CiSearch size={20}/>
            </button>
        </div>
    )
}

export default Search;