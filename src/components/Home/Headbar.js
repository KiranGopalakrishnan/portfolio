import React,{Component} from 'react';
import Nav from './Nav';
import './Headbar.css';

class Headbar extends Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
handleClick(item){
  this.props.handleNavClick(item);
}
  render(){
    var finalClassName= 'head-bar fixed';
    return(
      <div ref="headbar" className={finalClassName}>
      <div className="logo-div">
      </div>
        <div className='nav-bar'>
          <Nav>
            <li onClick={()=>{this.handleClick("home",this)}}>Home</li>
              <li onClick={()=>{this.handleClick("projects",this)}}>Projects</li>
                <li onClick={()=>{this.handleClick("skills",this)}}>Skills</li>
                  <li onClick={()=>{this.handleClick("blog",this)}}>Blog</li>
                  <li onClick={()=>{this.handleClick("contact",this)}}>Contact</li>
          </Nav>
        </div>
      </div>
    );
  }
}
export default Headbar;
