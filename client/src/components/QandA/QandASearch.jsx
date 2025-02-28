import React, { useState, useEffect, useContext } from 'react';
import { BiSearch } from 'react-icons/bi';

const QandASearch = (props) => {
  return (
    <div className='qanda-search'>
      <input
        className='qanda-search-input'
        type='search'
        placeholder='Have a question? Search for answers...'
        name='questionQuery'
        onChange={(event) => props.searchQuestion(event.target.value)}/>
      <button className='qanda-search-icon'><BiSearch /></button>
    </div>
  )
}

export default QandASearch;