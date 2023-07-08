import React, { useState } from 'react'
import './HeroBanner.scss'

function HeroBanner() {
  const [query, setQuery] = useState("");
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">
            Welcome
          </span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Search for a movie or tv show...'/>
            <button >Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner