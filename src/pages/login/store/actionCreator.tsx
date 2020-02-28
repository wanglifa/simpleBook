import axios from 'axios'
import * as constants from '../store/constants'
const checkLogin = () => ({
  type: constants.LOGIN,
  value: true
})
export const onClickLoginOut = () => ({
  type: constants.LOGINOUT,
  value: false
})
export const goLogin = (account: string, password: string) => {
  return (dispatch: any) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then((res) => {
      const result = res.data.data
      if (result) {
        dispatch(checkLogin())
      }
    })
  }
}