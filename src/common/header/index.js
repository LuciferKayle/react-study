import React  , {Component} from 'react';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from './style'

class HeadWarpper extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavSearch></NavSearch>
                    <Addition>
                        <Button>注册</Button>
                        <Button className="write">写文章</Button>
                    </Addition>

                </Nav>
            </HeaderWrapper>
        )
    }
}   

export default HeadWarpper;