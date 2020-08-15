import { ProjectInfo, Template } from '@/model/Project'

export const getProjectList = () => Promise.resolve(
    ProjectInfo.mockData
)


export const getProject = (projectId) => {
    const s = ProjectInfo.mockData.find(v => v.info.projectId === projectId)
    return s ? Promise.resolve(s) : Promise.reject()
}


export const getTemplateList = () => Promise.resolve(
    Template.mockData
)