import ResumeContext from "./ResumeContext";
import { useState } from "react";

const ResumeState = (props) => {

    const initialData = {
        personalData: {
            name: "Your Name",
            profile: "Work Profile",
            address: "Address Line",
            phone: "Phone Number",
            email: "Email Address",
            skill: 'Your, Skills, are, shown, here',
        },
        projectData: {
            projectTitles: { pTitle1: "Project Title 1", pTitle2: "Project Title 2" },
            projectDesc: { pDescription1: "Project Description 1", pDescription2: "Project Description 2" },
        },
        educationData: {
            educationTitles: { eTitle1: "Education Title 1", eTitle2: "Education Title 2" },
            educationDesc: { eDescription1: "Education Description 1", eDescription2: "Education Description 2" },
        },
        workData: {
            workTitles: { wTitle1: "Work Title 1", wTitle2: "Work Title 2" },
            workDesc: { wDescription1: "Work Description 1", wDescription2: "Work Description 2" },
        }
    }


    // const [themeData, setThemeData] = useState(initialData)
    const [themeData, setThemeData] = useState(initialData)
    const [checkProj, setCheckProj] = useState(false);
    const [checkWork, setCheckWork] = useState(false);

    return (
        <ResumeContext.Provider value={{ themeData, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork }}>
            {props.children}
        </ResumeContext.Provider >
    )
}

export default ResumeState