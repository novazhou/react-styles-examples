import React, { useEffect } from 'react'
import { Stack, IStackTokens } from '@fluentui/react'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import { useDispatch } from 'react-redux'
import { getTodosAsyncAction } from '../store/todos/actions'

const todoAppStackTokens: IStackTokens = { childrenGap: 25 };

const TodoApp = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		const async = async () => {
			await dispatch(getTodosAsyncAction())
		}
		async()
	}, [dispatch])

	return (
		<Stack horizontalAlign="center">
			<Stack style={{ width: 800 }} tokens={todoAppStackTokens}>
				<TodoHeader />
				<TodoList />
				<TodoFooter />
			</Stack>		
		</Stack>
	)
}

export default TodoApp