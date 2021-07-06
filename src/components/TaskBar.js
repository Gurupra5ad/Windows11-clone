import React, {useState} from 'react'
import styled from 'styled-components';
import TaskIcon from './TaskIcon';
import SearchIcon from '@material-ui/icons/Search'

function TaskBar() {

    const [showStart, setShowStart] = useState(false);

    const start = () => ({
        setShowStart(truegvp)
        <Box>
            <div>
                <SearchIcon />
                <input type="text" placeholder="Type to search" />
            </div>
        </Box>
    });

    return (
        <Taskbar>
            <Menu>
                <TaskIcon onClick = {start} name="start.ico"/>
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
    color:blue;
    height:450px;
    width:500px;
    background-color:rgba(0,0,0,0.4);
    border-radius:10px;
    position:absolute;
    top:auto;
    bottom:80px;
    right:35vw;
    left:auto;

    @media(max-width:768px){
        height:250px;
        width:275px;
        right:25vw;
    }

    div{
        display:flex;
        background-color:rgb(24,34,61);
        border-radius:3px;
        margin:15px;
        margin-top:15px;
        padding:5px;
        height:30px;
        justify-content:flex-center;
        align-items:center;
    }

    input{
        height:15px;
        outline:none;
        border:none;
        width:100%;
        color:white;
        background:none;
        font-size:16px;
    }
`