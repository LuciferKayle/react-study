import { combineReducers } from 'redux-immutable';
import headerReducer from '../common/header/store/reducer'
import {reducer as homeReducer }  from '../pages/home/store'
import {reducer as detailReducer} from '../pages/detail/store' 

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer
})