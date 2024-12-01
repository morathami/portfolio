import React from 'react';
import '../assets/about.css';
import {Container, Row, Col} from 'react-bootstrap';

const About = () => {
  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
      <Row>
        <Col id="about-story">
          <p>Hi, there! My name is Thami 👋🏻</p>
          <p>My interests in <b>Game Design</b> originally started when I was a child, sketching my
              own "game" and performing "user testing" using Barbie dolls. The first time I got into
              video games was when I was in middle school, playing the Dash games series (I believe in
              Dinner Dash 2 supremacy!!). After that, I somehow mastered every strategy slash
              simulation game 💻</p>
          <p>The most influential game in my life is The Sims 3. I was not only playing, but I also
              joined many The Sims gamer ("Simmer") communities, interacted with them, and started my
              own Tumblr blog. I explored my creative side by learning <b>Photoshop and 3D
                  tools</b> like Blender to design clothing for the game and created a
              <b><a href="https://issuu.com/morathami" rel="noreferrer noopener" target="_blank"> digital
                  magazine. </a></b>
              I even made a movie ("machinima") out of the game! Well, I got too embarrassed later in
              high school and hid the video from my YouTube channel 😂</p>
          <p>Wanting to deepen my skill, I enrolled as a computer science major at uni. Thankfully, I
              was accepted into one of the best public universities (if not the best!) in the country
              for technology. Unfortunately, games development is not a popular subject in Indonesia,
              my uni included. There is only one course related to that, and research labs are more
              focused on AI and data science. For this reason, I am <b>hoping to get into a
                  postgraduate degree</b> in the future to learn more 😇🤲</p>
        </Col>
      </Row>
      <Row style={{marginTop:"100px"}}>
        <Col>
        <Container className="px-0">
          <Row>
            <Col className="about-lst">
              <h1>education</h1>
              <h2>Bachelor of Computer Science</h2>
              <p>University of Indonesia</p>
              <p>2018 - 2022</p>
            </Col>
          </Row>
          <Row style={{marginTop:"90px"}}>
          <Col className="about-lst">
              <h1>work experience</h1>
              <h2>Teaching Assistant Coordinator</h2>
              <p>University of Indonesia</p>
              <p>Aug 2022 - Feb 2023</p>

              <h2 style={{marginTop:"30px"}}>Frontend Engineer Intern</h2>
              <p>Core Initiative Studio, ID</p>
              <p>Jul 2021 - Nov 2021</p>
            </Col>
          </Row>
        </Container>
        </Col>
        <Col>
        <Container>
          <Row>
            <Col className="about-lst">
              <h1>skills</h1>
              <h2>Coding</h2>
              <p>Javascript (React & Vue.js)</p>
              <p>Python</p>
              <p>Java</p>
              <p>Godot</p>

              <h2 style={{marginTop:"30px"}}>Design</h2>
              <p>Adobe Photoshop</p>
              <p>Affinity Photo</p>
              <p>Figma</p>
              <p>Design Thinking, UCD</p>
              <p>Wireframing, Prototyping</p>
              <p>Game Design, Web Design</p>
              <p>UX Research</p>
            </Col>
          </Row>
        </Container>
        </Col>
      </Row>
    </Container>
    )
  };
  
  export default About;