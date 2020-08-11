import Project from '@/model/Project'
import Board from '@/model/Board'
import rand from '@/utils/rand'

export const getProjectList = () => Promise.resolve(
    new Array(rand(4, 8)).fill(0).map(() => ({
        info: Project.rand(),
        boardList: new Array(rand(4, 8)).fill(0).map(() => (Board.rand()))
    }))
)