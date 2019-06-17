import styled from 'styled-components';

export const AuthorContainer = styled.div`
    margin-bottom: 20px;
    padding-top: 0;
    font-size: 13px;
`
export const AuthorContainerTitle = styled.div`
    color: #969696;

    .change-author {
        float: right;
        cursor: pointer;
    }
`

export const AuthorList = styled.ul`
    margin: 0 0 20px;
    text-align: left;
    list-style: none; 

    .author-item {
        margin-top: 15px;
        line-height: 20px;

        .author-avator {
            width: 48px;
            height: 48px;
            margin-right: 10px;
            border: 1px solid #ddd;
            border-radius: 50%;
            vertical-align: middle;
        }

        .author-info {
            display: inline-block;
            vertical-align: middle;
            padding-top: 5px;
            font-size: 14px;

            .author-detail {
                margin-top: 2px;
                font-size: 12px;
                color: #969696;
            }
            
        }

        .attention {
            float: right;
            margin-top: 5px;
            padding: 0;
            font-size: 13px;
            color: #42c02e;
            cursor: pointer;
        }
    }
`

export const GetMoreBtn = styled.a.attrs({
    href: '/'
})`
    display: block;
    box-sizing: border-box;
    padding: 7px 7px 7px 12px;
    width: 100%;
    font-size: 13px;
    line-height: 20px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    text-decoration:none;

    .iconfont {
        font-size: 13px;
    }
`