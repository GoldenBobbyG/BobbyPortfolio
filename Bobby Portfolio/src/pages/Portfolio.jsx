import React, { useState } from 'react';
import '../styles/Portfolio.css';
import NoDemoModal from '../components/NoDemoModal';

// Import Images
import weathermepleasepic from '../assets/weathermepleasepic.png';
import readmepic from '../assets/readmepic.png';
import myreadspic from '../assets/myreadspic.png';
import vbuilderpic from '../assets/vbuilderpic.png';
import comingsoonpic from '../assets/comingsoonpic.png';
import ninefive from '../assets/ninefive.png';

function Portfolio() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Readme Generator',
            image: readmepic,
            description: "This is a command-line application that dynamically generates a README.md from a user's input.",
            dghlink: "https://github.com//GoldenBobbyG/readme_challenge7",
            demo: "https://drive.google.com/file/d/1e5gygFuNsuimINIeFkcxA9YemWrC2rid/view"
        },
        {
            title: 'MyReads',
            image: myreadspic,
            description: "MyReads is a streamlined website designed to help influencers track, organize, and review the books they read.",
            dghlink: "https://github.com/GoldenBobbyG/MyReads",
            demo: "https://michel-gomes33.github.io/MyReads/index.html"
        },
        {
            title: 'Vehicle Builder',
            image: vbuilderpic,
            description: "This is a vehicle builder application that allows the user to build a vehicle by selecting various options.",
            dghlink: "https://github.com/GoldenBobbyG/ChallengeWK8Vehicle-Builder",
            demo: "https://drive.google.com/file/d/1Df1J7f3etKDXekBtmQHOj_LqqbrEEViA/view"
        },
        {
            title: 'Weather Me Please',
            image: weathermepleasepic,
            description:"This is a weather application that allows the user to search for a city and view the current weather.",
            dghlink: "https://github.com/WeatherMePlease",
            demo: "https://weathermeplease.onrender.com/"
        },
        {
            title: 'Nine to Five Tracker',
            image: ninefive,
            description:"A TypeScript-based command-line interface (CLI) for managing company departments, roles, and employees using Inquirer for user input and a PostgreSQL database for data storage.",
            dghlink: "https://github.com/GoldenBobbyG/ninetofivertracker",
            demo: 'https://github.com'
        },
        {
            title: 'Coming Soon',
            image: comingsoonpic,
            description: "Check back soon for more projects!",
            dghlink: "https://github.com/goldenbobbyg",
            demo: 'Not Available'
        },
    ];

    const handleLiveDemoClick = (project) => {
        if (!project.demo) {
            setSelectedProject(project);
            setIsModalOpen(true);
        } else {
            window.open(project.demo, "_blank");
        }
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio">
                <h2>Robert Projects</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    <a href={project.dghlink} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <button onClick={() => handleLiveDemoClick(project)}>
                                        Live Demo
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NoDemoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                projectTitle={selectedProject}
            />
        </div>
    );
}

export default Portfolio;