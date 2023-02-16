/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import Skills from './Skills.jsx';
import EmptySpace from '../Utilities/EmptySpace.jsx';
import ResumeCV from '../../assets/MarcoCV.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphTwo, paragraphThree, resume } = about;

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
              <Col md={12} sm={12}>
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    I graduated with First Class Honours from the
                    <a
                      id="hkulink"
                      href="https://en.wikipedia.org/wiki/University_of_Hong_Kong"
                      target="_blank"
                    >
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
                    <span className="text-color-main" style={{ "fontWeight": "400" }}> technology </span>
                    <span> {paragraphThree} </span>
                    <span className="text-color-main" style={{ "fontWeight": "400" }}> greater good.</span>

                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12} sm={12}>
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    I have a profound passion for engaging with projects that offer
                    <span className="text-color-main" style={{ "fontWeight": "400" }} > tangible and meaningful results </span>
                    , while also providing sufficient challenges that facilitate personal and professional growth through
                    <span className="text-color-main" style={{ "fontWeight": "400" }} > hands-on experience </span>
                  </p>
                </div>
              </Col>
            </Row>
          </Fade>

          <EmptySpace height="50px" />

          <Row>
            <Col md={12} sm={12}>


              <Fade left={isDesktop} left={isMobile} duration={1500} delay={500} distance="40px">
                <div className="title-right">
                  <FontAwesomeIcon style={{ "alignSelf": "flex-end", "height": "40px", "width": "40px", "marginBottom": "20px" }} icon={['fas', 'code']} />
                  <h2 className="section-title-right">technical skills</h2>
                </div>

              </Fade>
            </Col>
          </Row>

          <Skills />

          <Row>
            <Col md={12} sm={12}>
              <Fade left duration={1500} delay={500}>
                <div className="about-wrapper__info">
                  <p className="about-wrapper__info-text">
                    {about.paragraphFour}
                    <a id="hkulink" href="https://www.python.org/" target="_blank">
                      <b> Python </b>
                    </a>
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
                        href={ResumeCV}>
                        My Resume
                      </a>
                    </span>
                  )}
                </div>
              </Fade>
            </Col>
          </Row>
          <EmptySpace height="100px" />
        </Container>
      </section>
    </Slide>
  );
};

export default About;
