const Work = () => {
    const work = [{
        company: 'Paysky',
        companyHref: 'https://www.paysky.io/',
        title: 'Team Lead',
        time: 'July 2022 - Present',
        lines: [
            'Implemented visually aesthetic user interfaces using JavaScript and Angular framework.',
            'Collaborated with backend developers to integrate components and ensure seamless interaction between frontend and backend systems.',
            'Developed application codes and unit tests in Angular 2+, JavaScript Technologies, and Rest Web Services.',
            'Designed intuitive user interfaces ensuring seamless user experiences with clean and modern UI designs.',
            'Worked closely with backend teams to integrate APIs with frontend interfaces, ensuring efficient communication.',
            'Ensured the application’s architecture was robust by integrating frontend components into the overall system design.',
            'Collaborated with backend teams to ensure optimal performance of the frontend interfaces and smooth functionality.',
            'Skills: Angular · TypeScript · JavaScript · Angular Universal (SSR) · Docker · Angular Material · PrimeNG · RESTful APIs · Azure DevOps · Nginx'
        ]
    }, {
        company: 'Funavry Technologies',
        companyHref: 'https://www.funavry.com/',
        title: 'Senior Software Engineer',
        time: 'July 2021 - July 2022',
        lines: [
            'Developed a custom form-building application for doctors with drag-and-drop functionality.',
            'Integrated UI components such as checkboxes, dropdowns, and images to allow dynamic form creation.',
            'Enabled users to generate forms and export them as PDF files for reporting and documentation purposes.'
        ]
    }, {
        company: 'Asasa real estate company',
        companyHref: '',
        title: 'Software Developer',
        time: 'Feb 2019 - Jul 2021',
        lines: [
            'Led a team in developing a location-based real estate portal as an Angular developer, utilizing Angular 2+, Node.js, Ionic 4+, and AWS.',
            'Participated actively in design decisions and integrated front-end applications with RESTful middle-tier applications.',
            'Ensured high performance for both mobile and web applications, leveraging AWS EC2 instances for efficient application deployment.'
        ]

    }, {
        company: 'MicroMerger',
        companyHref: 'http://www.micromerger.com/',
        title: 'Jr. Front End Developer',
        time: 'Aug 2018 - Feb 2019',
        lines: [
            'Developed the platform Propdispatch, collaborating with designers, backend developers, and project managers to create an efficient logistics platform for planning and execution.',
            'Set up the architecture from scratch, managed and monitored the entire system, and implemented the Dashboard with full user interaction.',
            'Worked with Angular 4/5/7/8, Angular Universal, JavaScript, ES6, and TypeScript to improve and enhance the front-end user experience.'
        ]
    },];

    return (<>
        <h2 data-content="Work">Work</h2>
        <p>
            If you&#x27;re eager to discover more, I invite you to explore my LinkedIn profile {' '}
            <a href="https://www.linkedin.com/in/muhammad-danish-nawaz/" target="blank" rel="_noreferrer">
                Muhammad Danish Nawaz
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
