import React, { useContext } from "react";
import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import "./theme4.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme4 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  const renderSection = (title, dataTitles, dataDesc) => (
    <>
      <div className="w-100 border m-auto"></div>
      <Box display="flex" className="w-full my-4">
        <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
          {title}
        </Heading>
        <Box marginLeft={25} width="100%">
          {Object.entries(dataTitles).map((element, index) => (
            <Box key={index} className="mt-1">
              <Heading fontSize="md" fontFamily="serif" className="my-2">
                {element[1]}
              </Heading>
              {dataDesc[element[0]] &&
                dataDesc[element[0]].split(",").map((desc, idx) => (
                  <Text key={idx} fontSize="sm" fontFamily="serif">
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
      <div className="w-100 border m-auto"></div>
      <Box display="flex" className="w-full my-4">
        <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
          {title}
        </Heading>
        <Box marginLeft={25} width="100%">
          <Grid templateColumns="repeat(2, 1fr)" gap={5}>
            {items.split(",").map((item, index) => (
              <GridItem key={index}>
                <Box display="flex" alignItems="center">
                  <Box
                    background="black"
                    width="6px"
                    height="6px"
                    borderRadius="50%"
                    mr={2}
                  />
                  <Text fontSize="sm" fontFamily="serif">
                    {item}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme4">
        <header id="info">
          <Box className="info-text text-center">
            <Heading
              as="h2"
              size="2xl"
              color="red.800"
              className="mb-2"
              fontFamily="serif"
            >
              {name}
            </Heading>
            <Text
              fontWeight="600"
              fontSize="md"
              className="mt-1 mb-2"
              fontFamily="serif"
            >
              {profile}
            </Text>
            <Box>
              <Text fontFamily="serif" fontSize="sm">
                {address}
              </Text>
              <Text fontSize="sm" fontFamily="serif">
                {phone}
              </Text>
              <Text fontSize="sm" fontFamily="serif">
                {email}
              </Text>
            </Box>
          </Box>
        </header>
        <section className="bottom-part">
          <section className="sections">
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={100} fontFamily="serif">
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
            {!checkProj &&
              renderSection("Projects", projectTitles, projectDesc)}
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

export default Theme4;
