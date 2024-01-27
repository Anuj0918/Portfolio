import React from "react";
import "../styles/Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
function Footer() {
    return (
        
        <div className="footer">
               <div className="socialMedia">
        <a href="https://github.com/Anuj0918"><GitHubIcon /></a>
          <InstagramIcon/>
        <a href="https://www.linkedin.com/in/anuj-tiwari-3b148a245/"> <LinkedInIcon/> </a>
        <a href="https://twitter.com/Anuj2208"> <XIcon/> </a>
      </div>
      <p>Copyright © Anuj Tiwari </p>
     </div>
    )
};
export default Footer;