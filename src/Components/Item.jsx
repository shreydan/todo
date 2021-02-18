import styled from 'styled-components'
import React from 'react'



const TaskItem = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #aeaeae;
    margin: 0.5em 0;
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.div`
    color:${props => props.completed ? '#aeaeae' : '#000'};
    flex: 1;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`

function Item(props) {
    return (
        <TaskItem>
            <Text completed={props.completed}>{props.task}</Text>
        </TaskItem>
            
    )
}
export default Item
