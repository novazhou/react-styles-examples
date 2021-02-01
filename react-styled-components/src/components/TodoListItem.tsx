import React, {MouseEvent} from 'react'
import styled from 'styled-components'
import { X } from '@styled-icons/bootstrap'
import { Todo } from '../types'
import { useDispatch } from 'react-redux'
import { removeAsyncaction, IRemoveAsyncActionPayload, toggleCompleteAsyncAction, IToggleCompleteAsyncActionPayload } from '../store/todos/actions'

const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
	margin-bottom: 10px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;

`
const StyledLabel = styled.label`
    float: left;
    cursor: pointer
`

const DeleteButton = styled.div`
	width: 30px;
	cursor: pointer;
`

interface ITodoListItemProps {
	todo: Todo
}

const TodoListItem  = ({todo}: ITodoListItemProps) => {
	const dispatch = useDispatch()
	const {id, label, completed } = todo

	const handleToggleComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
		const  value = event.target.checked

		if (completed !== value) {
			const paylaod: IToggleCompleteAsyncActionPayload = {
				todo: {
					...todo,
					completed: value
				}
			}
			dispatch(toggleCompleteAsyncAction(paylaod))
		}

		
	}

	const handleRemove = () => {
		const payload: IRemoveAsyncActionPayload =  {
			id
		}
		dispatch(removeAsyncaction(payload))
	}

	return (
		<>
			<StyledList>
				<StyledLabel htmlFor={id}>
					<input 
						type="checkbox" 
						id={id} 
						onChange={handleToggleComplete} 
						checked={completed} 
					/> {label}
				</StyledLabel>
				<DeleteButton onClick={handleRemove}>
					<X />
				</DeleteButton>
				
			</StyledList>
		</>
	)
}

export default TodoListItem