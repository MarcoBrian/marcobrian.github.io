import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Wave from './Wave.js';

const Title = ({ title, positioning , title_pos }) => (
  <Fade top cascade duration={1000} delay={300} distance="20px">
    <div className={positioning}>
    {/* <Wave positioning={positioning}/> */}
    <h2 className={title_pos}>{title}</h2>
    </div>
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
