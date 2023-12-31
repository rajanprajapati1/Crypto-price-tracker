import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchSearchCoins } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import CoinCard from '../components/CoinCard'
import Loader from '../components/Loader'

const Searchpage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    useEffect(() => {
        dispatch(FetchSearchCoins(id))
    }, [])

    const searchresults = useSelector(state => state.coins.SearchResults)
    return (
        <div className='searchresult'>
            <div className="results_flex">
                <h2>Search Results : ({searchresults?.length})</h2>
                {searchresults ? <div className="results_flex_sec">
                    {
                        searchresults?.slice(0, 18)?.map((coin) => {
                            return <CoinCard coin={coin} key={coin?.id} />

                        })
                    }
                </div>
                    : <Loader />}
            </div>
        </div>
    )
}

export default Searchpage
