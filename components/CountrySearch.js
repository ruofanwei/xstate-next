import React from 'react'
import { assign, Machine } from 'xstate'
import {useMachine} from '@xstate/react'
import styled from 'styled-components'

const CountrySearch = ({handleChange}) => {
    return(
        <input onChange={handleChange} placeholder="search for a country" type="search"/>
    )
}
export default CountrySearch