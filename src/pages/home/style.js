import styled from "styled-components";
export const HomeWrapper = styled.div`
    width: 960px;
    min-height: 1000px;
    margin: 0 auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-item: flex-start;
`

export const HomeWrapperLeft = styled.div`
    width: 66.66667%;
    height: 100%;

    .banner-pic {
        width: 100%;
        height: 270px;
        background-color: hsla(0,0%,71%,.2);
        margin-bottom: 35px;
        border-radius: 6px;
    }

    .load-more {
        width: 100%;
        border-radius: 20px;
        box-sizing: border-box;
        background-color: #a5a5a5;
        height: 40px;
        margin: 30px auto 60px;
        padding: 10px 15px;
        text-align: center;
        font-size: 15px;
        line-height: 20px;
        text-decoration: none;
        border-radius: 20px;
        color: #fff;
        background-color: #a5a5a5;
        display: block;
    }
`

export const HomeWrapperRight = styled.div`
    width: 29.16667%;
    height: 100%;

`

export const RecomandItem = styled.div`
    width: 100%;
    min-height: 140px;
    position: relative;
    width: 100%;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;

    &::before {
        content: '',
        clear: both;
        overflow: hidden;
    }
`
export const RecomandContainier = styled.div`

`

export const RecomandItemLeft = styled.div`
    padding-right: 165px;

    .title {
        color: #333333;
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;

        &:hover {
            text-decoration: underline;
        }


    }
    .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    .user-collect-info {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;

        span,i {
            margin-right: 10px;
            color: #b4b4b4;
        }

        .iconfont {
            font-size: 12px;
        }

        .iconicon_comment:hover {
            color: #787878;
        }


    } 



`   

export const RecomandItemRight = styled.div`
    width: 150px;
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    width: 125px;
    height: 100px;

    .recommend-item-pic {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        vertical-align: middle;
    }

`

export const BoardContainer = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;

    .board-img {
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }
`
export const AdvertiseBanner = styled.a.attrs({
    href: '/'
})`
    margin-top: 30px;
    position: relative;
    border-radius: 4px;
    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 160px;
    width: 100%;
    margin-bottom: 20px;
    overflow: hidden;
    background-color: RGB(241, 243, 244);

    .label {
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;
        background-color: #000;
        padding: 0 5px;
        font-size: 12px;
        line-height: 20px;
        opacity: 0.7;
    }

`

export const QrboxContainer = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;

    .download-pic {
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }

    .download-info {
        display: inline-block;
        vertical-align: middle;
        .title {
            font-size: 15px;
            color: #333;
        }
        .summary {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
        
    }
    
`