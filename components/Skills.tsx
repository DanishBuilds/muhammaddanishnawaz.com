import React from 'react';

const Skills = () => {
    const Skills = [{
        name: 'Frontend Technologies',
        description: 'Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, LESS\n' + 'Frameworks & Libraries: Angular 2+, React.js, Angular Material, Bootstrap, PrimeNG, Ant Design (NG-Zorro)\n' + 'Frontend Architecture: SPA (Single Page Applications), PWA (Progressive Web Apps), SSR (Server-Side Rendering)\n' + 'State Management: NgRx, Redux, RxJS\n' + 'UI/UX Design: Responsive Design, Material Design, User-Centered Design\n' + 'Version Control: Git, GitHub, GitLab',
    }, {
        name: 'Backend Integration & APIs',

        description: 'RESTful APIs: Integration and consumption of REST services\n' + 'Authentication and Authorization: OAuth2, JWT, session-based authentication\n' + 'Backend Collaboration: Close coordination with backend developers for seamless integration\n' + 'Data Management: Handling API data using HTTPClient, error handling, and data services',
    }, {
        name: 'Tools & Platforms',

        description: 'DevOps & Deployment: Docker, Jenkins, Azure, AWS (S3, EC2, Lambda)\n' + 'Build Tools: Webpack, Gulp, NPM\n' + 'Testing: Jasmine, Karma, Protractor, Cypress (for E2E Testing)\n' + 'CI/CD: Jenkins, Azure DevOps, GitLab CI',
    }, {
        name: 'Other Tools',

        description: "Project Management: Jira, Trello, Confluence, Asana\n" + "Design & Prototyping: Figma, Adobe XD, Sketch\n" + "Code Quality & Security: SonarQube, OWASP-ZAP",
    }
    ];

    return (<>
        <h2 data-content="Skills">Skills</h2>
        <div className="grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-2">
            {Skills.map((project, projectIndex) => (
                <a
                    key={projectIndex} // Add key to the a tag
                    className="bg-gray-100 p-4 no-underline transition hover:scale-105 dark:bg-gray-900"
                    target="_blank"
                >
                    <h3 className="mb-1 font-bold">{project.name}</h3>
                    <p className="text-sm dark:text-gray-400">
                        {project.description.split('\n').map((line, lineIndex) => {
                            // Define the categories and their keywords
                            const categories = {
                                'Languages:': 'Languages:',
                                'Frameworks & Libraries:': 'Frameworks & Libraries:',
                                'Frontend Architecture:': 'Frontend Architecture:',
                                'State Management:': 'State Management:',
                                'UI/UX Design:': 'UI/UX Design:',
                                'Version Control:': 'Version Control:',
                                'RESTful APIs:': 'RESTful APIs:',
                                'Authentication and Authorization:': 'Authentication and Authorization:',
                                'Backend Collaboration:': 'Backend Collaboration:',
                                'Data Management:': 'Data Management:',
                                'DevOps & Deployment:': 'DevOps & Deployment:',
                                'Build Tools:': 'Build Tools:',
                                'Testing:': 'Testing:',
                                'CI/CD:': 'CI/CD:',
                                'Project Management:': 'Project Management:',
                                'Design & Prototyping:': 'Design & Prototyping:',
                                'Code Quality & Security:': 'Code Quality & Security:',
                            };

                            // Check if the line starts with one of the keywords you want to bold
                            for (const [key, value] of Object.entries(categories)) {
                                if (line.startsWith(value)) {
                                    return (
                                        <React.Fragment key={lineIndex}>
                                            <strong>{value}</strong> {line.split(':')[1]}
                                            <br/>
                                        </React.Fragment>
                                    );
                                }
                            }

                            // Return normal lines
                            return (
                                <React.Fragment key={lineIndex}>
                                    {line}
                                    <br/>
                                </React.Fragment>
                            );
                        })}
                    </p>
                </a>
            ))}
        </div>

        {/*
        <Link 
          href={'/'}
          className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
        >
          <h3 className="">More Skills &rarr;</h3>
        </Link> 
        */}
    </>);
};

export default Skills;
