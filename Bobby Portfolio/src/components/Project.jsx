import React, { useState } from 'react';
import NoDemodal from './NoDemodal';

function Project({title, image, dghlink, repoLink}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDemoClick = () => {
        if (!dghlink) {
            e.preventDefault();
            setIsModalOpen(true);
        }
};

    return (
        <div className="project">
            <img src={image} alt={`${title} screenshot`} />
            <h3>{title}</h3>
            <p>
                <a href={dghlink} target="_blank" rel="noopener noreferrer" onClick={handleDemoClick}>Live Demo</a>
                {" | "}
                <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </p>
            {!dghlink && (
                <button onClick={() => setIsModalOpen(true)}>View Deployed App</button>
            )}
            <NoDemodal isOpen={isModalOpen} pmC pse={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Project;