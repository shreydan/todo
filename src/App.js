import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'
import Input from './Components/Input'
import Item from './Components/Item'
import {v4 as uuidv4} from 'uuid'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Label = styled.div`
  width: 60%;
  margin: 0.5em;
  padding-bottom: 0.5em;
  color: #aeaeae;
  border-bottom: 2px solid #aeaeae;
`

const ItemsList = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (e) => {
    if(e.target.value && e.key === 'Enter') {
      const newTask = {
        id: uuidv4(),
        task: e.target.value,
        completed: false
      }
      setTasks([newTask, ...tasks])
      e.target.value = ''
    }
  }

  const removeTask = (id) => {
      setTasks(tasks.filter(task => task.id !== id))
      console.log('im here removed')
  }

  const completeTask = (id) => {
      setTasks(tasks.map(task => {
        if(task.id === id) {
          console.log(task)
          return ({...task, completed: !task.completed})
        }
        else {
          return (task)
        }
      }))
      console.log('im here completed')
  }

  return (
    <div className="App">
      <Container>

        <Input autoFocus={true}
               placeholder="Enter your task here..." 
               onKeyPress={addTask}></Input>

        <Label>Tasks</Label>
        <ItemsList>
          {
             tasks.filter(task => task.completed !== true)
             .map(({id, task, completed},key) => {
               return (
                 <Item task={task} id={id} 
                       completed={completed} 
                       key={key} 
                       removeTask={removeTask}
                       completeTask={completeTask}
                       ></Item>
               )})
          }
        </ItemsList>


        <Label>Completed</Label>
        <ItemsList>
          {
            tasks.filter(task => task.completed === true)
            .map(({id, task, completed},key) => {
              return (
                <Item task={task} id={id} 
                      completed={completed} 
                      key={key} 
                      removeTask={removeTask}
                      completeTask={completeTask}
                      ></Item>
              )})
          }
        </ItemsList>


      </Container>
    </div>
  );
}

export default App;
