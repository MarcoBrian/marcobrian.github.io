import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Hey look who got this far! Would you like to work together?' }
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href='https://www.linkedin.com/in/marco-brian-widjaja-424017159/'
            >
              {"Let's Connect!"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
