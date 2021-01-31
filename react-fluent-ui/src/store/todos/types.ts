import { FilterTypes, Todo } from '../../types'

export const GET_TODOS = 'GET_TODOS'
export const GET_TODOS_ASYNC = 'GET_TODOS_ASYNC'
export const ADD_TODO = 'ADD_TODO'
export const ADD_TODO_ASYNC = 'ADD_TODO_ASYNC'
export const CLEAR = 'CLEAR'
export const SET_FILTER = 'SET_FILTER'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'
export const TOGGLE_COMPLETE_ASYNC = 'TOGGLE_COMPLETE_ASYNC'
export const REMOVE = 'REMOVE'
export const REMOVE_ASYNC = 'REMOVE_ASYNC'

interface IGetTodosAsyncAction {
	type: typeof GET_TODOS_ASYNC
}

interface IGetTodosAction {
	type: typeof GET_TODOS
	todos: Todo[]
}

export interface IAddTodoAsyncAction {
	type: typeof ADD_TODO_ASYNC
	label: string
}

interface IAddTodoAction {
	type: typeof ADD_TODO
	todo: Todo
}

interface IClearAction {
	type: typeof CLEAR
}

interface ISetFilterAction {
	type: typeof SET_FILTER
	filter: FilterTypes
}

export interface IToggleCompleteAsyncAction {
	type: typeof TOGGLE_COMPLETE_ASYNC
	todo: Todo
}

interface IToggleCompleteAtion {
	type: typeof TOGGLE_COMPLETE
	id: string
}

interface IRemoveAction {
	type: typeof REMOVE
	id: string
}


export interface IRemoveAsyncAction {
	type: typeof REMOVE_ASYNC
	id: string
}

export type TodosActionTypes = IGetTodosAsyncAction | IGetTodosAction | IAddTodoAsyncAction | IAddTodoAction | IClearAction | ISetFilterAction | IToggleCompleteAsyncAction | IToggleCompleteAtion | IRemoveAction | IRemoveAsyncAction