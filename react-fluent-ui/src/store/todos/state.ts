import { Todo, FilterTypes } from '../../types' 

export interface ITodosState {
	todos: Todo[]
	filter: FilterTypes
}

export const todoInitialState: ITodosState = {
	todos: [],
	filter: 'all'
}