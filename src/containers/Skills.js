import React,{Component} from 'react';
import Skillset from '../components/Skills/Skillset';
import './Skills.css';

class Skills extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='skills'>
        <h1>My Skills</h1>
        <div className="skill-container">
          <Skillset>
            <li>#ReactJS</li>
              <li>#Javascript</li>
                <li>#NodeJS</li>
                  <li>#Express</li>
                  <li>#ES6</li>
                    <li>#Java</li>
                    <li>#PHP</li>
                    <li>#Mysql</li>
                    <li>#GraphQL</li>
                    <li>#HTML5</li>
                    <li>#CSS3</li>
                    <li>#SASS</li>
                    <li>#LESS</li>
                    <li>#Webpack</li>
                    <li>#Grunt</li>
                    <li>#OpenCV</li>
                    <li>#Tensorflow</li>
                    <li>#MaterialDesign</li>
                    <li>#Rust</li>
                    <li>#Scala</li>
                    <li>#Docker</li>
                    <li>#Firebase</li>
          </Skillset>
          <div className="social_links">
            <div className="github" onClick={()=>{window.open("https://github.com/KiranGopalakrishnan","_blank");}}>Visit My Github</div>
              <div className="github" onClick={()=>{window.open("https://levels8.com/resume.pdf","_blank");}}>Download my resume</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Skills;
