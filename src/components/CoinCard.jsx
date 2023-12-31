import React from 'react'
import { Link } from 'react-router-dom'

const CoinCard = ({ coin }) => {

    return (
        <div className='coin_card'>
            <div className="overlays"></div>
            <div className="details">
                <Link to={`/coin/${coin?.id}`}>
                    <img src={coin?.large || "1.jpg"} alt="" />
                </Link>
                <h2>{coin?.name}</h2>
                {/* <h4>Rank : {coin?.market_cap_rank}</h4> */}
            </div>
        </div>
    )
}

export default CoinCard
