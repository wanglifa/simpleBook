import * as React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoItem,
  SearchInfoList,
  SearchInfoSwitch,
  SearchInfoTitle
} from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import {State} from "./store/reducer";
import {actionCreator} from './store'


interface Prop {
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  list: string[]
}
const Header: React.FC<Prop> = (props) => {
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className={"left active"}>首页</NavItem>
        <NavItem className={"left"}>下载App</NavItem>
        <NavItem className={"right"}>登录</NavItem>
        <NavItem className={"right"}>
          <i className={"iconfont"}>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={100} classNames={"slide"}>
            <NavSearch className={props.focused ? 'focused' : ''}
                       onFocus={props.onFocus} onBlur={props.onBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : 'iconfont'}>&#xe62d;</i>
          {
            props.focused ?
              <SearchInfo>
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch>换一批</SearchInfoSwitch>
                  <SearchInfoList>
                    {props.list.map(item =>
                      <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    )}
                  </SearchInfoList>
                </SearchInfoTitle>
              </SearchInfo>
              : null
          }
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className={"writing"}>
          <i className={"iconfont"}>&#xe624;</i>
          写文章
        </Button>
        <Button className={"reg"}>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}
const getPartialStore = (state: State) => {
  return {
    focused: state.get!('header').get!('focused'),
    list: state.get!('header').get!('list')
  }
}
const mapDispatchToProps = (dispatch: (a: {type: string} | any) => void) => {
  return {
    onFocus: () => {
      dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFocus())
    },
    onBlur: () => {
      dispatch(actionCreator.searchBlur())
    }
  }
}
export default connect(getPartialStore, mapDispatchToProps)(Header);