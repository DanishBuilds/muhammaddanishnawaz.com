import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Hardcoding experiences here for simplicity; ideally, keep in constants/index.js
const experiences = [
    {
        title: "Sr. Software Engineer - Team Lead",
        company_name: "PAYSKY",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTphttNsCdlTydT0vpojuDtCO2rVyrXMpe9dg&s", // Placeholder: Replace with actual logo path
        iconBg: "#383E56",
        date: "July 2022 - Present",
        points: [
            "Developed high-performance user interfaces using Angular and JavaScript, ensuring optimal usability, responsiveness, and cross-browser compatibility.",
            "Integrated RESTful APIs seamlessly into frontend components by collaborating with backend developers, enhancing application efficiency.",
            "Implemented scalable and maintainable code following best practices for Angular 2+, TypeScript, and modern JavaScript frameworks.",
            "Designed and executed comprehensive unit tests using Jasmine and Karma, improving code reliability and reducing regression issues.",
        ],
    },
    {
        title: "Senior Frontend Developer",
        company_name: "Taleemabad (Part Time)",
        icon: "https://yt3.googleusercontent.com/7yS-RsoCuDba63VfwSXu5wA5b6OIQk9GItKjUawqpbg4AP3aTKPmHaMhzDm1bvVSWOaiForVGg=s900-c-k-c0x00ffffff-no-rj", // Placeholder: Replace with actual logo path
        iconBg: "#E6DEDD",
        date: "June 2022 - December 2023",
        points: [
            "Developed dynamic and responsive web applications by implementing front-end logic to enhance user interactivity.",
            "Collaborated on project lifecycle from rapid prototyping to final production-ready code, ensuring seamless transitions.",
            "Worked closely with back-end developers to integrate clean and efficient code with APIs for a cohesive application environment.",
        ],
    },
    {
        title: "Sr. Software Engineer",
        company_name: "FUNAVRY TECHNOLOGIES",
        icon: "https://media.licdn.com/dms/image/v2/C4D0BAQHrTB68_8ZrcQ/company-logo_200_200/company-logo_200_200/0/1630573785366/funavry_logo?e=2147483647&v=beta&t=ekyMproAIS5XJEd--yyE6fxcxM1FhGxRjQyWzhZIc2w", // Placeholder: Replace with actual logo path
        iconBg: "#E6DEDD",
        date: "June 2021 - July 2022",
        points: [
            "Developed a custom form-builder for doctors with dynamic drag-and-drop functionality, allowing seamless form creation and customization.",
            "Implemented interactive UI components such as checkboxes, dropdowns, and image uploads, enabling real-time form adjustments and PDF export capabilities.",
            "Optimized the form builder for scalability, responsiveness, and cross-browser compatibility, ensuring a seamless experience on desktop and mobile.",
            "Integrated complex validation mechanisms and dynamic field dependencies, enhancing form accuracy and user experience.",
        ],
    },
    {
        title: "Sr. Software Developer",
        company_name: "ASASA",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkVILiyXmWfYuie4EVky-cc1KAEqmf7Ix4mgX81cvGQeDMyseZ4Ya8cyyqsYKsxN2y8o&usqp=CAU", // Placeholder: Replace with actual logo path
        iconBg: "#383E56",
        date: "February 2019 - June 2021",
        points: [
            "Led the development of a location-based real estate portal, architecting a scalable frontend with Angular 2+ and integrating Node.js and AWS services.",
            "Integrated third-party APIs, geolocation services, and interactive maps, enhancing property search accuracy and user engagement.",
            "Designed and implemented performance-optimized solutions for mobile and web applications, ensuring fast load times and cross-platform compatibility.",
            "Collaborated with cross-functional teams to streamline CI/CD pipelines, automate deployments, and enhance application security on AWS infrastructure.",
        ],
    },
    {
        title: "Jr. Front End Developer",
        company_name: "MICRO MERGER Pvt Ltd",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurXQV1CjguRTrRvI3bUspAkf6COqPi_F3cwpY6z2Ss8aqCAe0yFrQEjYNbzzmeAUq3_I&usqp=CAU", // Placeholder: Replace with actual logo path
        iconBg: "#E6DEDD",
        date: "January 2018 - February 2019",
        points: [
            "Contributed to the development of Propdispatch, a logistics platform for efficient planning, tracking, and execution of deliveries.",
            "Architected and developed a scalable Angular-based dashboard, enabling real-time data visualization and streamlined operations.",
            "Implemented interactive and responsive UI components using Angular 4/5/7/8 and TypeScript, improving front-end performance and user experience.",
        ],
    },
];

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[75%] h-[75%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    What I have done so far
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");