import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <div className='card_locationInfo'>
    <article className='subCard_locationInfo'>
        <h2>{location?.name}</h2>
        <div className='subCard_locationInfo_list'>
            <h3><span className='subCard_LocationInfo_list_span'>Type: </span>{location?.type}</h3>
            <h3><span className='subCard_LocationInfo_list_span'>Dimension: </span>{location?.dimension}</h3>
            <h3><span className='subCard_LocationInfo_list_span'>Population: </span>{location?.residents.length}</h3>
        </div>
    </article>
    </div>
  )
}

export default LocationInfo