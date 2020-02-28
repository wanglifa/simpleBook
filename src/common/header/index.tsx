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
import {actionCreator as LoginActionCreator} from '../../pages/login/store'
import {MouseEventHandler} from "react";
import {FocusEventHandler} from "react";
import {Link} from "react-router-dom";


interface Prop {
  focused: boolean;
  onFocus: (s: string[] & {size: number}) => void;
  onBlur: FocusEventHandler;
  list: string[];
  page: number;
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
  mouseIn: boolean;
  onClick: (a: number, b: number) => void;
  totalPage: number;
  login: boolean;
  onClickLoginOut: () => void;
}
const Header: React.FC<Prop> = (props) => {
  const pageList = []
  const newList = (props.list as (string[] & {toJS: () => string[]})).toJS()
  for (let i = (props.page - 1) * 10; i < props.page * 10; i++) {
    if (newList.length) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
  }
  return (
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className={"left active"}>首页</NavItem>
        <NavItem className={"left"}>下载App</NavItem>
        { props.login ?
          <NavItem className={"right"} onClick={props.onClickLoginOut}>退出</NavItem>
          :
          <Link to={"/login"}>
            <NavItem className={"right"}>登录</NavItem>
          </Link>
        }
        <NavItem className={"right"}>
          <i className={"iconfont"}>&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={100} classNames={"slide"}>
            <NavSearch className={props.focused ? 'focused' : ''}
                       onFocus={() =>props.onFocus(props.list as (string[] & {size: number}))} onBlur={props.onBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : 'iconfont'}>&#xe62d;</i>
          {
            (props.focused || props.mouseIn) ?
              <SearchInfo onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}>
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch onClick={() => props.onClick(props.page, props.totalPage)}>换一批</SearchInfoSwitch>
                  <SearchInfoList>
                    {pageList}
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
    list: state.get!('header').get!('list'),
    page: state.get!('header').get!('page'),
    mouseIn: state.get!('header').get!('mouseIn'),
    totalPage: state.get!('header').get!('totalPage'),
    login: state.get!('login').get!('login')
  }
}
const mapDispatchToProps = (dispatch: (a: {type: string} | any) => void) => {
  return {
    onFocus: (list: string[] & {size: number}) => {
      list.size === 0 && dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFocus())
    },
    onBlur: () => {
      dispatch(actionCreator.searchBlur())
    },
    onMouseEnter: () => {
      dispatch(actionCreator.mouseEnter())
    },
    onMouseLeave: () => {
      dispatch(actionCreator.mouseLeave())
    },
    onClick: (page: number, total: number) => {
      const _newPage = page < total ? page + 1 : 1;
      dispatch(actionCreator.onClick(_newPage))
    },
    onClickLoginOut: () => {
      dispatch(LoginActionCreator.onClickLoginOut())
    }
  }
}
export default connect(getPartialStore, mapDispatchToProps)(Header);