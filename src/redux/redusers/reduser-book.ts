import { bookTypes } from "../actions/books-action";


const initialState = {
book: [],
loading: false,
error: false,
success: false,
};

export const reduserBooks =(state = initialState,  action: any) => {

    switch (action.type) {
        case bookTypes.SET_BOOKS:
          return {
            ...state,
            book: [],
            loading: true,
            success: false,
            error: false,
          };
        case bookTypes.SET_BOOKS_SUCCESS:
          return {
            ...state,
            book: action.payload,
            loading: false,
            success: true,
            error: false
          };
        case bookTypes.SET_BOOKS_ERROR:
          return {
            ...state,
            error: action.payload,
          };
        default:
          return state;
      }
}