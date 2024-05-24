import React, { useContext } from "react";
import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import "./Theme6.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme6 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } = themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  const renderSection = (title, dataTitles, dataDesc) => (
    <>
      <div className="border"></div>
      <Box display="flex" className="w-full my-4">
        <Heading as="h3" size="md" className="heading">
          {title}
        </Heading>
        <Box marginLeft={25} width="100%">
          {Object.entries(dataTitles).map((element, index) => (
            <Box key={index} className="mt-1">
              <Heading fontSize="md" className="my-2">
                {element[1]}
              </Heading>
              {dataDesc[element[0]] &&
                dataDesc[element[0]].split(",").map((desc, idx) => (
                  <Text key={idx} fontSize="sm">
                    {desc}
                  </Text>
                ))}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );

  const renderGridSection = (title, items) => (
    <>
      <div className="border"></div>
      <Box display="flex" className="w-full my-4">
        <Heading as="h3" size="md" className="heading">
          {title}
        </Heading>
        <Box marginLeft={25} width="100%">
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            {items.split(",").map((item, index) => (
              <GridItem key={index} className="grid-item">
                <Box className="bullet"></Box>
                <Text fontSize="sm">{item}</Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme6">
        <header id="info">
          <Box className="info-text">
            <Heading as="h2" size="2xl">
              {name}
            </Heading>
            <Text fontWeight="600" fontSize="md">
              {profile}
            </Text>
            <Box>
              <Text fontSize="sm">{address}</Text>
              <Text fontSize="sm">{phone}</Text>
              <Text fontSize="sm">{email}</Text>
            </Box>
          </Box>
        </header>
        <section className="bottom-part">
          <section className="sections">
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" className="heading">
                Summary
              </Heading>
              <Box marginLeft={25} width="100%">
                <Text fontSize="sm" className="summary-text">
                  {summary}
                </Text>
              </Box>
            </Box>
            {!checkWork && renderSection("Experience", workTitles, workDesc)}
            {renderSection("Education", educationTitles, educationDesc)}
            {!checkProj && renderSection("Projects", projectTitles, projectDesc)}
          </section>
          <aside className="sidebar">
            {renderGridSection("Skills", skill)}
            {!checkAward && renderGridSection("Achievements", awards)}
          </aside>
        </section>
      </Box>
    </Box>
  );
};

export default Theme6;
