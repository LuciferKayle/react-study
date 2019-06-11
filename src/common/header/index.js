import React  , {Component} from 'react';
import { CSSTransition } from 'react-transition-group';

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

class HeadWarpper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            focused: false
        }

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);

    }

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
                        <CSSTransition in={this.state.focused} timeout={200} classNames="my-node">
                            <NavSearch 
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={`iconfont iconiconfontzhizuobiaozhun22 ${this.state.focused ? 'focused' : ''}`}></i>
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

    handleInputFocus(e) {
        this.setState({
            focused: true
        })
    }
    
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

}   

export default HeadWarpper;