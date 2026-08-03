import React from 'react';
import { useMetaTags } from '../../hooks/useMetaTags';

const Projects = () => {
  useMetaTags({
    title: "Fire Safety Projects & Installations | Om Sai Fire Safety",
    description: "Explore fire protection and safety system installation projects executed by Om Sai Fire Safety across industrial, commercial, and residential spaces in India.",
    keywords: "fire safety projects, fire protection installations, fire hydrant setup, fire alarm project, Om Sai Fire Safety projects",
    url: "https://omsaifiresafteysolutions.com/projects",
  });

  return (
    <div>
      Projects Page
    </div>
  );
};

export default Projects;
