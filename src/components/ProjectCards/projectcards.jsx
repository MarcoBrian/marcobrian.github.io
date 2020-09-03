import React, {useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Carousel from "react-multi-carousel";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";



// import "react-multi-carousel/lib/styles.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import '../../style/sections/_projectcards.scss';

  let t_style = {
    "fontSize":"2rem",
    "padding":"2rem",
    "paddingBottom":"0rem",
    "textAlign":"left"
}

const blogging_page = "https://marcobrian-blog.herokuapp.com";
const project_data = [
    {
        name:"EIT Dashboard",
        desc:"Dashboard for data visualization of EIT (Electrical Impedance Tomography) data, built with Dash, a python based web framework.",
        blog:"/summer-2020-internship/"
    },
    {
        name:"COVID19 TelegramBot",
        desc:"This is a telegram bot that fetches data from the John Hopkins University \
        COVID-19 dataset (JHU CSSE) and present it to you in the form of a chat.",
        github:"https://github.com/MarcoBrian/covid19-telegrambot"
    },
    {
        name:"TwitterBot-KernelKeylogger",
        desc:"A spyware that runs on Linux operating systems, keylogger that works inside \
        the kernel and uses twitter as a covert channel for communication. Built with C and Python.",
        github:"https://github.com/MarcoBrian/TwitterBotKernelKeylogger",
        blog:"/kernelkeylogger/"
    },{
        name: "BackTrack",
        desc:"A sprint management tool for developers and managers built with Django and ReactJS",
        github:"https://github.com/rajatj9/backtrack",
        blog:"/backtrack/"
    },
    {
        name:"Mandelbrot Set",
        desc:"Use of Linux's system call for \
        creating a Multi-processing and Multi-threading application for calculating long running process. (written in C) .",       
        github:"https://github.com/MarcoBrian/MandelbrotSet",
        blog:"/multithreading-multiprocessing/"
    },{
        name:"Game Of Thrones Card Game",
        desc:"This is a big two card game implemented in Java and decorated with a Game Of Thrones theme.",
        github:"https://github.com/MarcoBrian/GOT-CardGame",
        blog:"/big-two/"
    }
];


export default function projectcard() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isShowDots, setIsShowDots] = useState(false);
    const [isShowArrow, setIsShowArrow] = useState(false); 

    useEffect(() => {
        if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
        setIsShowArrow(true);
        setIsShowDots(true);

        } else {
        setIsMobile(true);
        setIsDesktop(false);
        setIsShowArrow(false);
        setIsShowDots(false);
        }
    }, []);

    return (
        <section id="project">

        <Container>
            
            
        <Fade duration={1000} distance="40px">
        <div className="title-left" style={{"marginTop":"20px"}}>
        <FontAwesomeIcon style={{"alignSelf":"flex-start","height":"50px","width":"50px","marginBottom":"10px","marginLeft":"10px"}} icon={['far', 'folder-open']} />
        <h2 className="section-title" style={{"marginBottom":"0rem"}}>projects</h2>
        </div>

        </Fade>

        
        <Fade top duration={500} distance="40px">
            <div className="wrapper-grid">
                {project_data.map((project)=>{
                    return (
                        <Card className="card">
                        {/* <Card.Img variant="top" src="data:image/jpeg;base64,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" /> */}
                        <Card.Body className="card-body">
                            <Card.Title style={t_style}>{project.name}</Card.Title>
                            <Card.Text className="card-p">
                            {project.desc}
                            </Card.Text>
                            <ul className="link-list">
                                { project.github ? <li>
                                    <a className="link-item-icons" target="_blank" href={project.github}>
                                    <FontAwesomeIcon icon={['fab', 'github']} />
                                    </a>
                                    
                                </li> : null }

                                { project.blog ? <li>
                                    
                                    <a className="link-item-icons" target="_blank" href={blogging_page+project.blog}>
                                    <FontAwesomeIcon icon={['far', 'sticky-note']} />
                                    </a>
                                </li> : null }
                            </ul>


                        </Card.Body>
                        </Card> 
                    )
                })} 
            </div>
        </Fade>

            

            

            

            
        
        </Container>
        
        </section>
        
    )
}
