import { ProjectInfo, BoardInfo, Template } from '@/model/Project'
import * as rand from '@/utils/rand'

export const getProjectList = () => Promise.resolve(
    new Array(rand.num(4, 8)).fill(0).map(() => ({
        info: ProjectInfo.rand(),
        boardList: new Array(rand.num(4, 8)).fill(0).map(() => (BoardInfo.rand()))
    }))
)


export const getProjectInfo = (pid) => Promise.resolve(
    ProjectInfo.rand(pid)
)


export const getTemplateList = () => Promise.resolve(
    Template.mockData
)