import React, {Component}  from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
import { fromJS } from 'immutable';
import { shuffle } from '../../libs/utils';

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
        const {focused,totalList,handleInputFocus,handleInputBlur} = this.props;
        
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
                    <CSSTransition in={focused} timeout={200} classNames="my-node">
                        <NavSearch 
                            className={focused ? 'focused' : ''}
                            onFocus={()=> handleInputFocus(totalList)}
                            onBlur={handleInputBlur}
                        />
                    </CSSTransition>
                    <i className={`iconfont iconiconfontzhizuobiaozhun22 ${focused ? 'focused' : ''}`}></i>
        
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
        const {
            totalList,
            handleSearchPage
        } = this.props;
        if(this.props.focused || this.props.mouseIn) {
            return (
            <SearchTipsContainer onMouseEnter={this.props.handleMouseEnter} onMouseLeave={this.props.handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={() => handleSearchPage(totalList, this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className="iconfont iconhuanyipi"></i>
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
        };
    };
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('showSearchList'),
        totalList: state.get('header').get('searchList'),        
        mouseIn: state.get('header').get('mouseIn'),
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreator.getList());             
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleSearchPage(totalList, spinIcon) {
            let originAngel = spinIcon.style.transform.replace(/[^0-9]/ig,'');
            if(originAngel) {
                originAngel = parseInt(originAngel,10);
            } else {
                originAngel = 0;
            }
            spinIcon.style.transform = 'rotate(' + (originAngel + 360) +'deg)';
            let result = shuffle(totalList.toJS()).slice(0,10);
            dispatch(actionCreator.changeShowSearchList(fromJS(result)));
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave());
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);