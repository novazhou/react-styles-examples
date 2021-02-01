import TodoApp from './components/TodoApp'
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
	box-sizing: border-box;
  }
`

const Container = styled.div`
	width: 600px;
	margin: 20px auto;
	display: flex;
	flex-direction: column;
	text-align: center;
`

function App() {
	return (
		<>
		<Container>
			<TodoApp />
		</Container>
		<GlobalStyle />
		</>
	);
}

export default App;
