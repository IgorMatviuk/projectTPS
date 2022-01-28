import Cookie from 'cookie'
import Cookies from "js-cookie"
import jwtDecode from 'jwt-decode'

const backAPI = "http://localhost:3000/"

export const state = () => ({
  token: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {    
  async loginAdmin({commit, dispatch}, formData) {
    try {
      const {token} = await this.$axios.$post(`${backAPI}back/auth/admin/login`, formData)

      dispatch('setToken', token)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },

  async createAdmin({commit}, formData) {
    try {
      this.$axios.$post(`${backAPI}back/auth/admin/create`, formData)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },

  setToken({commit}, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.set('jwt-token', token)
  },
  logout({commit}) {
    this.$axios.setToken(false)
    commit('clearToken')
    Cookies.remove('jwt-token')
  },
  autoLogin({dispatch}) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = Cookie.parse(cookieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTValid(token)) {
        dispatch('setToken', token)
    } else {
      dispatch('logout')
    }
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token),
  token: state => state.token
}

function isJWTValid(token) {
  if (!token){
    return false
  }

  const jwtData =  jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return (new Date().getTime() / 1000) < expires
}