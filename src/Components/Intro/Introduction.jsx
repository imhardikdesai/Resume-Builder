import { Flex, Container, Heading, Stack, Text, Button, Box } from '@chakra-ui/react';
import './introduction.css';
import homeLogo from './../../Assets/home-logo.png'
// import { Link as ReachLink } from 'react-router-dom'
import { Image } from '@chakra-ui/react'
import { useState } from 'react';


export default function Introduction() {
    const [selectBtn, setSelectBtn] = useState(true)
    const handleSelectTemplate = () => {
        setSelectBtn(!selectBtn)
    }


    return (
        <Container my={{ base: 1.5, md: 16 }} justifyContent={'space-between'} flexDirection={{ base: 'column', md: 'row', sm: 'column' }} display={'flex'} alignItems={'center'} maxW={'7xl'}>
            <Stack
                width={{ base: '95%', md: '47%' }}
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 1.5, md: 10, sm: '14' }}>

                {
                    selectBtn
                        ?
                        <>
                            <Heading
                                fontWeight={600}
                                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                                lineHeight={'110%'}>
                                Your resume in three{' '}
                                <Text as={'span'} color={'#38B2AC'}>
                                    easy {' '}
                                </Text>
                                steps
                            </Heading>

                            <Text color={'gray.500'} maxW={'3xl'}>
                                Resume builder tools that assemble well-formatted resume. Through a resume builder, you can create a professional-looking resume in a few easy steps. This resume builder offer different template options, so you can select the template that best fits your needs and style.
                            </Text>

                            <Flex textAlign={'start'} flexDirection={'column'} w={'full'}>
                                <Box className='Bullet_Points'>
                                    <Button>1</Button>
                                    <Text color={'gray.900'} fontSize={'xl'}>
                                        Select a template from our collection.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>2</Button>
                                    <Text color={'gray.900'} fontSize={'xl'}>
                                        Build you resume using our easy to use resume builder.
                                    </Text>
                                </Box>
                                <Box className='Bullet_Points'>
                                    <Button>3</Button>
                                    <Text color={'gray.900'} fontSize={'xl'}>
                                        Download your resume.
                                    </Text>
                                </Box>
                            </Flex>
                        </>
                        :
                        <Heading
                            m={'1.5'}
                            textAlign={{ base: 'center', md: 'start' }}
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'}>
                            Select a {' '}
                            <Text as={'span'} color={'#38B2AC'}>
                                Template {' '}
                            </Text>
                            from the list
                        </Heading>
                }
            </Stack>

            {
                selectBtn ?
                    <Stack>
                        <Image src={homeLogo} alt='home logo' my={'4'} />
                        <Button
                            onClick={handleSelectTemplate}
                            rounded={'full'}
                            px={6}
                            colorScheme={'teal'}
                            bg={'#38B2AC'}
                            _hover={{ bg: '#319795' }}>
                            Select Template
                        </Button>
                    </Stack>
                    :
                    <>
                        <Box maxW={{ base: '100%', md: '61%' }} className="templatesList">
                            <div className="template">
                                <img src="https://user-images.githubusercontent.com/87645745/210406666-ef3e2d63-28ab-4f8c-95d2-af3e6ea60bcf.png" alt="Cv Preview" />
                            </div>
                            <div className="template">
                                <img src="https://testanalytics-5e6e3.web.app/static/media/2.fba17867.JPG" alt="Cv Preview" />\
                            </div>
                            <div className="template">
                                <img src="https://testanalytics-5e6e3.web.app/static/media/3.776a5714.JPG" alt="Cv Preview" />
                            </div>
                            <div className="template">
                                <img src="https://testanalytics-5e6e3.web.app/static/media/4.af60bc02.jpg" alt="Cv Preview" />
                            </div>
                            <div className="template">
                                <img src="https://testanalytics-5e6e3.web.app/static/media/2.fba17867.JPG" alt="Cv Preview" />\
                            </div>
                            <div className="template">
                                <img src="https://testanalytics-5e6e3.web.app/static/media/3.776a5714.JPG" alt="Cv Preview" />
                            </div>
                        </Box>
                    </>
            }
        </Container>
    );
}
