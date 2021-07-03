import React from 'react'


const CountrySearch = ({handleChange}) => {
    return(
        <input onChange={handleChange} placeholder="search for a country" type="search"/>
    )
}
export default CountrySearch