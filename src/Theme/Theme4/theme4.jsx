import React from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

const Theme4 = ({ componentRef, themeData }) => {
  const { personalData, educationData, workData, projectData } = themeData;
  const { name, email, phone, address, summary, skill, profile } = personalData;

  return (
    <div
      ref={componentRef}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        color: "#333",
      }}
    >
      <div
        style={{
          backgroundColor: "#87CEEB",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}
        >
          {name}
        </h1>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          <FaEnvelope style={{ marginRight: "8px" }} />
          {email}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          <FaPhone style={{ marginRight: "8px" }} />
          {phone}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          <FaMapMarkerAlt style={{ marginRight: "8px" }} />
          {address}
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          <FaBriefcase style={{ marginRight: "8px" }} />
          {profile ? profile : "Work Profile"}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#e6f0fa",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{ fontSize: "20px", marginTop: "10px", marginBottom: "10px" }}
        >
          Professional Summary
        </h2>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "10px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          {summary ? summary : "summary"}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#e6f0fa",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{ fontSize: "20px", marginTop: "10px", marginBottom: "10px" }}
        >
          Skills
        </h2>
        <ul
          style={{
            listStyleType: "disc",
            paddingLeft: "20px",
            marginBottom: "20px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          {skill.split(",").map((item, index) => (
            <li key={index} style={{ fontSize: "16px", marginBottom: "10px" }}>
              {item}
            </li>
          ))}
        </ul>
        <h2
          style={{ fontSize: "20px", marginTop: "10px", marginBottom: "10px" }}
        >
          Education
        </h2>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "10px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          <strong>{educationData.educationTitles.eTitle1}</strong>
        </p>
        <p
          style={{
            fontSize: "16px",
            marginBottom: "10px",
            maxWidth: "50%",
            wordBreak: "keep-all",
            overflowWrap: "break-word",
            lineHeight: "1.5",
          }}
        >
          {educationData.educationDesc.eDescription1}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          boxSizing: "border-box",
          gridColumn: "span 1",
        }}
      >
        <h2
          style={{ fontSize: "20px", marginTop: "10px", marginBottom: "10px" }}
        >
          Professional Experience
        </h2>
        {Object.entries(workData.workTitles).map(([key, value], index) => (
          <div key={index}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {value}
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                marginBottom: "20px",
                maxWidth: "50%",
                wordBreak: "keep-all",
                overflowWrap: "break-word",
                lineHeight: "1.5",
              }}
            >
              {workData.workDesc[`wDescription${index + 1}`]
                .split(",")
                .map((desc, idx) => (
                  <li
                    key={idx}
                    style={{ fontSize: "16px", marginBottom: "10px" }}
                  >
                    {desc}
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <h2
          style={{ fontSize: "20px", marginTop: "10px", marginBottom: "10px" }}
        >
          Projects
        </h2>
        {Object.entries(projectData.projectTitles).map(
          ([key, value], index) => (
            <div key={index}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {value}
              </h3>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "20px",
                  marginBottom: "20px",
                  maxWidth: "50%",
                  wordBreak: "keep-all",
                  overflowWrap: "break-word",
                  lineHeight: "1.5",
                }}
              >
                {projectData.projectDesc[`pDescription${index + 1}`]
                  .split(",")
                  .map((desc, idx) => (
                    <li
                      key={idx}
                      style={{ fontSize: "16px", marginBottom: "10px" }}
                    >
                      {desc}
                    </li>
                  ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Theme4;
