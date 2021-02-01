import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store