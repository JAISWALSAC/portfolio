import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    titanic,
    wine,
    house,
    bharat,
    spotify
} from "../assets";



export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Machine Learning",
        icon: web,
    },
    {
        title: "SQL",
        icon: mobile,
    },
    {
        title: "Microsoft_PowerBI & Microsoft_Excel",
        icon: backend,
    },
    {
        title: "Python",
        icon: creator,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [

    {
        title: "Data Analytics Consulting Virtual Internship",
        company_name: "KPMG",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "June 2023 - June 2023",
        certificate: "https://drive.google.com/file/d/1yO4nQ9e0IPlD4G2QUYMVwtPfTiqjpPld/view?usp=drivesdk",
        points: [
            "Gained experience in analyzing datasets and identifying data quality issues.",
            "Developed skills in extracting valuable insights from real-world datasets.",
            "Acquired proficiency in creating interactive dashboards and visualizations using Power BI.",
            "Learned to leverage data analytics for evaluating performance, tracking progress, and making data-driven decisions to improve business outcomes.",
        ],
    },
    {
        title: "PowerBI Virtual Case Experience",
        company_name: "Pwc",
        icon: starbucks,
        iconBg: "#383E56",
        date: "June 2023 - June 2023",
        certificate: "https://drive.google.com/file/d/1ofol39eRQVrCoks4mx8Dcz7Rvnvk1V-C/view?usp=drivesdk",
        points: [
            "Gained Practical skills in data analytics, business intelligence, and data visualization using Power BI.",
            "Developed Industry experience and understanding of real-life challenges in data analytics.",
            "Increased confidence in abilities and proficiency in generating meaningful insights.",
            "Improved communication and client interaction skills in the context of data analytics.",
        ],
    },
    {
        title: "Full Stack Developer Intern",
        company_name: "Bharat Intern",
        icon: bharat,
        iconBg: "#E6DEDD",
        date: "Aug 2023 - Sep 2023",
        certificate: "https://drive.google.com/file/d/1zs5KgzzfZFdWto9ZaEL8x6-b-vK1dSy3/view?usp=sharing",
        points: [
            "I have been assigned with Projects on Full stack  and completed two of the Project 'Content Managment Toll' and 'Video Confrencing Website ",
        ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
];

const testimonials = [{
        testimonial: "TCS Ion Career Edge",
        name: "TCS",
        designation: "Onur Battaci",
        company: "",
        image: "https://drive.google.com/file/d/1TMR7IwOLh0GzYhiF3_SGvz6DMGnebGrQ/view?usp=drivesdk",
    },
    {
        testimonial: "Flipkart Grid 4.0‐Informaton Security",
        name: "Flipkart",
        designation: "Web Oral,",
        company: "Martin Luther Baidya",
        image: "https://drive.google.com/file/d/1fQzYjiK1veDkBzrA0_eoazvip5B_Ux5e/view?usp=drivesdk",
    },
    {
        testimonial: "Challenge Introducton to Cybersecurity",
        name: "Cisco",
        designation: "",
        company: "",
        image: "https://drive.google.com/file/d/1NWmXGSURhdSfYkmpo4N7o9c6gqBR9AGn/view?usp=drive_link",
    },
    {
        testimonial: "Programming for Everybody",
        name: "Coursera",
        designation: "Pruthviraja L",
        company: "",
        image: "https://drive.google.com/file/d/1DaqIu5bS3nQYPH6vXt6zBAsbKtNHua-S/view?usp=drivesdk",
    },
    {
        testimonial: "Microsoft Power BI Desktop and DAX plus Dashboard creation",
        designation: "Ismaila Mumin Omeiza ",
        company: "",
        image: "https://drive.google.com/file/d/1xBKy4fuYvPIeRgLJ06nbSUnwKP_ALDAn/view?usp=sharing",
    },

];

const projects = [{
        name: "Car Dekho SQL Project",
        description: "I conducted a SQL project using the CarDekho website’s database, extracting insights about car models, user preferences, and market trends ",
        tags: [{
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Data Visualization",
                color: "green-text-gradient",
            },
            {
                name: "Ensemble_Technique",
                color: "pink-text-gradient",
            },
            {
                name: "sklearn",
                color: "blue-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/JAISWALSAC/Car-dekho-sql-project",
    },
    {
        name: "Movie Recommendation System",
        description: "Machine Learning Algorithm that ﬁlters all the videos or movies based on our preferences and our watch history and provides recommendations to the users.",
        tags: [{
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Tfidf_Vectorizer",
                color: "green-text-gradient",
            },
            {
                name: "cosine_similarity",
                color: "pink-text-gradient",
            },
            {
                name: "sklearn",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/JAISWALSAC/Movie-recomendation-project",
    },
    {
        name: "Social Media Database",
        description: "Project establishes a database structure for a social media platform, managing user data, interactions, and activities efficiently",
        tags: [{
                name: "Machine Learning",
                color: "blue-text-gradient",
            },
            {
                name: "Tfidf_Vectorizer",
                color: "green-text-gradient",
            },
            {
                name: "cosine_similarity",
                color: "pink-text-gradient",
            },
            {
                name: "sklearn",
                color: "blue-text-gradient",
            },
        ],
        image: titanic,
        source_code_link: "https://github.com/JAISWALSAC/social-media-database-project",
    },
    {
        name: "Video Conferencing Website",
        description: "In this project i created a video confrencin website using mern",
        tags: [{
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JAVA SCRIPT",
                color: "pink-text-gradient",
            },
            {
                name: "REACT",
                color: "blue-text-gradient",
            },
        ],
        image: wine,
        source_code_link: "https://github.com/JAISWALSAC/video-conferencing",
    },
    {
        name: "Content Management Too",
        description: "I utilized the Linear Regression model for prediction, incorporating concepts such as PipelOur full-stack content management tool provides a user-friendly interface for creating, editing, and organizing content.",
        tags: [{
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JAVA SCRIPT",
                color: "pink-text-gradient",
            },
            {
                name: "REACT",
                color: "blue-text-gradient",
            },
        ],
        image: house,
        source_code_link: "https://github.com/JAISWALSAC/Mern-Blog-App",
    },
    {
        name: "Spotify Clone",
        description: "To recommend movies based on content given by users",
        tags: [{
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "JAVA SCRIPT",
                color: "pink-text-gradient",
            },
            
        ],
        image: spotify,
        source_code_link: "https://github.com/JAISWALSAC/SPOTIFY-CLONE",
    },
];

export { services, technologies, experiences, testimonials, projects };