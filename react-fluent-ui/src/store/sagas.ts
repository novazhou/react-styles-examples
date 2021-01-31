import {watchTodosAsync} from './todos/saga'
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
	yield all([watchTodosAsync()])
}