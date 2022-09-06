import React from 'react';
import aboutImage from '../../images/AboutMe.JPG'

export default function About() {
  return (
    <div id='about'>
      <h1>About Me</h1>
      <div className='row'>
        <div className="col-sm-4">
          <div className="card" id="aboutme">
            <img src={aboutImage} class="card-img-top" alt="image of Elaine Danahy" />
          </div>
        </div>
        <aside className="col-sm-8">
          <p>
            Hi there! I'm a former speech-language pathologist turned full-stack developer with a passion for making web applications more accessible. I pride myself on having strong interpersonal skills and thrive when collaborating on a team. I recently earned a certificate in full stack development from Northwestern University, with newly developed skills in JavaScript, CSS, Node, Express, MySQL, MongoDB, React,and responsive web design.
          </p>
        </aside>
      </div>
    </div>
  );
}
