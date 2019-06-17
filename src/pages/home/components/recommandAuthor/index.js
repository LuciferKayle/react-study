import React, { Component } from "react";
import {
    AuthorContainer,
    AuthorContainerTitle,
    AuthorList,
    GetMoreBtn
} from './style';

class RecommandAuthor extends Component {
    render() {
        return (
            <AuthorContainer>
                <AuthorContainerTitle>
                    <span className="title">推荐作者</span>
                    <div className="change-author">
                        <i className="iconfont iconhuanyipi"></i>
                        &nbsp;换一批
                    </div>
                </AuthorContainerTitle>
                <AuthorList>
                    {this.getAuthorList()}
                </AuthorList>

                <GetMoreBtn>
                    查看全部 &nbsp;<i className="iconfont iconjiantou"></i>    
                </GetMoreBtn>

            </AuthorContainer>
        )
    }

    getAuthorList() {
        let list = [{}, {}];
        let content = list.map((item, index) => {
            return (
                <li className="author-item" key={index}>
                    <img className="author-avator" src="//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="author-img" />
                    <div className="author-info">
                        <div className="author-name">茶点故事</div>
                        <p className="author-detail">写了400.7k字 · 11.1k喜欢</p>
                    </div>
                    <i className="iconfont iconjiahao attention">关注</i>
                </li>
            )
        })
        return content;
    }
}

export default RecommandAuthor;