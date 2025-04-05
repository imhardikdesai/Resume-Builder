import { React, useContext } from "react";
import Introduction from "../../Components/Intro/Introduction";
import ResumeContext from "../../Context/ResumeContext";
import BuilderArea from "../BuilderArea";
import Theme1 from "./../../Theme/Theme1/Theme1";
import Theme2 from "../../Theme/Theme2/Theme2";
import Theme3 from "../../Theme/Theme3/Theme3";
import Theme4 from "../../Theme/Theme4/theme4";
import Theme5 from "../../Theme/Theme5/Theme5";
import ErrorPage from "../Error/ErrorPage";

const Home = () => {
  const { currentTheme, showComponent, themeData, componentRef } =
    useContext(ResumeContext);
  return (
    <>
      {!showComponent && <Introduction />}
      {showComponent && currentTheme === "Theme1" && (
        <BuilderArea
          theme={<Theme1 componentRef={componentRef} themeData={themeData} />}
        />
      )}
      {showComponent && currentTheme === "Theme2" && (
        <BuilderArea
          theme={<Theme2 componentRef={componentRef} themeData={themeData} />}
        />
      )}
      {showComponent && currentTheme === "Theme3" && (
        <BuilderArea
          theme={<Theme3 componentRef={componentRef} themeData={themeData} />}
        />
      )}
      {showComponent && currentTheme === "Theme4" && (
        <BuilderArea
          theme={<Theme4 componentRef={componentRef} themeData={themeData} />}
        />
      )}
      {showComponent && currentTheme === "Theme5" && (
        <BuilderArea
          theme={<Theme5 componentRef={componentRef} themeData={themeData} />}
        />
      )}
      {showComponent && currentTheme === "Theme6" && <ErrorPage />}
      {}
    </>
  );
};

export default Home;
