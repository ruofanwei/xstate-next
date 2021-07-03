import React from 'react'

import {useMachine} from '@xstate/react'
import countryDataMachine from '../state/countryDataMachine'
import CountrySearch from '../components/CountrySearch'
import CountrySelector from '../components/CountrySelector'
import DetailDataForCountry from '../components/DetailDataForCountry'
import GlobalStyles from "../styles/createGlobalStyle"



const IndexPage = () => {
    // 用 interpret，產生好 service 並會回傳 [state, send, service]
    const [current, send] = useMachine(countryDataMachine)

    return(
    <div>
        <GlobalStyles />
        <h3>Covid 19 information</h3>
        {current.matches("fetchStats") && <div>loading...</div>}
        {current.matches("error") && <div>error...</div>}
        {current.matches("ready") && (
            <>
            <CountrySelector stats={current.context.stats} handleChange={(country) => send("COUNTRY_SELECTED", { country })} />
            <CountrySearch handleChange={(country) => send("COUNTRY_SELECTED", { country })}/>
            </>
        )}
        {current.context.countriesSelected.length > 0 && (
            <DetailDataForCountry stats={current.context.countriesSelected}/>
        )}

    </div>
    )
}

export default IndexPage