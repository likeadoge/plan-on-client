import * as rand from "@/utils/rand"

export class UserInfo {
    uid = ""
    name = ""
    account = ""
    avatar = ""

    constructor(json) {
        Object.assign(this, json)
    }

    static rand() {
        return new UserGroup({
            uid: rand.uuid(),
            name: rand.str(2, 4),
            account: rand.str(),
            avatar: rand.str()
        })
    }

}

export class UserGroup {
    gid = ""
    name = ""
    creator = null
    userList = []

    constructor(json) {
        Object.assign(this, json)
    }
    static rand() {
        return new UserGroup({
            gid: rand.uuid(),
            name: rand.str(4, 8),
            creator: UserInfo.rand(),
            userList: rand.arr(4, 7)(() => rand.str(4, 8))
        })
    }

    static mockData = rand.arr(6, 12)(() => UserGroup.rand())
}