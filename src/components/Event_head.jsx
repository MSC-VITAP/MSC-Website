import React from 'react'

function Event_head(props) {
    return (
        <h1 className={`${props.className} text-white text-[48px] work-sans`}
            style={{
                fontWeight: 700
            }}
        >{props.children} </h1>
    )
}

export default Event_head