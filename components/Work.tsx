const Work = () => {
    const work = [{
        company: 'Paysky',
        companyHref: 'https://www.paysky.io/',
        title: 'Team Lead',
        time: 'July 2022 - Present',
        lines: ['I am here to implement user interfaces using JavaScript and the Angular framework.', 'Implement the best practices and modern ways of creating interfaces and ensure the interface is able to interact with backend APIs.', 'Regular interaction with fellow backend developers to ensure components can be integrated together.', 'Work with other team members and design and implement visually aesthetic user interfaces.', 'Developing application codes and unit tests in Angular 2+, JavaScript Technologies, and Rest Web Services.', 'Making complex technical and design decisions for Angular 2+ and Reactjs projects.', 'Identify issues with front end code and rectify them to remove bugs and create unit tests to ensure code is functioning as expected.', 'Create well written documentation and ensure front end code is able to query APIs.', 'Skills: Angular · TypeScript · JavaScript · Angular Universal (SSR) · Onsite SEO · Docker Products · Angular Material · PrimeNg · Azure DevOps · Nginx'],
    }, {
        company: 'Funavry Technologies',
        companyHref: 'https://www.funavry.com/',
        title: 'Senior Software Engineer',
        time: 'July 2021 - July 2022',
        lines: ['Template Manager : Application which facilitate doctors to build the customized templates for the evaluation process by using drag and drop functionality including several UI components to build the application.\n' + 'Template manager is a custom form builder used to generate dynamic forms that can be filled out and exported to pdf format. It uses various components like checkboxes, dropdowns, text areas, input boxes and images to create virtually any kind of form as required. It is a standalone system which can be integrated in any software for creation of custom forms which can then be filled out by concerned users and submitted in pdf form.', 'Smart-Le : Application to help nurses to work virtually with VR headset. Worked on the admin panel with run time updates using mqtt.\n' + 'SMART-LE headset based fully immersive VIrtual Reality medical/nursing simulation environment. With a huge attention to detail and high fidelity interactive experience, the user is transported into a very real feeling environment that facilitates learning at the fraction of the cost of traditional simulation methods.'],
    }, {
        company: 'Asasa real estate company',
        companyHref: '',
        title: 'Software Developer',
        time: 'Feb 2019 - Jul 2021',
        lines: ['Part of team in which i am working on location based real Estate portal as an Angular developer. Technical expert in Angular 2+, Nodejs framework, Ionic 4+ framework and Aws. Main responsibilities includes', 'Skilled in Angular, Angular2, TypeScript, CSS, JavaScript, NodeJS, Git, Experience working and integrating front end applications with RESTful Middle-Tier Applications', 'Actively involved in design decisions.', 'Develop User interfaces for Modern Rich Internet Applications with the latest Front End Technologies', 'Strong knowledge of CSS, JavaScript, and web design principles', 'Communicating with external web services.', 'Ensuring High Performance on both Mobile and Web Applications', 'Strong understanding of Aws Ec2 instances for Application deployment.'],

    }, {
        company: 'MicroMerger',
        companyHref: 'http://www.micromerger.com/',
        title: 'Jr. Front End Developer',
        time: 'Aug 2018 - Feb 2019',
        lines: ['Development of the platform Propdispatch (www.propdispatch.com). My responsibilities include working closely with the client to gather the  requirements, collaborating with designers, backend developer, mobile application developer and the project manager to build a platform where logistics companies and carriers control the daily chaos which allows for more efficient planning and execution.  My tasks included: Setting up architecture from scratch Managing/monitoring the complete architecture Setting up the Dashboard with all interactions Working on Angular Universal / front-end I worked in the following areas Angular 4/5/7/8, Angular Universal (Front-end)'],
    },];

    return (<>
            <h2 data-content="Work">Work</h2>
            <p>
                If you&#x27;d like to learn more, please
                take a look at my{' '}
                <a href="https://www.linkedin.com/in/muhammad-danish-nawaz/" target="blank" rel="_noreferrer">
                    LinkedIn
                </a>
                .
            </p>
            {work.map((job) => (<div
                    key={`${job.title}_${job.company}`}
                    className="overflow-hidden bg-gray-100 dark:bg-gray-900"
                >
                    <div className="p-4">
                        <div className="sm:flex sm:items-start sm:justify-between">
                            <h3 className="font-bold">
                                <a
                                    href={job.companyHref}
                                    target="blank"
                                    className="no-underline"
                                >
                                    {job.company}
                                </a>
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {job.time}
                            </p>
                        </div>
                        <div className="text-sm">
                            <p>{job.title}</p>
                        </div>
                    </div>

                    {job.lines && (
                        <details className="bg-gray-200 text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-200">
                            <summary className="group cursor-pointer px-4 py-2">
                                See more
                            </summary>
                            <ul className="ml-5 list-disc px-4 pb-4 pt-1">
                                {job.lines.map((line, i) => (<li key={i}>{line}</li>))}
                            </ul>
                        </details>)}
                </div>))}
        </>);
};

export default Work;
