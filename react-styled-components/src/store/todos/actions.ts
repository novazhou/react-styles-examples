import { GET_TODOS, GET_TODOS_ASYNC, ADD_TODO_ASYNC, ADD_TODO, CLEAR, SET_FILTER, TOGGLE_COMPLETE_ASYNC, TOGGLE_COMPLETE, REMOVE_ASYNC, REMOVE, TodosActionTypes } from './types'
import { FilterTypes, Todo } from '../../types'

export const getTodosAsyncAction = () => {
	return {
		type: GET_TODOS_ASYNC
	}
}

export interface IGetTodosActionPayload {
	todos: Todo[]
}

export const getTodosAction = (payload: IGetTodosActionPayload): TodosActionTypes => {
	const { todos } = payload
	return {
		type: GET_TODOS,
		todos
	}
}

export interface IAddTodoAsyncActionPayload {
	label: string
}

export const addTodoAsyncAction = (payload: IAddTodoAsyncActionPayload): TodosActionTypes => {
	const { label } = payload
	return {
		type: ADD_TODO_ASYNC,
		label
	}
}

export interface IAddTodosActionPayload {
	todo: Todo
}

export const addTodosAction = (payload: IAddTodosActionPayload): TodosActionTypes => {
	const { todo } = payload
	return {
		type: ADD_TODO,
		todo
	}
}

export interface ISetFilterActionPayload {
	filter: FilterTypes
}

export const setFilterAction = (paylaod: ISetFilterActionPayload): TodosActionTypes => {
	const { filter } = paylaod
	return {
		type: SET_FILTER,
		filter
	}
}

export interface IToggleCompleteAsyncActionPayload {
	todo: Todo
}

export const toggleCompleteAsyncAction = (payload: IToggleCompleteAsyncActionPayload): TodosActionTypes => {
	const { todo } = payload
	return {
		type: TOGGLE_COMPLETE_ASYNC,
		todo
	}
}

export interface IToogleCompleteActionPayload {
	id: string
}

export const toggleCompleteAction = (payload: IToogleCompleteActionPayload): TodosActionTypes => {
	const { id } = payload
	return {
		type: TOGGLE_COMPLETE,
		id
	}
}

export interface IRemoveAsyncActionPayload {
	id: string
}

export const removeAsyncaction = (payload: IRemoveActionPayload): TodosActionTypes => {
	const { id } = payload
	return {
		type: REMOVE_ASYNC,
		id
	}
}

export interface IRemoveActionPayload {
	id: string
}

export const removeAction = (payload: IRemoveActionPayload): TodosActionTypes => {
	const { id } = payload
	return {
		type: REMOVE,
		id
	}
}

export const clearTodosAction = (): TodosActionTypes => {
	return {
		type: CLEAR
	}
}