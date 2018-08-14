import React from 'react';
import '../../assets/css/FilmList.css';
import {Link} from 'react-router-dom';

//Untuk fungsi yang tidak kompeks(hanya 1 line)
const FilmListItem = ({films}) =>(
    <li>
        <Link to={`/film/${films.show.id}`}>
            {films.show.name}
        </Link>
    </li>
)

//Untuk fungsi yang kompeks(lebih dari 1 line)
const FilmList = props =>{
    return(
        <div>
            Daftar Film:
            {/* Get list of film */}
            <ul className="film-list">
                {/* Mengambil id dan nama film */}
                {props.list.map(films=>(
                    <FilmListItem films={films} key={films.show.id}/>
                ))}
            </ul>
        </div>
    )
}

export default FilmList;