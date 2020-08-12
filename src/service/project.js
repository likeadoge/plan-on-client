import Project from '@/model/Project'
import Board from '@/model/Board'
import * as rand from '@/utils/rand'

export const getProjectList = () => Promise.resolve(
    new Array(rand.num(4, 8)).fill(0).map(() => ({
        info: Project.rand(),
        boardList: new Array(rand.num(4, 8)).fill(0).map(() => (Board.rand()))
    }))
)