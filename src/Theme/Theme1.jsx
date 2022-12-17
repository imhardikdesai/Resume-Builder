import React from 'react'
import { Heading, Text } from '@chakra-ui/react'

const Theme1 = () => {
    return (
        <>
            <div id="theme1">
                <header id='info' className='text-center mt-3'>
                    <Heading as='h2' size='2xl' noOfLines={1}>
                        Desai Hardik
                    </Heading>
                    <Text fontSize='md' className='text-muted my-1'>
                        Address | Mail | Website
                    </Text>
                    <Heading as='h3' size='md' className='mt-1 mb-4'>
                        SOFTWARE ENGINEER
                    </Heading>
                </header>

                <section id="skills">
                    <Heading bg={'#D2E4E1'} as='h3' size='md' p={2}>
                        TECHNICAL SKILLS
                    </Heading>
                </section>

            </div>
        </>
    )
}

export default Theme1
