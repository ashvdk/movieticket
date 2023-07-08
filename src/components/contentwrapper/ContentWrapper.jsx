import React from 'react'
import './ContentWrapper.scss';

function ContentWrapper({children}) {
  return (
    <div className="contentWrapper">{children}</div>
  )
}

export default ContentWrapper