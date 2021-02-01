import React from 'react'
import { useSelector } from 'react-redux'
import { todoSelector } from '../store/todos/selector'
import TodoListItem from './TodoListItem'
import styled from 'styled-components'

const StyledUl = styled.ul`
	padding: 0
`

const TodoList = () => {
	const todoState = useSelector( todoSelector)
	const todos = todoState.todos
	const filter = todoState.filter

	const filterTodos = todos.filter((todo) => {
		if (filter === 'active') {
			return todo.completed === false
		} else if (filter === 'completed') {
			return todo.completed === true
		} else {
			return true
		}
	})

	return (
		<StyledUl>
			{
				filterTodos.map((todo) => {
					return (
						<TodoListItem todo={todo} key={todo.id}/>
					)
					
				})
			}
   		</StyledUl>
	)
}

export default TodoList