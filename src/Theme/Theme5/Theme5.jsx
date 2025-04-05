import React, { useContext } from 'react';
import ResumeContext from '../../Context/ResumeContext';
import './theme5.css';

const Theme5 = (props) => {
  const { componentRef, themeData } = props;
  const { name, address, phone, email, profile, summary, skill } = themeData.personalData;

  // Toggles for hiding/showing sections
  const { checkProj, checkWork, checkAward } = useContext(ResumeContext);

  // Section data
  const { projectTitles, projectDesc } = themeData.projectData;
  const { educationTitles, educationDesc } = themeData.educationData;
  const { workTitles, workDesc } = themeData.workData;
  const { awards } = themeData.awardData;

  return (
    <div className="single-column-theme" ref={componentRef}>
      
      {/* Header Section */}
      <header>
        <h1>{name}</h1>
        <div className="contact-info">
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong> {address}</p>
        </div>
      </header>

      {/* Profile & Summary */}
      <section className="section">
        <h2>{profile}</h2>
        <div className="summary">
          <p>{summary}</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <h2>Education</h2>
        {
          Object.entries(educationTitles).map((element, index) => (
            <div key={index}>
              <h3>{element[1]}</h3>
              <div className="sub-details">
                <ul>
                  {
                    (Object.entries(educationDesc)[index] === undefined)
                      ? null
                      : Object.entries(educationDesc)[index][1]
                          .split(',')
                          .map((item, i) => <li key={i}>{item}</li>)
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </section>

      {/* Projects Section */}
      {
        !checkProj &&
        <section className="section">
          <h2>Projects</h2>
          {
            Object.entries(projectTitles).map((element, index) => (
              <div key={index}>
                <h3>{element[1]}</h3>
                <div className="sub-details">
                  <ul>
                    {
                      (Object.entries(projectDesc)[index] === undefined)
                        ? null
                        : Object.entries(projectDesc)[index][1]
                            .split(',')
                            .map((item, i) => <li key={i}>{item}</li>)
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </section>
      }

      {/* Work Experience Section */}
      {
        !checkWork &&
        <section className="section">
          <h2>Work Experience</h2>
          {
            Object.entries(workTitles).map((element, index) => (
              <div key={index}>
                <h3>{element[1]}</h3>
                <div className="sub-details">
                  <ul>
                    {
                      (Object.entries(workDesc)[index] === undefined)
                        ? null
                        : Object.entries(workDesc)[index][1]
                            .split(',')
                            .map((item, i) => <li key={i}>{item}</li>)
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </section>
      }

      {/* Awards Section */}
      {
        !checkAward &&
        <section className="section">
          <h2>Awards & Achievements</h2>
          <div className="sub-details">
            <ul>
              { awards.split(',').map((award, i) => <li key={i}>{award}</li>) }
            </ul>
          </div>
        </section>
      }

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {
            skill.split(',').map((s, i) => (
              <span key={i}>{s.trim()}</span>
            ))
          }
        </div>
      </section>

    </div>
  );
};

export default Theme5;
