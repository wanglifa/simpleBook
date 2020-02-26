import styled from 'styled-components'
import * as React from "react";
import logoPic from '../../static/logo.png'
import {HTMLAttributes} from "react";
interface Prop extends HTMLAttributes<HTMLElement>{

}
export const HeaderWrapper: React.FC = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;
export const Logo: React.FC = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav: React.FC= styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`;
export const NavItem: React.FC<Prop> = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper: React.FC = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    transition: all 0.3s linear;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all 0.3s linear;
  }
  .slide-exit-done {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`
export const NavSearch: React.FC<Prop> = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  margin-left: 20px;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;
export const Addition: React.FC = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button: React.FC<Prop> = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    color: #fff;
    background: #ec6149;
  }
`