import React, { useContext } from "react";
import { Box, Text, Image, Heading, Badge } from "@chakra-ui/react";
import "./Theme8.css";
import ResumeContext from "../../Context/ResumeContext";

const Theme8 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, profileImage, summary, skill } =
    themeData.personalData;

  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <Box id="section-to-print" ref={componentRef}>
      <Box id="theme8">
        <header id="info">
          <Box className="info-text">
            <Heading as="h2" size="xl" className="mb-2">
              {name}
            </Heading>
            <Text fontWeight="500" fontSize="xl" className="mt-1 mb-2">
              {profile}
            </Text>
            <Text fontSize="sm" className="summary-text">
              {summary}
            </Text>
          </Box>
          <Box>
            <Image
              id="resume-avatar"
              borderRadius="full"
              boxSize="150px"
              src={profileImage}
              alt="Profile Picture"
            />
          </Box>
        </header>

        <div className="w-100 border m-auto"></div>

        <section className="bottom-part mt-3">
          <section className="partition-1">
            <Box>
              <Heading fontSize="2xl" className="my-2">
                Contact
              </Heading>
              <Box className="mt-3">
                <Heading fontSize="md" className="my-2">
                  Phone
                </Heading>
                <Text fontSize="sm">{phone}</Text>
                <Heading fontSize="md" className="my-2">
                  Email
                </Heading>
                <Text fontSize="sm">{email}</Text>
                <Heading fontSize="md" className="my-2">
                  Address
                </Heading>
                <Text fontSize="sm">{address}</Text>
              </Box>
            </Box>

            <Box className="mt-5">
              <Heading fontSize="2xl" className="my-2">
                Skills
              </Heading>
              <Box className="mt-3">
                {skill.split(",").map((item, index) => (
                  <Badge className="badge" key={index}>
                    {item}
                  </Badge>
                ))}
              </Box>
            </Box>
          </section>

          <div
            style={{ height: "536px" }}
            className="border border-dark mx-4"
          ></div>

          <section className="partition-2">
            <Box id="education-area">
              <Heading fontSize="2xl" className="my-2">
                Education
              </Heading>
              {Object.entries(educationTitles).map((element, index) => (
                <Box key={index} className="mt-3">
                  <Heading fontSize="md" className="my-2">
                    {element[1]}
                  </Heading>
                  <Box className="sub-details">
                    {Object.entries(educationDesc)
                      [index]?.[1].split(",")
                      .map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                  </Box>
                </Box>
              ))}
            </Box>

            {!checkProj && (
              <Box id="project-area">
                <Heading fontSize="2xl" className="mt-4">
                  Projects
                </Heading>
                {Object.entries(projectTitles).map((element, index) => (
                  <Box key={index} className="mt-1">
                    <Heading fontSize="md" className="my-2">
                      {element[1]}
                    </Heading>
                    <Box className="sub-details">
                      {Object.entries(projectDesc)
                        [index]?.[1].split(",")
                        .map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            {!checkWork && (
              <Box id="experience-area">
                <Heading fontSize="2xl" className="mt-4">
                  Work Experience
                </Heading>
                {Object.entries(workTitles).map((element, index) => (
                  <Box key={index} className="mt-1">
                    <Heading fontSize="md" className="my-2">
                      {element[1]}
                    </Heading>
                    <Box className="sub-details">
                      {Object.entries(workDesc)
                        [index]?.[1].split(",")
                        .map((desc, idx) => (
                          <li key={idx}>{desc}</li>
                        ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}

            {!checkAward && (
              <Box id="award-area">
                <Heading fontSize="2xl" className="mt-4">
                  Awards & Achievements
                </Heading>
                <Box className="mt-1">
                  {awards.split(",").map((element, index) => (
                    <li key={index}>{element}</li>
                  ))}
                </Box>
              </Box>
            )}
          </section>
        </section>
      </Box>
    </Box>
  );
};

export default Theme8;
