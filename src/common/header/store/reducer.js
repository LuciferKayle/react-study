import * as constants from './constants';

import { fromJS } from 'immutable';

//immutable 的作用(将原始数据类型转化为immutable类型)

const defaultState = fromJS({
    focused: false,
    searchList: [],
    showSearchList: []
});


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_SEARCH_LIST:
            return state.set('searchList', action.data);
        case constants.CHANGE_SHOW_SEARCH_LIST:
            return state.set('showSearchList', action.data);
        default:
            return state;
   }
}
