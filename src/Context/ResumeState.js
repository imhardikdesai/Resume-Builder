import ResumeContext from "./ResumeContext";
import { useState } from "react";

const ResumeState = (props) => {

    const initialData = {
        name: "John Doe",
        email: "",
        address: "1234, Some Street, Some City, Some State, Some Country",
        phone: "1234567890",
        objective: "To work in a challenging environment where I can utilize my skills and knowledge to the best of my ability and grow along with the organization.",
        skills: [
            {
                id: 1,
                degree: "B.Tech",
                institute: "Some Institute",
                year: "2015-2019",
                cgpa: "8.5",
            }
        ]
    }


    const [themeData, setThemeData] = useState(initialData)


    return (
        <ResumeContext.Provider value={{ themeData, setThemeData }}>
            {props.children}
        </ResumeContext.Provider >
    )
}

export default ResumeState