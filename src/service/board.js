// import moment from 'moment';
import { ProjectInfo, BoardInfo, Row, Col, CardInfo } from '@/model/Project'

// panelColumns, lanes, cardInfos,

export const addBoard = (projectId) => {
    const s = ProjectInfo.mockData.find(v => v.info.projectId === projectId)
    if (s) { s.boardList.push(BoardInfo.rand()) }

    return s ? Promise.resolve() : Promise.reject()
}

export const delBoard = ({ projectId, boardId }) => {
    const s = ProjectInfo.mockData.find(v => v.info.projectId === projectId)
    if (s) { s.boardList = s.boardList.filter(c => c.boardId !== boardId) }

    return s ? Promise.resolve() : Promise.reject()
}


export const editBoard = ({ projectId, boardId, title }) => {
    const s = ProjectInfo.mockData.find(v => v.info.projectId === projectId)
    const b = s ? s.boardList.find(c => c.boardId === boardId) : null
    if (s && b) {
        b.title = title
    }

    // eslint-disable-next-line
    // debugger
    return (s && b) ? Promise.resolve() : Promise.resolve()
}


export const getBoradDetail = (boardId) => {
    console.log(boardId)
    return Promise.resolve({
        cols: Col.mockList.sort((a, b) => a.sort - b.sort),
        rows: Row.mockList.sort((a, b) => a.sort - b.sort),
        cards: CardInfo.mockData,
        projectInfo: ProjectInfo.rand(),
        boardInfo: BoardInfo.rand(),
    })
}

export const addBoardRow = (panelId) => {
    console.log(panelId)
    Row.mockList = Row.mockList
        .sort((a, b) => a.sort - b.sort)
        .concat([Row.rand()])
        .map((v, i) => Object.assign(v, { sort: i }))
    return Promise.resolve(null)
}

export const deleteBoardRow = (rowId) => {
    console.log(rowId)
    Row.mockList = Row.mockList
        .sort((a, b) => a.sort - b.sort)
        .filter(v => v.rowId !== rowId)
        .map((v, i) => Object.assign(v, { sort: i }))
    return Promise.resolve(null)
}

export const sortBoardRows = (rows) => {
    Row.mockList = rows.map(({ rowId }) => Row.mockList.find(c => c.rowId === rowId))
        .filter(v => v)
        .map((v, i) => Object.assign(v, { sort: i }))

    return Promise.resolve(null)
}

export const addCard = (card) => {
    CardInfo.mockData = CardInfo.mockData.concat([card])
    return new Promise(res => setTimeout(() => {
        res()
    }, 200))
}

export const delCard = (cardId) => {
    CardInfo.mockData = CardInfo.mockData.filter(v => v.cardId !== cardId)
    return Promise.resolve(null)
}

export const updateCards = (panelId, arr) => {
    console.log(panelId)
    const cardMap = arr
        .flatMap(v => v.cards)
        .map(({ cardId }) => CardInfo.mockData.find(v => v.cardId === cardId))
        .filter(v => v)
        .reduce((map, card) => map.set(card.cardId, card), new Map())

    console.log(arr)
    console.log(cardMap)

    arr.forEach(({ colId, rowId }) => {
        CardInfo.mockData = CardInfo.mockData
            .filter(v => !(v.rowId === rowId && v.colId === colId))
    })

    arr.forEach(({ colId, rowId, /*version,*/ cards }) => {
        CardInfo.mockData = CardInfo.mockData
            .concat(cards.map(({ cardId }, i) => Object.assign(cardMap.get(cardId), {
                colId,
                rowId,
                sort: i
            })))
            .filter(v => v)

        console.log(cards.map(({ cardId }) => cardMap.get(cardId)))
    })

    console.log(CardInfo.mockData)

    return Promise.resolve(null)
}

export const getCellsCard = (panelId, arr) => {

    console.log(panelId)
    console.log(arr.map(({ colId, rowId }) =>
        ({
            colId,
            rowId,
            cards: CardInfo.mockData.filter(v =>
                v.rowId === rowId && v.colId === colId)
        })))

    return Promise.resolve(arr.map(({ colId, rowId }) =>
        ({
            colId,
            rowId,
            cards: CardInfo.mockData.filter(v =>
                v.rowId === rowId && v.colId === colId)
        })))
}