import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  padding: 30px 0px;
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
function Navbar() {
  return (
    <Section>
        <Container>
            <Links>
                <Logo src="../img/logo3.png"/>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Socials</ListItem>
                    <ListItem>Contacts</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar