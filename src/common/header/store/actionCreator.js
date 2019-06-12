// action creator 
import * as constants from './constants';
import { fromJS } from 'immutable';
import { shuffle } from '../../../libs/utils';


import axios from 'axios';


export const searchFocus = () => ({
    type:  constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type:  constants.SEARCH_BLUR
})

export const changeSearchList = (data) => ({
    type:  constants.CHANGE_SEARCH_LIST,
    data
})

export const changeShowSearchList = (data) => ({
    type:  constants.CHANGE_SHOW_SEARCH_LIST,
    data
})


export const getList = () => {
    return (dispatch) => {
        axios.get('/api/searchResult.json').then(res => {
            let data = res.data;
            if(data.success) {
                let list = data.data;
                let result = shuffle(list).slice(0,10);
                dispatch(changeSearchList(fromJS(list)));
                dispatch(changeShowSearchList(fromJS(result)));
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
