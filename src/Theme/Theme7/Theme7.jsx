import React, { useContext } from "react";
import { Box, Text, Heading, Grid, GridItem } from "@chakra-ui/react";
import "./theme7.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme7 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme3">
        <header id="info" className="text-center">
          <Box className="info-text text-start">
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
            <Box className="mt-3">
              <Text width="190px" fontFamily="serif" fontSize="sm">
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
        <div className="border"></div>
        <section className="bottom-part mt-3">
          <section className="sections">
            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Summary
              </Heading>
              <Box marginLeft={25}>
                <Text fontSize="sm" className="summary-text">
                  {summary}
                </Text>
              </Box>
            </Box>
            {!checkWork && (
              <>
                <div className="border"></div>
                <Box display="flex" className="w-full my-4">
                  <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                    Experience
                  </Heading>
                  <Box marginLeft={25} width="100%">
                    <Text fontSize="sm" className="summary-text">
                      {Object.entries(workTitles).map((element, index) => (
                        <Box key={index} className="mt-1">
                          <Heading
                            fontSize="md"
                            fontFamily="serif"
                            className="my-2"
                          >
                            {element[1]}
                          </Heading>
                          {Object.entries(workDesc)[index] === undefined
                            ? null
                            : Object.entries(workDesc)
                                [index][1].split(",")
                                .map((element, index) => (
                                  <p key={index}>{element}</p>
                                ))}
                        </Box>
                      ))}
                    </Text>
                  </Box>
                </Box>
              </>
            )}

            <div className="border"></div>

            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Education
              </Heading>
              <Box marginLeft={25} width="100%">
                <Text fontSize="sm">
                  {Object.entries(educationTitles).map((element, index) => (
                    <Box key={index} className="mb-4">
                      <Heading
                        fontSize="md"
                        fontFamily="serif"
                        className="mb-2"
                      >
                        {element[1]}
                      </Heading>
                      {Object.entries(educationDesc)[index] === undefined
                        ? null
                        : Object.entries(educationDesc)
                            [index][1].split(",")
                            .map((element, index) => (
                              <p key={index}>{element}</p>
                            ))}
                    </Box>
                  ))}
                </Text>
              </Box>
            </Box>

            {!checkProj && (
              <>
                <div className="border"></div>
                <Box display="flex" className="w-full my-4">
                  <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                    Projects
                  </Heading>
                  <Box marginLeft={25} width="100%">
                    <Text fontSize="sm">
                      {Object.entries(projectTitles).map((element, index) => (
                        <Box key={index} className="mt-1">
                          <Heading
                            fontSize="md"
                            fontFamily="serif"
                            className="my-2"
                          >
                            {element[1]}
                          </Heading>
                          <Box className="sub-details">
                            {Object.entries(projectDesc)[index] === undefined
                              ? null
                              : Object.entries(projectDesc)
                                  [index][1].split(",")
                                  .map((element, index) => (
                                    <li key={index}>{element}</li>
                                  ))}
                          </Box>
                        </Box>
                      ))}
                    </Text>
                  </Box>
                </Box>
              </>
            )}

            <div className="border"></div>

            <Box display="flex" className="w-full my-4">
              <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                Skills
              </Heading>
              <Box marginLeft={25} width="100%">
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                  {skill.split(",").map((item, index) => (
                    <GridItem key={index}>
                      <Box display="flex" alignItems="center">
                        <div
                          style={{
                            background: "black",
                            width: "6px",
                            height: "6px",
                          }}
                        ></div>
                        <p
                          className="mx-1"
                          color="gray"
                          fontFamily="serif"
                          key={index}
                        >
                          {item}
                        </p>
                      </Box>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            </Box>

            {!checkAward && (
              <>
                <div className="border"></div>
                <Box display="flex" className="w-full my-4">
                  <Heading as="h3" size="md" minWidth={175} fontFamily="serif">
                    Achievement
                  </Heading>
                  <Box marginLeft={25} width="100%">
                    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                      {awards.split(",").map((item, index) => (
                        <GridItem key={index}>
                          <Box display="flex" alignItems="center">
                            <div
                              style={{
                                background: "black",
                                width: "6px",
                                height: "6px",
                              }}
                            ></div>
                            <p
                              className="mx-1"
                              color="gray"
                              fontFamily="serif"
                              key={index}
                            >
                              {item}
                            </p>
                          </Box>
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </>
            )}
          </section>
        </section>
      </Box>
    </Box>
  );
};


export default Theme7;
