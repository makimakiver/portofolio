import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext';
import Switch from './Switch';
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
  width: 1270px;
  display: flex;
  padding-top: 10px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 30px;
`;
const ListItem = styled.li`
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
function Navbar() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <Section>
        <Container>
            <Links>
                <Logo src={isLightTheme ? '../img/logo3.png' : '../img/logo2.png'}/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Socials</ListItem>
                    <ListItem>Contacts</ListItem>
                </List>
            </Links>
        </Container>
        {/* <Button onClick={toggleTheme}>
            {isLightTheme ? 'dark' : 'light'}
        </Button> */}
        <Switch onChange={toggleTheme} isLightTheme={isLightTheme}>
            {isLightTheme ? 'dark' : 'light'}
        </Switch>
    </Section>
  )
}

export default Navbar