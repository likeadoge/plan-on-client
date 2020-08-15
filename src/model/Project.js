import * as rand from '@/utils/rand'
import moment from 'moment'
import { UserGroup } from './UserInfo'

export class BoardInfo {
    boardId = ''
    title = ''
    sort = ''
    projectId = ''

    rows = [] // {rowId,sort}
    cols = [] // {colId,sort,title}

    static blank() {
        return new BoardInfo({})
    }

    static rand() {
        return new BoardInfo({
            boardId: rand.uuid(),
            title: rand.str(15, 40)
        })
    }


    constructor(json) {
        Object.assign(this, json)
    }

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


export class ProjectInfo {

    static mockData = new Array(rand.num(4, 8)).fill(0).map(() => ({
        info: ProjectInfo.rand(),
        boardList: new Array(rand.num(4, 8)).fill(0).map(() => (BoardInfo.rand()))
    }))

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



export class Row {
    rowId = ''
    sort = ''
    constructor(json) {
        Object.assign(this, json)
    }

    static mockList = rand.arr(4, 6)(() => Row.rand())

    static rand() {
        return new Row({
            rowId: rand.uuid(),
            sort: Math.random(),
            title: rand.str(4, 7)
        })
    }
}

export class Col {
    colId = ''
    sort = ''
    title = ''
    constructor(json) {
        Object.assign(this, json)
    }


    static mockList = rand.arr(4, 6)(() => new Row({
        colId: rand.uuid(),
        sort: Math.random(),
        title: rand.str(4, 7)
    }))
}

export class CardInfo {
    boardId = ''
    rowId = ''
    colId = ''
    cardId = ''
    sort = ''
    content = ''
    desc = ''
    version = ''
    executors = []
    endTime = null && moment()
    beginTime = null && moment()

    constructor(json) {
        Object.assign(this, json)
    }

    static mockData = [new CardInfo({
        content: '测试卡片',
        rowId: Row.mockList[0].rowId,
        colId: Col.mockList[0].colId,
        sort: 0,
        cardId: rand.uuid()
    })]

    static blank() {
        return new CardInfo({
            cardId: rand.uuid()
        })
    }
}