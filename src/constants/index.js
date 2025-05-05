import {
  angular,
  aws,
  backend,
  creator,
  css,
  express,
  falaya,
  figma,
  framer,
  git,
  gsap,
  haseebImage,
  html,
  javascript,
  moamalat,
  mobile,
  momo,
  mongodb,
  mui,
  mysql,
  nodejs,
  reactjs,
  shaheerImage,
  shujatImage,
  tailwind,
  threejs,
  usamaImage,
  usmanImage,
  vuejs,
  web,
  yalla,
    taleemabad
} from '../assets'

export const navLinks = [


    {
        id: "about", title: "About",

    }, {
        id: "work", title: "Work",
    }, {
        id: "contact", title: "Contact",
    },];

const services = [{
    title: "Full-Stack Developer", icon: web,
}, {
    title: "Frontend Developer", icon: mobile,
}, {
    title: "Backend Developer", icon: backend,
}, {
    title: "Ui UX Designer", icon: creator,
},];

const technologies = [{
    name: "Angular", icon: angular,
}, {
    name: "React JS", icon: reactjs,
}, {
    name: "Vue JS", icon: vuejs,
}, {
    name: "HTML 5", icon: html,
}, {
    name: "CSS 3", icon: css,
}, {
    name: "JavaScript", icon: javascript,
}, {
    name: "gsap", icon: gsap,
}, {
    name: "framer", icon: framer,
}, {
    name: "Three JS", icon: threejs,
}, {
    name: "figma", icon: figma,
}, {
    name: "Tailwind CSS", icon: tailwind,
}, {
    name: "Material Ui", icon: mui,
}, {
    name: "Node JS", icon: nodejs,
}, {
    name: "Express Js", icon: express,
}, {
    name: "AWS", icon: aws,
}, {
    name: "MongoDB", icon: mongodb,
}, {
    name: "MySql", icon: mysql,
}, {
    name: "git", icon: git,
},];

const testimonials = [{
    testimonial: "Danish’s expertise in Angular and MEAN stack development drove our projects to success, showcasing his dedication and innovative solutions.",
    name: "Muhammad Usman",
    designation: "Software Engineer",
    company: "Micro Merger",
    image: usmanImage

}, {
    testimonial: "Danish’s leadership at ASASA transformed our frontend with scalable Angular solutions, boosting efficiency and team morale.",
    name: "Usama Javaid",
    designation: "Software Engineer",
    company: "SNSKIES",
    image: usamaImage
}, {
    testimonial: "At FUNAVRY, Danish’s MEAN stack skills and teamwork elevated our projects, delivering high-quality, efficient applications.",
    name: "Shujaat Ali Malik",
    designation: "Technical Project Manager",
    company: "Funavry Technologies",
    image: shujatImage
}, {
    testimonial: "Danish’s proficiency in Angular and problem-solving made him a key asset, delivering outstanding results at FUNAVRY.",
    name: "Haseeb Ahmad",
    designation: "Technical Lead",
    company: "Funavry Technologies",
    image: haseebImage
}, {
    testimonial: "Danish’s Angular expertise and leadership shine in every project, making him an exceptional developer and team player.",
    name: "Muhammad Shaheer Khan",
    designation: "Software Engineer",
    company: "Asasa Tech",
    image: shaheerImage
},];
const projects = [{
    name: "Falaya",
    description: "I worked on Falaya, a modern real estate platform, where I developed and optimized the front end using Angular and\n" + "TypeScript to enhance user experience and performance. I implemented interactive property search and listing features,\n" + "ensuring a seamless browsing experience for buyers, sellers, and agents. Additionally, I integrated RESTful APIs to\n" + "enable real-time data synchronization, improving property updates and search functionality. To enhance UI/UX, I\n" + "designed responsive layouts and mobile-friendly components, ensuring cross-device compatibility. I also collaborated\n" + "closely with backend developers to streamline data ow, optimize performance, and maintain application scalability.\n",
    tags: [{
        name: "angular", color: "blue-text-gradient",
    }, {
        name: "material-ui", color: "white-text-gradient",
    }, {
        name: "node", color: "pink-text-gradient",
    }, {
        name: "mongodb", color: "green-text-gradient",
    },

    ],
    image: falaya,
    source_code_link: "https://github.com/",
}, {
    name: "MOMO Marketplace",
    description: "MOMO Marketplace is a digital marketplace platform operated by MTN Group, a leading telecommunications company\n" + "serving multiple African and Middle Eastern countries. The platform provides a comprehensive ecosystem for app\n" + "distribution, content delivery, mobile payments, and digital commerce, catering to both consumers and businesses.\n" + "MOMO Marketplace ofers a diverse range of digital products and services, including mobile applications, games,\n" + "music, videos, and other digital content. Additionally, it serves as a central hub for mobile payments and nancial\n" + "services, enabling secure transactions, digital wallet integrations, and seamless e-commerce experiences.\n",
    tags: [{
        name: "angular", color: "blue-text-gradient",
    }, {
        name: "material-ui", color: "green-text-gradient",
    }, {
        name: ".net", color: "pink-text-gradient",
    },],
    image: momo,
    source_code_link: "https://github.com/",
}, {
    name: "Moamalat",
    description: "I developed a custom payment method plugin using React.js for Moamalat, a leading nancial services provider. The\n" + "plugin was designed to enhance the user experience by providing a seamless, intuitive, and ecient payment processing\n" + "system. It streamlined transactions by integrating secure payment gateways, optimizing performance, and ensuring\n" + "compatibility with various nancial systems. Additionally, I focused on UI/UX enhancements, ensuring a smooth and\n" + "responsive interface for end users.\n",
    tags: [{
        name: "react-js", color: "blue-text-gradient",
    }, {
        name: "bootstrap", color: "pink-text-gradient",
    }, {
        name: "npm", color: "white-text-gradient",
    }],
    image: moamalat,
    source_code_link: "https://github.com/",
},
    {
    name: "Yalla Super Mall",
    description: "I worked on Yalla Super Mall, a modern e-commerce platform, where I developed and optimized the frontend using Angular and TypeScript to deliver a fast, responsive shopping experience. I implemented dynamic product listing, real-time cart functionality, and a secure checkout process to enhance user interaction and performance. I integrated RESTful APIs for seamless data handling and used Google Maps to support location-based features like address selection. To ensure accessibility and usability, I built multilingual support with RTL layout for Arabic users and designed mobile-friendly, responsive components. I also collaborated with backend developers to streamline data flow, optimize load times, and ensure the platform's scalability and maintainability.",
    tags: [{
        name: "angular", color: "blue-text-gradient",
    }, {
        name: "google-analytics", color: "pink-text-gradient",
    }, {
        name: ".net", color: "white-text-gradient",
    }],
    image: yalla,
    source_code_link: "https://github.com/",
},
    {
        name: "Taleemabad (Niete)",
        description: "I worked on the Timetable module of NIETE Schools Portal, an educational platform designed to streamline academic operations for schools. Using React for the frontend, I built a responsive and intuitive user interface that allows administrators and teachers to create, view, and manage class timetables efficiently. The backend was developed using Python, with a RESTful API architecture to ensure smooth communication between the frontend and server. I used MongoDB as the database to store structured data such as class schedules, teacher assignments, and subject details. The module includes role-based access control to maintain security and proper data segregation. To enhance the user experience, I implemented real-time updates and mobile-friendly layouts, making the system easily accessible across different devices. This solution significantly reduced manual scheduling efforts and improved operational efficiency for educational institutions.",
        tags: [{
            name: "react-js", color: "blue-text-gradient",
        }, {
            name: "python", color: "pink-text-gradient",
        }, {
            name: "mongodb", color: "white-text-gradient",
        }],
        image: taleemabad,
        source_code_link: "https://github.com/",
    }];

export {services, technologies, testimonials, projects};
