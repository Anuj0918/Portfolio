import React from "react";
import "../styles/About.css";
function About () {
    return <> 
      <div className="abt">
         <h1> Know Who <span className="bin">I'm</span></h1>
    </div>
    <div className="bio"> 
     <p>Hi Everyone, I am <span className="name" > Anuj Tiwari</span> from Madhya Pradesh, India.
         <br></br>
     I am a 3rd year undergraduate at IPS Academy Indore.</p>
      </div>
       <div className="achieve">
      <h2 className="heading">Some of my competitive programming achievements are: </h2> 
        <h3> 1.Achieved Global Rank 919 in codechef starters </h3>
        <h3> 2.Guardian (Max Rating 1542) in leetcode</h3>
        <h3> 3. 4 star in Problem solving on Hackerrank</h3>
        <h4>  4. Solved 200+ question on GeeksforGeeks</h4>
       </div>
       </>
}

export default About;