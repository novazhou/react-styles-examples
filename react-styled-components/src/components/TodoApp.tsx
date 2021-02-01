import React, {useEffect} from 'react'
import TodoFooter from './TodoFooter'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import { useDispatch } from 'react-redux'
import { getTodosAsyncAction } from '../store/todos/actions'

const TodoApp = () => {

	const dispatch = useDispatch()
	useEffect(() => {
		const async = async () => {
			await dispatch(getTodosAsyncAction())
		}
		async()
	}, [dispatch])

	return (
		<>
			<TodoHeader />
			<TodoList />
			<TodoFooter />
		</>
	)
}

export default TodoApp