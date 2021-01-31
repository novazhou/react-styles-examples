import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_TODOS, GET_TODOS_ASYNC, ADD_TODO_ASYNC, ADD_TODO, IAddTodoAsyncAction, IRemoveAsyncAction, REMOVE_ASYNC, REMOVE, TOGGLE_COMPLETE_ASYNC, IToggleCompleteAsyncAction, TOGGLE_COMPLETE } from './types'
import todosApi from './api'
import { v4 as uuid } from 'uuid';

export function* getTodosAsync() {

	try {
		const todos = yield call(todosApi.getTodos)
		yield put({
			type: GET_TODOS,
			todos
		})
	} catch(e) {
		console.log(e)
	}
}

export function* addTodosAsync({label}: IAddTodoAsyncAction) {
	try {
		const todo = {
			label,
			id: uuid(),
			completed: false
		}
		yield call(todosApi.addTodo, todo)
		yield put({
			type: ADD_TODO,
			todo
		})
	} catch(e) {
		console.log(e)
	}

}

export function* removeAsync({id}: IRemoveAsyncAction) {
	try {
		yield call(todosApi.deleteTodo, id)
		yield put({
			type: REMOVE,
			id
		})
	} catch(e) {
		console.log(e)
	}
}

export function* toggleCompleteAsync({todo}: IToggleCompleteAsyncAction) {
	try {
		yield call(todosApi.updateTodo, todo)
		yield put({
			type: TOGGLE_COMPLETE,
			id: todo.id
		})
	} catch (e) {
		console.log(e)
	}
}

export function* watchTodosAsync() {
	yield takeEvery(GET_TODOS_ASYNC, getTodosAsync)
	yield takeEvery(ADD_TODO_ASYNC, addTodosAsync)
	yield takeEvery(REMOVE_ASYNC, removeAsync)
	yield takeEvery(TOGGLE_COMPLETE_ASYNC, toggleCompleteAsync)
}