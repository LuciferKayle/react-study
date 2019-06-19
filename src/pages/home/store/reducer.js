import * as constants from './constants';

import { fromJS } from 'immutable';

//immutable 的作用(将原始数据类型转化为immutable类型)

const defaultState = fromJS({
    state: 1,
    scrollTopstate: false,
    topicList: [],
    articlePage: 1
});


export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.set('topicList', fromJS(action.topicList));
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'topicList': state.get('topicList').concat(fromJS(action.topicList)),
                'articlePage': action.nextPage
            });
        case constants.CHANGE_SCROLL_TOP_STATE:
            return state.set('scrollTopstate', action.value);
    default:
        return state;
   }
}
