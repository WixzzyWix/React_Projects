import './feature.css';

import React from 'react'

const Feature = ({title, text}) => {
  return (
       <div className="gpt3__features-container__feature">
        <div className="gpt3__features-container__feature-title">
          <div /> {/* to give some space and get bar like above the title. */}
          <h1>{title}</h1>
        </div>
        <div className="gpt3__features-container__feature-text">
          <p>{text}</p>
          <div/> {/* to give some space*/}
        </div>
      </div>

  )
}

export default Feature
