import axios from 'axios';
import {constants} from './index'

export const loginIn = () => ({
    type: constants.CHANGE_LOGIN_STATE,
    state: true
})

export const loginOut = () => ({
    type: constants.CHANGE_LOGIN_STATE,
    state: false
})

export const checkLogin = (params) => {
    return (dispatch) => {
        let {username,password} = params;
        axios.get(`/api/login.json?user=${username}&password=${password}`).then(res => {
            let data = res.data;
            if(data.success) {
                dispatch(loginIn());
            }
        }).catch(err => {
            console.log(err);
        });
    }
}