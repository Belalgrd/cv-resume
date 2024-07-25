import React, { useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiChakraui, SiMongodb, SiBootstrap, SiExpress, SiLeetcode, SiHackerrank, SiOpenai } from 'react-icons/si';
import { MdOutlineDesignServices } from 'react-icons/md';
import { useReactToPrint } from 'react-to-print';
import './App.css';

const img = 'img/profile.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background: #f4f4f9;
    color: #333;
  }

  @media print {
    body {
      background: #fff;
    }

    #print-button {
      display: none;
    }
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ddd;

  @media (min-width: 600px) {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5em;
  color: #007BFF;
`;

const Subtitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #666;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.a`
  margin: 0 10px;
  font-size: 1.5em;
  color: #007BFF;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #007BFF;
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.span`
  margin-right: 10px;
  font-size: 1.5em;
  color: #007BFF;
`;

const SkillInfo = styled.div`
  font-size: 1.1em;
  color: #333;
`;

const EducationItem = styled.div`
  margin-bottom: 10px;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
`;

const PrintButton = styled.button`
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const App = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <GlobalStyle />
      <PrintButton id="print-button" onClick={handlePrint}>Print Resume</PrintButton>
      <Container ref={componentRef}>
        <Header>
          <ProfileImage src={img} alt="profilepic" />
          <div>
            <Title>Md. Belal Ansari</Title>
            <Subtitle>Full Stack Developer</Subtitle>
            <SocialMediaLinks>
              <SocialIcon href="https://linkedin.com/in/belal-ansari-grd" target="_blank"><FaLinkedin /></SocialIcon>
              <SocialIcon href="https://github.com/Belalgrd" target="_blank"><FaGithub /></SocialIcon>
              <SocialIcon href="https://x.com/iqbal_aadil_grd" target="_blank"><FaTwitter /></SocialIcon>
              <SocialIcon href="https://leetcode.com/aadilgrd" target="_blank"><SiLeetcode /></SocialIcon>
              <SocialIcon href="https://www.hackerrank.com/profile/iqubalk999" target="_blank"><SiHackerrank /></SocialIcon>
            </SocialMediaLinks>
          </div>
        </Header>
        <Section>
          <SectionTitle>Personal Details</SectionTitle>
          <p>
            <strong>Email:</strong> Iqubalk999@gmail.com<br />
            <strong>Phone:</strong> +91 8541032213<br />
            <strong>Address:</strong> Near Masjid Boro Giridih.
          </p>
        </Section>
        <Section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsList>
            <SkillItem>
              <SkillIcon><FaHtml5 /></SkillIcon>
              <SkillInfo>
                <strong>HTML5:</strong> Proficient in creating structured and semantic markup.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaCss3Alt /></SkillIcon>
              <SkillInfo>
                <strong>CSS:</strong> Skilled in styling with CSS.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaJsSquare /></SkillIcon>
              <SkillInfo>
                <strong>JavaScript:</strong> Experienced in writing modern JavaScript (ES6+).
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaReact /></SkillIcon>
              <SkillInfo>
                <strong>React:</strong> Proficient in building SPAs with React and related libraries.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaNodeJs /></SkillIcon>
              <SkillInfo>
                <strong>NodeJs:</strong> Proficient in using Node.js for server-side development.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaJava /></SkillIcon>
              <SkillInfo>
                <strong>Java:</strong> A strong foundation in Java Programming.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><FaGithub /></SkillIcon>
              <SkillInfo>
                <strong>GitHub:</strong> Experienced in using GitHub for version control and collaboration.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiOpenai /></SkillIcon>
              <SkillInfo>
                <strong>ChatGPT:</strong> Familiar with using ChatGPT for natural language processing tasks.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiChakraui /></SkillIcon>
              <SkillInfo>
                <strong>Chakra UI:</strong> Proficient in using Chakra UI for building accessible React applications.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><MdOutlineDesignServices /></SkillIcon>
              <SkillInfo>
                <strong>Material UI:</strong> Experienced in building user interfaces with Material UI.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiBootstrap /></SkillIcon>
              <SkillInfo>
                <strong>Bootstrap:</strong> Proficient in using Bootstrap for responsive web design.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiExpress /></SkillIcon>
              <SkillInfo>
                <strong>ExpressJs:</strong> Experienced in building server-side applications with Express.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiMongodb /></SkillIcon>
              <SkillInfo>
                <strong>MongoDB:</strong> Skilled in using MongoDB for database management.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiLeetcode /></SkillIcon>
              <SkillInfo>
                <strong>LeetCode:</strong> Problem solver on LeetCode.
              </SkillInfo>
            </SkillItem>
            <SkillItem>
              <SkillIcon><SiHackerrank /></SkillIcon>
              <SkillInfo>
                <strong>HackerRank:</strong> Regular participant in coding challenges on HackerRank.
              </SkillInfo>
            </SkillItem>
          </SkillsList>
        </Section>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <p>
          Hi everyone, I'm Belal, Currently I am in the fourth Year of BTech Student. My Branch is Computer Science & Engineering. I've developed a strong interest in full-stack development and have hands-on experience with Java Programming Language, HTML, CSS, JavaScript, and React for the front-end. On the back-end, I've worked with Node.js and Express.js. I'm eager to contribute my skills to a dynamic team and build exceptional web applications.
          </p>
        </Section>
        <Section>
          <SectionTitle>Experience</SectionTitle>
          <p>
            <strong>Project Title:</strong> E-Library
            <br />
            Led a team of 4 to design and develop a full-stack e-library platform using React.
          </p>
        </Section>
        <Section>
          <SectionTitle>Education</SectionTitle>
          <EducationItem>
            <strong>BUDGE BUDGE INSTITUTE OF TECHNOLOGY</strong>
            <br />
            Bachelor's Degree in Computer Science & Engineering (2021 - 2025)
          </EducationItem>
          <EducationItem>
            <strong>BNS DAV PUBLIC SCHOOL SIRSIA GIRIDIH</strong>
            <br />
            Senior School Certificate Examination (2018 - 2020)
          </EducationItem>
          <EducationItem>
            <strong>SUBHASH PUBLIC SCHOOL KOLDIHA GIRIDIH</strong>
            <br />
            Secondary School Examination (2017 - 2018)
          </EducationItem>
        </Section>
      </Container>
    </>
  );
};

export default App;
