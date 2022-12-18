import React from 'react'
import { Heading, Text, Box, Badge } from '@chakra-ui/react'
import './theme1.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Theme1 = () => {

    return (
        <>
            <div id="section-to-print">
                <div id="theme1">
                    {/* Personal Info  */}
                    <header id='info' className='text-center mt-2'>
                        <Heading as='h2' size='2xl' noOfLines={1}>
                            Desai Hardik
                        </Heading>
                        <Text fontSize='md' className='text-muted my-1 '>
                            <span className='mx-2'><ImLocation className='d-inline mx-1' />Chital,Amreli,Gujarat</span>|
                            <span className='mx-2'><GrMail className='d-inline mx-1' />hp676913@gmail.com</span>|
                            <span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />+91 6352604118</span>
                        </Text>
                        {/* <Text fontSize='md' className='text-muted my-1 d-flex align-items-center justify-content-center'>
                            <div><ImLocation className='d-inline' />Address</div>
                            <div>Mail</div>
                            <div>Phone</div>
                        </Text> */}
                        <Heading as='h3' size='md' className='mt-1 mb-2'>
                            SOFTWARE ENGINEER
                        </Heading>
                    </header>
                    {/* Skills Part  */}
                    <section id="skills" className='my-2'>
                        <Heading bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            TECHNICAL SKILLS
                        </Heading>

                        <Box id='skills-set' className='basic-set d-flex justify-content-center align-items-center'>
                            <div className='skillBox'>
                                <Badge className='skill-badge' variant='solid'>React</Badge>
                                <Badge className='skill-badge' variant='solid'>Node</Badge>
                                <Badge className='skill-badge' variant='solid'>Express</Badge>
                                <Badge className='skill-badge' variant='solid'>MongoDB</Badge>
                            </div>
                        </Box>
                    </section>

                    {/* Project Section  */}

                    <section id="projects" className='my-2'>
                        <Heading bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            PROJECTS
                        </Heading>

                        <Box id='project-set' className='basic-set'>
                            <div className="subBox">
                                <Text className='sub-title'>Instant Chat App | Lukrasto</Text>
                                <div className='sub-details'>
                                    <li>Developed a Standard Messaging App Using StoryBloop XA</li>
                                    <li>Improved User Experience During the Usage of the App by Eliminating Bugs</li>
                                </div>
                            </div>
                            <div className="subBox">
                                <Text className='sub-title'>Instant Chat App | Lukrasto</Text>
                                <div className='sub-details'>
                                    <li>Developed a Standard Messaging App Using StoryBloop XA</li>
                                    <li>Improved User Experience During the Usage of the App by Eliminating Bugs</li>
                                </div>
                            </div>
                        </Box>
                    </section>

                    {/* Education Part  */}

                    <section id="education" className='my-2'>
                        <Heading bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            EDUCATION
                        </Heading>

                        <Box id='education-set' className='basic-set'>
                            <div className="subBox">
                                <Text className='sub-title'>Computer Science AND Business | Dandilton (Online)</Text>
                                <div className='sub-details'>
                                    <li>Studied Business Software planning, coordination, and efficiency</li>
                                    <li>Worked with various industries on launching efficient IT Systems</li>
                                </div>
                            </div>
                            <div className="subBox">
                                <Text className='sub-title'>BEng Chemical Engineering | Royal Clickton</Text>
                                <div className='sub-details'>
                                    <li>GPA: 3.19</li>
                                    <li>Minor in Process Management</li>
                                    <li>Thesis in Modelling and Analysis of Process Efficiency in a Cement Plant</li>
                                </div>
                            </div>
                        </Box>
                    </section>

                    {/* WORK EXPERIENCE  */}

                    <section id="experience" className='my-2'>
                        <Heading bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            WORK EXPERIENCE
                        </Heading>

                        <Box id='experience-set' className='basic-set'>
                            <div className="subBox">
                                <Text className='sub-title'>Policy Manager | Lexramax Inc</Text>
                                <div className='sub-details'>
                                    <li>Formulate and review policies as regards Industry Improvement</li>
                                    <li>Create a functional and technical application of set policies</li>
                                </div>
                            </div>
                            <div className="subBox">
                                <Text className='sub-title'>Quality Control Engineer | KrystaPointe Water</Text>
                                <div className='sub-details'>
                                    <li>Collect and Analyse water samples from different stages of Production</li>
                                    <li>Make Recommendations on Improvement based on my analysis</li>
                                    <li>Supervise Implementations of Recommendations</li>
                                </div>
                            </div>
                        </Box>
                    </section>

                    {/* Award & Achievement */}
                    {/* Skills Part  */}
                    <section id="awards" className='my-2'>
                        <Heading bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            AWARDS & ACHIEVEMENTS
                        </Heading>

                        <Box id='award-set' className='basic-set d-flex justify-content-between align-items-center'>
                            <div>
                                <li>Most Innovative Employee of the Year, LexraMax (2021)</li>
                                <li>Project Leader, Dandilton (2021)</li>
                                <li>Overall Best New Employee, CrystaPointe (2019)</li>
                            </div>
                        </Box>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Theme1
