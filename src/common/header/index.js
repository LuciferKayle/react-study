import React, {Component}  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';


import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchTipsContainer,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    NavSearch,
    Addition,
    Button
} from './style';

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
        
                    {this.getListArea()}
        
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

    getListArea = () => {
        if(this.props.focused) {
            return (
            <SearchTipsContainer>   
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>
                        <i className="iconfont iconhuanyipi"></i>
                        &nbsp;换一批
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <div>
                    {this.props.list.map((item)=> {
                        return (
                            <SearchInfoItem key={item}>{item}</SearchInfoItem>
                        )
                    })}
                </div>
            </SearchTipsContainer>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('showSearchList')
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.searchFocus());
            dispatch(actionCreator.getList());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleSearchPage() {
            dispatch(actionCreator.changeShowSearchList());
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);