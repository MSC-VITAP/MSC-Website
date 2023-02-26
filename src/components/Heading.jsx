import React from 'react'

function Heading(props) {
    return (
        <h1 className={`${props.className} h-20 heading-bold text-[42px] md:text-[64px] lg:text-[86px]`} >{props.children} </h1>
    )
}

export default Heading