import React from 'react';
import Chart from './Chart';
const Details = ({coinData}) => {
console.log('coin data', coinData)

    return (
        <div>
            <h2>Hello There!</h2>
            <Chart sparklineData = {coinData.sparkline_in_7d.price} />
        </div>
    )
}

export default Details;