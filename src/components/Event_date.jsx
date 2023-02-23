import React from 'react'

function Event_date(props) {
    return (
        <h2
            style={{
                fontWeight: 600,
                fontSize: '32px'
            }}
            className={`${props.className} work-sans text-black bg-[#CCC9DC]`} >{props.children} </h2>
    )
}

export default Event_date