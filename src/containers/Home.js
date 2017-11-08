import React,{Component} from 'react';
import Headbar from '../components/Home/Headbar';
import TypingText from '../components/Home/TypingText';
import TextDecode from '../components/Home/TextDecode';
import './Home.css';
import $ from "jquery";

class Home extends Component{
  constructor(){
    super();
    this.handleNavClick= this.handleNavClick.bind(this);
    this.loadDescription=this.loadDescription.bind(this);
  }
  handleNavClick(item){
    this.props.onNavClick(item,this);
  }
  loadDescription(){
    const phrases = [
  'is a full stack Engineer',
  'Loves to work with various technology stacks',
  'Loves learning new languages',
  'Builds beautiful User Experiences',
  'Loves Solving problems',
  'Is always up for a challenge',
  'Finds joy in Building things from scratch'
];
const el = document.querySelector('.description p');
const fx = new TextDecode(el);

let counter = 0;
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 4000);
  });
  counter = (counter + 1) % phrases.length;
}

next();
  }
  render(){
    return(
      <div className='home'>
      <Headbar handleNavClick={this.handleNavClick} />
      <div className='hero-area'>
        <TypingText text='Kiran' pauseBy='.' time={250} pauseAt='.' onFinish={this.loadDescription}/>
        <div className="description">
          <p>
          </p>
        </div>
      </div>
      </div>
    );
  }
}
export default Home;
