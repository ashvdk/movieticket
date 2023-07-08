//import Footer from './components/footer/footer'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchresult/SearchResult'
import PageNotFound from './pages/404/PageNotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import './App.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchGenres } from './store/thunks/fetchGenres'
import React, { lazy, Suspense } from 'react';
import SkeletonCarousel from './components/skeletoncarousel/SkeletonCarousel'



const LazyHome = lazy(() => import("./pages/home/Home"));
const LazyDetails = lazy(() => import("./pages/details/Details"))
const LazySearchResult = lazy(() => import('./pages/searchresult/SearchResult'));
const LazyExplore = lazy(() => import('./pages/explore/Explore'));
const LazyPageNotFound = lazy(() => import('./pages/404/PageNotFound'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
  }, [])
  
  return (
    <BrowserRouter>
      <Header />
        <Suspense fallback={<SkeletonCarousel />}>
          <Routes>
            <Route path='/' element={<LazyHome />}></Route>
            <Route path='/:mediatype/:id' element={<LazyDetails />}></Route>
            <Route path='/search/:query' element={<LazySearchResult />}></Route>
            <Route path='/explore/:mediatype' element={<LazyExplore />}></Route>
            <Route path='*' element={<LazyPageNotFound />}></Route>
          </Routes>
        </Suspense>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
