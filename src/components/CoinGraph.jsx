import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchHistoricdata } from '../store/actions.jsx'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import Loader from './Loader.jsx';

const data = [{
    id:1,
    name:"Present Day"
},{
    id:10,
    name:"Past 10 Days"
},{
    id:15,
    name:"Past 15 Days"
},{
    id:20,
    name:"Past 20 Days"
},{
    id:30,
    name:"Past 30 Days"
}
]

const CoinGraph = ({ currency, reload }) => {

    const [days, setdays] = useState(1);
    console.log(days)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchHistoricdata(reload, currency, days));
    }, [reload,days])
    const historicdata = useSelector(state => state.coins.HistoricData?.prices);
    return (
        <div className="flex_right">
            <div className="graph">
                {!historicdata ? (<Loader />) : (<>
                    <Line
                        data={{
                            labels: historicdata.map((coin) => {
                                let date = new Date(coin[0]);
                                let time = date.getHours() > 12 ?
                                    `${date.getHours() - 12}:${date.getMinutes()} PM`
                                    :
                                    `${date.getHours() - 12}:${date.getMinutes()} AM`;
                                return days === 1 ? time : date.toLocaleDateString();
                            }),
                            datasets: [
                                {
                                    data: historicdata.map((coin) => coin[1]),
                                    label: `Price (Past ${days} Days) in ${currency}`,
                                    borderColor: '#fe9416',
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                points: {
                                    radius: 1,
                                },
                            },
                        }}
                    />
                </>)}
            </div>
            <div className="historic_btn">
                {data.map((val) => {
                    return <button onClick={()=>setdays(val.id)} key={val.id} variant='outlined'>{val.name}</button>
                })}
            </div>
        </div>
    )
}

export default CoinGraph
