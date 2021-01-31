import React from 'react'
import { Stack, Checkbox, IconButton } from '@fluentui/react'
import { Todo } from '../types'
import { useDispatch } from 'react-redux'
import { removeAsyncaction, IRemoveAsyncActionPayload, toggleCompleteAsyncAction, IToggleCompleteAsyncActionPayload } from '../store/todos/actions'

interface ITodoListItemProps {
	todo: Todo
}

const TodoListItem = ({todo}: ITodoListItemProps) => {
	const dispatch = useDispatch()
	const {id, label, completed } = todo

	const handleCheckComplete = () => {
		const paylaod: IToggleCompleteAsyncActionPayload = {
			todo: {
				...todo,
				completed: !completed
			}
		}
		dispatch(toggleCompleteAsyncAction(paylaod))
	}

	const handleRemove = () => {
		const payload: IRemoveAsyncActionPayload =  {
			id
		}
		dispatch(removeAsyncaction(payload))
	}

	return (
		<Stack horizontal verticalAlign="center" horizontalAlign="space-between">
 			<Checkbox label={label} checked={completed} onChange={handleCheckComplete} />
            <div>
              <IconButton iconProps={{ iconName: 'Cancel' }} onClick={handleRemove} />
            </div>
		</Stack>
	)
}

export default TodoListItem