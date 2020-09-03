import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Skills from './Skills.jsx';
import EmptySpace from '../Utilities/EmptySpace.jsx';
import ResumeCV from '../../assets/resume.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Slide left duration={2000}>

    <section id="about">

      <Container>
        <Fade left={isDesktop} left={isMobile} duration={1500} delay={500} distance="40px">
        <Title title="about me" positioning="title-left" title_pos="section-title" />
        </Fade>

    <Fade top duration={1000} delay={500}>
      <Row>
        {/* <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={2000} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col> */}
          <Col md={12} sm={12}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                    I am a final year undergraduate at the
                    <a id="hkulink" href="https://en.wikipedia.org/wiki/University_of_Hong_Kong" target="_blank"> 
                     <b> University of Hong Kong</b></a>
                </p>
              </div>
          </Col>
      </Row>

      <Row>
          <Col md={12} sm={12}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphTwo} 
                  <span className="text-color-main" style={{"fontWeight":"400"}}> technology </span>
                  <span> {paragraphThree} </span>
                  <span className="text-color-main" style={{"fontWeight":"400"}}> greater good.</span> 
            
                </p>
              </div>
          </Col>
      </Row>
      <Row>
          <Col md={12} sm={12}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                I love working on projects that will
                <span className="text-color-main" style={{"fontWeight":"400"}} > deliver value </span>and those that are challenging enough to make you
                <span className="text-color-main" style={{"fontWeight":"400"}} > think & learn </span> 
                 while doing it. 
                </p>
              </div>
          </Col>
      </Row>
      </Fade>

      <EmptySpace height="50px"/>

      <Row>
      <Col md={12} sm={12}>

      
      <Fade left={isDesktop} left={isMobile} duration={1500} delay={500} distance="40px">
        <div className="title-right">
        <FontAwesomeIcon style={{"alignSelf":"flex-end","height":"40px","width":"40px","marginBottom":"20px"}} icon={['fas', 'code']} />
        <h2 className="section-title-right">technical skills</h2>
        </div>
        
        </Fade>
      </Col>
      </Row>

      <Skills/>

      <Row>
          <Col md={12} sm={12}>
            <Fade left duration={1500} delay={500}>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {about.paragraphFour}
                  <a id="hkulink" href="https://www.python.org/" target="_blank"> 
                     <b> Python </b></a>
                  <span>
                    {about.paragraphFive}
                  </span>
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={ResumeCV}
                    >
                      My Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
      </Row>
      <EmptySpace height="100px"/>
      </Container>

    </section>
    </Slide>

  );
};

export default About;
