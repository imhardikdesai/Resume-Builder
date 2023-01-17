import React from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme2.css'

const Theme2 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, profileImage, summary, skill } = themeData.personalData;


    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme2">
                <header id='info' className='text-center m-2 d-flex justify-content-between'>
                    <Box className='info-text text-start'>
                        <Heading as='h2' size='xl' className='mb-2'>
                            {name}
                        </Heading>
                        <Text fontWeight={'500'} fontSize='xl' className='mt-1 mb-2'>
                            {profile}
                        </Text>
                        <Text width={'400px'} fontSize='sm' className='mt-1 mb-2'>
                            {summary}
                        </Text>
                    </Box>
                    <Box className='mx-2'>
                        <Image borderRadius={50} boxSize={'175px'} src={profileImage} alt='Profile Picture' />
                    </Box>
                </header>
                <div className="w-100 border border-dark m-auto"></div>
                <section className='bottom-part d-flex mt-3'>
                    <section className='partition-1'>
                        <Box>
                            <Heading fontSize='2xl' className='my-2'>Contact</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2'>Phone</Heading>
                                <Text fontSize={'sm'}>{phone}</Text>
                                <Heading fontSize='md' className='my-2'>Email</Heading>
                                <Text fontSize={'sm'}>{email}</Text>
                                <Heading fontSize='md' className='my-2'>Address</Heading>
                                <Text fontSize={'sm'}>{address}</Text>
                            </Box>
                        </Box>
                        <Box className='mt-5'>
                            <Heading fontSize='2xl' className='my-2'>Skills</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <>
                                                <Badge className='mx-1' key={index}>{item}</Badge><br />
                                            </>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </section>
                    <div style={{ height: '500px' }} className="border border-dark mx-5"></div>
                    <section className='partition-2'>
                        Section 2
                    </section>
                </section>
            </Box>
        </Box>
    )
}

export default Theme2
