import React, { useState } from 'react'
import './userCollectData.css'
import { FormControl, Input, Heading, Textarea, Button } from '@chakra-ui/react'

const UserDataCollect = () => {
    const [projectCount, setProjectCount] = useState(0)
    const [projectData, setProjectData] = useState([])

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        setProjectCount(i)
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input type={'text'} placeholder='Project Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea placeholder='Description' />
                </FormControl>
            </>
        )
        const empArray = projectData;
        empArray.push(template);
        setProjectData(empArray)
    }

    return (
        <>
            <div id="form-collect">
                {/* Personal Details Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='mb-2'>
                        Personal Details
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input type={'text'} placeholder='Your Name' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input type={'text'} placeholder='Work Profile' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input type={'text'} placeholder='Address' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input type={'tel'} placeholder='Phone number' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Input type={'email'} placeholder='Email id' />
                    </FormControl>
                </div>

                {/* Skills Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        Technical Skills
                    </Heading>
                    <hr />

                    <FormControl isRequired className='my-2'>
                        <Input type={'text'} placeholder='Separate skills by comma' />
                    </FormControl>
                </div>

                {/* Projects Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        PROJECTS
                    </Heading>
                    <hr />
                    <Button onClick={handleProjectClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Projects</Button>
                    {/* <FormControl isRequired className='my-2'>
                        <Input type={'text'} placeholder='Project Title' />
                    </FormControl>
                    <FormControl isRequired className='my-2'>
                        <Textarea placeholder='Description' />
                    </FormControl> */}
                </div>
            </div>
        </>
    )
}

export default UserDataCollect
