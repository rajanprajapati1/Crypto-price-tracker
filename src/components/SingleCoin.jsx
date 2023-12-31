import React from 'react'
import DOMPurify from 'dompurify';
import CoinGraph from './CoinGraph';
import Loader from './Loader';

const SingleCoin = ({ singlecoin, currency, reload }) => {
    return (<>

        {singlecoin ? (<> <div className='singlecoin'>
            <div className="flex_left">
                <img src={singlecoin?.image?.large} alt="" />
                <h1>Rank : {singlecoin?.market_cap_rank}</h1>
                <h2>Name : {singlecoin?.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(singlecoin?.description?.en)?.slice(0, 260) }} />
                <strong>Official Website </strong>
                <a className='Link' href={singlecoin?.links?.homepage[0]}>{singlecoin?.links?.homepage[0]}</a>
                <div className='btn'>
                    {singlecoin?.categories?.slice(0, 3).map(item => {
                        return <button>{item}</button>
                    })}
                </div>
            </div>
            <CoinGraph currency={currency} reload={reload} />
        </div></>) : <Loader />
        }
    </>
    )
}

export default SingleCoin
