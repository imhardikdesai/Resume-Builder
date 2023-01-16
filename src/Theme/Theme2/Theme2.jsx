import React from 'react'
import { Box } from '@chakra-ui/react';

const Theme2 = (props) => {
    const { componentRef } = props;
    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme2">
                Theme 2
            </Box>
        </Box>
    )
}

export default Theme2
