import * as rand from '@/utils/rand'

export default class Board {

    static rand() {
        return new Board({
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