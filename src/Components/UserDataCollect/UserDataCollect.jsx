import React from 'react'
import './userCollectData.css'
import { FormControl, Input, FormLabel, Text, Heading } from '@chakra-ui/react'

const UserDataCollect = () => {
    return (
        <>
            <div id="form-collect">

                {/* <Text fontSize='4xl' className='mb-2'>Your Resume</Text>
                <hr /> */}

                {/* Personal Details  */}

                <div id="form-personal" className=''>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr className='py-2' />

                    <FormControl isRequired className='my-2'>
                        <Input placeholder='Your Name' />
                    </FormControl>

                    <FormControl isRequired className='my-2'>
                        <Input placeholder='Work Profile' />
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default UserDataCollect
