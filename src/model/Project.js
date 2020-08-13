import * as rand from '@/utils/rand'
import moment from 'moment'
import { UserGroup } from './UserInfo'

export class ProjectInfo {

    constructor(json) {
        Object.assign(this, json)
    }

    static rand() {
        return new ProjectInfo({
            beginTime: moment(),
            endTime: moment(),
            title: rand.str(5, 12),
            desc: rand.str(50, 100),
            template: Template.mockData[0],
            projectId: rand.uuid(),

            editableUser: UserGroup.mockData[0],
            viewableUser: UserGroup.mockData[0],
        })
    }

    static blank() {
        return new ProjectInfo({})
    }

    beginTime = null
    endTime = null
    title = ''
    desc = ''
    template = undefined
    projectId = '';
    editableUser = undefined;
    viewableUser = undefined;
}

export class Template {
    templateId = rand.uuid()
    name = ""

    constructor(json) {
        Object.assign(this, json)
    }

    static rand() {
        return new Template({
            templateId: rand.uuid(),
            name: rand.str(3, 7)
        })
    }

    static mockData = rand.arr(3, 6)(() => Template.rand())

}

export class BoardInfo {

    static rand() {
        return new BoardInfo({
            boardId: rand.uuid(),
            title: rand.str(15, 40)
        })
    }

    constructor(json) {
        Object.assign(this, json)
    }

    boardId
    title
}