import React, { useState } from 'react'
import './userCollectData.css'
import { FormControl, Input, Heading, Textarea, Button } from '@chakra-ui/react'

const UserDataCollect = () => {

    const [projectCount, setProjectCount] = useState(0)
    const [projArr, setProjArr] = useState([])
    const [projectData, setProjectData] = useState([])
    let tempObj = { id: [], pName: '', pDescription: '' }
    const handleChange = (e) => {
        const { name, value, id } = e.target
        tempObj[name] = value
        // console.log(tempObj);
        if (checkArrExist(id)) {
            console.log('include');
            let tempArr = projectData
            let index = tempArr.findIndex(item => item.name === value);
            tempArr[index] = tempObj
            setProjectData(tempArr)
        } else {
            setProjectData([...projectData, tempObj])
        }
    }

    const checkArrExist = (ID) => {
        let result = false;
        for (let i = 0; i < projectData.length; i++) {
            // if ((projectData[i].id).includes(ID)) {
            //     result = true;
            //     break;
            // }
            console.log((projectData[i].id).includes(ID));
        }
        // console.log(result);
        // return result
    }

    const handleProjectClick = (e) => {
        e.preventDefault();
        let i = projectCount
        ++i;
        const template = (
            <>
                <FormControl isRequired className='my-2'>
                    <Input id={`T${i}`} name='pName' onChange={handleChange} type={'text'} placeholder='Enter appropriate Title' />
                </FormControl>
                <FormControl isRequired className='my-2'>
                    <Textarea id={`D${i}`} name='pDescription' onChange={handleChange} placeholder='Use comma to separate Description' />
                </FormControl>
            </>
        )
        let arr = projArr
        arr.push(template)
        setProjArr(arr)
        setProjectCount(i)
        tempObj.id = [`T${i}`, `D${i}`]
    }

    const handleEducationClick = (e) => {

    }
    const handleWorkClick = (e) => {

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
                    {
                        (projectCount > 0) ? projArr.map((element, index) => <div key={index}>{element}</div>) : null
                    }
                </div>

                {/* Work Experience Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        EDUCATION
                    </Heading>
                    <hr />
                    <Button onClick={handleEducationClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Education</Button>
                </div>

                {/* Education Area  */}
                <div id="form-personal" className='mb-2'>
                    <Heading as='h4' size='md' className='my-2'>
                        WORK EXPERIENCE
                    </Heading>
                    <hr />
                    <Button onClick={handleWorkClick} className='my-3 w-100' colorScheme='teal' variant='solid'>Add Experience</Button>
                </div>
            </div>
        </>
    )
}

export default UserDataCollect
