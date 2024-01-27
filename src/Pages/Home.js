import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";
function Home () {
    return ( 
        <div className="home">
      <div className="about">
        <h2> Hi, My Name is ANUJ TIWARI</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://github.com/Anuj0918"><GitHubIcon /></a>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=tiwarianuj0789@gmail.com"><EmailIcon /> </a>
          <a href="https://www.linkedin.com/in/anuj-tiwari-3b148a245/"> <LinkedInIcon/> </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap, MaterialUI , TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MySQL, MongoDB, 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++, </span>
          </li>
        </ol>
      </div>
    </div>
    );
}

export default Home;