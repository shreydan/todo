import React from 'react';
import './App.css';
import styled from 'styled-components'
import Input from './Components/Input'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function App() {

  return (
    <div className="App">
      <Container>
        <Input autoFocus={true} placeholder="Enter you task here..."></Input>
      </Container>
    </div>
  );
}

export default App;
