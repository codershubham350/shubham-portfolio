import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "React.js", ratingPercentage: 50 },
    { skill: "Redux", ratingPercentage: 40 },
    { skill: "Express.js", ratingPercentage: 20 },
    { skill: "Node.js", ratingPercentage: 20 },
    { skill: "MongoDB", ratingPercentage: 20 },
    { skill: "Agility CMS", ratingPercentage: 70 },
    { skill: "Tailwind CSS", ratingPercentage: 40 },
  ];

  const projectsDetails = [
    {
      title: "Sunstone Eduversity",
      duration: { fromDate: "2021", toDate: "Present" },
      description: `Sunstone is India’s first higher education provider to implement
    revolutionary fee payment options like the Pay After Placement and
    Money-back Guarantee fee structures which ensure a hassle-free
    experience for students`,

      subHeading:
        "Tools/Technologies: Agility CMS, React,Next.js, Github,Tailwind CSS",
    },
    {
      title: "Doccure",
      duration: { fromDate: "2021", toDate: "Present" },
      description: `Doccure is an application for patients looking for online doctors
      for their treatment. `,
      subHeading: "Tools/Technologies: React, Redux, Redux-Thunk, Github",
    },
    {
      title: "Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description: `Portfolio website designed, developed to showcase my personal details and projects at one place`,
      subHeading: "Tools/Technologies: HTML, CSS, React, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading="Future Institute of Technology, UPTU"
        subHeading="Post Graduate Diploma in Management"
        fromDate="2018"
        toDate="2020"
      />
      <ResumeHeading
        heading="Dev Bhoomi Institute of Technology, UTU"
        subHeading="Bachelor of Science in Computer Science"
        fromDate="2013"
        toDate="2017"
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading="Technogetic Pvt. Ltd."
          subHeading="Junior MERN Developer"
          fromDate="2021"
          toDate="Present"
        />
        <div className="experience-description">
          <span className="resume-description-text">
            1) Currently working as Jr. MERN developer
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            2) Developed the Redux flow for the Doccure project to make user
            Login to their account.
          </span>
          <br />
          <span className="resume-description-text">
            3) Developed the axiosInstance for the Doccure project for
            registration,logging user.
          </span>
          <br />
          <span className="resume-description-text">
            4) Designed,Developed few components along with the page for the
            Sunstone University using Tailwind CSS.
          </span>
          <br />
          <span className="resume-description-text">
            5) Developed and linked the page of Sunstone University using
            Agility CMS and made the contents dynamic.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Gaming"
        description="Like to play online multi-player games along with friends and colleagues."
      />
      <ResumeHeading
        heading="Music"
        description="In my free time like to listen some soothing music to calm my mind."
      />
      <ResumeHeading
        heading="Reading"
        description="Like to read articles, facts or to listen audiobooks."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  // useEffect(() => {
  //   return () => {
  //     /* UNSUBSCRIBE THE SUBSCRIPTIONS */
  //     fadeInSubscription.unsubscribe();
  //   };
  // }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
