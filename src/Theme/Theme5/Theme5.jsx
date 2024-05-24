import React, { useContext } from "react";
import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import ResumeContext from "../../Context/ResumeContext";
import "./Theme5.css"

const Theme5 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } =
    themeData.personalData;
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  const renderSection = (title, dataTitles, dataDesc) => (
    <Box mb={5}>
      <Heading
        as="h3"
        size="lg"
        mb={2}
        fontFamily="sans-serif"
        color="blue.900"
      >
        {title}
      </Heading>
      {Object.entries(dataTitles).map(([key, value], index) => (
        <Box key={index} mb={4}>
          <Heading fontSize="md" fontFamily="sans-serif" mb={2}>
            {value}
          </Heading>
          {dataDesc[key] &&
            dataDesc[key].split(",").map((desc, idx) => (
              <Text key={idx} fontSize="sm" fontFamily="sans-serif">
                {desc}
              </Text>
            ))}
        </Box>
      ))}
    </Box>
  );

  const renderGridSection = (title, items) => (
    <Box mb={5}>
      <Heading
        as="h3"
        size="lg"
        mb={2}
        fontFamily="sans-serif"
        color="blue.900"
      >
        {title}
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        {items.split(",").map((item, index) => (
          <GridItem key={index}>
            <Box display="flex" alignItems="center">
              <Box
                background="blue.900"
                width="6px"
                height="6px"
                borderRadius="50%"
                mr={2}
              />
              <Text fontSize="sm" fontFamily="sans-serif">
                {item}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme4" padding={10} display="flex" backgroundColor="gray.50">
        <Box width="30%" padding={5} backgroundColor="blue.900" color="white">
          <Heading as="h2" size="2xl" mb={4} fontFamily="sans-serif">
            {name}
          </Heading>
          <Text fontWeight="bold" fontSize="md" mb={2} fontFamily="sans-serif">
            {profile}
          </Text>
          <Text fontSize="sm" mb={2} fontFamily="sans-serif">
            {address}
          </Text>
          <Text fontSize="sm" mb={2} fontFamily="sans-serif">
            {phone}
          </Text>
          <Text fontSize="sm" fontFamily="sans-serif">
            {email}
          </Text>
        </Box>
        <Box width="70%" padding={5}>
          <Box mb={5}>
            <Heading
              as="h3"
              size="lg"
              mb={2}
              fontFamily="sans-serif"
              color="blue.900"
            >
              Summary
            </Heading>
            <Text fontSize="sm" fontFamily="sans-serif">
              {summary}
            </Text>
          </Box>

          {!checkWork && renderSection("Experience", workTitles, workDesc)}
          {renderSection("Education", educationTitles, educationDesc)}
          {!checkProj && renderSection("Projects", projectTitles, projectDesc)}
          {renderGridSection("Skills", skill)}
          {!checkAward && renderGridSection("Achievements", awards)}
        </Box>
      </Box>
    </Box>
  );
};

export default Theme5;
