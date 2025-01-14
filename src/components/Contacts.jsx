import React from 'react'
import styled from 'styled-components'
import Form from './Form'
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 100px;
  border-radius: 10px;
`
const Right = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-size: 60px;
  font-weight: 200;
`

const Input = styled.input`
  padding: 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  width: 100%;
  color: #000000;
`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  width: 100%;
  color: #000000;
`
const Button = styled.button`
`

function Contacts() {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Contact Us</Title>
          <Form/>
          
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Contacts