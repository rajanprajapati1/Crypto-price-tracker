import axios from 'axios';

const GECKOAPI = 'https://api.coingecko.com/api/v3/';

export const FetchCoins = (currency,Page) => {
  return function (dispatch) {
    axios
      .get(GECKOAPI +`coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${Page}&sparkline=false`)
      .then((res) => {
        dispatch({ type: 'SET_COINS', payload: res.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const FetchSingleCoins = (id) => {
  return function (dispatch) {
    axios
      .get(GECKOAPI +`coins/${id}`)
      .then((res) => {
        dispatch({ type: 'SET_SINGLE_COINS', payload: res.data });  
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const FetchSearchCoins = (id) => {
  return function (dispatch) {
    axios
      .get(GECKOAPI +`search?query${id}`)
      .then((res) => {
        dispatch({ type: 'SEARCH_COINS', payload: res.data?.coins });  
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};


export const FetchHistoricdata = (id,currency,days) => {
  console.log(days)
  return function (dispatch) {
    axios
      .get(GECKOAPI +`coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
      .then((res) => {
        dispatch({ type: 'SET_HISTORIC_COIN_DATA', payload: res.data });  
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};


