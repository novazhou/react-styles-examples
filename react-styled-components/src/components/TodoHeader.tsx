import React, { useState } from "react"
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { setFilterAction, ISetFilterActionPayload, addTodoAsyncAction, IAddTodoAsyncActionPayload } from '../store/todos/actions'
import { FilterTypes } from '../types'

const TodoTitle = styled.h1`
	font-size: 28px;
	font-weight: 600;
`

const TodoForm = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
`

const FormInput = styled.input`
	width: 100%;
    outline: none;
	font-size: 14px;
	font-weight: 400;
    padding-top: 7px;
    padding-bottom: 7px;
	padding-left: 10px;
	color: rgb(50, 49, 48);
	box-sizing: border-box;
`
const StyledButton = styled.button`
	margin-left: 10px;
	min-width: 80px;
    float: right;
    background: rgb(0, 120, 212);
    color: #FFF;
    border-radius: 2px;
    border: 2px solid rgb(0, 120, 212);
    padding: 3px 10px;
    outline: none;
	cursor: pointer;
	font-size: 14px;
	font-weigth: 400;
`

interface ITabProps {
	selected: boolean
}

const Tab = styled.button<ITabProps>`
	outline: transparent;
	font-size: 14px;
	font-weight: 600;
	box-sizing: border-box;
	border: 0px;
	display: inline-block;
	text-decoration: none;
	text-align: center;
	cursor: pointer;
	padding: 0px 8px;
	border-radius: 0px;
	height: 44px;
	color: rgb(50, 49, 48);
	background-color: transparent;
	line-height: 44px;
	margin: 8px;
	${props => ( props.selected ? 'border-bottom: 3px solid rgb(0, 120, 212);' : '')}
	
`

const TodoHeader = () => {
	const [filter, setFilter] = useState<FilterTypes>("all")
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

	const handleSelectFilter = (filter: FilterTypes) => {
		setFilter(filter)
		const payload: ISetFilterActionPayload = {
			filter
		}
		dispatch(setFilterAction(payload))
	}

	return (
		<>
			<TodoTitle>Todo App</TodoTitle>
			<TodoForm>
				<FormInput placeholder="Enter new todo" onChange={handleChange} value={todoLabel}/>
				<StyledButton onClick={handleAdd}>Add</StyledButton>
			</TodoForm>
			<div>
				<Tab 
					onClick={() => handleSelectFilter('all')} 
					selected={filter === 'all'}
				>
					All
				</Tab>
				<Tab 
					onClick={() => handleSelectFilter('active')} 
					selected={filter === 'active'}
				>
					Active
				</Tab>
				<Tab
					onClick={() => handleSelectFilter('completed')} 
					selected={filter === 'completed'}
				>
					Completed
				</Tab>
			</div>
		</>
	)
}
export default TodoHeader