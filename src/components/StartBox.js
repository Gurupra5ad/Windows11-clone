import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';

function StartBox() {
    return (
        <Box>
            <div>
                <SearchIcon />
                <input placeholder="Type here to search" type="text" />
            </div>
        </Box>
    )
}

export default StartBox


const Box = styled.div`
    color:blue;
    height:500px;
    width:550px;
    background-color:rgba(0,0,0,0.4);
    border-radius:10px;

    div{
        display:flex;
        background-color:rgb(24,34,61);
        border-radius:3px;
        margin:15px;
        margin-top:15px;
        padding:5px;
        height:30px;
        justify-content:flex-center;
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