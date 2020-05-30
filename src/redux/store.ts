import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import messageListReducer from './messageList/reducers';

const rootReducer = combineReducers({
    messageList: messageListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const configureStore = () => {
    const middlewares: Middleware[] = [];
    const middleWareEnhancer = applyMiddleware(...middlewares);
    const store = createStore(rootReducer, composeWithDevTools(middleWareEnhancer));
    return store;
};
