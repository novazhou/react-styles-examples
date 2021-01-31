import React, {useState} from 'react'
import { Stack, Text, TextField, PrimaryButton, IStackTokens, Pivot, PivotItem } from '@fluentui/react'
import { useDispatch } from "react-redux";
import { setFilterAction, ISetFilterActionPayload, addTodoAsyncAction, IAddTodoAsyncActionPayload } from '../store/todos/actions'
import { FilterTypes } from '../types'

const todoHeaderStackTokens: IStackTokens = { childrenGap: 10 };
const todoLabelStackTokens: IStackTokens = { childrenGap: 10 }; 

const TodoHeader = () => {
	const [todoLabel, setTodoLabel] = useState<string>("")
	const dispatch = useDispatch()

	const handleChange = (event: any) => {
		const value = event.target.value
		setTodoLabel(value)
	}

	const handleAdd = async () => {
		if (todoLabel) {
			const payload: IAddTodoAsyncActionPayload = {
				label: todoLabel
			}
			await dispatch(addTodoAsyncAction(payload))
			setTodoLabel("")
		}
		
	}

	const handleFilter = (item?: PivotItem) => {
		if (item) {
			const headerText = item.props.headerText as FilterTypes
			const payload: ISetFilterActionPayload = {
				filter: headerText
			}
			dispatch(setFilterAction(payload))
		}
	  };

	return (
		<Stack tokens={todoHeaderStackTokens}>
			<Stack horizontal horizontalAlign="center">
				<Text variant="xxLarge">Todo App</Text>
			</Stack>

			<Stack horizontal tokens={todoLabelStackTokens}>
				<Stack.Item grow>
					<TextField
					placeholder="What needs to be done?"
					value={todoLabel}
					onChange={handleChange}
					styles={props => ({
						...(props.focused && {
						field: {
							backgroundColor: '#c7e0f4'
						}
						})
					})}
					/>
				</Stack.Item>
				<PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
			</Stack>
			<Pivot onLinkClick={handleFilter}>
				<PivotItem headerText="all" />
				<PivotItem headerText="active" />
				<PivotItem headerText="completed" />
			</Pivot>
		</Stack>
	)
}

export default TodoHeader