import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    AdvertiseBanner
} from './style';

import RecommandAuthor from './components/recommandAuthor';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeWrapperLeft>
                    <img className="banner-pic" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img" />
                    <RecomandContainier>
                        {this.getListArea()}
                    </RecomandContainier>
                    <a data-page="3" href="/" className="load-more">阅读更多</a>
                </HomeWrapperLeft>
                <HomeWrapperRight>
                    <BoardContainer>
                        <img className="board-img" src={require('../../static/images/home/banner-s-5-3.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-6-4.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-7-2.png')} alt="banner-img" />
                        <img className="board-img" src={require('../../static/images/home/banner-s-club-1.png')} alt="banner-img" />
                    </BoardContainer>

                    <AdvertiseBanner style={{backgroundImage: `url(https://oimagea3.ydstatic.com/image?id=787637783774084697&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60)`}}>
                        <span className="label">广告</span>
                    </AdvertiseBanner>

                    <QrboxContainer>
                        <img className="download-pic" src="//activity.hdslb.com/zzjs/20160608appDownload/img/pc/QRcode.png" alt="qr-download"/>
                        <div className="download-info">
                            <p className="title">下载简书手机App <i className="iconfont iconjiantou"></i></p>
                            <p className="summary">随时随地发现和创作内容</p>
                        </div>
                    </QrboxContainer>
                      
                    <RecommandAuthor></RecommandAuthor>

                    
                    <AdvertiseBanner style={{backgroundImage: `url(https://oimagea3.ydstatic.com/image?id=787637783774084697&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60)`}}>
                        <span className="label">广告</span>
                    </AdvertiseBanner>

                </HomeWrapperRight>
            </HomeWrapper>
        )
    }

    getListArea() {
        let { topicList } = this.props;
        const listConent = topicList.map((item,index)=> {
            return (
                <RecomandItem key={index}> 
                    <RecomandItemLeft>
                        <h3 className="title">
                            <a href="/p/92913756b1ff">使用多闪助手加好友，全自动批量化加粉解放双手，引抖音流量，日引千粉！</a>
                        </h3>
                        <div className="abstract">多闪上线一段时间了，相信不少的伙伴都开始体验了，近不少人看到我们前面写的文章，一直问我如何赚钱，如何添加好友，如何参加多闪的福利，其实这些都是比</div>
                        <div className="user-collect-info">
                            <span>涛_05e2</span>
                            <i className="iconfont iconicon_comment">1</i>
                            <i className="iconfont iconaixin">199</i>
                        </div>
                    </RecomandItemLeft>
                    <RecomandItemRight>
                        <img className="recommend-item-pic" src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img" />
                    </RecomandItemRight>
                </RecomandItem>
    
            )
        })
        return listConent;
    }

}

const mapStateToProps = (state) => {
    return {
        // topicList: state.get('home').get('topicList')
        topicList: state.getIn(['home','topicList'])

    }
}
export default connect(mapStateToProps,null)(Home);