import { UserGroup } from '@/model/UserInfo'
import * as rand from '@/utils/rand'

export const getALlUserGroup = () => Promise.resolve(rand.arr(6, 12)(() => UserGroup.rand()))