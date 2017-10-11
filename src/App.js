import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './containers/Home';
import Projects from './containers/Projects';
import Skills from './containers/Skills';
import Footer from './containers/Footer';
import scrollToComponent from 'react-scroll-to-component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleNavClick = this.handleNavClick.bind(this);
  }
  handleNavClick(item){
    switch(item){
      case "home":
      scrollToComponent(this.refs.home);
      break;
      case "projects":
      scrollToComponent(this.refs.projects,{align:'top'});
      break;
      case "skills":
      scrollToComponent(this.refs.skills,{align:'top'});
      break;
      case "blog":
      window.open("https://medium.com/@kirangplkrishnan","_blank");
      break;
      case "contact":
      window.open("https://www.linkedin.com/in/kiran-gopalakrishnan-1b21a479/","_blank");
    }
  }
  render() {
    return (
      <div className="App">
        <Home onNavClick={this.handleNavClick} ref="home"/>
        <div className="projects-wrapper" ref="projects">
        <Projects />
        </div>
        <div className="skills-wrapper" ref="skills">
        <Skills />
        </div>
        <div className="footer-wrapper" ref="skills">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
