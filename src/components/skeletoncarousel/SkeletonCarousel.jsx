import React from 'react'
import './SkeletonCarousel.scss'
 
function SkeletonCarousel() {
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

export default SkeletonCarousel