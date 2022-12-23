import React, { useContext, useRef } from 'react'
import Theme1 from '../Theme/Theme1/Theme1'
import { Button } from '@chakra-ui/react';
import Navbar from '../Components/Navbar/Navbar'
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';

import { useReactToPrint } from 'react-to-print';

const BuilderArea = () => {
    const { themeData } = useContext(ResumeContext);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <>
            <Navbar />
            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    <Theme1 componentRef={componentRef} themeData={themeData} />
                </div>
            </div>
            <div className="text-center">
                <Button className='m-5' onClick={handlePrint}>Print</Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea
