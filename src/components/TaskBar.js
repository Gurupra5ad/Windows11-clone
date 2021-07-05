import React from 'react'
import styled from 'styled-components';
import StartBox from './StartBox';
import TaskIcon from './TaskIcon';

function TaskBar() {

    const start = () => (
        <Box>
            <StartBox />
        </Box>
    )
    return (
        <Taskbar>
            <Box>
                <StartBox />
            </Box>
            <Menu>
                <TaskIcon name="start.ico"/>
                <TaskIcon name="search.ico"/>
                <TaskIcon name="edge.ico"/>
                <TaskIcon name="file.ico"/>
                <TaskIcon name="ms_store.png"/>
                <TaskIcon name="start.ico"/>
            </Menu>
        </Taskbar>
    )
}

export default TaskBar


const Taskbar = styled.div`
    width:100vw;
    height:50px;
    background-color:rgba(0,0,0,0.4);
    position:fixed;
    bottom:0;
    top:auto;
    right:0;
    left:0;
`

const Menu = styled.div`
    display:flex;
    justify-content:center;
`

const Box = styled.div`
    position:absolute;
    bottom:80px;
    top:auto;
    right:50%;
    left:50%;
`