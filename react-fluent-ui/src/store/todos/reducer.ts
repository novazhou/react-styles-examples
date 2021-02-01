import { GET_TODOS, ADD_TODO, CLEAR, SET_FILTER, TOGGLE_COMPLETE, REMOVE, TodosActionTypes } from './types'
import { todoInitialState, ITodosState } from './state'

const reducer = (state = todoInitialState, action: TodosActionTypes): ITodosState => {
	switch(action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.todos
			}
		case ADD_TODO:
			return {
				...state,
				todos: state.todos.concat(action.todo),
			}
		case SET_FILTER:
			const { filter } = action
			return {
				...state,
				filter
			}
		case TOGGLE_COMPLETE:
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.id) {
						return {
							...todo,
							completed: !todo.completed
						}
					} else {
						return todo
					}
				})
			}
		case REMOVE:
			return {
				...state,
				todos: state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			}	
		case CLEAR:
			return {
				...state,
				todos: state.todos.filter((todo) => {
					return todo.completed !== true
				})
			}
		default:
			return state		
	}
}

export default reducer