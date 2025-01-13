import styled from 'styled-components'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto; 
  scrollbar-width: none; 
  &::-webkit-scrollbar { 
    display: none;
  };
  color: white;
  background-color: #000;
  font-family: 'JetBrains Mono', monospace;
`
function App() {
  return (
    <Container>
      <Introduction/>
    </Container>
  )
}

export default App
