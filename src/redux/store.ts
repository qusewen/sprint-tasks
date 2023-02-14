import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { reduserAcardionState } from "./redusers/acardion-reduser";
import { reduserCategories } from "./redusers/categories-reduser";
import { reduserPage } from "./redusers/page-reduser";
import { reduserBurgerState } from './redusers/reduser'
import { reduserBooks } from "./redusers/reduser-book";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
    books: reduserBooks,
    categories: reduserCategories,
    page:reduserPage,
    burger: reduserBurgerState,
    acardion: reduserAcardionState,

});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;