import React from 'react'

function Teamscard(props) {
    return (
        <div className='m-0 inline-block'>
            <section className='rounded-xl w-[280px] h-[340px] md:w-[280px] md:h-[360px] bg-black'
                style={{
                    backgroundPositionX: -20,
                    backgroundImage: `url(${props.img})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
            </section>
            <section className='p-[10px] -mt-10 mx-auto rounded-xl w-[230px] bg-gradient-to-b from-[#1B2A41] to-black border border-[#324A5F] '>
                <h1
                    className='mx-auto work-sans text-[#CCC9DC] text-[16px] md:text-[20px] '
                    style={{
                        fontWeight: 600,
                        lineHeight: '26px',
                    }}
                > {props.name} </h1>
                <h1
                    className='mx-auto work-sans text-white text-[22px] md:text-[26px] '
                    style={{
                        fontVariant: 'small-caps',
                        fontWeight: 600,
                    }}
                > {props.pos} </h1>
            </section>
        </div>
    )
}

export default Teamscard