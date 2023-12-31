import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { FetchSingleCoins } from '../store/actions';
import SingleCoin from '../components/SingleCoin';

const Coinpage = ({currency}) => {
const {id}  = useParams();
const dispatch = useDispatch();
const singlecoin = useSelector(state=>state.coins.SingleCoin);
useEffect(()=>{
dispatch(FetchSingleCoins(id));
},[id])
    return (
        <div>
        <SingleCoin  singlecoin={singlecoin} currency={currency} reload={id}/>
        </div>
    )
}

export default Coinpage
