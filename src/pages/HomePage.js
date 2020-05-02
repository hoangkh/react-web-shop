import React from 'react';

function Home() {
    const projectsName= ['Shop', 'Media', 'Calculator', 'Social Media', 'API', 'Blog']
    return <div id="home-page">
    <div className="grid-container">
        {projectsName.map((project, index) => ( 
        <div key={index} className="project-name grid-item">{project}</div>        
        ))}                           
  </div>
  </div>;
}
  
export default Home;