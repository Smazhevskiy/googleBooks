import {
    BooksInitialStateType,
    booksReducer,
    setBooks,
    setCategories,
    setOrderBy,
    setQValueSearch,
    setStartPaginationIndex
} from '../book-reducer'


let startState: BooksInitialStateType

beforeEach(() => {
    startState = {
        items: [{
            id: 'fh',
            volumeInfo: {
                imageLinks: {
                    smallThumbnail: 'smallUrl',
                    large: 'largeUrl',
                    medium: 'meduimUrl',
                    thumbnail: 'someThumb'
                },
                title: 'testTitle',
                categories: ['Medicine', 'History'],
                authors: ['Artem']
            },
        }],
        q: 'testValue',
        startIndex: 1,
        totalItems: 100,
        categories: 'all',
        key: 'someKey',
        filter: 'unFull',
        orderBy: 'Newest',
        maxResults: 20,
        kind: 'someTo'
    }
})

describe('Books reducer', () => {
    it('Books page should be set new data', () => {
        const action = setBooks({
            items: [{
                id: 'newId',
                volumeInfo: {
                    imageLinks: {
                        smallThumbnail: 'NewsmallUrl',
                        large: 'NewlargeUrl',
                        medium: 'NewmeduimUrl',
                        thumbnail: 'NewsomeThumb'
                    },
                    title: 'superTitle',
                    categories: ['Horror'],
                    authors: ['NewAuthor Adf']
                },
            }],
            totalItems: 250,
            kind: 'newKind'
        })

        const endState = booksReducer(startState, action)
        expect(startState).not.toBe(endState)
    })

    it('Books new response value is change', () => {
        const action = setQValueSearch('Harry Potter')

        const endState = booksReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.q).toBe('Harry Potter')
    })

    it('Books sort by order time', () => {
        const action = setOrderBy('newest')

        const endState = booksReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.orderBy).toBe('newest')
    })

    it('Books start pagination index is changed', () => {
        const action = setStartPaginationIndex(34)

        const endState = booksReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.startIndex).toBe(34)
    })

    it('Books sorted by category changed', () => {
        const action = setCategories('history')

        const endState = booksReducer(startState, action)

        expect(startState).not.toBe(endState)
        expect(endState.categories).toBe('history')
    })

})