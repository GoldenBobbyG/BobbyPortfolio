import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section className="resume-section">
            <h2 className="resume-title">Resume</h2>
        
            {/* Download Resume */}
            <div className="resume-download">
                <a href="/Resume.pdf" download>
                    <button className="download-button">Download Resume</button>
                </a>
            </div>

            {/* Resume Content */}
            <div className="resume-content">
                <h3 className="resume-subtitle">Skills</h3>       
                <ul className="skills-list">
                    <li className="skill-item">HTML, JavaScript, TypeScript,</li>
                    <li className="skill-item">Node.js, Express.js</li>
                    <li className="skill-item">PostgreSQL,</li>
                    <li className="skill-item">React, Responsive, Design</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;