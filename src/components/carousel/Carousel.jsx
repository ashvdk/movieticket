import React, { useEffect, lazy, Suspense } from 'react'
import './Carousel.scss'
import { useSelector, useDispatch } from 'react-redux'
import ContentWrapper from '../contentwrapper/ContentWrapper'
import { fetchTrendingTopics } from '../../store/thunks/fetchTrendingTypes';
import PosterFalBack from '../../assets/no-poster.png';
import dayjs from 'dayjs';
import CircleRating from '../circlerating/CircleRating';
import Genres from '../genres/Genres';
import { fetchPopular } from '../../store/thunks/fetchPopular';
import { fetchTopRated } from '../../store/thunks/fetchTopRated';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSimilarMovies } from '../../store/thunks/fetchSimilarMovies';
import { fetchRecommendation } from '../../store/thunks/fetchRecommendation';
import SkeletonCarousel from '../skeletoncarousel/SkeletonCarousel';

const LazyImage = lazy(() => import('../image/Image'));

function Carousel({tabs, type}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    useEffect(() => {
        if(type === "trending"){
            dispatch(fetchTrendingTopics(tabs));
        }
        else if(type === "popular"){
            dispatch(fetchPopular(tabs));
        }
        else if(type === "toprated"){
            dispatch(fetchTopRated(tabs));
        }
        else if(type === "similarmovies"){
            dispatch(fetchSimilarMovies({mediatype: params.mediatype, id: params.id}))
        }
        else if(type === "recommendations"){
            dispatch(fetchRecommendation(params.id))
        }
    }, [tabs])
    const { data, isLoading } = useSelector((store) => {
        //console.log(store)
        return store[type];
    })
    const url = useSelector((store) => {
        //console.log(store.home)
        if(store.home.url){
            return store.home.url;
        }
        return null;
        
    })
    console.log(url)
    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }
    const navigateToPath = (id) => {
        navigate(`/${tabs}/${id}?language=en-US`)
    }
  return (
    <div className='carousel'>
        <ContentWrapper>
            {isLoading ? (
                <div className='loadingSkeleton'>
                    <SkeletonCarousel />
                    <SkeletonCarousel />
                    <SkeletonCarousel />
                    <SkeletonCarousel />
                    <SkeletonCarousel />
                    {/* {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()} */}
                </div>
            ) : 
                <div className='carouselItems'>{
                    Array.isArray(data.results) &&  data?.results.map((movie, index) => {
                        const posterUrl = url ? movie.poster_path ? url.poster + movie.poster_path : PosterFalBack : PosterFalBack;
                        // const posterUrl = item.poster_path
                        //         ? url.poster + item.poster_path
                        //         : PosterFallback;
                        return (
                            <div key={movie.poster_path} className='carouselItem' onClick={() => navigateToPath(movie.id)}>
                                
                                <div className="posterBlcok" style={{height: "250px", position: "relative"}}>
                                    {/* <img style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                    }}  /> */}
                                    <Suspense fallback={<div>Loading</div>}>
                                    <LazyImage url={posterUrl} classNames="" cssstyle={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                    }}/>
                                    </Suspense>
                                    <CircleRating rating={movie.vote_average.toFixed(1)}/>
                                </div>
                                <div className="textBlock" style={{textAlign: "left", marginTop: "25px"}}>
                                    <span className="title">
                                        {movie.title || movie.name}
                                    </span>
                                    <span className="date">
                                        {dayjs(movie.release_Date).format("MMM D, YYYY")}
                                    </span>
                                </div>
                                <Genres genreIds={movie.genre_ids}/>
                            </div>
                        )
                    })
                }</div>
            }
        </ContentWrapper>
    </div>
  )
}

export default Carousel