
import { assign, Machine } from 'xstate'

const statsApi = 'https://coronavirus-19-api.herokuapp.com/countries'

const countryDataMachine = Machine({
    // Machine identifier
    id: "statsMachine",
    // Initial state
    initial: "fetchStats",
    // 資料 (data) 存在 context 裡，key 可以自己訂
    // Local context for entire machine
    context: {
      countriesSelected: [],
      stats: null,
    },
    // State definitions
    states:{
        fetchStats:{
            invoke:{
                src: "fetchCovidStats",
                onDone: { target: "ready", actions: "assignStats" },
                onError: "error",
            }
        },
        ready: {
        on: {
          COUNTRY_SELECTED: { actions: "updateSelectedCountry" },
        },
      },
      error: {},
    },
},
{
    actions:{
        // 更新 machine context
        // pure function 回傳一個 action 物件
        assignStats: assign((_ctx, e) => ({
        stats: e.data,
      })),
      updateSelectedCountry: assign((ctx, e) => ({
        countriesSelected: ctx.stats.reduce(
          (acc, stat) =>
            stat.country
              .toLowerCase()
              .match(e.country.target.value.toLowerCase())
              ? [...acc, stat]
              : acc,
          []
        ),
      })),
    },
    services: {
      fetchCovidStats: () =>
        new Promise(async (resolve, reject) => {
          try {
            const data = await fetch(statsApi).then((res) => res.json())
            //console.log(data)
            return resolve(data)
          } catch (error) {
            //console.log("error in fetching stats: ", error)
            return reject()
          }
        }),
    },
  }
)
export default countryDataMachine