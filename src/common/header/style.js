import styled from 'styled-components';
import logoPic from '../../static/images/logo.png';

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    float: left;
    width: 100px;
    height: 56px;
    padding: 0;
    background: url(${logoPic});
    background-size: 100% 100%;
    cursor: pointer;
`

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: auto;
`

export const NavItem = styled.div`
    color: #333333;
    padding: 15px;
    font-size: 17px;
    line-height: 26px;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }

    .iconAa {
        font-size: 20px;
    }

    &.active {
        color: #ea6f5a;
    }

`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;

    & > .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;

        &.focused {
            color: #ffffff;
            background-color: #353535;
        }
    }
`


export const SearchTipsContainer = styled.div`
    position: absolute;
    margin-top: 9px;
    width: 250px;
    left: 16px;
    top: 100%;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    z-index: 100;
`

export const SearchInfoTitle = styled.div`
    height: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #969696;
    margin-bottom: 10px;
`
export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    height: 20px;
    cursor: pointer;

    .iconfont {
        font-size: 13px;
        transform-origin: center center;
        transition: .5s ease;
        display: inline-block;
    }
`
export const SearchInfoItem = styled.div`
    margin: 8px 10px 8px 0;
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;

    &:hover {
        cursor: pointer;
        color: #333333;
        border-color: #333333;
    }
`



export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    margin-top: 10px;
    width: 160px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline: none;
    margin-left: 20px;

    &.my-node-enter {
        width: 160px;
        transition: all .2s ease-out;
    }

    &.my-node-enter-active {
        width: 240px;
    }

    &.my-node-exit {
        transition: all .2s ease-out;
    }

    &.my-node-exit-active {
        width: 160px;
    }

    &.focused {
        width: 240px;
    }

    &::placeholder {
        color: #999999;
    }
`

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 58px;
`

export const Button = styled.div`
    float: left;
    box-sizing: border-box;
    min-width: 80px;
    height: 38px;
    padding: 6px 12px;
    line-height: 24px;
    margin: 9px 20px 0 0;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    text-align: center;
    cursor: pointer;

    &.write {    
        color: #fff;
        background-color: #ea6f5a;

        a {
            color: #ffffff;
        }
    }
`

