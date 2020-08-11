import ph from '@/utils/placeholder'
import uuid from '@/utils/uuid'

export default class Board {

    static rand() {
        return new Board({
            boardId: uuid(),
            title: ph(15, 40)
        })
    }

    constructor(json) {
        Object.assign(this, json)
    }

    boardId
    title
}