import React, {useState, useEffect} from 'react';
import axios from 'axios';
//components 
import Navbar from './Navbar';
// import Chart from './Chart';


const Details = (props) => {
// console.log('coin data', props)
    const [type, setType] = useState({})

    useEffect(() => {
        const id = props.match.params.id

        axios
            .get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(res => {
                console.log('the res', res)
                setType(res.data)
            })
    }, [props.match.params.id])

    return (
        <div>
            <Navbar />
            <div className = 'details'>
                <div className = 'name'>
                    <h1>{type.name}</h1>
                </div>
                <div className = 'info'>
                    <h2>Coingecko Rank: {type.coingecko_rank}</h2>
                    <h2>Coingecko Score: {type.coingecko_score}</h2>
                    <h2>Community Score: {type.community_score}</h2>
                    <h2>Developer Score: {type.developer_score}</h2>
                    <h2>Liquidity Score: {type.liquidity_score}</h2>
                    <h2>Public Interest Score: {type.public_interest_score}</h2>
                    {type.categories && type.categories.map(cat => (
                            <h2>Categories: {cat}</h2>    
                    ))}
                </div>
                
            
        </div>
        </div>
    )
}

export default Details;