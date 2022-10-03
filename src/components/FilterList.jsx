import React from 'react'

const FilterList = ({suggestedList, setSerachInput}) => {

    const handleClick = id => setSerachInput(id)

  return (
    <ul className='list_filter'>
        {
            suggestedList?.map(location => (
                <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
            ))
        }
    </ul>
  )
}

export default FilterList