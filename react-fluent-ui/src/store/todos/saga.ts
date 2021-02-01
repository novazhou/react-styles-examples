import { call, put, takeEvery, select } from 'redux-saga/effects'
import { GET_TODOS, GET_TODOS_ASYNC, ADD_TODO_ASYNC, ADD_TODO, IAddTodoAsyncAction, IRemoveAsyncAction, REMOVE_ASYNC, REMOVE, TOGGLE_COMPLETE_ASYNC, IToggleCompleteAsyncAction, TOGGLE_COMPLETE, CLEAR_ASYNC, CLEAR } from './types'
import todosApi from './api'
import { ITodosState } from './state'
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

export function* clearAsync() {
	try {
		const state = yield select();
		const todo = state.todo as ITodosState
		const todos = todo.todos
		const completedIds: string[] = []
		todos.forEach((todo) => {
			if (todo.completed) {
				completedIds.push(todo.id)
			}
		})
		for (let i = 0; i < completedIds.length; i++) {
			yield call(todosApi.deleteTodo, completedIds[i])
		}
		yield put({
			type: CLEAR
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
	yield takeEvery(CLEAR_ASYNC, clearAsync)
}