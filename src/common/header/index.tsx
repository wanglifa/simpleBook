import * as React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import {State} from "./store/reducer";


interface Prop {
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
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
const getPartialStore = (state: {header: State}) => {
  return {
    focused: state.header.focused
  }
}
const actionCreator = (dispatch: (a: {type: string}) => void) => {
  return {
    onFocus: () => {
      const action = {type: 'search_focus'}
      dispatch(action)
    },
    onBlur: () => {
      const action = {type: 'search_blur'}
      dispatch(action)
    }
  }
}
export default connect(getPartialStore, actionCreator)(Header);