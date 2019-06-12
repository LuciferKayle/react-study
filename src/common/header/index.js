import React  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

const Header = (props) => (
    <HeaderWrapper>
    <Logo/>
    <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
            <i className="iconfont iconAa"></i>   
        </NavItem>
        <NavItem className="right">登录</NavItem>

        <SearchWrapper>
            <CSSTransition in={props.focused} timeout={200} classNames="my-node">
                <NavSearch 
                    className={props.focused ? 'focused' : ''}
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}
                />
            </CSSTransition>
            <i className={`iconfont iconiconfontzhizuobiaozhun22 ${props.focused ? 'focused' : ''}`}></i>
        </SearchWrapper>
        
        <Addition>
            <Button>注册</Button>
            <Button className="write"> 
                <i className="iconfont iconbi"> 写文章 </i>
            </Button>
        </Addition>

    </Nav>
</HeaderWrapper>
)


const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused')
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);