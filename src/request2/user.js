import { post, get } from '@/request/http'
import Vue from 'vue'
import UserInfo from '../model/UserInfo'

export const login = ({ username, password }) => post('/sys/login', { username, password })
        .then(({ token, userInfo }) => {
            Vue.ls.set('ACCESS_TOKEN', token)
            return { userInfo:UserInfo.fromServer(userInfo), token }
        })

export const register = ({ realname, username, password, pinyinAll, pinyinCamel }) => post('/sys/user/register', { realname, username, password, pinyinAll, pinyinCamel })

export const getUserInfo = () => get.withoutError('/sys/userInfo', {}).then(data=> UserInfo.fromServer(data))

export const getUserList = () =>  get('/sys/userList').then(list=>list.map(v=> UserInfo.fromServer(v)))
