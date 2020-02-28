import * as React from "react";
import {connect} from "react-redux";
import {
  LoginBox,
  LoginWrapper,
  Input,
  Button
} from "./style";
import {useEffect, useRef} from "react";
import {actionCreator} from './store'
import { Redirect} from 'react-router-dom'
interface Prop {
  onClickLogin: (a: string, b: string) => void;
  loginStatus: boolean
}

const Login: React.FC<Prop> = (props) => {
  let accountRef = useRef<HTMLInputElement>(null)
  let passwordRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      {
        !props.loginStatus ?
          <LoginWrapper>
            <LoginBox>
              <Input placeholder={"账号"} ref={accountRef}/>
              <Input placeholder={"密码"} ref={passwordRef}/>
              <Button onClick={() => props.onClickLogin(accountRef.current!.value, passwordRef.current!.value)}>登录</Button>
            </LoginBox>
          </LoginWrapper>
          :
          <Redirect to={"/"}/>
      }
    </div>
  )
}
const mapState = (state: any) => ({
  loginStatus: state.get!('login').get!('login')
})
const mapDispatch = (dispatch: any) => ({
  onClickLogin: (account: string, password: string) => {
    dispatch(actionCreator.goLogin(account, password))
  }
})
export default connect(mapState, mapDispatch)(Login);