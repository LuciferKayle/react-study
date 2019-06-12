import React  , {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

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

class Header extends Component {
    render() {
        return (
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
                        <CSSTransition in={this.props.focused} timeout={200} classNames="my-node">
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={`iconfont iconiconfontzhizuobiaozhun22 ${this.props.focused ? 'focused' : ''}`}></i>
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
    }
}   

const mapStateToProps = (state) => {
    return {
        focused: state.focused
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            }
            dispatch(action);
        },
        handleInputBlur() {
            const action = {
                type: 'search_blur'
            }
            dispatch(action);
        }
    }
}
  


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);