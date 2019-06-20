import axios from 'axios';
import * as constants from './constants';


const changeDetailData = (title,content) => {
    return {
        type: constants.CHANGE_DETAIL_DATA,
        title: title,
        content: content
    }
}


export const getDetailData = (id) => {
    return (dispatch) => {
        axios.get(`/api/detail.json?id=${id}`).then((res) => {
            let result = res.data.data;
            dispatch(changeDetailData(result.title,result.content));
        }).catch(err=> {
            console.log(err);
        })
    }
}