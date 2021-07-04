import React from 'react'
import styled from 'styled-components';

function TaskBar() {
    return (
        <Container>
            <h3> Hello World</h3>
        </Container>
    )
}

export default TaskBar


const Container = styled.div`
    width:100vw;
    height:50px;
    background-color:black;
    position:fixed;
    bottom:0;
    top:auto;
    right:0;
    left:0;
    opacity:0.4;
`