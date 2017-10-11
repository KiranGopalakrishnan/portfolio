import React,{Component} from 'react';
import './Footer.css';

class Footer extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='footer'>
        <h1> Handcrafted with <span>&#9825;</span> By Kiran Gopalakrishnan</h1>
      </div>
    );
  }
}
export default Footer;
