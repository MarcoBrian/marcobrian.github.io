import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, networks } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Marco Brian'}</span> 
            
          </h1>
          <h1 className="hero-title">
            {subtitle || "I'm a "}
            <div class="rw-words rw-words-1">      
                <span> Product Manager </span>
                <span> Software Engineer </span>
                <span> Technologist </span>
                <span> Musician </span>
                <span> ML/AI Enthusiast </span>
		      </div>
          </h1>
          <ul className="nav-list">
          <Link to="about" smooth duration={1000}>
            <li className="nav-item">
              About
            </li>
            </Link>
            <li className="nav-item-dummy">
              /
            </li>
            <Link to="project" smooth duration={2000}>
            <li className="nav-item">
              Projects
            </li>
            </Link>

            <li className="nav-item-dummy">
              /
            </li>
            <a href="https://marcobrian-blog.herokuapp.com" target="_blank">
            <li className="nav-item">
              Blog 
            </li>
            </a>
            
            
          </ul>

          <ul className="nav-list">
          
          <li>
          <a class="nav-item-icons" href="https://www.linkedin.com/in/marco-brian-widjaja-424017159/" target="_blank">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
            
          <li>
              <a class="nav-item-icons" href="https://github.com/MarcoBrian" target="_blank">
              <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            
          <li>
              <a class="nav-item-icons" href="mailto:me.widjaja@gmail.com">
              <FontAwesomeIcon icon={['fas', 'envelope']} />
              </a>
            </li>
          </ul>
          
        </Fade>

      </Container>
    </section>
  );
};

export default Header;
