import * as rand from '@/utils/rand'
import moment from 'moment'

export default class Project {

    constructor(json) {
        Object.assign(this, json)
    }

    static rand() {
        return new Project({
            beginTime: moment(),
            endTime: moment(),
            title: rand.str(5, 12),
            desc: rand.str(50, 100),
            template: rand.str(5, 20),
            projectId: rand.uuid()
        })
    }

    beginTime
    endTime
    title
    desc
    template
    projectId
}