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
import {useState} from "react";
import {FocusEventHandler} from "react";

const Header: React.FC = () => {
  const [focused, setFocused] = useState(false)
  const onFocus: FocusEventHandler = () => {
    setFocused(true)
  }
  const onBlur: FocusEventHandler = () => {
    setFocused(false)
  }
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
          <NavSearch className={focused ? 'focused' : ''}
            onFocus={onFocus} onBlur={onBlur}
          />
          <i className={focused ? "focused iconfont" : 'iconfont'}>&#xe62d;</i>
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
export default Header;