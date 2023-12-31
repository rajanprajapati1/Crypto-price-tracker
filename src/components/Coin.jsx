import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Loader from './Loader';


const Coin = ({ Coinslist, currency }) => {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <div>
            <div className="homepage" >
                <div className="hero-section">
                    <h1>Welcome to <strong>Crypto</strong> Tracker</h1>
                    <p>Your gateway to the dynamic world of cryptocurrencies! Whether you're a seasoned trader or a curious enthusiast, join us on a journey of financial exploration. Explore real-time insights, track market trends, and access comprehensive data on digital assets. Let's navigate the crypto landscape together and unlock the potential of decentralized finance</p>
                </div>
                <div className="coins-list">
                    <h2><FaArrowTrendUp color='#fe9416' />Top Trending <span>CryptoCurrency</span></h2>
                    <div className="table_list">
                        <span>Showing {Coinslist?.length} ranks per page</span>
                        {Coinslist ? <table>
                            <tbody>
                                <tr>
                                    <th>Rank</th>
                                    <th>Coin</th>
                                    <th>Price</th>
                                    <th>Price Change (24h)</th>
                                    <th>Price Change Percentage (24h)</th>
                                    <th>Market Cap</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {Coinslist?.map((coin) => {
                                    return <tr className='bar' key={coin.id}>
                                        <td>{coin?.market_cap_rank}</td>
                                        <Link to={`/coin/${coin.id}`} className='dis'>
                                            <td className='col'><img src={coin.image} alt="..." /> {coin?.name}</td>
                                        </Link>
                                        <td> {currency === "INR" ? "₹" + numberWithCommas(coin?.current_price.toFixed(2)) : "$" + numberWithCommas(coin?.current_price.toFixed(2))}</td>
                                        <td>{coin.price_change_24h}</td>
                                        {/* <td>{coin?.price_change_percentage_24h.toFixed(2)}%</td> */}
                                        <td style={{ color: coin?.price_change_percentage_24h >= 0 ? '#00FF00' : '#FF0000' }}>
                                           {coin?.price_change_percentage_24h >= 0 ? (<><FaArrowTrendUp/> {coin?.price_change_percentage_24h.toFixed(2)}%</>) : (<><FaArrowTrendDown/> {coin?.price_change_percentage_24h.toFixed(2)}%</>)}
                                        </td>
                                        <td>{coin.market_cap}</td>
                                    </tr>
                                })}
                            </tbody>
                        </table> : <Loader />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Coin
