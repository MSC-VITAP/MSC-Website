import React from 'react'

import Heading from '../components/Heading'

import oops from '../assets/bg/oops.png'

function Underconstruction() {
    return (
        <React.Fragment>
            <div className='pt-24 pb-16 bg-gradient-to-br from-[#1B2A41] to-black '>
                <h1 className={`h-20 heading-bold text-[34px] md:text-[64px] lg:text-[86px]`} >Page under construction</h1>
                <img className='mx-auto h-[250px] md:h-[400px] ' src={oops} />
            </div>
        </React.Fragment>
    )
}

export default Underconstruction