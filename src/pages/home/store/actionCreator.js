// action creator 
import * as constants from './constants';

import axios from 'axios';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList
})

const loadMoreData = (result,nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    topicList: result.topicList,
    nextPage
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            let data = res.data;
            if(data.success) {
                dispatch(changeHomeData(data.data));
            }
        }).catch(err => {
            console.log(err);
        });
    }
}


export const loadMoreHomeData = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then(res => {
            let data = res.data;
            if(data.success) {
                dispatch(loadMoreData(data.data, page));
            }
        }).catch(err => {
            console.log(err);
        });
    }
}