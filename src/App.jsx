import styled from 'styled-components'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto; 
  scrollbar-width: none; 
  &::-webkit-scrollbar { 
    display: none;
  };
  font-family: 'JetBrains Mono', monospace;
  overflow-x: hidden;
`
function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Introduction/>
        <Projects/>
        <Contacts/>
      </Container>
    </>
  )
}

export default App
