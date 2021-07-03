import React from 'react'
import { assign, Machine } from 'xstate'
import {useMachine} from '@xstate/react'
import styled from 'styled-components'
const Selector = styled.select`
    margin-bottom: 10px;
    font-size: 15px;
    outline: none;
    transition: all 100ms ease 0s;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    min-height: 38px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: rgb(255,255,255)
    align-items: center;

`
const CountrySelector = ({handleChange, stats}) => {

    return(
        <>
        <Selector onChange={handleChange}>
        <option>select a country</option>
        {stats.map((data, index) => (
            <option key={`${data.country}-${index}`}>{data.country}</option>
        ))}
        </Selector>
        </>
    )
}
export default CountrySelector