import React from 'react'

const Theme2 = (props) => {
    const { componentRef } = props;
    return (
        <div id="section-to-print" ref={componentRef}>
            Theme 2
        </div>
    )
}

export default Theme2
