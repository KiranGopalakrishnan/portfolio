import React,{Component} from 'react';
import Headbar from '../components/Home/Headbar';
import TypingText from '../components/Home/TypingText';
import './Home.css';

class Home extends Component{
  constructor(){
    super();
    this.handleNavClick= this.handleNavClick.bind(this);
  }
  handleNavClick(item){
    this.props.onNavClick(item,this);
  }
  render(){
    return(
      <div className='home'>
      <Headbar handleNavClick={this.handleNavClick} />
      <div className='hero-area'>
        <TypingText text='Kiran Gopalakrishnan' pauseBy='.' time={200} pauseAt='.'/>
        <div className="description">
          <p>
            Full stack developer.Loves to work with various technology stacks ,
             Loves learning new languages , Solving challenges ,Finds joy in Building things from scratch
          </p>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;
