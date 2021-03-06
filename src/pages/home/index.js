import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { actionCreator } from './store';

import {
    HomeWrapper,
    HomeWrapperLeft,
    HomeWrapperRight,
    RecomandContainier,
    RecomandItem,
    RecomandItemLeft,
    RecomandItemRight,
    BoardContainer,
    QrboxContainer,
    AdvertiseBanner,
    ScrollToTop
} from './style';

import RecommandAuthor from './components/recommandAuthor';

class Home extends Component {

    componentWillMount() {
        this.props.getHomeData();
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

    render() {
        const { loadMore, page, scrollTopstate } = this.props;
        return (
            <HomeWrapper>
                {scrollTopstate ? <ScrollToTop onClick={this.handleScrollTop}>回到顶部</ScrollToTop> : null}

                <HomeWrapperLeft>
                    <img className="banner-pic" src="http://wechatapppro-1252524126.file.myqcloud.com/apppcHqlTPT3482/image/Y29udGVudE1hcmtldC1nb29kc0luZm8tODYwMTg3ODU.png" alt="banner-img" />
                    <RecomandContainier>
                        {this.getListArea()}
                    </RecomandContainier>
                    <span data-page="3" onClick={() => (loadMore(page))} className="load-more">阅读更多</span>
                </HomeWrapperLeft>
                <HomeWrapperRight>
                    <BoardContainer>
                        <img className="board-img" src={require('../../static/images/home/banner-s-5-3.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-6-4.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-7-2.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-club-1.png')} alt="banner-img" />
                    </BoardContainer>

                    <AdvertiseBanner style={{ backgroundImage: `url(//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540)`}}>
                        <span className="label">广告</span>
                    </AdvertiseBanner>

                    <QrboxContainer>
                        <img className="download-pic" src="//activity.hdslb.com/zzjs/20160608appDownload/img/pc/QRcode.png" alt="qr-download" />
                        <div className="download-info">
                            <p className="title">下载简书手机App <i className="iconfont iconjiantou"></i></p>
                            <p className="summary">随时随地发现和创作内容</p>
                        </div>
                    </QrboxContainer>

                    <RecommandAuthor></RecommandAuthor>


                    <AdvertiseBanner style={{ backgroundImage: `url(//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540)`}}>
                        <span className="label">广告</span>
                    </AdvertiseBanner>

                </HomeWrapperRight>
            </HomeWrapper>
        )
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    getListArea() {
        let { topicList } = this.props;
        const listConent = topicList.map((item, index) => {

            return (
                <RecomandItem key={index}>
                    <RecomandItemLeft>

                        <Link to={`/detail/${index}`}>
                            <h3 className="title">
                                {item.get('title')}
                            </h3>
                        </Link>

                        <div className="abstract">{item.get('summary')}</div>
                        <div className="user-collect-info">
                            <span>{item.get('name')}</span>
                            <i className="iconfont iconicon_comment">{item.get('comments')}</i>
                            <i className="iconfont iconaixin">{item.get('collect')}</i>
                        </div>
                    </RecomandItemLeft>
                    <RecomandItemRight>
                        <img className="recommend-item-pic" src={item.get('img_url')} alt="banner-img" />
                    </RecomandItemRight>
                </RecomandItem>

            )
        })
        return listConent;
    }

}

const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList']),
        page: state.getIn(['home', 'articlePage']) + 1,
        scrollTopstate: state.getIn(['home', 'scrollTopstate'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeData() {
            dispatch(actionCreator.getHomeData());
        },

        loadMore(page) {
            dispatch(actionCreator.loadMoreHomeData(page));
        },

        changeScrollTopShow() {
            let scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 400) {
                dispatch(actionCreator.toggleScrollTop(true));
            } else {
                dispatch(actionCreator.toggleScrollTop(false));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);