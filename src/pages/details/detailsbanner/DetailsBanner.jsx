import React from 'react'
import './DetailsBanner.scss'
import ContentWrapper from '../../../components/contentwrapper/ContentWrapper'
import { useParams } from 'react-router-dom';
import { useAxios } from '../../../hooks/useAxios';
import { useSelector } from 'react-redux';
import PosterFalBack from '../../../assets/no-poster.png';
import dayjs from 'dayjs';
import Genres from '../../../components/genres/Genres';
import CircleRating from '../../../components/circlerating/CircleRating';
import { PlayIcon } from '../PlayIcon';

function DetailsBanner() {
    const params = useParams();
    const { data, error, isLoading } = useAxios(`/${params.mediatype}/${params.id}?language=en-US`)
    console.log(params);
    console.log(data);
    const url = useSelector((store) => {
        if(store.home.url){
            return store.home.url;
        }
        return null;
    })
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <div className="detailsBanner">
            {!isLoading ? (
                <>
                    <div className="backdrop-img">
                        
                            <img src={url ? url.backdrop + data.backdrop_path : PosterFalBack}/>
                    </div>
                    <div className="opacity-layer"></div>
                    <ContentWrapper>
                        <div className='content'>
                            <div className='left' style={{position: "relative"}}>
                                { data.poster_path ? (
                                    <img className='posterImg' src={url ? url.backdrop + data.backdrop_path : PosterFalBack}/>
                                ) : (
                                    <img className='posterImg' src={PosterFalBack}/>
                                ) }
                                <CircleRating rating={data.vote_average.toFixed(1)}/>
                            </div>
                            <div className='right'>
                                <div className="title">
                                    {`${data.name || data.title} (${dayjs(data.release_date).year()})`}
                                </div>
                                <div className="subtitle">
                                    {data.tagline}
                                </div>
                                <Genres genreIds={data ? data.genres.map((genre) => genre.id) : []}/> 
                                <div className="playbtn" onClick={() => console.log("play trailer")}>
                                    <PlayIcon />
                                    <span className='text'>Watch Trailer</span>
                                </div>
                                <div className="overview">
                                    <div className="heading">
                                        Overview
                                    </div>
                                    <div className='description'>
                                        {data.overview}
                                    </div>
                                </div>
                                <div className='info'>
                                    <div className="infoItem">
                                        <span className="text bold">
                                            Status: 
                                        </span>
                                        <span className="text">{data.status}</span>
                                    </div>
                                    <div className="infoItem">
                                        <span className="text bold">
                                            Release: 
                                        </span>
                                        <span className="text">{data.release_date}</span>
                                    </div>
                                    <div className="infoItem">
                                        <span className="text bold">
                                            Runtime: 
                                        </span>
                                        <span className="text">{toHoursAndMinutes(data.runtime)}</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </ContentWrapper>
                </>
                
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
}

export default DetailsBanner