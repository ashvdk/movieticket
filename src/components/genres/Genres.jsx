import React from 'react'
import './Genres.scss'
import { useSelector } from 'react-redux'
import { store } from '../../store'

function Genres({genreIds}) {
    //console.log(genreIds)
    const allgenres = useSelector((store) => {
        //console.log(store);
        if(store.home.genres){
            const allids =  {...store.home.genres};
            // console.log(allids)
            // console.log(genreIds);
            return genreIds.length > 0 ? genreIds.map((genre) => allids[genre]) : null
        }
        else {
            return null;
        }
    })
    //console.log(allgenres);
    return (
        <div className='genres'>
            {allgenres && allgenres?.map((genre) => {
                return (
                    <div className="genre">
                        {genre["name"]}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres