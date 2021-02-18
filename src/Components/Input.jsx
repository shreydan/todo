import styled from 'styled-components'

const Input = styled.input.attrs(props => ({
}))`
    width: 70%;
    margin: 1em;
    padding: 1em;
    font-size: 1.5em;
    border: none;
    border-bottom: 4px solid #aeaeae;
    color: black;
    outline: none;
    transition-duration: 0.1s;
    &:hover {
    border-bottom: 4px solid black;
    transition-duration: 0.1s;
    }
    &:focus {
    border-bottom: 4px solid black;
}
`

export default Input