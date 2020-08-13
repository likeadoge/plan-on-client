import { UserGroup } from '@/model/UserInfo'

export const getUserGroupList = () => Promise.resolve(UserGroup.mockData)