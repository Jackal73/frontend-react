import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './About.scss';

const abouts = [
  { title: 'Frontend Development', 
  description: 'I have experience in building frontend applications using the latest technologies.', imgUrl: images.about02},

  { title: 'Backend Development', 
  description: 'I have experience in the latest backend technologies.', 
  imgUrl: images.about01},

  { title: 'Web Design', 
  description: 'I have experience in designing award winning websites.', 
  imgUrl: images.about03},

  { title: 'UI/UX', 
  description: 'I have experience in the latest modern UI/UX design.', 
  imgUrl: images.about04},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know 
        <span> Great Development</span> 
        <br />
        means  
        <span> Great Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
