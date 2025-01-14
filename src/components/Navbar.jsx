import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext';
import Switch from './Switch';
import { Link } from 'react-scroll';
const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
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
  outline: none;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;
function Navbar() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <Section>
        <Container>
            <Links>
                <Logo src={isLightTheme ? '../img/logo3.png' : '../img/logo2.png'}/>
                <List>
                    <ListItem><a href="#introduction" style={{textDecoration: 'none', color: 'inherit'}}>Home</a></ListItem>
                    <ListItem><a href="#projects" style={{textDecoration: 'none', color: 'inherit'}}>Projects</a></ListItem>
                    <ListItem><a href="#contacts" style={{textDecoration: 'none', color: 'inherit'}}>Contacts</a></ListItem>
                </List>
            </Links>
        </Container>
        <Switch onChange={toggleTheme} isLightTheme={isLightTheme}>
            {isLightTheme ? 'dark' : 'light'}
        </Switch>
    </Section>
  )
}

export default Navbar