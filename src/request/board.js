// import moment from 'moment';
import { ProjectInfo, BoardInfo, Row, Col, CardInfo } from '@/model/Project'

// panelColumns, lanes, cardInfos,

export const getBoradDetail = (boardId) => {
    console.log(boardId)
    return Promise.resolve({
        cols: Col.mockList,
        rows: Row.mockList,
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

// export const getCardInfo = id => {
//     return http.get('/task/card/getCard', { id }).then(data => {
//         return newCard.toClient(data)
//     })
// }

// export const updateCardInfo = (cardId, data) => {
//     const res = {}
//     if (Object.hasOwnProperty.call(data,'desc')) {
//         res.desc = data.desc
//     }
//     if (Object.hasOwnProperty.call(data,'executors')) {
//         res.execId = data.executors.map(v => v.uid).join(',')
//     }
//     if (Object.hasOwnProperty.call(data,'content')) {
//         res.name = data.content
//     }
//     if (Object.hasOwnProperty.call(data,'beginTime')) {
//         res.beginTime = data.beginTime ? data.beginTime.format('YYYY-MM-DD hh:mm:ss') : null
//     }
//     if (Object.hasOwnProperty.call(data,'endTime')) {
//         res.endTime = data.endTime ? data.endTime.format('YYYY-MM-DD hh:mm:ss') : null
//     }
//     if (Object.hasOwnProperty.call(data,'hour')) {
//         res.workTime = data.hour
//     }

//     res.cardId = cardId
//     return http.post('task/card/edit',res)
// }


// export const getCardComments = (cardId) => {
//     return http.get('/task/feedback/getFeedBacks', { cardId }).then(arr => arr.map(v => ({
//         comId: v.id,
//         cardId: v.cardId,
//         date: moment(v.createTime),
//         user:{
//             realname:v.userResponse.name,
//             id:Math.random().toString()
//         },
//         content: v.content
//     })))
// }

// export const addCardComment = (cardId, { content }) => {
//     return http.post('/task/feedback/create', {
//         cardId,
//         content: content,
//     })
// }

// export const deleteCardComment = id=>{
//     return http.get('/task/feedback/delete',{
//         id
//     })
// }