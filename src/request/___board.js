// import ph from "@/utils/placeholder";
import uuid from "@/utils/uuid";
import * as http from './http'
import moment from 'moment';


const newRow = () => ({ rowId: uuid(), sort: rows.length })
const newCol = () => ({ colId: uuid() })

let rows = []
let cols = []

const newCard = {
    toServer: (panelId, {
        rowId,
        colId,
        cardId,
        sort,
        content,
        executors,
        endTime,
        hour
    }) => ({
        laneId: rowId,
        columnId: colId,
        cardId,
        sort,
        panelId,
        name: content,
        execId: executors.map(v => v.uid).join(','),
        workTime: hour,
        endTime: endTime ? endTime.format('YYYY-MM-DD hh:mm:ss') : ''
    }),
    toClient: ({
        cardId,
        columnId,
        laneId,
        name,
        sort,
        version,
        endTime,
        workTime,
        execName,

        desc,
        beginTime,
    }) => ({
        rowId: laneId,
        colId: columnId,
        cardId,
        sort,
        desc,
        version,
        executors: execName ? execName.map(({ id, name }) => ({
            uid: id, realname: name
        })) : [],
        content: name,
        hour: Number(workTime) ? Number(workTime) : 0,
        time: endTime ? moment(endTime) : null,


        beginTime: beginTime ? moment(beginTime) : null,
        endTime: endTime ? moment(endTime) : null,
    })
}

rows.push(newRow()); rows.push(newRow()); rows.push(newRow()); rows.push(newRow());
cols.push(newCol()); cols.push(newCol()); cols.push(newCol()); cols.push(newCol());

export const getBoradDetail = (panelId) => {
    return http.get('/task/panel/getPanelInfo', { panelId }).then(({ panelColumns, lanes, cardInfos, panel, project }) => ({
        cols: panelColumns.map(({
            id, name, sort
        }) => ({ colId: id, name, sort })).sort((a, b) => a.sort - b.sort),
        rows: lanes.map(({
            id, sort
        }) => ({ rowId: id, sort })).sort((a, b) => a.sort - b.sort),
        cards: cardInfos.map(v => newCard.toClient(v)),
        panel: panel,
        title: panel.name,
        templateName: project.template,
        beginTimeStr:moment(project.beginTime).format('yyyy-MM-DD'),
        endTimeStr:moment(project.endTime).format('yyyy-MM-DD')
    }))
}

export const addBoardRow = (panelId) => {
    return http.post('/task/lane/create', { panelId })
}

export const deleteBoardRow = (id) => {
    return http.get('/task/lane/delete', { id })
}

export const sortBoardRows = (rows) => {
    return http.post('/task/lane/drag', rows.map((v, sort) => ({
        sort,
        id: v.rowId
    })))
}

export const addCard = (panelId, card) => {
    return http.post('/task/card/create', newCard.toServer(panelId, card))
}

export const delCard = (panelId, cardId) => {
    return http.get('/task/card/delete', {id:cardId})
}

export const updateCards = (panelId, arr) => {
    return http.post('/task/card/drag', {
        panelId,
        cellList: arr.map(({ colId, rowId, version, items }) => ({
            columnId: colId,
            laneId: rowId,
            version: version,
            cardList: items.map(({ cardId, sort }) => ({
                cardId, sort
            }))
        })),
    })
}

export const getCellsCard = (panelId, arr) => {
    return http.post('/task/card/getCellsInfo', arr.map(({ colId, rowId }) => ({
        columnId: colId,
        laneId: rowId,
        panelId
    }))).then(arr => arr.map(({ columnId, laneId, cardInfos }) => ({
        rowId: laneId,
        colId: columnId,
        items: cardInfos.map(v => newCard.toClient(v))
    })))
}

export const getCardInfo = id => {
    return http.get('/task/card/getCard', { id }).then(data => {
        return newCard.toClient(data)
    })
}

export const updateCardInfo = (cardId, data) => {
    const res = {}
    if (Object.hasOwnProperty.call(data,'desc')) {
        res.desc = data.desc
    }
    if (Object.hasOwnProperty.call(data,'executors')) {
        res.execId = data.executors.map(v => v.uid).join(',')
    }
    if (Object.hasOwnProperty.call(data,'content')) {
        res.name = data.content
    }
    if (Object.hasOwnProperty.call(data,'beginTime')) {
        res.beginTime = data.beginTime ? data.beginTime.format('YYYY-MM-DD hh:mm:ss') : null
    }
    if (Object.hasOwnProperty.call(data,'endTime')) {
        res.endTime = data.endTime ? data.endTime.format('YYYY-MM-DD hh:mm:ss') : null
    }
    if (Object.hasOwnProperty.call(data,'hour')) {
        res.workTime = data.hour
    }

    res.cardId = cardId
    return http.post('task/card/edit',res)
}


export const getCardComments = (cardId) => {
    return http.get('/task/feedback/getFeedBacks', { cardId }).then(arr => arr.map(v => ({
        comId: v.id,
        cardId: v.cardId,
        date: moment(v.createTime),
        user:{
            realname:v.userResponse.name,
            id:Math.random().toString()
        },
        content: v.content
    })))
}

export const addCardComment = (cardId, { content }) => {
    return http.post('/task/feedback/create', {
        cardId,
        content: content,
    })
}

export const deleteCardComment = id=>{
    return http.get('/task/feedback/delete',{
        id
    })
}





