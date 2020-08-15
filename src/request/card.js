import { CardComment } from '@/model/Card'

export const getAllComments = (id) => Promise.resolve([
    CardComment.mock(id), CardComment.mock(id), CardComment.mock(id), CardComment.mock(id),
])