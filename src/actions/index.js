export function selectBook(book) {
    // Actions are objects with a type property
    // selectBook is an ActionCreator - it should return an Action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };

}