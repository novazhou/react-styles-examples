import { RootState } from '../reducers'
import { ITodosState } from './state'

export const todoSelector = (state: RootState): ITodosState => state.todo