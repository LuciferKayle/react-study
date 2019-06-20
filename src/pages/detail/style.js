import styled from 'styled-components';

export const DetailContainer = styled.div`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 40px;
    width: 700px;

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.7;
        color: #2f2f2f;
        margin: 0 0 25px;
        margin: 0 0 25px;
    }

    img {
        display: block;
        transition: all .15s linear;
        z-index: 100;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
        width: 100%;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 40px;
    }
`

export const DetailTitle = styled.div`
    margin: 20px 0;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
}
`