import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        style={{textAlign : "justify"}}
      >
       I'm Sachin Jaiswal, currently pursuing my B.Tech at ABES Engineering College. I'm passionate about technology and have a particular interest in Technical Field. 

I have experience and expertise in several programming languages, including Python, C/C++, and HTML/CSS. Additionally, I'm familiar with various tools like Power BI, Git, GitHub, and MATLAB.
My skills extend to operating systems like Mac OS and Windows, as well as data analysis tools and platforms. Besides my academic pursuits, I enjoy traveling and exploring new things in my free time.
I've completed multiple certifications and gained practical experience through internships. I have also done Full Stack Developer Internship at Bharat Intern.

<br/><br/>As a fresher, I am eager to 
       apply my skills and contribute to a dynamic and challenging environment. I am seeking opportunities where I can 
       leverage my expertise in data analysis, machine learning, statistical understanding, and web development to drive 
       data-informed decision-making and deliver valuable insights.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
