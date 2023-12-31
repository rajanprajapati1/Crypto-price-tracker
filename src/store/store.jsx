import {configureStore  } from '@reduxjs/toolkit'
import {coinsReducer} from './reducers';

export const store =configureStore({
    reducer :{
       coins  : coinsReducer,
    }
})
;