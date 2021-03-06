import { post, get } from '@/request/http'
import Vue from 'vue'

export const login = ({ username, password }) => post('/sys/login', { username, password })
    .then(({ token, userInfo }) => {
        Vue.ls.set('ACCESS_TOKEN', token)
        return { userInfo, token }
    })

export const register = ({ realname, username, password }) => post('/sys/user/register', { realname, username, password })

export const getUserInfo = () => get.withoutError('/sys/userInfo', {})

export const getUserList = () => get('/sys/userList').then(userList => userList.map(({ id, avatar, realname, pinyinAll, pinyinCamel }) => ({
    uid: id,
    avatar,
    realname,
    pinyinAll,
    pinyinCamel,
})))