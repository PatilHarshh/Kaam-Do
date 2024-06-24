import React, { useState, useEffect } from "react";
import "./Resume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const [isCtrlDown, setIsCtrlDown] = useState(false);
  const [resumeContent] = useState({
    personalInfo: {
      tel: "(000) 000-0000",
      name: "John Doe",
      nickname: "JD",
      email: "johndoe@example.com",
    },
    workExperience: [
      {
        company: "XYZ Corporation",
        position: "Senior Software Engineer",
        years: "2016 - Present",
        location: "New York",
        description:
          "Leading projects on AI development:\n- Developed an all-seeing AI system\n- Implemented chess-playing AI\nSaved lives and prevented crises:\n- Identified and helped victims\n- Implemented financial aid initiatives\n- Contributed to disaster prevention",
      },
      {
        company: "Universal Insurance Group",
        position: "Insurance Underwriter",
        years: "2012 - 2016",
        location: "New York",
        description:
          "Investigated insurance claims:\n- Gathered information and provided support to families\nContributed to community welfare:\n- Identified and assisted individuals in need",
      },
      {
        company: "ABC Tech Solutions",
        position: "Software Engineer",
        years: "2006 - 2012",
        location: "New York",
        description:
          "Contributed to technological advancements:\n- Played a key role in coding projects\n- Managed projects efficiently\nMaintained secrecy in management:\n- Handled hiring and firing discretely",
      },
    ],
    education: {
      school: "University",
      degree: "Computer Science",
      years: "2002 - 2006",
      location: "Anytown, USA",
      highlights: ["Bachelor's Degree"],
    },
    skills: [
      {
        category: "Programming",
        details: [
          "C/C++, Java, Python",
          "Experience in building large-scale systems",
        ],
      },
      {
        category: "Finance",
        details: [
          "Knowledgeable in stock market analysis",
          "Experience in crisis management",
        ],
      },
      {
        category: "Communication",
        details: [
          "Strong interpersonal skills",
          "Ability to handle diverse situations with compassion",
        ],
      },
    ],
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Control") {
        setIsCtrlDown(true);
      }
      if (isCtrlDown && e.key === "p") {
        e.preventDefault();
        handlePrint();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === "Control") {
        setIsCtrlDown(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isCtrlDown]);

  const handlePrint = () => {
    html2canvas(document.querySelector("article")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  return (
    <section
      className="resume-section"
      style={{
        borderRadius: "4px",
        boxShadow: "gray 1px 1px 3px 2px",
        overflow: "hidden",
      }}
      title="This is a sample resume. Click to edit. You can add/remove any element you like. Press CTRL+P to save as PDF!"
    >
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          <li>Click on any field to edit the content.</li>
          <li>You can add or remove any element you like.</li>
          <li>
            Press CTRL+P or Download PDF button to save the resume as a PDF
            file.
          </li>
        </ol>
      </div>
      <div id="addDropBtn" tabIndex="-1">
        <div id="dropBtn" onClick={handlePrint}>
          Download PDF
        </div>
      </div>
      <article
        tabIndex="0"
        contentEditable="true"
      >
        <table className="psnl-info">
          <tbody>
            <tr>
              <td rowSpan="2" className="text-left">
                Tel: {resumeContent.personalInfo.tel}
              </td>
              <td className="text-center font-20">
                {resumeContent.personalInfo.name}
              </td>
              <td rowSpan="2" className="text-right">
                email: {resumeContent.personalInfo.email}
              </td>
            </tr>
            <tr>
              <td className="text-center font-20">
                {resumeContent.personalInfo.nickname}
              </td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center font-18">
                (from <em>Person of Interest</em>)
              </td>
            </tr>
          </tbody>
        </table>
        {/* Work Experience */}
        <div className="rsm-header">
          <h2>Work Experience</h2>
          <hr />
        </div>
        {resumeContent.workExperience.map((exp, index) => (
          <div className="rsm-cmpnt" key={index}>
            <div className="rsm-cmpnt-top">
              <div className="text-left">
                <div>{exp.company}</div>
                <div>{exp.position}</div>
              </div>
              <div className="text-right font-10">
                <div>{exp.years}</div>
                <div>{exp.location}</div>
              </div>
            </div>
            <div className="rsm-cmpnt-mid">
              {exp.description.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        {/* Education */}
        <div className="rsm-header">
          <h2>Education</h2>
          <hr />
        </div>
        <div className="rsm-cmpnt">
          <div className="rsm-cmpnt-top">
            <div className="text-left">
              <div>{resumeContent.education.school}</div>
              <div>{resumeContent.education.degree}</div>
            </div>
            <div className="text-right font-10">
              <div>{resumeContent.education.years}</div>
              <div>{resumeContent.education.location}</div>
            </div>
          </div>
          <div className="rsm-cmpnt-btm">
            <p>Education highlights:</p>
            <ul>
              {resumeContent.education.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
        {/* Skills */}
        <div className="rsm-header">
          <h2>Professional Skills</h2>
          <hr />
        </div>
        {resumeContent.skills.map((skill, index) => (
          <div className="rsm-cmpnt" key={index}>
            <div className="rsm-cmpnt-top">
              <div className="text-left">
                <div>{skill.category}</div>
              </div>
            </div>
            <div className="rsm-cmpnt-btm">
              {skill.details.map((detail, i) => (
                <p key={i}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </article>
      <div className="resume-buttons" tabIndex="-1">
        <div className="button" onClick={handlePrint}>
          Download PDF
        </div>
      </div>
    </section>
  );
};

export default Resume;
