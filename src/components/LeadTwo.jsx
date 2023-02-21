import React from 'react'

function LeadTwo(props) {
    return (
        <h2
            style={{
                fontWeight: 700,
                fontVariant: 'small-caps',
                lineHeight: '42px',
            }}
            className={`${props.className} text-white work-sans text-center text-[30px] md:text-[32px] lg:text-[36px]`} > {props.children} </h2>
    )
}

export default LeadTwo