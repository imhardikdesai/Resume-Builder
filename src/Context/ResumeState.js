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
            skill: 'HTML, CSS, JavaScript, React',
        },
        projectData: {
            projectTitles: {},
            projectDesc: {},
        },
        educationData: {
            educationTitles: [{ eTitle1: "Henna High School", eTitle2: "Oxford School of science" }],
            educationDesc: [{ eDescription1: 'SSC 99.99%', eDescription2: 'HSC 99.98%' }],
        },
        workData: {
            workTitles: [{ wTitle1: "Amazon - Web developer", wTitle2: "Google - Software Engineer" }],
            workDesc: [{ wDescription1: 'Formulate and review policies as regards Industry Improvement', wDescription2: 'Create a functional and technical application of set policies' }],
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