import ResumeContext from "./ResumeContext";
import { useState } from "react";

const ResumeState = (props) => {

    const [number, setNumber] = useState(40);




    return (
        <ResumeContext.Provider value={{ number, setNumber }}>
            {props.children}
        </ResumeContext.Provider>
    )
}

export default ResumeState