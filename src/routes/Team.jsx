import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'


import Heading from '../components/Heading'
import LeadTwo from '../components/LeadTwo'
import Teamscard from '../components/Teamscard';

import adminData from '../assets/teams/admin';
import memberData from '../assets/teams/members';
import leadData from '../assets/teams/leads';


// shuffling array to randomize the order of people in leads and members position
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
const newleadData = shuffle(leadData);
const newmemberData = shuffle(memberData);

function Team() {
    const state = {
        responsive1: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 3,
            },
        },
        responsive2: {
            0: {
                items: 1,
            },
            450: {
                items: 2,
            },
            600: {
                items: 2,
            },
        },
    }
    return (
        <React.Fragment>
            {/*Our team section*/}
            <div className='pt-24 pb-16 bg-gradient-to-br from-[#1B2A41] to-black '>
                <Heading >OUR TEAM</Heading>
                <LeadTwo >Meet the people behind the work (⌐■_■) </LeadTwo>
                <div className='mt-6 md:mt-16'>

                    {/* Admin team */}
                    <div className='md:flex md:justify-between'>
                        <h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Admin team</h1>
                        <div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar md:ml-20">
                            <div className="flex flex-nowrap md:mx-8 space-x-8" >
                                <OwlCarousel
                                    className=''
                                    responsive={state.responsive1}
                                    dots={false}
                                >
                                    {adminData.map((e) => {
                                        return (
                                            <Teamscard key={e.id} name={e.name} pos={e.pos} img={e.img} />
                                        );
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>

                    {/* Team leads */}
                    <div className='md:flex md:justify-between'>
                        <h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Team leads</h1>
                        <div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar">
                            <div className="flex flex-nowrap md:mx-8 space-x-8" >
                                <OwlCarousel
                                    className='mx-auto'
                                    responsive={state.responsive1}
                                    dots={false}
                                >
                                    {newleadData.map((e) => {
                                        return (
                                            <Teamscard key={e.id} name={e.name} pos={e.pos} img={e.img} />
                                        );
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>

                    {/* Team members */}
                    <div className='md:flex md:justify-between'>
                        <h1 className='mx-auto text-[28px] text-center md:text-left md:text-[38px] lg:text-[64px] w-80 md:ml-20 team-head'>Team Members</h1>
                        <div className="mt-3 ml-5 flex overflow-x-scroll pb-5 md:pb-10 hide-scroll-bar md:ml-40">
                            <div className="flex flex-nowrap md:mx-8 space-x-8" >
                                <OwlCarousel
                                    className=''
                                    responsive={state.responsive2}
                                    dots={false}
                                >
                                    {newmemberData.map((e) => {
                                        return (
                                            <Teamscard key={e.id} name={e.name} pos={e.pos} img={e.img} />
                                        );
                                    })}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Team