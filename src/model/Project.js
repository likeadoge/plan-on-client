import ph from '@/utils/placeholder'
import uuid from '@/utils/uuid'
import moment from 'moment'

export default class Project {

    constructor(json) {
        Object.assign(this, json)
    }

    static rand() {
        return new Project({
            beginTime: moment(),
            endTime: moment(),
            title: ph(5, 12),
            desc: ph(50, 100),
            template: ph(5, 20),
            projectId: uuid()
        })
    }

    beginTime
    endTime
    title
    desc
    template
    projectId
}