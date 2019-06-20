import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;

`

export const LoginBox = styled.div`
    width: 400px;
    margin: 60px auto;
    padding: 50px 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;

    .title {
        margin: 10px 0 30px;
        font-size: 24px;
        color: #888888;
        font-weight: bold;
    }

`

export const  Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    border-bottom: none;
    border-radius: 4px;
    margin-bottom: 20px;
`

export const Button = styled.div`
    box-sizing: border-box;
    background: #187cb7;
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    margin-bottom: 20px;

`