import axios from 'axios'
import { Todo } from '../../types'

const todosApi = {
	getTodos: async () => {
		const response = await axios.get('http://localhost:3777/todos')
		return response.data
	},
	addTodo: async (todo: Todo) => {
		const response = await axios.post('http://localhost:3777/todos',{
			...todo
		})
		return response.data
	},
	deleteTodo: async (id: string) => {
		const response = await axios.delete(`http://localhost:3777/todos/${id}`)
		return response.data
	},
	updateTodo: async (todo: Todo) => {
		const response = await axios.put(`http://localhost:3777/todos/${todo.id}`,{
			...todo
		})
		return response.data
	},
}

export default todosApi