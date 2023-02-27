import React from 'react'


import Heading from '../components/Heading'
import LeadTwo from '../components/LeadTwo'
import Event_head from '../components/Event_head'
import Event_date from '../components/Event_date'


import bg from '../assets/bg/bg.png'
import heroimg from '../assets/bg/olleaguesDiscussing.png'

import freshFolkSpots from '../assets/bg/freshFolkSpots.png'
import coodinator from '../assets/bg/coodinator.png'

import thumbup from '../assets/svg/thumbup.svg'
import vision from '../assets/svg/pointing.svg'
import twohands from '../assets/svg/twohands.svg'

import event1 from '../assets/events/abstract.png'
import event2 from '../assets/events/events.png'
import event3 from '../assets/events/people.png'


function Home() {
	return (
		<React.Fragment>
			<div className='bg-black'>
				{/* quick navigator */}
				<div className='fixed float-right right-4 md:right-7 lg:right-14 top-40 md:top-20 lg:top-44'>
					<a href='#Hero'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#1B2A41" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='white'>H</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Aboutus'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>A</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Events'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>E</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Coordinator'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>C</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
					<a href='#Footer'>
						<svg width="45" height="45" viewBox="0 0 45 45" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g filter="url(#filter0_d_786_91)">
								<circle cx="22.5" cy="18.5" r="18.5" fill="#CCC9DC" />
								<text x="16.5" y="24.5" fontFamily="Verdana" fill='#0C1821'>F</text>
							</g>
							<defs>
								<filter id="filter0_d_786_91" x="0" y="0" width="45" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
									<feFlood floodOpacity="0" result="BackgroundImageFix" />
									<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
									<feOffset dy="4" />
									<feGaussianBlur stdDeviation="2" />
									<feComposite in2="hardAlpha" operator="out" />
									<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
									<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_786_91" />
									<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_786_91" result="shape" />
								</filter>
							</defs>
						</svg>
					</a>
				</div>

				{/* gradient for hero and about us*/}
				<div className='bg-gradient-to-b from-[#1B2A41] to-black'>
					{/*Hero section*/}
					<div id='Hero' className='text-black p-8 md:p-20'
						style={{
							backgroundImage: `url(${bg})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover'
						}}
					>
						<div className='pt-20 md:pt-10 lg:pt-20 md:flex justify-center items-center'>
							{/*Hero side text*/}
							<div className='mx-auto w-[200] md:w-[350px]'>
								<h1 className='text-white work-sans text-[30px] md:text-[32px] lg:text-[36px] '
									style={{
										fontWeight: 700,
										fontVariant: 'small-caps',
										lineHeight: '42px',
									}}>
									We are Microsoft Student Chapter ( ■_■)</h1>
								<br />
								<p className='text-[#CCC9DC] work-sans md:text-[18px] lg:text-[20px]'
									style={{
										fontWeight: 350,
										lineHeight: '26px',
									}}
								>Microsoft Student Chapter in VIT-AP is a technical club, under the wing of Microsoft Learn
									Student Ambassador(s), which facilitates education and knowledge exchange within the campus
									among students who have an interest in Microsoft technologies. We at MSC-VITAP, aim to nurture
									a community of quality engineers, all set to climb great heights as the technology grows. </p>
							</div>
							{/*Hero side img*/}
							<img className='mx-auto w-[350px] md:w-[400px] lg:w-[600px]' src={heroimg} />
						</div>
					</div>
					{/*About section*/}
					<div id='Aboutus' className='pt-20 p-5 pb-10 md:pb-20'>
						<div className='mt-5'>
							<Heading>About Us</Heading>
							<LeadTwo >Who we are and what we do? ^_^</LeadTwo>
						</div>
						<div
							className='pt-10 '
						>
							<p
								style={{
									fontWeight: 350,
									lineHeight: '26px',
								}}
								className='work-sans md:text-[18px] lg:text-[20px] mx-auto md:w-[700px] text-[#CCC9DC] '
							>Microsoft Student Chapter in VIT-AP is a technical club, under the wing of Microsoft Learn Student Ambassador(s), which facilitates education and knowledge exchange within the campus among students who have an interest in Microsoft technologies. The forum organizes technology driven workshops, community hackathons and trains undergraduates and postgraduates to strengthen their critical thinking, logical reasoning, and coding skills. This is a community for students who wants to use tech to solve real-world problems with like-minded peers.</p>
							<div className='mt-20 md:mt-24 lg:mt-32 space-y-4'>
								<div className='md:ml-40 md:flex justify-start'>
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>Our Objectives</h1>
										<ol style={{ listStyleType: 'circle' }}>
											<li>Facilitate education and knowledge exchange within the campus among students who have an interest in Microsoft technologies.</li>
											<li>Helping students to bridge the gap between academia and industry.</li>
											<li>Creating an opportunity for young talents to exhibit in a right platform.</li>
											<li>Launching new projects to solve real world problems.</li>
											<li>Guiding future engineers about Microsoft technologies to enhance their development skills</li>
										</ol>
									</div>
									<img className='mt-6 mx-auto' src={thumbup} />
								</div>
								<div className='md:mr-40 md:flex justify-end'>
									<img className='mt-6 mx-auto' src={twohands} />
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>Expected Outcome</h1>
										<ol style={{ listStyleType: 'circle' }}>
											<li>Make meaningful progress on the socially significant issues.</li>
											<li>Develop technical skills, soft skills, and the connections to cherish even after becoming the alumni of VIT-AP.</li>
										</ol>
									</div>
								</div>
								<div className='md:ml-40 md:flex justify-start'>
									<div className='text-white md:w-[360px] '>
										<h1
											style={{
												fontVariant: 'small-caps',
												fontWeight: 600
											}}
											className='work-sans text-[40px] '
										>Our Vision</h1>
										<ol style={{ listStyleType: 'circle' }}>
											<li>To carve out a community of qualtiy engineers who are capable of solving real-world problems.</li>
											<li>To make coding a favourite topic for all and breakdown the complex ones to a simpler form.</li>
											<li>Ensure everyone gets an opportunity to lead and be led in the community.</li>
											<li>Eradicate the fear of coding and make it the love of the life</li>
										</ol>
									</div>
									<img className='mt-6 mx-auto' src={vision} />
								</div>
							</div>
						</div>


					</div>
				</div>

				{/*Event section*/}
				<div id='Events' className='bg-[#0C1821] pt-24 pb-5 p-5'
					style={{
						backgroundImage: `url(${freshFolkSpots})`,
						backgroundRepeat: 'no-repeat',
						backgroundBlendMode: 'color-burn'
					}}>
					<Heading >Events</Heading>
					<LeadTwo >Explore the events which we have done (●'◡'●)</LeadTwo>

					<div className='mt-14 mb-8'>
						<div className='md:px-40 md:flex md:justify-items-stretch'>
							<div className='mx-auto w-[90%] md:w-[70%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event1})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='md:mt-[150px] md:ml-[40px] ' >EVENT - 1</Event_head>
								<Event_date className='md:pl-[40px] ' >21 JAN 2023</Event_date>
							</div>
							<div className='mx-auto w-[90%] md:-ml-20 md:mt-40 md:w-[60%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event2})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='mt-[150px] ml-[40px] ' >EVENT - 2</Event_head>
								<Event_date className='pl-[40px] ' >21 JAN 2023</Event_date>
							</div>
							<div className='mx-auto w-[90%] md:-ml-20 md:mt-80 md:w-[50%] h-[300px] md:mb-5 rounded-xl event-bg-box'
								style={{
									backgroundImage: `url(${event3})`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}}
							>
								<Event_head className='mt-[150px] ml-[40px] ' >EVENT - 3</Event_head>
								<Event_date className='pl-[40px] ' >21 JAN 2023</Event_date>

							</div>
						</div>
					</div>
				</div>

				{/*Club coordinator section*/}
				<div id='Coordinator'
					className="pt-20 bg-[#1B2A41] py-10" >
					<div className='md:flex md:justify-evenly items-center'>
						<div>
							<div className='overflow-hidden rounded-full w-[220px] h-[220px] md:w-[250px] md:h-[250px] bg-gradient-to-br from-[#1B2A41] to-black mx-auto'>
								<img className='md:scale-110 pt-[28px] md:pt-[47px] mx-auto' src={coodinator} />
							</div>
							<div>
								<h1 className='text-center work-sans text-white text-[32px] md:text-[42px] lg:text-[48px] '
									style={{
										textTransform: 'uppercase',
										fontWeight: 700,
									}}>
									Club Coordinator
								</h1>
								<div className='mt-2'>
									<p className='text-center work-sans text-[#CCC9DC] md:text-[22px] '
										style={{
											fontWeight: 600,
										}}
									>
										Dr. S Sudheer Mangalampalli
									</p>
									<p className='text-center work-sans text-[#CCC9DC] md:text-[22px]'
										style={{
											fontWeight: 600,
										}}
									>
										SCOPE
									</p>
								</div>
							</div>
						</div>
						{/* Coordinator info */}
						<div className='mx-auto md:mx-0 mt-5 w-[80%] md:w-[330px] lg:w-[400px] '>
							<p className='text-[#CCC9DC] work-sans md:text-[18px] lg:text-[20px]'
								style={{
									fontWeight: 350,
									lineHeight: '26px',
								}}
							>Experienced Assistant Professor with a demonstrated history of working in the higher education industry. Skilled in Python (Programming Language), Computer Security, Information Security, Amazon Web Services (AWS), and Cloud Computing. Strong education professional with a M.Tech focused in M.Tech computer science and Engineering from JNTU kakinada.</p>
						</div>

					</div>
				</div>
			</div>

		</React.Fragment>
	)
}

export default Home