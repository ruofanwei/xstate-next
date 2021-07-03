import React from 'react'
import { assign, Machine } from 'xstate'
import {useMachine} from '@xstate/react'
import styled from 'styled-components'
const Selector = styled.select`
    margin-bottom: 10px;
    font-size: 18px;
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
    background: #2c3e50;
    align-items: center;
    padding: 1em;
    cursor: pointer;
    color: #fff;
    flex: 1;


`
const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 20em;
    height: 3em;
    line-height: 3;
    background: #2c3e50;
    overflow: hidden;
    border-radius: 0.25em;

    &::after {
        content: "\25BC";
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
        background: #34495e;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: 0.25s all ease;
        -o-transition: 0.25s all ease;
        transition: 0.25s all ease;
    }

    &:hover::after{
        color: #f39c12;
    }

 `
const CountrySelector = ({handleChange, stats}) => {

    return(
        <>
        <Wrapper>
        <Selector onChange={handleChange}>
        <option>select a country</option>

        {stats.map((data, index) => (
            <option key={`${data.country}-${index}`}>{data.country}</option>
        ))}

        </Selector>
        </Wrapper>
        </>
    )
}
export default CountrySelector