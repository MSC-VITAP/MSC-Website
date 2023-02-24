import React from 'react'

import LeadTwo from '../components/LeadTwo'

function Footer() {
	return (
		<React.Fragment>
			<div className='bg-[#0C1821]' id='Footer'>
				{/* top section */}
				<div className='py-10'>
					<div>
						<LeadTwo >help us become better ^_^ </LeadTwo>
						
					</div>
					<div>

					</div>
				</div>

				{/* bottom section */}
				<div className='text-center md:flex md:justify-around m-0 py-5 w-[100%] h-[70px] bg-black'>
					<h1
						className='work-sans text-white md:text-[22px] '
						style={{
							fontWeight: 600,
							lineHeight: '26px',
						}}
					>Copyright 2023 Microsoft student club VIT AP</h1>
					<h1
						className='work-sans text-white md:text-[22px] '
						style={{
							fontWeight: 600,
							lineHeight: '26px',
						}}
					>Email at: xyz@gmail.com</h1>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Footer