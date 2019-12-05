import React from "react";
import Chart from "./Chart";
import {Link} from 'react-router-dom';
// import Navbar from './Navbar';
const Charts = ({ coinData }) => {
  return (
    <div>
      {/* <Navbar /> */}
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Link to={`/Details/${coin.id}`} className="more"><button>More Info?</button></Link>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          
          
        </div>
      ))}
    </div>
    </div>
  );
};
export default Charts;
