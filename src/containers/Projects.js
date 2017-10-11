import React,{Component} from 'react';
import SingleProject from '../components/Projects/SingleProject';
import './Projects.css';

class Projects extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='projects'>
          <h1>Projects</h1>
          <div className="listProjects">
              <SingleProject title="Ivy-Chatbot"
               url='https://pure-taiga-53916.herokuapp.com'
                image={require('../assets/img.jpg')}
                 height={300} width={500}
                 tags="#ReactJS,#SASS,#NodeJS,#Express,#Api.ai"
                 type='Chatbot' ></SingleProject>
                    <SingleProject title="Zync"
                     url='https://play.google.com/store/apps/details?id=project.kiran.zync&hl=en'
                      image={require('../assets/img3.jpg')}
                       height={300} width={400}
                       tags="#Java,#PHP,#AWS"
                       type='Android App' ></SingleProject>
                       <SingleProject title="Microhabitat"
                        url='http://microhabitat.ca'
                         image={require('../assets/img2.jpg')}
                          height={300} width={300}
                          tags="#HTML5,#CSS3,#Javascript,#Jquery,   #PHP"
                          type='Website' ></SingleProject>
          </div>
          <div className="listProjects">
              <SingleProject title="Space-A chrome experiment"
               url='https://levels8.com/space'
                image={require('../assets/img4.jpg')}
                 height={300} width={400}
                 tags="#WebGL,#Three.js,#Javascript"
                 type='WebGL' ></SingleProject>
                    <SingleProject title="Simple-React-Counter"
                     url='https://npmjs.com/package/simple-react-counter'
                      image={require('../assets/img5.jpg')}
                       height={300} width={300}
                       tags="ReactJS,#Javascript"
                       type='ReactJS Library' ></SingleProject>
                       <SingleProject title="Anoudis"
                        url='https://levels8.com/anoudis/'
                         image={require('../assets/img6.jpg')}
                          height={300} width={500}
                          tags="#HTML5,#CSS3,#Jquery,#Javascript,#PHP"
                          type='Website' ></SingleProject>
          </div>
          <div className="listProjects">
              <SingleProject title="React-text-typer"
               url='https://levels8.com/space'
                image={require('../assets/img7.jpg')}
                 height={300} width={300}
                 tags="#ReactJS,#Javascript"
                 type='ReactJS Library' ></SingleProject>
                 <SingleProject title="Eye.JS- Analytics Library"
                  url='https://github.com/KiranGopalakrishnan/Level-Web-Analytics-Back-End'
                   image={require('../assets/img8.jpg')}
                    height={300} width={650}
                    tags="#Jquery,#Javascript"
                    type='Jquery Library' ></SingleProject>
                    <SingleProject title="Tripbuilder-API"
                     url='https://levels8.com/tripbuilder/public/api'
                      image={require('../assets/img9.jpg')}
                       height={300} width={250}
                       tags="#PHP,#SlimPHP,#Mysql"
                       type='API' ></SingleProject>

          </div>
      </div>
    );
  }
}
export default Projects;
