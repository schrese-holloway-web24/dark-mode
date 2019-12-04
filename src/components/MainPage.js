import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Charts from './Charts';
import Navbar from './Navbar';

const MainPage = () => {
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
          )
          .then(res => {
            console.log(res)
            setCoinData(res.data)})
          .catch(err => console.log(err));
      }, []);
      return (
        <div className="App">
          <Navbar />
          <Charts coinData={coinData} />
          {/* <Details coinData = {coinData} /> */}
        </div>
  );
};



export default MainPage;