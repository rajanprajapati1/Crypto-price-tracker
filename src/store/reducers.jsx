// reducers/coinsReducer.js
const initialState = {
  coins: [],
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COINS':
      return {
        ...state,
        coins: action.payload,
      };
    case 'SET_SINGLE_COINS':
      return { ...state, SingleCoin: action.payload };
    case 'SET_HISTORIC_COIN_DATA':
      return { ...state, HistoricData: action.payload }
    case 'SEARCH_COINS':
      return { ...state, SearchResults: action.payload }
    default:
      return state;
  }
};


export { coinsReducer }