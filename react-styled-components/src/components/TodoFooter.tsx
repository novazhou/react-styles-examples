import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodosAction } from '../store/todos/actions'
import { todoSelector } from '../store/todos/selector'

const TodoForm = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
`

const Text = styled.span`
	font-size: 14px;
	font-weight: 400;
	display: inline;
`

const StyledButton = styled.button`
	margin-left: 10px;
	min-width: 80px;
    float: right;
    background: rgb(255, 255, 255);
    color: rgb(50, 49, 48);
    border-radius: 2px;
    border: 1px solid rgb(138, 136, 134);
    padding: 5px 16px;
    outline: none;
	cursor: pointer,
	font-size: 14px;
	font-weigth: 400;
`

const TodoFooter = () => {
	const dispatch = useDispatch()
	const todoState = useSelector(todoSelector)
	const todos = todoState.todos
	const todoCount = todos.filter((todo) => todo.completed !== true).length

	const handleClear = () => {
		dispatch(clearTodosAction())
	}

	return (
		<TodoForm>
			<Text>
				{todoCount} item{todoCount > 1 ? 's' : ''} left
			</Text>
			<StyledButton onClick={handleClear}>Clear Completed</StyledButton>
		</TodoForm>
	)
}

export default TodoFooter