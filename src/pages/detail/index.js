import React, {Component} from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store' 
import { 
    DetailContainer,
    DetailTitle
} from "./style";


class Detail extends Component {

    componentDidMount() {
        // params传递参数
        let match=this.props.match.params;
        this.props.getDetailInfo(match.id);

        // query 传递参数
        // let visitor = this.props.location.search;
        // let id = visitor.split('=')[1];

    }

    render() {
        const {title ,content} = this.props;
        return (
            <DetailContainer>
                <DetailTitle>{title}</DetailTitle>
                <div dangerouslySetInnerHTML={{__html: content}}></div>                
            </DetailContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail','title']),
        content: state.getIn(['detail','content'])
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        getDetailInfo(id) {
            dispatch(actionCreators.getDetailData(id))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(Detail);