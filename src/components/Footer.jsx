import React from 'react'
import { Link } from 'react-router-dom'

import LeadTwo from '../components/LeadTwo'

function Footer() {
	return (
		<React.Fragment>
			<div className='bg-[#0C1821]' id='Footer'>
				{/* top section */}
				<div className='py-10 md:flex md:justify-around '>
					{/* Contact form */}
					<div >
						<LeadTwo >help us become better ^_^ </LeadTwo>
						<form action='' method='POST'>
							<div className='space-y-4 mt-8 text-center md:text-left '>
								<div>
									<input
										style={{
											fontWeight: 600,
										}}
										type="text"
										name="name"
										id="name"
										placeholder="Full Name"
										className="work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
									/>
								</div>
								<div>
									<input
										style={{
											fontWeight: 600,
										}}
										type="text"
										name="email"
										id="email"
										placeholder="Email"
										className="work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
									/>
								</div>
								<div>
									<textarea
										style={{
											fontWeight: 600
										}}
										rows="3"
										name="message"
										id="message"
										placeholder="Type your message"
										className="w-[65%] md:w-[80%] work-sans rounded-md border border-white bg-[#CCC9DC] py-2 px-6 text-base text-[#0C1821] outline-none focus:border-[#0C1821] focus:shadow-md"
									></textarea>
								</div>
								<div>
									<div>
										<button
											className="hover:shadow-form rounded-2xl bg-[#1B2A41] py-2 px-5 text-base font-semibold text-white outline-none"
										>
											<Link to='/pageunderconstruction' >Submit</Link>
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>

					{/* Geolocation */}
					<div>
						<div >
							<iframe
								className="pt-10 md:py-10 m-auto md:w-[400px] md:h-[300px] lg:w-[550px] lg:h-[350px] "
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.590153951254!2d80.5006676!3d16.496277699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f27d40f21c55%3A0x1490eacd54859850!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1677300389615!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</div>

				{/* bottom section */}
				<div className='py-5 text-center md:flex md:justify-around w-[100%] bg-black'>
					<h1
						className='work-sans text-white md:text-[18px] '
						style={{
							fontWeight: 600,
							lineHeight: '26px',
						}}
					>© 2023 Microsoft Student Chapter VIT AP</h1>
					<h1
						className='work-sans text-white md:text-[18px] '
						style={{
							fontWeight: 600,
							lineHeight: '26px',
						}}
					>Email at: microsoft.chap@vitap.ac.in</h1>
				</div>
				<h3
					className='work-sans text-white text-[11px] md:text-[14px] '
					style={{
						fontWeight: 600,
						lineHeight: '26px',
						textAlign: 'center',
					}}
				>Developed and Maintained by the Technical Team MSC_VITAP</h3>
			</div>
		</React.Fragment>
	)
}

export default Footer