import React, { lazy, Suspense } from 'react'
import './Details.scss'
import { useParams } from 'react-router-dom'
import {useAxios} from '../../hooks/useAxios';
import DetailsBanner from './detailsbanner/DetailsBanner';
import MovieCarousel from '../home/moviecarousel/MovieCarousel';
import SkeletonCarousel from '../../components/skeletoncarousel/SkeletonCarousel';

const LazyMovieCarousel = lazy(() => import('../home/moviecarousel/MovieCarousel'));

function Details() {
  
  return (
    <div>
      <DetailsBanner />
      <Suspense fallback={<SkeletonCarousel />}>
        <MovieCarousel title="Similar Movies" type="similarmovies" optiontabs={["movie"]}/>
        <MovieCarousel title="Recommendations" type="recommendations" optiontabs={["movie"]}/>
      </Suspense>
    </div>
  )
}

export default Details