// import * as constants from './constants';

import { fromJS } from 'immutable';

//immutable 的作用(将原始数据类型转化为immutable类型)

const defaultState = fromJS({
    state: 1,
    topicList: []
});


export default (state = defaultState, action) => {
    switch(action.type) {

    default:
        return state;
   }
}
