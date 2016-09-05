import axios from 'axios'
import { HOST } from '../helpers/constants'
import {
  TOGGLE_TABS,
  TOGGLE_SIDE_NAV,
  SET_CURRENT_TAB,
  SIGN_IN
} from './types'

export function toggleTabs(bool) {
  return {
    type: TOGGLE_TABS,
    payload: bool
  }
}

export function toggleSideNav(bool) {
  return {
    type: TOGGLE_SIDE_NAV,
    payload: bool
  }
}

export function setCurrentTab(currentTab) {
  return {
    type: SET_CURRENT_TAB,
    payload: currentTab
  }
}

export function signIn(userInfo) {
  const request = axios.post(`${HOST}/users/signIn`, userInfo)
  return {
    type: SIGN_IN,
    payload: request
  }
}
