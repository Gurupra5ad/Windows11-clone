import React from 'react'
import styled from 'styled-components'

function TaskIcon({name}) {
    const imgPath = "/images/"+name;
    return (
        <Icons src={imgPath} />
    )
}

export default TaskIcon

const Icons = styled.img`

    height:25px;
    padding:10px;
    cursor:pointer;
    margin-top:3px;

    :hover{
        background-color: rgba(0,0,0,0.6);
        border-radius:5px;
        height:25px;
        margin-bottom:15px;
    }
`