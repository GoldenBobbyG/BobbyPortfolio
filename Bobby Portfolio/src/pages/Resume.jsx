import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    return (
        <section className="resume-section">
            <h2>Resume</h2>
        
        {/* Download Resume */}
        <div className="resume-download">
        <a href="/Resume.pdf" download>
            <button>Download Resume</button>
        </a>
        </div>

        {/* Resume Content */}
        <div className="resume-content">
        <h3>Skills</h3>       
        <ul>
            <li>HTML, JavaScript, TypeScript,</li>
            <li>Node.js, Express.js</li>
            <li>PostgreSQL,</li>
            <li>React, Responsive, Design</li>
        </ul>
        </div>
        </section>

    );
}

export default Resume;