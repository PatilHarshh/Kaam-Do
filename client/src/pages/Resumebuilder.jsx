import React, { useState, useEffect } from "react";
import "./Resume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const [isCtrlDown, setIsCtrlDown] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [resumeContent, setResumeContent] = useState({
    personalInfo: {
      name: "Luna Thomas",
      title: "Product Manager | Strategy & Innovation",
      email: "luna.thomas@example.com",
      phone: "555-555-5555",
      location: "San Francisco, California",
      linkedin: "linkedin.com/in/lunathomas",
    },
    summary: "With over 3 years of experience in product management, I have a proven track record of driving product strategy and innovation. My expertise in data integration platforms, user experience, and agile methodologies has been pivotal in delivering successful products.",
    experience: [
      {
        position: "Senior Product Manager",
        company: "ABC Corp",
        years: "2020 - Present",
        location: "San Francisco, California",
        description: [
          "Led product strategy and execution for data integration platforms, resulting in a 25% increase in customer satisfaction.",
          "Collaborated with cross-functional teams to launch new features, enhancing user experience and engagement.",
          "Implemented agile methodologies to streamline product development, reducing time to market by 20%.",
          "Conducted market research and competitive analysis, leading to a 15% growth in market share.",
        ],
      },
      {
        position: "Product Manager",
        company: "XYZ Inc.",
        years: "2018 - 2020",
        location: "San Francisco, California",
        description: [
          "Managed end-to-end product development for a key feature, resulting in a 30% increase in user adoption.",
          "Worked closely with engineering and design teams to deliver a seamless user experience.",
          "Developed and maintained product roadmaps, ensuring alignment with business goals.",
          "Conducted user research and usability testing to inform product decisions.",
        ],
      },
      {
        position: "Associate Product Manager",
        company: "Tech Solutions",
        years: "2016 - 2018",
        location: "San Francisco, California",
        description: [
          "Supported senior product managers in the launch of three new products.",
          "Assisted in the creation of product requirements and specifications.",
          "Coordinated with marketing and sales teams to ensure successful product launches.",
          "Conducted data analysis to identify trends and opportunities for product improvement.",
        ],
      },
    ],
    education: {
      school: "University of California, Berkeley",
      degree1: "Master of Business Administration (MBA)",
      degree1years: "2014 - 2016",
      degree2: "Bachelor of Science in Computer Science",
      degree2years: "2010 - 2014",
    },
    skills: ["Product Management", "Data Integration", "Agile Methodologies", "User Experience"],
    certifications: ["Certified Scrum Master (CSM)", "Certified Product Manager (CPM)"],
    achievements: [
      "Launched Financial Data Platform, leading to a 30% increase in data accuracy.",
      "Improved Customer Satisfaction by 25% through enhanced user experience.",
      "Increased Transaction Volumes by 20% with streamlined processes.",
      "Streamlined Development Process, reducing time to market by 20%.",
    ],
    languages: ["English", "Spanish", "Mandarin"],
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
    const buttons = document.querySelectorAll(".resume-buttons button, .edit-button");
    const instructions = document.querySelector(".instructions");

    buttons.forEach((button) => {
      button.style.display = "none";
    });
    instructions.style.display = "none";

    html2canvas(document.querySelector("article")).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");

      buttons.forEach((button) => {
        button.style.display = "inline-block";
      });
      instructions.style.display = "block";
    });
  };



  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <center>

      <div className="resume-container">
        <article>
          <div className="resume" contentEditable={isEditMode}>
            <button className="edit-button" onClick={toggleEditMode}>
              {isEditMode ? "Save" : "Edit"} 
            </button> 
            <p className="instructions border p-1 border-dashed border-black mt-3 mb-1">
             <span className="text-blue-600 font-semibold">Instructions :</span>  Click on the edit button to modify the resume. Add or remove elements as needed. After making changes, click the save button and then download the resume.
            </p>
            <h1>{resumeContent.personalInfo.name}</h1>
            <h2>{resumeContent.personalInfo.title}</h2>
            <div className="contact-info">
              <p>{resumeContent.personalInfo.email} | {resumeContent.personalInfo.phone} | {resumeContent.personalInfo.location} | {resumeContent.personalInfo.linkedin}</p>
            </div>
            <hr />
            <section>
              <h3>Summary</h3>
              <p>{resumeContent.summary}</p>
            </section>
            <section>
              <h3>Experience</h3>
              {resumeContent.experience.map((exp, index) => (
                <div key={index} className="job">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company} | {exp.years} | {exp.location}</h5>
                  <ul>
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
            <section>
              <h3>Education</h3>
              <div className="school">
                <h4>{resumeContent.education.degree1}</h4>
                <h5>{resumeContent.education.school} | {resumeContent.education.degree1years}</h5>
              </div>
              <div className="school">
                <h4>{resumeContent.education.degree2}</h4>
                <h5>{resumeContent.education.school} | {resumeContent.education.degree2years}</h5>
              </div>
            </section>
            <section>
              <h3>Skills</h3>
              <ul>
                {resumeContent.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Certifications</h3>
              <ul>
                {resumeContent.certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Achievements</h3>
              <ul>
                {resumeContent.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Languages</h3>
              <p>{resumeContent.languages.join(' | ')}</p>
            </section>
            <div className="resume-buttons">
              <button onClick={handlePrint}>Download PDF</button>
            </div>
          </div>
        </article>
      </div>    </center>

  );
};

export default Resume;
