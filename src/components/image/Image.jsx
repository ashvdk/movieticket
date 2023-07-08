import React from 'react'

function Image({url, classNames, cssstyle}) {
    console.log(cssstyle)
  return (
    <img src={url} className={classNames} style={cssstyle}/>
  )
}

export default Image