const Projects = () => {
    const projects = [{
        name: 'Momo Market',
        href: 'https://momomarket.africa/',
        description: ' MOMO Marketplace is a digital marketplace platform associated with MTN Group, a telecommunications company operating in various African and Middle Eastern countries. MOMO Marketplace provide a platform for various services, including app distribution, content delivery, mobile payments, and more, catering to both consumers and businesses in the regions where MTN operates. These marketplaces often offer a wide range of digital products and services, including mobile apps, games, music, videos, and various digital content. They can also serve as a hub for mobile payments and financial services, facilitating transactions and digital commerce',
    }, {
        name: 'Yalla Super Mall',
        href: 'https://yallasupermall.com/',
        description: 'Yalla Super Mall is an online shop that allows consumers to browse and select goods for purchase to be delivered at a location of their choice. Customers can choose to pay either with  their bank issued credit or debit cards. We will continue to add more products to Yalla Super Mall for your selection on a daily basis.',
    }, {
        name: 'reactjs-moamalat',
        href: 'https://www.npmjs.com/package/reactjs-moamalat',
        description: ' Developed a custom payment method plugin using React.js for Moamalat, a leading financial services provider. The plugin was designed to enhance the user experience and streamline payment processing.',
    }, {
        name: 'Ovada',
        href: 'https://www.ovada.com/',
        description: " Ovada is an American software and services company headquartered in Mineola, New York, USA. The company designs & develop cloud-based electronic health record (EHR) software and offers complete patient & practice management solutions for doctors, practice managers, billers, billing companies, and new practices along with a complete end to a solution for DME companies with live tracking & updates.",
    }, {
        name: 'PropDispatch',
        href: 'https://www.propdispatch.com/',
        description: ' The PropDispatch proppant management and logistics platform provides real-time visibility, automation and data acquisition. The web-based and mobile-app software increases operational efficiencies in many ways.',
    }, {
        name: 'Taleemabad',
        href: 'https://taleemabad.com/',
        description: 'Taleemabad is an EdTech company that provides world class education! Our services ensure that every stakeholder (School owner, Principal, Teachers, Students) is better equipped to enable effective, lifelong education.',
    },


    ];

    return (<>
        <h2 data-content="Projects">Projects</h2>
        <p>
            I&apos;ve had the pleasure of diving into a diverse pool of projects: from technical challenges to community-driven initiatives, and even some just for the sheer joy of it. Allow me to share a glimpse of my standout favorites.
        </p>
        <div className="grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-2">
            {projects.map((project) => (<a
                href={project.href}
                key={project.href}
                className="bg-gray-100 p-4 no-underline transition hover:scale-105 dark:bg-gray-900"
                target="blank"
            >
                <h3 className="mb-1 font-bold">{project.name}</h3>
                <p className="text-sm dark:text-gray-400">{project.description}</p>
            </a>))}
        </div>
        {/*
        <Link 
          href={'/'}
          className="p-3 text-sm grid place-content-center no-underline hover:scale-105 transition col-span-1 sm:col-span-2"
        >
          <h3 className="">More Projects &rarr;</h3>
        </Link> 
        */}
    </>);
};

export default Projects;
