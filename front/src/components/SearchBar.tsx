import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='searchBarSection'>
    <div className='searchBarFrame'>
      <div className='searchBar'>
        <FontAwesomeIcon icon={faSearch}/>
      </div>
        <input className='searchInput' type="text" placeholder='Search for Content...'/>
    </div>
  </div>
  )
}

export default SearchBar