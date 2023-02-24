import React from 'react'

function Event_date(props) {
    return (
        <h2
            style={{
                fontWeight: 600,
            }}
            className={`${props.className} text-[26px] md:text-[29px] lg:text-[32px] work-sans text-black bg-[#CCC9DC]`} >{props.children} </h2>
    )
}

export default Event_date