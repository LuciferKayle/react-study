import React , {Component} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';

import {
    LoginContainer,
    LoginBox,
    Input,
    Button
} from './style';

import { actionCreator } from './store' 

class Login extends Component {

    _login(usernameTag,passwordTag) {
        let params = {
            username: usernameTag.value,
            password: passwordTag.value
        }

        this.props.checkLogin(params);
    }

    render() {
        if(this.props.loginState) {
            return (<Redirect to="/"></Redirect>)  
        } else {
            return (
                <LoginContainer>
                    <LoginBox>
                        <div className="title"> 登 录 </div>
                        <Input autoComplete="false" type="text" ref={(username) => {this.username = username}}  placeholder="手机号或邮箱"/>
                        <Input autoComplete="false" type="password" ref={(password) => {this.password = password}}   placeholder="密码"/>  
                        <Button onClick={() => this._login(this.username,this.password)}>登录</Button>
    
                    </LoginBox>  
                </LoginContainer>
            )
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        loginState: state.getIn(['login','loginState'])
    }
}   

const mapDistapchToProps = (dispatch) => {
    return {
        checkLogin(params) {
            dispatch(actionCreator.checkLogin(params));
        }
    }
}

export default connect(mapStateToProps, mapDistapchToProps)(Login);