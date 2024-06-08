import React, { useState } from "react";
import "./Resume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const [isCtrlDown, setIsCtrlDown] = useState(false);
  const [resumeContent] = useState({
    personalInfo: {
      tel: "(917) 285-7362",
      name: "Mukilan T",
      nickname: "Muki",
      email: "mukilan2808@gmail.com",
    },
    workExperience: [
      {
        company: "N/A",
        position: "Billionaire",
        years: "??? - 2016",
        location: "New York",
        description:
          "His source of wealth is unknown yet reliable. Develop an all-seeing AI:\n- Taught the Machine to save everyone\n- Taught the Machine how to play chess\nSave the irrelevant numbers:\n- Identify the irrelevant number as victim or perpetrator\n- Saved everyone\n- Failed to save himself",
      },
      {
        company: "Universal Heritage Insurance",
        position: "Insurance Underwriter",
        years: "??? - 2016",
        location: "New York",
        description:
          "An insurance company. Work as an investigator:\n- Approach families of the numbers and collect relevant information, sometimes provide anonymous financial aid\nSave the irrelevant numbers:\n- Identify the irrelevant number as victim or perpetrator",
      },
      {
        company: "IFT, Inc.",
        position: "Software Engineer",
        years: "1983 - 2011",
        location: "New York",
        description:
          "This company receives a reputation as a world leader in computer technology. Work as a low-level employee:\n- Pretend to be inefficient in coding\n- Constantly disappearing from work\nSecretly being a high level executive:\n- Hired someone secretly(219)\n- Fired himself secretly(102)",
      },
    ],
    education: {
      school: "Massachusetts Institute of Technology",
      degree: "Engineering",
      years: "1980 - 1983",
      location: "Cambridge, MA",
      highlights: ["Dropout"],
    },
    skills: [
      {
        category: "Hacking skills",
        details: [
          "C language, ",
          "Instructed a student on building a large program once in an undercover mission when he pretended to be a math teacher",
        ],
      },
      {
        category: "Financial knowledge",
        details: [
          "Expert in stock market manipulation",
          "Short sold a medical company's stocks",
          "Prevented a financial crisis in a stock exchange",
        ],
      },
      {
        category: "People skills",
        details: [
          "Compassion and selfless love",
          '"Human-interaction" is said to not be his best strength, however Finch has demonstrated his kindness and caring for all man-kind, including those posing against him',
        ],
      },
    ],
  });

  const handleKeyDown = (e) => {
    if (e.keyCode === 17) {
      setIsCtrlDown(true);
    }
  };

  const handlePrint = () => {
    html2canvas(document.querySelector("article")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 17) {
      setIsCtrlDown(false);
    }
  };

  return (
    <section
      style={{
        borderRadius: "4px",
        boxShadow: "gray 1px 1px 3px 2px",
        overflow: "hidden",
      }}
      title="This is a sample resume. Click to edit. Use Tab key to go to next input box. You can add/remove any element you like. Press CTRL+P to save as PDF!"
    >
      <div id="addDropBtn">
        <div id="dropBtn" onClick={handlePrint}>
          Download PDF
        </div>
      </div>
      <article
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
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

      <div className="resume-buttons">
        <div className="button" onClick={handlePrint}>
          Download PDF
        </div>
      </div>
    </section>
  );
};

export default Resume;
