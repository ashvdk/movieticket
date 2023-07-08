import React, { lazy, Suspense } from 'react'
import './Home.scss'
import HeroBanner from './herobanner/HeroBanner'
import MovieCarousel from './moviecarousel/MovieCarousel'
import SkeletonCarousel from '../../components/skeletoncarousel/SkeletonCarousel'

const LazyMovieCarousel = lazy(() => import('./moviecarousel/MovieCarousel'));

function Home() {
  return (
    <div>
      <HeroBanner />
      <div style={{height: "200px"}}></div>
      {/* <Trending /> */}
      <Suspense fallback={<SkeletonCarousel />}>
        <LazyMovieCarousel title="Trending" type="trending" optiontabs={["day", "week"]}/>
        <LazyMovieCarousel title="Whats popular" type="popular" optiontabs={["movie", "tv"]}/>
        <LazyMovieCarousel title="Top Rated" type="toprated" optiontabs={["movie", "tv"]}/>
      </Suspense>
      {/* <Popular /> */}
      {/* <TopRated /> */}
      
    </div>
  )
}

export default Home