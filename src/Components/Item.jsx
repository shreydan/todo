import styled from 'styled-components'
import React from 'react'



const TaskItem = styled.div`
    width: 100%;
    background-color: #fff;
    border-radius: 7px;
    border: 1px solid #aeaeae;
    margin: 0.5em 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover div {
        visibility: visible;
    }
`

const Text = styled.p`
    color:${props => props.completed ? '#aeaeae' : '#000000'};
    margin: 0;
    width: 95%;
    padding: 1em 0;
    word-wrap: break-word;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
`
const Delete = styled.div`
    cursor: pointer;
    visibility: hidden;
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: grid;
    place-items: center;
    background-color: ${props => props.bg};
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    
`

function Item(props) {
    return (
        <TaskItem onClick={()=>props.completeTask(props.id)}>
            <Text completed={props.completed}>{props.task}</Text>
            <Delete bg='#e92f2f' 
                    onClick={(e) => {
                        e.stopPropagation()
                        props.removeTask(props.id)}}>X</Delete>
        </TaskItem>
            
    )
}
export default Item
