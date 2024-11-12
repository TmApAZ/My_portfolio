import React from 'react'
import { Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const Services = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-blue-500 to-green-500 p-[1px] rounded-[20px] shadow-card">
          <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3
             className="text-white text-[20px] font-bold text-center"
            >{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Interduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'>
        With a background in multiple programming languages and frameworks, I specialize in developing web systems and platforms that bridge functionality with design. I have hands-on experience with technologies such as Python, Java, C#, and Angular. My projects reflect a commitment to delivering reliable and innovative solutions, with highlights including 'Vedha8' – a marketplace with 64 projects I built across various languages, 'Bus Port' – a virtual transit hub, and 'Science with Asela' – a learning management system enriched with AI for a science class. I also bring experience from two industry-leading companies, CEEE Technologies and Kavithi, alongside running my own business, Vedha8.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Services key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")