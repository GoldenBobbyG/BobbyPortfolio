import React from "react";
import "../styles/AboutMe.css";
import mainphoto from "../assets/oneilike.jpg";
//add profile image//

function AboutMe() {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <div>
                <img src={mainphoto} alt="Robert Strickland" class="img-thumbnail img-circle img-responsive" />
            </div>
            <p>I'm Robert Strickland (Robb), a full-stack development student who attended the University of Minnesota's Software Development Full-Stack Certificate Program. 
               I discovered coding in 1998 when a friend of my father came and, which I didn't know at the time, coded to set up, test, and install some hardware for my first computer. 
               Ever since that day, coding was me.
            </p>

            <p>This curiosity led me to explore various programming languages and technologies, allowing me to develop solutions that bridge the gap between logistics and technology. Over the years, 
               I’ve honed my skills through hands-on experience, formal training, and continuous learning, with a strong focus on building efficient, scalable applications.
            </p>

            <p>In my GitHub repositories, you'll find a diverse collection of projects that reflect my journey in coding and problem-solving. MyReads is a dynamic book-tracking application that enhances user experience by managing and categorizing reading lists. Challenge-WK8Vehicle-Builder showcases an interactive vehicle customization tool, 
               demonstrating my ability to build user-friendly and functional applications. NineToFiveTracker is a time-tracking tool designed to improve productivity and efficiency. 
               Each repository highlights my commitment to continuous learning and my passion for developing impactful software solutions.
            </p>
        </div>
    );
}

export default AboutMe;