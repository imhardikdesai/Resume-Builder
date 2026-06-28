import ResumeContext from "./ResumeContext";
import { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumeState = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      setLoading(true);
    },
    onAfterPrint: () => {
      setLoading(false);
    },
  });

  const userData = JSON.parse(localStorage.getItem("userData"))

  // const initialData = {
  //   personalData: {
  //     profileImage:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNI3kQLeYMnpy05PhEiuzS1rtRmNVL7VKvwcE4ACmQSQT1rRmUO5mHLyjH-mGHq0ueUQY&usqp=CAU",
  //     name: "Your Name",
  //     summary:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     profile: "Work Profile",
  //     address: "Address Line",
  //     phone: "Phone Number",
  //     email: "Email Address",
  //     skill: "Your, Skills, are, shown, here",
  //   },
  //   projectData: {
  //     projectTitles: { pTitle1: "Project Title 1" },
  //     projectDesc: { pDescription1: "Project Description 1" },
  //   },
  //   educationData: {
  //     educationTitles: { eTitle1: "Education Title 1" },
  //     educationDesc: { eDescription1: "Education Description 1" },
  //   },
  //   workData: {
  //     workTitles: { wTitle1: "Work Title 1" },
  //     workDesc: { wDescription1: "Work Description 1" },
  //   },
  //   awardData: {
  //     awards:
  //       "Certificate of Appreciation - 2019, Certificate of Appreciation - 2018",
  //   },
  // };

  const initialData = {
    personalData: {
      profileImage: userData?.personalData?.profileImage || "https://www.w3schools.com/howto/img_avatar.png",
      name: userData?.personalData?.name || 'Your Name',
      summary: userData?.personalData?.summary || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      profile: userData?.personalData?.profile || 'Work profile',
      address: userData?.personalData?.address || 'Address line',
      phone: userData?.personalData?.phone || 'Phone Number',
      email: userData?.personalData?.email || 'Email Address',
      skill: userData?.personalData?.skill || 'Your, Skills, are, shown, here',
    },
    projectData: {
      projectTitles: { pTitle1: userData?.projectData?.projectTitles?.pTitle1 || "Project Title 1" },
      projectDesc: { pDescription1: userData?.projectData?.projectDesc?.pDescription1 || "Project Description 1" },
    },
    educationData: {
      educationTitles: { eTitle1: userData?.educationData?.educationTitles?.eTitle1 || "Education Title 1" },
      educationDesc: { eDescription1: userData?.educationData?.educationDesc?.eDescription1 || "Education Description 1" },
    },
    workData: {
      workTitles: { wTitle1: userData?.workData?.workTitles?.wTitle1 || "Work Title 1" },
      workDesc: { wDescription1: userData?.workData?.workDesc?.wDescription1 || "Work Description 1" },
    },
    awardData: {
      awards:
        userData?.awardData?.awards || "Certificate of Appreciation - 2019, Certificate of Appreciation - 2018",
    },
  };

  const [themeData, setThemeData] = useState(initialData);
  const [checkProj, setCheckProj] = useState(false);
  const [checkWork, setCheckWork] = useState(false);
  const [checkAward, setCheckAward] = useState(false);
  const [loading, setLoading] = useState(false);
  //Change bellow two state for create any new Theme
  const [showComponent, setShowComponent] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Theme1");
  const [selectBtn, setSelectBtn] = useState(true);

  return (
    <ResumeContext.Provider
      value={{
        initialData,
        selectBtn,
        setSelectBtn,
        checkAward,
        setCheckAward,
        componentRef,
        handlePrint,
        currentTheme,
        setCurrentTheme,
        showComponent,
        setShowComponent,
        loading,
        setLoading,
        themeData,
        setThemeData,
        checkProj,
        checkWork,
        setCheckProj,
        setCheckWork,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeState;
