import React from 'react'
import styled from 'styled-components';
import TaskBar from './components/TaskBar';

function Home() {
    return (
        <Container>
            <TaskBar />
        </Container>
    )
}

export default Home


const Container = styled.div`
    background: url(images/dark.jpg) no-repeat center center fixed; 
    background-size: cover;
    width:100vw;
    height:100vh; 
    display:flex;
`
