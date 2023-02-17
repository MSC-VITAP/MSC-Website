import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/bg.png'
import heroimg from '../assets/olleaguesDiscussing.png'

function Home() {
	return (
		<React.Fragment>
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
				<a href='#Team'>
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
					<div className='md:flex justify-center items-center'>
						{/*Hero side text*/}
						<div className='mx-auto pt-20 md:pt-0 w-[200] md:w-[350px]'>
							<h1 className='text-white work-sans text-[30px] md:text-[32px] lg:text-[36px] '
								style={{
									fontWeight: 700,
									fontVariant: 'small-caps',
									lineHeight: '42px',
								}}>
								We are Microsoft Student Club ( ■_■)</h1>
							<br />
							<p className='text-[#CCC9DC] work-sans text-[13px] md:text-[18px] lg:text-[20px]'
								style={{
									fontWeight: 350,
									lineHeight: '26px',
								}}
							>Quisque eget erat ut turpis rutrum luctus. Proin eget sem sit amet erat hendrerit tristique. Nam at leo in tellus lobortis iaculis nec eget enim. Curabitur suscipit lacus quis ante maximus, sit amet commodo sem condimentum.</p>
						</div>
						{/*Hero side img*/}
						<img className='mx-auto w-[350px] md:w-[400px] lg:w-[700px]' src={heroimg} />
					</div>
				</div>
				{/*About section*/}
				<div id='Aboutus'>

				</div>
			</div>
			{/*Event section*/}
			<div id='Events'>

			</div>
			{/*Our team section*/}
			<div id='Team'>

			</div>
			{/*Club coordinator section*/}
			<div id='Coordinator'>

			</div>

		</React.Fragment>
	)
}

export default Home