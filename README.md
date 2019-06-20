## React 学习项目总结
### 项目技术栈简介
- 基础项目库： react + redux + react-redux + react-router
- 辅助库
1. immutable
作用： store的数据不可变性（fromJS，getIn等方法）

```
import { fromJS } from 'immutable';
fromJS(obj);

```

2. redux-immutable
作用：使用immutable之后，store支持

```
import { combineReducers } from 'redux-immutable';
export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})


```

3. redux-thunk(中间件)
作用：  action 里只能返回 对象，使用插件包让 action 为 纯函数 ，处理一部操作

```
import thunk from 'redux-thunk';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

```

4. styled-components(样式分离组件配置)


5. react-redux
作用： Provider-connect 模式的使用，使组件共享最顶的store信息

```
import { Provider ,connect} from 'react-redux';

<Provider store={store}>
    <Header/>
    <Route exact path="/" component={HomeWrapper} />
</Provider>

connect(mapStateToProps,mapDispatchToprops)(Detail); 
 
链接state和dispatch方法
```

