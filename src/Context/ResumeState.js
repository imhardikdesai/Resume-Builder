import ResumeContext from "./ResumeContext";
import { useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';


const ResumeState = (props) => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onBeforePrint: () => {
            setLoading(true)
        },
        onAfterPrint: () => {
            setLoading(false)
        }
    });

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
            projectTitles: { pTitle1: "Project Title 1" },
            projectDesc: { pDescription1: "Project Description 1" },
        },
        educationData: {
            educationTitles: { eTitle1: "Education Title 1" },
            educationDesc: { eDescription1: "Education Description 1" },
        },
        workData: {
            workTitles: { wTitle1: "Work Title 1" },
            workDesc: { wDescription1: "Work Description 1" },
        },
        awardData: {
            awards: ''
        }
    }


    // const [themeData, setThemeData] = useState(initialData)
    const [themeData, setThemeData] = useState(initialData)
    const [checkProj, setCheckProj] = useState(false);
    const [checkWork, setCheckWork] = useState(false);
    const [checkAward, setCheckAward] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showComponent, setShowComponent] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('');
    const [selectBtn, setSelectBtn] = useState(true)


    return (
        <ResumeContext.Provider value={{ selectBtn, setSelectBtn, checkAward, setCheckAward, componentRef, handlePrint, currentTheme, setCurrentTheme, showComponent, setShowComponent, loading, setLoading, themeData, setThemeData, checkProj, checkWork, setCheckProj, setCheckWork }}>
            {props.children}
        </ResumeContext.Provider >
    )
}

export default ResumeState